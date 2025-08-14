/**
 * polytopes.js — Optimized, working version with InstancedMesh for vertices and efficient edge updates.
 *
 * Assumes these files are reachable from the browser (adjust paths if your server exposes node_modules differently):
 *  import * as THREE from '../node_modules/three/build/three.module.js';
 *  import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';
 *  import { ConvexGeometry } from '../node_modules/three/examples/jsm/geometries/ConvexGeometry.js';
 *
 * This file:
 * - uses InstancedMesh for vertex rendering (fast for large vertex counts)
 * - reuses BufferGeometry for edges (fast updates)
 * - gracefully falls back if ConvexGeometry fails
 * - minimizes allocations / rebuilds where possible
 * - keeps UI wiring compatible with your HTML controls
 */

/* -------------------------
   Imports
   ------------------------- */
import * as THREE from "../node_modules/three/build/three.module.js";
import { OrbitControls } from "../node_modules/three/examples/jsm/controls/OrbitControls.js";
import { ConvexGeometry } from "../node_modules/three/examples/jsm/geometries/ConvexGeometry.js";

/* -------------------------
   DOM + renderer + lights
   ------------------------- */
const container = document.getElementById('container');
if (!container) throw new Error('container element not found');

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(window.devicePixelRatio || 1);
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

const ambient = new THREE.AmbientLight(0xffffff, 0.45);
scene.add(ambient);
const dir = new THREE.DirectionalLight(0xffffff, 0.6);
dir.position.set(5, 10, 7);
scene.add(dir);

/* -------------------------
   Cameras + controls
   ------------------------- */
let perspCamera, orthoCamera, currentCamera, controls;
function makeCameras() {
  const aspect = window.innerWidth / window.innerHeight;
  perspCamera = new THREE.PerspectiveCamera(60, aspect, 0.01, 1000);
  perspCamera.position.set(3, 3, 3);
  perspCamera.lookAt(0, 0, 0);

  const frustum = 4;
  orthoCamera = new THREE.OrthographicCamera(
    -frustum * aspect / 2,
    frustum * aspect / 2,
    frustum / 2,
    -frustum / 2,
    -1000,
    1000
  );
  orthoCamera.position.copy(perspCamera.position);
  orthoCamera.lookAt(0, 0, 0);

  currentCamera = perspCamera;
  if (controls) controls.dispose();
  controls = new OrbitControls(currentCamera, renderer.domElement);
  controls.enableDamping = true;
}
makeCameras();

window.addEventListener('resize', () => {
  const aspect = window.innerWidth / window.innerHeight;
  perspCamera.aspect = aspect;
  perspCamera.updateProjectionMatrix();

  const frustum = 4;
  orthoCamera.left = -frustum * aspect / 2;
  orthoCamera.right = frustum * aspect / 2;
  orthoCamera.top = frustum / 2;
  orthoCamera.bottom = -frustum / 2;
  orthoCamera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
});

/* -------------------------
   4D math helpers
   ------------------------- */
function rotationMatrix4D(a, b, angle) {
  const m = [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1]
  ];
  const c = Math.cos(angle), s = Math.sin(angle);
  m[a][a] = c; m[a][b] = -s;
  m[b][a] = s; m[b][b] = c;
  return m;
}
function multiplyVecMat4D(v, m) {
  // vector * matrix (v row-vector style)
  const r0 = v[0] * m[0][0] + v[1] * m[1][0] + v[2] * m[2][0] + v[3] * m[3][0];
  const r1 = v[0] * m[0][1] + v[1] * m[1][1] + v[2] * m[2][1] + v[3] * m[3][1];
  const r2 = v[0] * m[0][2] + v[1] * m[1][2] + v[2] * m[2][2] + v[3] * m[3][2];
  const r3 = v[0] * m[0][3] + v[1] * m[1][3] + v[2] * m[2][3] + v[3] * m[3][3];
  return [r0, r1, r2, r3];
}
function project4Dto3D([x, y, z, w], perspective = 3, projectionType = 'perspective') {
  if (projectionType === 'parallel') return new THREE.Vector3(x, y, z);
  const denom = perspective - w;
  const factor = Math.abs(denom) < 1e-9 ? perspective : perspective / denom;
  return new THREE.Vector3(x * factor, y * factor, z * factor);
}
function normalize4D(v) {
  const len = Math.hypot(v[0], v[1], v[2], v[3]);
  if (len === 0) return v.slice();
  return v.map(x => x / len);
}

