// polytopes.js — Fully fixed version with scrollable UI
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { ConvexGeometry } from "three/addons/geometries/ConvexGeometry.js";

// =============== CRITICAL UI SCROLL FIX ===============
document.addEventListener('DOMContentLoaded', () => {
    // 1. Create UI mask that blocks canvas events ONLY under UI
    const uiMask = document.createElement('div');
    uiMask.id = 'ui-mask';
    uiMask.style.cssText = `
        position: fixed;
        top: 20px;
        right: 10px;
        width: 280px;
        height: calc(100vh - 40px);
        z-index: 1950;
        pointer-events: none;
        background: transparent;
    `;
    document.body.appendChild(uiMask);

    // 2. Ensure UI has proper structure
    const ui = document.getElementById('ui');
    if (ui && !ui.querySelector('.ui-content')) {
        const wrapper = document.createElement('div');
        wrapper.className = 'ui-content';
        while (ui.firstChild) wrapper.appendChild(ui.firstChild);
        ui.appendChild(wrapper);
    }

    // 3. Critical: Block canvas events under UI area
    const updateUIMask = () => {
        const ui = document.getElementById('ui');
        if (!ui || ui.classList.contains('hidden')) {
            uiMask.style.display = 'none';
            return;
        }
        
        // Get UI position
        const rect = ui.getBoundingClientRect();
        uiMask.style.top = `${rect.top}px`;
        uiMask.style.right = `${window.innerWidth - rect.right}px`;
        uiMask.style.width = `${rect.width}px`;
        uiMask.style.height = `${rect.height}px`;
        uiMask.style.display = 'block';
        
        // Force UI to capture events
        ui.style.pointerEvents = 'auto';
    };

    // 4. Update mask on resize and UI toggle
    window.addEventListener('resize', updateUIMask);
    document.getElementById('toggleUI')?.addEventListener('click', updateUIMask);
    setTimeout(updateUIMask, 100); // Initial setup

    // 5. MOST IMPORTANT: Prevent canvas from stealing wheel events
    document.getElementById('container')?.addEventListener('wheel', (e) => {
        const ui = document.getElementById('ui');
        if (!ui) return;
        
        const rect = ui.getBoundingClientRect();
        const isOverUI = (
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom
        );
        
        if (isOverUI) {
            e.stopPropagation();
            e.preventDefault();
        }
    }, { passive: false, capture: true });

    // 6. Allow native scrolling to work
    const uiContent = ui?.querySelector('.ui-content');
    if (uiContent) {
        uiContent.style.pointerEvents = 'auto';
        uiContent.style.overflow = 'visible';
    }
});

// =============== REST OF YOUR CODE BELOW ===============
// Keep all your existing Three.js code here
// But add this critical line at the VERY TOP of your initialization:
window.uiScrollFixApplied = true;

/* -------------------------
   Basic DOM + renderer + lights
   ------------------------- */
const container = document.getElementById('container');
if (!container) throw new Error("container element not found");

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(window.devicePixelRatio || 1);
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

// add subtle lighting for faces
const ambient = new THREE.AmbientLight(0xffffff, 0.45);
scene.add(ambient);
const dir = new THREE.DirectionalLight(0xffffff, 0.6);
dir.position.set(5, 10, 7);
scene.add(dir);

