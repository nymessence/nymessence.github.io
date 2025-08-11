import * as THREE from "../node_modules/three/build/three.module.js";
import { OrbitControls } from "../node_modules/three/examples/jsm/controls/OrbitControls.js";
import { ConvexGeometry } from "../node_modules/three/examples/jsm/geometries/ConvexGeometry.js";

// Container and scene setup
const container = document.getElementById('container');
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.set(3, 3, 3);

const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// 4D rotation matrix for plane (a,b)
function rotationMatrix4D(a, b, angle) {
  const m = [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1]
  ];
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  m[a][a] = c;
  m[a][b] = -s;
  m[b][a] = s;
  m[b][b] = c;
  return m;
}

// Multiply 4D vector by 4x4 matrix
function multiplyVecMat4D(v, m) {
  const r = [];
  for (let i = 0; i < 4; i++) {
    r[i] = v[0]*m[0][i] + v[1]*m[1][i] + v[2]*m[2][i] + v[3]*m[3][i];
  }
  return r;
}

// Project 4D point to 3D with perspective on W
function project4Dto3D([x, y, z, w], perspective = 3) {
  const factor = perspective / (perspective - w);
  return new THREE.Vector3(x * factor, y * factor, z * factor);
}

// Groups to hold objects
const pointsGroup = new THREE.Group();
const edgesGroup = new THREE.Group();
const facesGroup = new THREE.Group();

scene.add(pointsGroup, edgesGroup, facesGroup);

// Compute edges based on 3D positions: connect vertices approx distance sqrt(2)
function computeEdges(vertices) {
  const edges = [];
  for (let i = 0; i < vertices.length; i++) {
    for (let j = i + 1; j < vertices.length; j++) {
      const dist = vertices[i].distanceTo(vertices[j]);
      if (dist > 1.3 && dist < 1.6) edges.push([i, j]);
    }
  }
  return edges;
}

// Polytope vertex generators
function generate4SimplexVertices() {
  return [
    [1, 0, 0, 0],
    [-0.25,  Math.sqrt(15)/4, 0, 0],
    [-0.25, -Math.sqrt(5)/4, Math.sqrt(10)/4, 0],
    [-0.25, -Math.sqrt(5)/4, -Math.sqrt(10)/8, 3*Math.sqrt(6)/8],
    [-0.25, -Math.sqrt(5)/4, -Math.sqrt(10)/8, -3*Math.sqrt(6)/8],
  ];
}

function generateHypercubeVertices() {
  const verts = [];
  const vals = [-1,1];
  for (const x of vals)
    for (const y of vals)
      for (const z of vals)
        for (const w of vals)
          verts.push([x,y,z,w]);
  return verts;
}

function generate16CellVertices() {
  const verts = [];
  for (let i=0; i<4; i++) {
    for (const sign of [-1,1]) {
      const v = [0,0,0,0];
      v[i] = sign;
      verts.push(v);
    }
  }
  return verts;
}

function generate24CellVertices() {
  const verts = [];
  const c = 1/Math.sqrt(2);
  for (let i=0; i<4; i++) {
    for (const s of [-1,1]) {
      const v = [0,0,0,0];
      v[i] = s;
      verts.push(v);
    }
  }
  for (const x of [-c,c])
    for (const y of [-c,c])
      for (const z of [-c,c])
        for (const w of [-c,c])
          verts.push([x,y,z,w]);
  return verts;
}

function generate120CellVertices() {
  // simplified placeholder - just hypercube scaled down
  return generateHypercubeVertices().map(v => v.map(x => x * 0.5));
}