/* -------------------------
   Generators (kept similar to your patterns)
   ------------------------- */
function generate4SimplexVertices() {
  const a = Math.sqrt(5) / 5;
  return [
    [a, a, a, -3*a],
    [a, -a, -a, a],
    [-a, a, -a, a],
    [-a, -a, a, a],
    [a, a, -a, a]
  ].map(normalize4D);
}
function generateHypercubeVertices() {
  const vs = []; const vals = [-1,1];
  for (const x of vals) for (const y of vals) for (const z of vals) for (const w of vals)
    vs.push([x,y,z,w]);
  return vs;
}
function generate16CellVertices() {
  const vs = [];
  for (let i=0;i<4;i++) for (const s of [-1,1]) { const v=[0,0,0,0]; v[i]=s; vs.push(v); }
  return vs;
}
function generate24CellVertices() {
  const verts = [];
  for (let i=0;i<4;i++) for (const s of [-1,1]) { const v=[0,0,0,0]; v[i]=s; verts.push(v); }
  const c = 1/Math.sqrt(2);
  for (let i=0;i<4;i++) for (let j=i+1;j<4;j++) for (const si of [-1,1]) for (const sj of [-1,1]) {
    const v=[0,0,0,0]; v[i]=si*c; v[j]=sj*c; verts.push(v);
  }
  return verts;
}
function getAllPermutations(arr) {
  const res=[]; function p(a,l,r){ if(l===r) res.push(a.slice()); else for(let i=l;i<=r;i++){ [a[l],a[i]]=[a[i],a[l]]; p(a,l+1,r); [a[l],a[i]]=[a[i],a[l]]; } }
  p(arr.slice(),0,arr.length-1); return res;
}
function getEvenPermutations(arr) {
  const all = getAllPermutations(arr), out=[];
  for (const p of all) {
    let inv=0; for (let i=0;i<p.length;i++) for (let j=i+1;j<p.length;j++) {
      if (arr.indexOf(p[i]) > arr.indexOf(p[j])) inv++;
    }
    if (inv%2===0) out.push(p);
  }
  return out;
}
function generate120CellVertices() {
  // kept compact; normalize at end to avoid huge disparities
  const verts = [];
  const phi = (1+Math.sqrt(5))/2, invPhi = 1/phi;
  const basePoints = [
    [0,1,phi,invPhi],[0,1,-phi,invPhi],[0,1,phi,-invPhi],[0,1,-phi,-invPhi]
  ];
  for (const point of basePoints) {
    const perms = getEvenPermutations(point);
    for (const perm of perms) for (let mask=0; mask<16; mask++){
      const p = perm.map((v,i)=> (mask&(1<<i)) ? -v : v);
      verts.push(p);
    }
  }
  for (const x of [-1,1]) for (const y of [-1,1]) for (const z of [-1,1]) for (const w of [-1,1])
    verts.push([x,y,z,w]);
  for (let i=0;i<6;i++){
    const point = i<3 ? [phi,phi,invPhi,invPhi] : [phi,invPhi,phi,invPhi];
    const perms = getEvenPermutations(point);
    for (const perm of perms) for (let mask=0; mask<16; mask++){
      const p = perm.map((v,i)=> (mask&(1<<i)) ? -v : v);
      verts.push(p);
    }
  }
  return verts.map(normalize4D);
}
function generate600CellVertices() {
  const verts = [];
  const phi = (1+Math.sqrt(5))/2, invPhi = 1/phi;
  const vals = [-0.5,0.5];
  for (const x of vals) for (const y of vals) for (const z of vals) for (const w of vals) verts.push([x,y,z,w]);
  for (let i=0;i<4;i++) for (const s of [-1,1]) { const v=[0,0,0,0]; v[i]=s; verts.push(v); }
  const base = [0,1,phi,invPhi];
  const perms = getAllPermutations(base);
  for (const p of perms) for (let mask=0; mask<16; mask++){
    if (mask===0 || mask===15) continue;
    const v = p.map((val,i)=> (mask&(1<<i)) ? -val : val);
    verts.push(v);
  }
  return verts.map(normalize4D);
}