/* -------------------------
   Cameras and controls (we switch between these)
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
    window.controls = controls; // Critical for UI scroll
}

// Add this right after creating OrbitControls:
document.addEventListener('DOMContentLoaded', () => {
    const controls = window.controls;
    if (controls) {
        // Disable controls when over UI
        const ui = document.getElementById('ui');
        if (ui) {
            ui.addEventListener('pointerenter', () => { controls.enabled = false; });
            ui.addEventListener('pointerleave', () => { controls.enabled = true; });
        }
    }
});

makeCameras();

window.addEventListener('resize', () => {
    const aspect = window.innerWidth / window.innerHeight;
    // perspective
    perspCamera.aspect = aspect;
    perspCamera.updateProjectionMatrix();
    // orthographic
    const frustum = 4;
    orthoCamera.left = -frustum * aspect / 2;
    orthoCamera.right = frustum * aspect / 2;
    orthoCamera.top = frustum / 2;
    orthoCamera.bottom = -frustum / 2;
    orthoCamera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
});

/* -------------------------
   4D math, generators, helpers
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
    const r = [0, 0, 0, 0];
    for (let i = 0; i < 4; i++) {
        r[i] = v[0] * m[0][i] + v[1] * m[1][i] + v[2] * m[2][i] + v[3] * m[3][i];
    }
    return r;
}
function project4Dto3D([x, y, z, w], perspective = 3, projectionType = 'perspective') {
    if (projectionType === 'parallel') return new THREE.Vector3(x, y, z);
    const denom = (perspective - w);
    const factor = Math.abs(denom) < 1e-9 ? perspective : perspective / denom;
    return new THREE.Vector3(x * factor, y * factor, z * factor);
}
function normalize4D(v) {
    const len = Math.hypot(v[0], v[1], v[2], v[3]);
    if (len === 0) return v.slice();
    return v.map(x => x / len);
}

/* --- Generators (kept similar to yours, normalized where appropriate) --- */
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
    const vs = [];
    const vals = [-1, 1];
    for (const x of vals) for (const y of vals) for (const z of vals) for (const w of vals)
        vs.push([x, y, z, w]);
    return vs;
}
function generate16CellVertices() {
    const vs = [];
    for (let i = 0; i < 4; i++) for (const s of [-1, 1]) {
        const v = [0, 0, 0, 0]; v[i] = s; vs.push(v);
    }
    return vs;
}
function generate24CellVertices() {
    const verts = [];
    for (let i = 0; i < 4; i++) for (const s of [-1, 1]) {
        const v = [0,0,0,0]; v[i] = s; verts.push(v);
    }
    const c = 1 / Math.sqrt(2);
    for (let i = 0; i < 4; i++) for (let j = i+1; j < 4; j++)
        for (const si of [-1,1]) for (const sj of [-1,1]) {
            const v = [0,0,0,0]; v[i]=si*c; v[j]=sj*c; verts.push(v);
        }
    return verts;
}
function generate120CellVertices() {
    // keep your earlier approach (may produce many points), normalize at end
    const verts = [];
    const phi = (1 + Math.sqrt(5)) / 2;
    const invPhi = 1 / phi;
    const basePoints = [
        [0, 1, phi, invPhi],
        [0, 1, -phi, invPhi],
        [0, 1, phi, -invPhi],
        [0, 1, -phi, -invPhi]
    ];
    for (const point of basePoints) {
        const perms = getEvenPermutations(point);
        for (const perm of perms) {
            for (let mask = 0; mask < 16; mask++) {
                const p = perm.map((val, idx) => (mask & (1<<idx)) ? -val : val);
                verts.push(p);
            }
        }
    }
    const vals = [-1,1];
    for (const x of vals) for (const y of vals) for (const z of vals) for (const w of vals)
        verts.push([x,y,z,w]);
    // permutations of phi combos
    for (let i = 0; i < 6; i++) {
        const point = i < 3 ? [phi, phi, invPhi, invPhi] : [phi, invPhi, phi, invPhi];
        const perms = getEvenPermutations(point);
        for (const perm of perms) for (let mask = 0; mask < 16; mask++) {
            const p = perm.map((val, idx) => (mask & (1<<idx)) ? -val : val);
            verts.push(p);
        }
    }
    return verts.map(normalize4D);
}
function generate600CellVertices() {
    const verts = [];
    const phi = (1 + Math.sqrt(5)) / 2;
    const invPhi = 1 / phi;
    const vals = [-0.5, 0.5];
    for (const x of vals) for (const y of vals) for (const z of vals) for (const w of vals) verts.push([x,y,z,w]);
    for (let i=0;i<4;i++) for (const s of [-1,1]) { const v=[0,0,0,0]; v[i]=s; verts.push(v); }
    const base = [0, 1, phi, invPhi];
    const perms = getAllPermutations(base);
    for (const p of perms) {
        for (let mask=0; mask<16; mask++) {
            if (mask === 0 || mask === 15) continue;
            const v = p.map((val, idx) => (mask & (1<<idx)) ? -val : val);
            verts.push(v);
        }
    }
    return verts.map(normalize4D);
}