function generate600CellVertices() {
  const verts = [];
  const φ = (1 + Math.sqrt(5)) / 2;
  // 8 vertices (±2,0,0,0) permutations
  for (let i=0; i<4; i++) {
    for (const sign of [-1,1]) {
      const v = [0,0,0,0];
      v[i] = sign*2;
      verts.push(v);
    }
  }
  // 16 vertices (±1,±1,±1,±1)
  const vals = [-1,1];
  for (const x of vals)
    for (const y of vals)
      for (const z of vals)
        for (const w of vals)
          verts.push([x,y,z,w]);
  
  // 96 vertices from even permutations of (0, ±1, ±φ, ±1/φ)
  function permute(arr, l=0, res=[]) {
    if (l===arr.length-1) {
      res.push(arr.slice());
      return;
    }
    for (let i=l; i<arr.length; i++) {
      [arr[l],arr[i]]=[arr[i],arr[l]];
      permute(arr,l+1,res);
      [arr[l],arr[i]]=[arr[i],arr[l]];
    }
    return res;
  }

  const baseVals = [0, 1, φ, 1/φ];
  const perms = permute(baseVals);
  const signs = [-1,1];

  for (const p of perms) {
    for (const sx of signs) for (const sy of signs) for (const sz of signs) for (const sw of signs) {
      verts.push([sx*p[0], sy*p[1], sz*p[2], sw*p[3]]);
    }
  }
  return verts;
}

// Settings from UI
const settings = {
  rotationXY: 0,
  rotationXZ: 0,
  rotationYZ: 0,
  rotationXW: 0,
  rotationYW: 0,
  rotationZW: 0,
  showVertices: true,
  vertexColor: '#ffcc00',
  vertexOpacity: 1.0,
  vertexSize: 0.05,
  showEdges: true,
  edgeColor: '#44aaff',
  edgeOpacity: 0.9,
  showFaces: false,
  faceColor: '#aa44ff',
  faceOpacity: 0.3,
};

// Store current polytope vertices 4D
let vertices4D = [];

let vertices3D = [];