/* -------------------------
   Robust edge finder (operates in 4D) — efficient and adaptive
   ------------------------- */
function computeEdges4D(vertices4D) {
  const n = vertices4D.length;
  const edges = [];
  if (n < 2) return edges;
  const distSqList = [];
  for (let i=0;i<n;i++) for (let j=i+1;j<n;j++){
    let d2=0; for (let k=0;k<4;k++){ const diff = vertices4D[i][k]-vertices4D[j][k]; d2 += diff*diff; }
    if (d2 > 1e-14) distSqList.push(d2);
  }
  if (distSqList.length === 0) return edges;
  distSqList.sort((a,b)=>a-b);
  let bestIdx=0, bestRel=0;
  const lookLimit = Math.max(3, Math.floor(distSqList.length * 0.35));
  for (let i=0;i<lookLimit-1;i++){
    const a = distSqList[i], b = distSqList[i+1];
    const rel = (b - a) / (a || 1e-12);
    if (rel > bestRel) { bestRel = rel; bestIdx = i; }
  }
  const threshold = (distSqList[bestIdx] + distSqList[bestIdx+1]) / 2;
  const lower = threshold * 0.5, upper = threshold * 1.5;
  for (let i=0;i<n;i++) for (let j=i+1;j<n;j++){
    let d2=0; for (let k=0;k<4;k++){ const diff = vertices4D[i][k]-vertices4D[j][k]; d2 += diff*diff; }
    if (d2 >= lower && d2 <= upper) edges.push([i,j]);
  }
  if (edges.length === 0) {
    const k = Math.min(4, n-1);
    const outSet = new Set();
    for (let i=0;i<n;i++){
      const arr = [];
      for (let j=0;j<n;j++) if (i!==j){
        let d2=0; for (let t=0;t<4;t++){ const diff = vertices4D[i][t]-vertices4D[j][t]; d2+=diff*diff; }
        arr.push({j,d2});
      }
      arr.sort((A,B)=>A.d2-B.d2);
      for (let m=0;m<k;m++){
        const a = i, b = arr[m].j; const key = a < b ? `${a},${b}` : `${b},${a}`;
        if (!outSet.has(key)) { outSet.add(key); edges.push([a,b]); }
      }
    }
  }
  return edges;
}

/* -------------------------
   Scene objects (InstancedMesh for vertices, dynamic BufferGeometry for edges)
   ------------------------- */
const pointsGroup = new THREE.Group();
const edgesGroup = new THREE.Group();
const facesGroup = new THREE.Group();
scene.add(pointsGroup, edgesGroup, facesGroup);

// Instance containers (kept outside update so we can reuse)
let instancedMesh = null;
let instancedCount = 0;
let instancedGeom = null;
let instancedMat = null;

// Edge line objects (single BufferGeometry reused)
let edgeMesh = null;
let edgePositions = null;

/* -------------------------
   Settings + state
   ------------------------- */
const settings = {
  rotationXY: 0, rotationXZ: 0, rotationYZ: 0,
  rotationXW: 0, rotationYW: 0, rotationZW: 0,
  showVertices: true, vertexColor: '#ffcc00', vertexSize: 0.05, vertexOpacity: 1.0,
  showEdges: true, edgeColor: '#44aaff', edgeOpacity: 0.9,
  showFaces: false, faceColor: '#aa44ff', faceOpacity: 0.3,
  projectionType: 'perspective'
};

let vertices4D = [];
let vertices3D = [];
let cachedEdges = [];

/* -------------------------
   Efficient geometry updater
   ------------------------- */
function ensureInstancedMesh(maxCount) {
  // create or recreate InstancedMesh when maxCount changes
  if (instancedMesh && instancedCount >= maxCount) return; // existing capacity okay
  // dispose old
  if (instancedMesh) {
    instancedMesh.geometry.dispose();
    instancedMat.dispose();
    pointsGroup.remove(instancedMesh);
    instancedMesh = null;
    instancedGeom = null;
    instancedMat = null;
  }

  // create new
  instancedGeom = new THREE.SphereGeometry(1, 10, 10); // unit sphere, we'll scale via matrix
  instancedMat = new THREE.MeshPhongMaterial({ color: settings.vertexColor, flatShading: false });
  instancedMesh = new THREE.InstancedMesh(instancedGeom, instancedMat, maxCount);
  instancedMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  instancedMesh.castShadow = false;
  instancedMesh.receiveShadow = false;
  pointsGroup.add(instancedMesh);
  instancedCount = maxCount;
}