/* permutation helpers */
function getAllPermutations(arr) {
    const res = [];
    const n = arr.length;
    function perm(a, l, r) {
        if (l === r) res.push(a.slice());
        else for (let i=l;i<=r;i++){ [a[l],a[i]]=[a[i],a[l]]; perm(a,l+1,r); [a[l],a[i]]=[a[i],a[l]]; }
    }
    perm(arr.slice(),0,n-1);
    return res;
}
function getEvenPermutations(arr) {
    const all = getAllPermutations(arr), out=[];
    for (const p of all) {
        let inv=0;
        for (let i=0;i<p.length;i++) for (let j=i+1;j<p.length;j++) {
            if (arr.indexOf(p[i]) > arr.indexOf(p[j])) inv++;
        }
        if (inv%2===0) out.push(p);
    }
    return out;
}

/* -------------------------
   Robust edge finder (distance clustering)
   ------------------------- */
function computeEdges(vertices4D) {
    const n = vertices4D.length;
    const edges = [];
    if (n < 2) return edges;

    // collect all non-zero squared distances
    const distSqList = [];
    for (let i=0;i<n;i++) for (let j=i+1;j<n;j++) {
        let d2 = 0;
        for (let k=0;k<4;k++){ const diff = vertices4D[i][k]-vertices4D[j][k]; d2 += diff*diff; }
        if (d2 > 1e-14) distSqList.push(d2);
    }
    if (distSqList.length===0) return edges;

    distSqList.sort((a,b)=>a-b);
    // find a big relative jump among the first chunk (the largest relative difference)
    let bestIdx = 0, bestRel = 0;
    const lookLimit = Math.max(3, Math.floor(distSqList.length * 0.35));
    for (let i=0;i<lookLimit-1;i++){
        const a = distSqList[i], b = distSqList[i+1];
        const rel = (b - a) / (a || 1e-12);
        if (rel > bestRel) { bestRel = rel; bestIdx = i; }
    }
    // threshold is mid between distSqList[bestIdx] and distSqList[bestIdx+1]
    const threshold = (distSqList[bestIdx] + distSqList[bestIdx+1]) / 2;
    // allow slight tolerance
    const lower = threshold * 0.5;
    const upper = threshold * 1.5;

    for (let i=0;i<n;i++) for (let j=i+1;j<n;j++) {
        let d2=0;
        for (let k=0;k<4;k++){ const diff = vertices4D[i][k]-vertices4D[j][k]; d2 += diff*diff; }
        if (d2 >= lower && d2 <= upper) edges.push([i,j]);
    }
    // fallback: if no edges found (rare), pick k nearest neighbors (k=4)
    if (edges.length === 0) {
        const k = Math.min(4, n-1);
        for (let i=0;i<n;i++){
            const arr = [];
            for (let j=0;j<n;j++) if (i!==j){
                let d2=0; for (let t=0;t<4;t++){ const diff = vertices4D[i][t]-vertices4D[j][t]; d2+=diff*diff; }
                arr.push({j,d2});
            }
            arr.sort((A,B)=>A.d2-B.d2);
            for (let m=0;m<k;m++) edges.push([i, arr[m].j]);
        }
        // dedupe edges
        const seen = new Set(), out=[];
        for (const [a,b] of edges) {
            const k = a<b? `${a},${b}`:`${b},${a}`;
            if (!seen.has(k)) { seen.add(k); out.push([a,b]); }
        }
        return out;
    }

    return edges;
}

/* -------------------------
   Groups + drawing
   ------------------------- */
const pointsGroup = new THREE.Group();
const edgesGroup = new THREE.Group();
const facesGroup = new THREE.Group();
scene.add(pointsGroup, edgesGroup, facesGroup);

function clearGroup(g) {
    while (g.children.length) g.remove(g.children[0]);
}

const settings = {
    rotationXY: 0, rotationXZ: 0, rotationYZ: 0,
    rotationXW: 0, rotationYW: 0, rotationZW: 0,
    showVertices: true, vertexColor: '#ffcc00', vertexSize: 0.05, vertexOpacity: 1.0,
    showEdges: true, edgeColor: '#44aaff', edgeOpacity: 0.9,
    showFaces: false, faceColor: '#aa44ff', faceOpacity: 0.3,
    projectionType: 'perspective'
};

let vertices4D = [], vertices3D = [];