// Update geometry & visuals
function updateGeometry() {
  pointsGroup.clear();
  edgesGroup.clear();
  facesGroup.clear();

  // Apply all rotations on 4D vertices
  let transformed = vertices4D.map(v => [...v]);
  const planes = [
    [0,1, settings.rotationXY],
    [0,2, settings.rotationXZ],
    [1,2, settings.rotationYZ],
    [0,3, settings.rotationXW],
    [1,3, settings.rotationYW],
    [2,3, settings.rotationZW],
  ];
  for (const [a,b,angle] of planes) {
    if (angle !== 0) {
      const rot = rotationMatrix4D(a,b,angle);
      transformed = transformed.map(v => multiplyVecMat4D(v, rot));
    }
  }

  // Project to 3D
  vertices3D = transformed.map(p => project4Dto3D(p));

  // Vertices
  if (settings.showVertices) {
    const sphereGeo = new THREE.SphereGeometry(settings.vertexSize, 12, 12);
    const mat = new THREE.MeshBasicMaterial({
      color: settings.vertexColor,
      transparent: true,
      opacity: settings.vertexOpacity
    });
    for (const v of vertices3D) {
      const mesh = new THREE.Mesh(sphereGeo, mat);
      mesh.position.copy(v);
      pointsGroup.add(mesh);
    }
  }

  // Edges
  if (settings.showEdges) {
    const edges = computeEdges(vertices3D);
    const positions = [];
    for (const [i, j] of edges) {
      positions.push(vertices3D[i].x, vertices3D[i].y, vertices3D[i].z);
      positions.push(vertices3D[j].x, vertices3D[j].y, vertices3D[j].z);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    const mat = new THREE.LineBasicMaterial({
      color: settings.edgeColor,
      transparent: true,
      opacity: settings.edgeOpacity
    });
    const lines = new THREE.LineSegments(geo, mat);
    edgesGroup.add(lines);
  }

  // Faces (convex hull)
  if (settings.showFaces) {
    const geometry = new ConvexGeometry(vertices3D);
    const mat = new THREE.MeshBasicMaterial({
      color: settings.faceColor,
      transparent: true,
      opacity: settings.faceOpacity,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    const mesh = new THREE.Mesh(geometry, mat);
    facesGroup.add(mesh);
  }
}

// UI hookup
function setupUI() {
  // Vertex controls
  const showVerts = document.getElementById('showVerts');
  const vertColor = document.getElementById('vertColor');
  const vertSize = document.getElementById('vertSize');

  // Edges controls
  const showEdges = document.getElementById('showEdges');
  const edgeColor = document.getElementById('edgeColor');
  const edgeOpacity = document.getElementById('edgeOpacity');

  // Faces controls
  const showFaces = document.getElementById('showFaces');
  const faceColor = document.getElementById('faceColor');
  const faceOpacity = document.getElementById('faceOpacity');

  // Rotation sliders
  const rotXY = document.getElementById('rotXY');
  const rotXZ = document.getElementById('rotXZ');
  const rotYZ = document.getElementById('rotYZ');
  const rotXW = document.getElementById('rotXW');
  const rotYW = document.getElementById('rotYW');
  
    const rotZW = document.getElementById('rotZW');

  // Update settings and geometry on input changes
  showVerts.addEventListener('change', () => {
    settings.showVertices = showVerts.checked;
    updateGeometry();
  });
  vertColor.addEventListener('input', () => {
    settings.vertexColor = vertColor.value;
    updateGeometry();
  });
  vertSize.addEventListener('input', () => {
    settings.vertexSize = parseFloat(vertSize.value);
    updateGeometry();
  });

  showEdges.addEventListener('change', () => {
    settings.showEdges = showEdges.checked;
    updateGeometry();
  });
  edgeColor.addEventListener('input', () => {
    settings.edgeColor = edgeColor.value;
    updateGeometry();
  });
  edgeOpacity.addEventListener('input', () => {
    settings.edgeOpacity = parseFloat(edgeOpacity.value);
    updateGeometry();
  });

  showFaces.addEventListener('change', () => {
    settings.showFaces = showFaces.checked;
    updateGeometry();
  });
  faceColor.addEventListener('input', () => {
    settings.faceColor = faceColor.value;
    updateGeometry();
  });
  faceOpacity.addEventListener('input', () => {
    settings.faceOpacity = parseFloat(faceOpacity.value);
    updateGeometry();
  });

  rotXY.addEventListener('input', () => {
    settings.rotationXY = parseFloat(rotXY.value);
    updateGeometry();
  });
  rotXZ.addEventListener('input', () => {
    settings.rotationXZ = parseFloat(rotXZ.value);
    updateGeometry();
  });
  rotYZ.addEventListener('input', () => {
    settings.rotationYZ = parseFloat(rotYZ.value);
    updateGeometry();
  });
  rotXW.addEventListener('input', () => {
    settings.rotationXW = parseFloat(rotXW.value);
    updateGeometry();
  });
  rotYW.addEventListener('input', () => {
    settings.rotationYW = parseFloat(rotYW.value);
    updateGeometry();
  });
  rotZW.addEventListener('input', () => {
    settings.rotationZW = parseFloat(rotZW.value);
    updateGeometry();
  });

  // Polytope select dropdown
  const polytopeSelect = document.getElementById('polytopeSelect');
  polytopeSelect.addEventListener('change', () => {
    loadPolytope(polytopeSelect.value);
    updateGeometry();
  });
}

// Load vertices based on selected polytope name
function loadPolytope(name) {
  switch(name) {
    case '4-simplex':
      vertices4D = generate4SimplexVertices();
      break;
    case 'hypercube':
      vertices4D = generateHypercubeVertices();
      break;
    case '16-cell':
      vertices4D = generate16CellVertices();
      break;
    case '24-cell':
      vertices4D = generate24CellVertices();
      break;
    case '120-cell':
      vertices4D = generate120CellVertices();
      break;
    case '600-cell':
      vertices4D = generate600CellVertices();
      break;
    default:
      vertices4D = [];
  }
}

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

loadPolytope('24-cell');
setupUI();
updateGeometry();
animate();
 