function ensureEdgeMesh(maxSegments) {
  // each segment uses 2 points
  const requiredVerts = Math.max(0, maxSegments * 2);
  if (edgeMesh && edgePositions && edgePositions.length >= requiredVerts * 3) return;
  // rebuild
  if (edgeMesh) {
    edgeMesh.geometry.dispose();
    edgesGroup.remove(edgeMesh);
    edgeMesh = null;
    edgePositions = null;
  }
  const pos = new Float32Array(requiredVerts * 3 || 3);
  edgePositions = pos;
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(edgePositions, 3));
  const mat = new THREE.LineBasicMaterial({ color: settings.edgeColor, transparent: settings.edgeOpacity < 1, opacity: settings.edgeOpacity });
  edgeMesh = new THREE.LineSegments(geo, mat);
  edgeMesh.frustumCulled = false;
  edgesGroup.add(edgeMesh);
}

/* updateGeometry: runs when state or polytope changes */
function updateGeometry() {
  clearGroup(facesGroup); // faces are recreated
  // apply rotations in 4D
  let transformed = vertices4D.map(v => v.slice());
  const planes = [
    [0,1,settings.rotationXY],[0,2,settings.rotationXZ],[1,2,settings.rotationYZ],
    [0,3,settings.rotationXW],[1,3,settings.rotationYW],[2,3,settings.rotationZW]
  ];
  for (const [a,b,angle] of planes) {
    if (Math.abs(angle) > 1e-12) {
      const R = rotationMatrix4D(a,b,angle);
      transformed = transformed.map(v => multiplyVecMat4D(v, R));
    }
  }

  // project to 3D
  vertices3D = transformed.map(p => project4Dto3D(p, 3, settings.projectionType));

  // VERTICES (InstancedMesh)
  clearGroup(pointsGroup); // remove old and edge/instanced will be re-added below
  if (settings.showVertices && vertices3D.length > 0) {
    // prepare instanced mesh
    ensureInstancedMesh(vertices3D.length);
    instancedMat.color.set(settings.vertexColor);
    instancedMat.opacity = settings.vertexOpacity;
    instancedMat.transparent = settings.vertexOpacity < 1.0;
    // scale matrix per instance
    const tempMat = new THREE.Matrix4();
    const scale = Math.max(1e-4, settings.vertexSize);
    for (let i = 0; i < vertices3D.length; i++) {
      const pos = vertices3D[i];
      tempMat.compose(pos, new THREE.Quaternion(), new THREE.Vector3(scale, scale, scale));
      instancedMesh.setMatrixAt(i, tempMat);
    }
    instancedMesh.count = vertices3D.length;
    instancedMesh.instanceMatrix.needsUpdate = true;
    pointsGroup.add(instancedMesh);
  } else {
    // no vertices: ensure instanced mesh still removed
    if (instancedMesh) {
      // keep instantiatedMesh around for reuse but don't add it to scene
      instancedMesh.count = 0;
    }
  }

  // EDGES (BufferGeometry)
  clearGroup(edgesGroup);
  if (settings.showEdges && vertices4D.length >= 2) {
    const edges = computeEdges4D(vertices4D);
    cachedEdges = edges;
    ensureEdgeMesh(edges.length);
    // fill position buffer
    const posBuf = edgeMesh.geometry.attributes.position.array;
    let idx = 0;
    for (let e = 0; e < edges.length; e++) {
      const [i, j] = edges[e];
      const a = vertices3D[i], b = vertices3D[j];
      if (!a || !b) continue;
      posBuf[idx++] = a.x; posBuf[idx++] = a.y; posBuf[idx++] = a.z;
      posBuf[idx++] = b.x; posBuf[idx++] = b.y; posBuf[idx++] = b.z;
    }
    // zero out remainder to avoid garbage geometry if buffer larger than used
    for (; idx < posBuf.length; idx++) posBuf[idx] = 0;
    edgeMesh.geometry.attributes.position.needsUpdate = true;
    (edgeMesh.material).color.set(settings.edgeColor);
    edgeMesh.material.opacity = settings.edgeOpacity;
    edgeMesh.material.transparent = settings.edgeOpacity < 1.0;
    edgesGroup.add(edgeMesh);
  }

  // FACES (Convex hull) — try/catch because ConvexGeometry can fail on degenerate sets
  if (settings.showFaces && vertices3D.length >= 4) {
    try {
      // ConvexGeometry expects an array of Vector3
      const hullGeom = new ConvexGeometry(vertices3D);
      const mat = new THREE.MeshLambertMaterial({
        color: settings.faceColor,
        transparent: settings.faceOpacity < 1.0,
        opacity: settings.faceOpacity,
        side: THREE.DoubleSide,
        depthWrite: false
      });
      const mesh = new THREE.Mesh(hullGeom, mat);
      mesh.renderOrder = 2;
      facesGroup.add(mesh);
    } catch (err) {
      console.warn('ConvexGeometry failed to build hull:', err);
      // fall back: do nothing, or you could build triangles manually if desired
    }
  }
}