function updateGeometry() {
    clearGroup(pointsGroup); clearGroup(edgesGroup); clearGroup(facesGroup);

    // apply rotations (compose by applying each plane)
    let transformed = vertices4D.map(v => v.slice());
    const planes = [
        [0,1,settings.rotationXY],[0,2,settings.rotationXZ],[1,2,settings.rotationYZ],
        [0,3,settings.rotationXW],[1,3,settings.rotationYW],[2,3,settings.rotationZW]
    ];
    for (const [a,b,angle] of planes) {
        if (Math.abs(angle) > 1e-9) {
            const R = rotationMatrix4D(a,b,angle);
            transformed = transformed.map(v => multiplyVecMat4D(v, R));
        }
    }

    // project
    vertices3D = transformed.map(p => project4Dto3D(p, 3, settings.projectionType));

    // vertices
    if (settings.showVertices && vertices3D.length) {
        const geo = new THREE.SphereGeometry(Math.max(0.001, settings.vertexSize), 12, 12);
        const mat = new THREE.MeshBasicMaterial({ color: settings.vertexColor, transparent: true, opacity: settings.vertexOpacity });
        for (const v of vertices3D) {
            const m = new THREE.Mesh(geo, mat);
            m.position.copy(v);
            pointsGroup.add(m);
        }
    }

    // edges
    if (settings.showEdges && vertices4D.length >= 2) {
        const edges = computeEdges(vertices4D);
        const pos = [];
        for (const [i,j] of edges) {
            if (!vertices3D[i] || !vertices3D[j]) continue;
            pos.push(vertices3D[i].x, vertices3D[i].y, vertices3D[i].z);
            pos.push(vertices3D[j].x, vertices3D[j].y, vertices3D[j].z);
        }
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
        const mat = new THREE.LineBasicMaterial({ color: settings.edgeColor, transparent: true, opacity: settings.edgeOpacity });
        const lines = new THREE.LineSegments(geo, mat);
        edgesGroup.add(lines);
    }

    // faces (convex hull)
    if (settings.showFaces && vertices3D.length >= 4) {
        try {
            const hull = new ConvexGeometry(vertices3D);
            const mat = new THREE.MeshLambertMaterial({
                color: settings.faceColor,
                transparent: true,
                opacity: settings.faceOpacity,
                side: THREE.DoubleSide,
                depthWrite: false
            });
            facesGroup.add(new THREE.Mesh(hull, mat));
        } catch (err) {
            console.warn("ConvexGeometry failed:", err);
        }
    }
}

/* -------------------------
   UI wiring + events
   ------------------------- */
function setupUI() {
    // inputs - if any are missing, just skip (defensive)
    const get = id => document.getElementById(id);

    const showVerts = get('showVerts'), vertColor = get('vertColor'), vertSize = get('vertSize');
    const showEdges = get('showEdges'), edgeColor = get('edgeColor'), edgeOpacity = get('edgeOpacity');
    const showFaces = get('showFaces'), faceColor = get('faceColor'), faceOpacity = get('faceOpacity');
    const rotXY = get('rotXY'), rotXZ = get('rotXZ'), rotYZ = get('rotYZ'), rotXW = get('rotXW'), rotYW = get('rotYW'), rotZW = get('rotZW');
    const projectionType = get('projectionType');
    const toggleUIBtn = get('toggleUI'), ui = get('ui'), fullscreenBtn = get('fullscreenBtn');
    const renderBtn = get('renderBtn'), resMult = get('resMult'), samples = get('samples'), progress = get('progress');
    const polySelect = get('polytopeSelect');

    // Add the scroll hint if it doesn't exist
    if (ui && !ui.querySelector('.scroll-hint')) {
        const hint = document.createElement('div');
        hint.className = 'scroll-hint';
        hint.style.textAlign = 'center';
        hint.style.fontSize = '12px';
        hint.style.color = '#aaa';
        hint.style.margin = '4px 0';
        hint.style.padding = '4px';
        hint.style.background = 'rgba(255, 255, 255, 0.05)';
        hint.style.border = '1px solid rgba(255, 255, 255, 0.1)';
        hint.style.borderRadius = '3px';
        hint.style.pointerEvents = 'none';
        hint.style.transition = 'opacity 0.3s ease';
        hint.textContent = '↓ Scroll for more controls';
        ui.insertBefore(hint, ui.firstChild.nextSibling); // After header
    }

    // Wrap UI content if not already wrapped
    if (ui && !ui.querySelector('.ui-content')) {
        const content = document.createElement('div');
        content.className = 'ui-content';
        
        // Move all children except the hint into the wrapper
        const children = Array.from(ui.children);
        children.forEach(child => {
            if (!child.classList.contains('scroll-hint')) {
                content.appendChild(child);
            }
        });
        
        ui.appendChild(content);
    }

    if (showVerts) showVerts.addEventListener('change', e => { settings.showVertices = e.target.checked; updateGeometry(); });
    if (vertColor) vertColor.addEventListener('input', e => { settings.vertexColor = e.target.value; updateGeometry(); });
    if (vertSize) vertSize.addEventListener('input', e => { settings.vertexSize = parseFloat(e.target.value); updateGeometry(); });

    if (showEdges) showEdges.addEventListener('change', e => { settings.showEdges = e.target.checked; updateGeometry(); });
    if (edgeColor) edgeColor.addEventListener('input', e => { settings.edgeColor = e.target.value; updateGeometry(); });
    if (edgeOpacity) edgeOpacity.addEventListener('input', e => { settings.edgeOpacity = parseFloat(e.target.value); updateGeometry(); });

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
        // swap camera type
        if (settings.projectionType === 'parallel') {
            currentCamera = orthoCamera;
        } else {
            currentCamera = perspCamera;
        }
        if (controls) controls.dispose();
        controls = new OrbitControls(currentCamera, renderer.domElement);
        controls.enableDamping = true;
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
        const mode = document.getElementById('renderMode').value;
        const mult = Math.max(1, parseInt(resMult.value || "1", 10));
        if (mode === 'png') {
            try {
                progress.textContent = 'Rendering...';
                // save state
                const oldPR = renderer.getPixelRatio();
                const oldSize = new THREE.Vector2();
                renderer.getSize(oldSize);

                // set high-res: set pixel ratio and size (scale the drawing buffer)
                renderer.setPixelRatio((window.devicePixelRatio || 1) * mult);
                renderer.setSize(Math.round(window.innerWidth), Math.round(window.innerHeight), false);

                // wait a frame so the renderer updates
                await new Promise(requestAnimationFrame);
                renderer.render(scene, currentCamera);
                await new Promise(requestAnimationFrame);

                const dataUrl = renderer.domElement.toDataURL('image/png');

                // restore
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
                progress.textContent = 'Render failed: ' + err.message;
                setTimeout(()=>progress.textContent='', 3000);
            }
        } else {
            progress.textContent = 'Multisample not available';
            setTimeout(()=>progress.textContent='', 1500);
        }
    });

    if (polySelect) polySelect.addEventListener('change', e => {
        loadPolytope(e.target.value);
        // reset camera to see it
        boundsToCamera();
        updateGeometry();
    });
}

/* -------------------------
   load polytope & bounds helper
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
}
function boundsToCamera() {
    // compute bounding sphere of projected 3D vertices and position camera appropriately
    if (!vertices4D.length) return;
    // project minimally (no rotations) to get scale roughly correct
    const proto3 = vertices4D.map(p => project4Dto3D(p, 3, settings.projectionType));
    const box = new THREE.Box3().setFromPoints(proto3);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3()).length();
    // place cameras
    const distance = Math.max(2, size * 1.6);
    perspCamera.position.set(center.x + distance, center.y + distance, center.z + distance);
    perspCamera.lookAt(center);
    orthoCamera.position.copy(perspCamera.position);
    orthoCamera.lookAt(center);
    if (controls) { controls.target.copy(center); controls.update(); }
}

/* -------------------------
   SCROLLABLE UI IMPLEMENTATION
   ------------------------- */