/* convenient clearing helper */
function clearGroup(g) {
  while (g.children.length) {
    const obj = g.children[0];
    g.remove(obj);
    if (obj.geometry) obj.geometry.dispose();
    if (obj.material) {
      if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
      else obj.material.dispose();
    }
  }
}

/* -------------------------
   UI wiring
   ------------------------- */
function setupUI() {
  const get = id => document.getElementById(id);
  const showVerts = get('showVerts'), vertColor = get('vertColor'), vertSize = get('vertSize');
  const showEdges = get('showEdges'), edgeColor = get('edgeColor'), edgeOpacity = get('edgeOpacity');
  const showFaces = get('showFaces'), faceColor = get('faceColor'), faceOpacity = get('faceOpacity');
  const rotXY = get('rotXY'), rotXZ = get('rotXZ'), rotYZ = get('rotYZ'), rotXW = get('rotXW'), rotYW = get('rotYW'), rotZW = get('rotZW');
  const projectionType = get('projectionType');
  const toggleUIBtn = get('toggleUI'), ui = get('ui'), fullscreenBtn = get('fullscreenBtn');
  const renderBtn = get('renderBtn'), resMult = get('resMult'), progress = get('progress');
  const polySelect = get('polytopeSelect');

  if (showVerts) showVerts.addEventListener('change', e => { settings.showVertices = e.target.checked; updateGeometry(); });
  if (vertColor) vertColor.addEventListener('input', e => { settings.vertexColor = e.target.value; if (instancedMat) instancedMat.color.set(e.target.value); updateGeometry(); });
  if (vertSize) vertSize.addEventListener('input', e => { settings.vertexSize = parseFloat(e.target.value); updateGeometry(); });

  if (showEdges) showEdges.addEventListener('change', e => { settings.showEdges = e.target.checked; updateGeometry(); });
  if (edgeColor) edgeColor.addEventListener('input', e => { settings.edgeColor = e.target.value; if (edgeMesh) edgeMesh.material.color.set(e.target.value); updateGeometry(); });
  if (edgeOpacity) edgeOpacity.addEventListener('input', e => { settings.edgeOpacity = parseFloat(e.target.value); if (edgeMesh) { edgeMesh.material.opacity = settings.edgeOpacity; edgeMesh.material.transparent = settings.edgeOpacity < 1.0; } updateGeometry(); });

  if (showFaces) showFaces.addEventListener('change', e => { settings.showFaces = e.target.checked; updateGeometry(); });
  if (faceColor) faceColor.addEventListener('input', e => { settings.faceColor = e.target.value; updateGeometry(); });
  if (faceOpacity) faceOpacity.addEventListener('input', e => { settings.faceOpacity = parseFloat(e.target.value); updateGeometry(); });

  if (rotXY) rotXY.addEventListener('input', e => { settings.rotationXY = parseFloat(e.target.value); updateGeometry(); });
  if (rotXZ) rotXZ.addEventListener('input', e => { settings.rotationXZ = parseFloat(e.target.value); updateGeometry(); });
  if (rotYZ) rotYZ.addEventListener('input', e => { settings.rotationYZ = parseFloat(e.target.value); updateGeometry(); });
  if (rotXW) rotXW.addEventListener('input', e => { settings.rotationXW = parseFloat(e.target.value); updateGeometry(); });
  if (rotYW) rotYW.addEventListener('input', e => { settings.rotationYW = parseFloat(e.target.value); updateGeometry(); });
  if (rotZW) rotZW.addEventListener('input', e => { settings.rotationZW = parseFloat(e.target.value); updateGeometry(); });

  if (projectionType) projectionType.addEventListener('change', e => {
    settings.projectionType = e.target.value;
    currentCamera = (settings.projectionType === 'parallel') ? orthoCamera : perspCamera;
    // re-create controls for the new camera
    if (controls) controls.dispose();
    controls = new OrbitControls(currentCamera, renderer.domElement);
    controls.enableDamping = true;
    boundsToCamera();
    updateGeometry();
  });

  if (toggleUIBtn && ui) toggleUIBtn.addEventListener('click', () => {
    ui.classList.toggle('hidden');
    toggleUIBtn.textContent = ui.classList.contains('hidden') ? 'Show UI' : 'Hide UI';
  });

  if (fullscreenBtn && container) fullscreenBtn.addEventListener('click', async () => {
    try {
      if (!document.fullscreenElement) await container.requestFullscreen();
      else await document.exitFullscreen();
    } catch (err) { alert('Fullscreen failed: ' + err.message); }
  });

  if (renderBtn) renderBtn.addEventListener('click', async () => {
    progress.textContent = 'Rendering...';
    try {
      const mult = Math.max(1, parseInt(resMult.value || '1', 10));
      const oldPR = renderer.getPixelRatio();
      renderer.setPixelRatio((window.devicePixelRatio || 1) * mult);
      renderer.setSize(Math.round(window.innerWidth), Math.round(window.innerHeight), false);
      await new Promise(requestAnimationFrame);
      renderer.render(scene, currentCamera);
      await new Promise(requestAnimationFrame);
      const dataUrl = renderer.domElement.toDataURL('image/png');
      renderer.setPixelRatio(oldPR);
      renderer.setSize(window.innerWidth, window.innerHeight, false);

      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = `4d_polytope_${Date.now()}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      progress.textContent = 'Saved!';
      setTimeout(()=>progress.textContent='', 1500);
    } catch (err) {
      console.error(err);
      progress.textContent = 'Render failed';
      setTimeout(()=>progress.textContent='', 2000);
    }
  });

  if (polySelect) polySelect.addEventListener('change', e => {
    loadPolytope(e.target.value);
    boundsToCamera();
    updateGeometry();
  });
}

/* -------------------------
   Load polytope + camera bounds
   ------------------------- */
function loadPolytope(name) {
  switch (name) {
    case '4-simplex': vertices4D = generate4SimplexVertices(); break;
    case 'hypercube': vertices4D = generateHypercubeVertices(); break;
    case '16-cell': vertices4D = generate16CellVertices(); break;
    case '24-cell': vertices4D = generate24CellVertices(); break;
    case '120-cell': vertices4D = generate120CellVertices(); break;
    case '600-cell': vertices4D = generate600CellVertices(); break;
    default: vertices4D = [];
  }
  // reset instance capacity so updateGeometry recreates containers as needed
  instancedCount = 0;
}

function boundsToCamera() {
  if (!vertices4D.length) return;
  // project base shape to 3D without rotations to compute scale
  const proto3 = vertices4D.map(p => project4Dto3D(p, 3, settings.projectionType));
  const box = new THREE.Box3().setFromPoints(proto3);
  const center = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3()).length();
  const distance = Math.max(2, size * 1.6);
  perspCamera.position.set(center.x + distance, center.y + distance, center.z + distance);
  perspCamera.lookAt(center);
  orthoCamera.position.copy(perspCamera.position);
  orthoCamera.lookAt(center);
  if (controls) { controls.target.copy(center); controls.update(); }
}

/* -------------------------
   Init: load default, wire UI, animate
   ------------------------- */
loadPolytope('24-cell');
setupUI();
boundsToCamera();
updateGeometry();

function animate() {
  requestAnimationFrame(animate);
  if (controls) controls.update();
  renderer.render(scene, currentCamera);
}
animate();

/* -------------------------
   Helpful dev utility: expose small API in console
   ------------------------- */
window.__poly = {
  loadPolytope, updateGeometry, boundsToCamera, scene, renderer, camera: () => currentCamera
};