function setupScrollableUI() {
    const ui = document.getElementById('ui');
    if (!ui) return;
    
    const content = ui.querySelector('.ui-content');
    if (!content) return;
    
    // Ensure UI has proper styling
    ui.style.position = 'fixed';
    ui.style.top = '20px';
    ui.style.right = '10px';
    ui.style.width = '280px';
    ui.style.height = `calc(100vh - 40px)`;
    ui.style.maxHeight = `calc(100vh - 40px)`;
    ui.style.overflow = 'hidden';
    ui.style.boxSizing = 'border-box';
    ui.style.zIndex = '2000';
    ui.style.touchAction = 'pan-y';
    
    // Add scrollbar indicator
    if (!ui.querySelector('.scrollbar-indicator')) {
        const scrollbar = document.createElement('div');
        scrollbar.className = 'scrollbar-indicator';
        scrollbar.style.position = 'absolute';
        scrollbar.style.top = '0';
        scrollbar.style.right = '5px';
        scrollbar.style.bottom = '0';
        scrollbar.style.width = '2px';
        scrollbar.style.background = 'rgba(255, 255, 255, 0.1)';
        scrollbar.style.borderRadius = '1px';
        scrollbar.style.pointerEvents = 'none';
        scrollbar.style.opacity = '0';
        scrollbar.style.transition = 'opacity 0.3s';
        ui.appendChild(scrollbar);
    }
    
    const scrollbar = ui.querySelector('.scrollbar-indicator');
    const scrollHint = ui.querySelector('.scroll-hint');
    
    let scrollTop = 0;
    let isScrolling = false;
    let hasScrolled = false;
    let startY = 0;
    let startScrollTop = 0;

    function updateDimensions() {
        const maxScroll = content.scrollHeight - ui.clientHeight;
        return Math.max(0, maxScroll);
    }

    function updateScroll() {
        const maxScroll = updateDimensions();
        scrollTop = Math.max(0, Math.min(scrollTop, maxScroll));
        content.style.transform = `translateY(${-scrollTop}px)`;
        
        // Update scrollbar indicator
        const scrollPercentage = maxScroll > 0 ? scrollTop / maxScroll : 0;
        const indicatorHeight = Math.max(20, ui.clientHeight * (ui.clientHeight / content.scrollHeight));
        const indicatorTop = (ui.clientHeight - indicatorHeight) * scrollPercentage;
        
        if (scrollbar) {
            scrollbar.style.height = `${indicatorHeight}px`;
            scrollbar.style.top = `${indicatorTop}px`;
            scrollbar.style.opacity = scrollTop > 0 || scrollTop < maxScroll ? '1' : '0';
        }
        
        // Hide hint after user scrolls
        if (scrollTop > 20 && !hasScrolled && scrollHint) {
            hasScrolled = true;
            scrollHint.style.transition = 'opacity 0.3s';
            scrollHint.style.opacity = '0';
            setTimeout(() => {
                scrollHint.style.display = 'none';
            }, 300);
        }
    }

    // Handle wheel events
    ui.addEventListener('wheel', (e) => {
        e.preventDefault();
        scrollTop += e.deltaY * 0.8; // Smoother scrolling
        updateScroll();
    }, { passive: false });

    // Handle touch events (mobile)
    ui.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY;
        startScrollTop = scrollTop;
        isScrolling = true;
    }, { passive: false });

    ui.addEventListener('touchmove', (e) => {
        if (!isScrolling) return;
        e.preventDefault();
        const deltaY = e.touches[0].clientY - startY;
        scrollTop = startScrollTop - deltaY;
        updateScroll();
    }, { passive: false });

    ui.addEventListener('touchend', () => {
        isScrolling = false;
    });

    // Handle mouse drag (alternative scroll method)
    let isDragging = false;
    
    ui.addEventListener('mousedown', (e) => {
        if (e.target === content || content.contains(e.target)) {
            isDragging = true;
            startY = e.clientY;
            startScrollTop = scrollTop;
            ui.style.cursor = 'grabbing';
            e.preventDefault();
        }
    });
    
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const deltaY = e.clientY - startY;
        scrollTop = startScrollTop - deltaY;
        updateScroll();
    });
    
    document.addEventListener('mouseup', () => {
        isDragging = false;
        ui.style.cursor = '';
    });

    // Initial setup
    updateScroll();
    
    // Handle window resize
    window.addEventListener('resize', updateScroll);
    
    // Disable OrbitControls when over UI
    if (window.controls) {
        ui.addEventListener('pointerenter', () => { 
            window.controls.enabled = false; 
        });
        ui.addEventListener('pointerleave', () => { 
            window.controls.enabled = true; 
        });
    }
}

/* -------------------------
   init + animate
   ------------------------- */
loadPolytope('24-cell');
setupUI();

// Wait for DOM to be fully ready before setting up scroll
document.addEventListener('DOMContentLoaded', () => {
    // Set up scrollable UI after everything is ready
    setupScrollableUI();
    
    // Initial camera positioning
    boundsToCamera();
    updateGeometry();
});

function animate() {
    requestAnimationFrame(animate);
    if (controls) controls.update();
    renderer.render(scene, currentCamera);
}
animate();
