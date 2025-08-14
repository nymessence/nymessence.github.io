import * as THREE from '/node_modules/three/build/three.module.js';
import { OrbitControls } from '/node_modules/three/examples/jsm/controls/OrbitControls.js';

// --- Canvas & Renderer ---
const canvas = document.getElementById('bgCanvas');
if (!canvas) throw new Error("Canvas element with id 'bgCanvas' not found");

const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0x000000, 0);

// --- Scene & Camera ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.set(0, 8, 15);

// --- Resize Handling ---
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// --- Lights ---
scene.add(new THREE.AmbientLight(0xffffff, 0.5));
const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
dirLight.position.set(5, 10, 7.5);
scene.add(dirLight);

// --- OrbitControls (for debugging) ---
const controls = new OrbitControls(camera, renderer.domElement);
controls.enablePan = false;
controls.enableZoom = false;
controls.target.set(0, 0, 0);

// --- 24-Cell Cosmic Background ---
let cosmicGroup;
const vertices4D = [
    [1,1,0,0],[1,-1,0,0],[-1,1,0,0],[-1,-1,0,0],
    [1,0,1,0],[1,0,-1,0],[-1,0,1,0],[-1,0,-1,0],
    [0,1,1,0],[0,1,-1,0],[0,-1,1,0],[0,-1,-1,0],
    [1,0,0,1],[1,0,0,-1],[-1,0,0,1],[-1,0,0,-1],
    [0,1,0,1],[0,1,0,-1],[0,-1,0,1],[0,-1,0,-1],
    [0,0,1,1],[0,0,1,-1],[0,0,-1,1],[0,0,-1,-1]
];
const edges = [];
function distSquared(a,b){ return a.reduce((s,v,i)=>s+(v-b[i])**2,0);}
for(let i=0;i<vertices4D.length;i++)
    for(let j=i+1;j<vertices4D.length;j++)
        if(Math.abs(distSquared(vertices4D[i],vertices4D[j])-2)<0.01) edges.push([i,j]);

function rotationMatrix4D(a,b,theta){
    const m = Array(4).fill(0).map(()=>Array(4).fill(0));
    for(let i=0;i<4;i++) m[i][i]=1;
    m[a][a]=Math.cos(theta); m[a][b]=-Math.sin(theta);
    m[b][a]=Math.sin(theta); m[b][b]=Math.cos(theta);
    return m;
}
function matVecMul(mat,vec){ return mat.map((row,i)=>row.reduce((s,v,j)=>s+v*vec[j],0)); }
function matMul(a,b){
    const res = Array(4).fill(0).map(()=>Array(4).fill(0));
    for(let i=0;i<4;i++) for(let j=0;j<4;j++) for(let k=0;k<4;k++)
        res[i][j]+=a[i][k]*b[k][j];
    return res;
}
function composeRotations(rotations){ return rotations.reduce((m,r)=>matMul(m,r)); }
function project4Dto3D(v4,d=6){
    const w=d-v4[3]; 
    const safeW = w < 0.1 ? 0.1 : w;
    return new THREE.Vector3(v4[0]*d/safeW,v4[1]*d/safeW,v4[2]*d/safeW);
}

const rotationPlanes=[[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]];
let angles = rotationPlanes.map(()=>0);
let angleSpeeds = rotationPlanes.map(()=> (Math.random()*0.001+0.0003)*(Math.random()<0.5?1:-1));

let positions, geometry, wireframe;
function initCosmicBG(){
    cosmicGroup = new THREE.Group();
    positions = new Float32Array(edges.length*2*3);
    geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions,3));
    const mat = new THREE.LineBasicMaterial({color:0xffffff,transparent:true,opacity:0.15});
    wireframe = new THREE.LineSegments(geometry, mat);
    cosmicGroup.add(wireframe);
    scene.add(cosmicGroup);
}
function updateCosmicBG(){
    const rotations = rotationPlanes.map((p,i)=>rotationMatrix4D(p[0],p[1],angles[i]));
    const rotMatrix = composeRotations(rotations);
    const pts3D = vertices4D.map(v=>project4Dto3D(matVecMul(rotMatrix,v)));
    edges.forEach((e,i)=>{
        const [a,b]=e, p1=pts3D[a], p2=pts3D[b];
        positions[i*6+0]=p1.x; positions[i*6+1]=p1.y; positions[i*6+2]=p1.z;
        positions[i*6+3]=p2.x; positions[i*6+4]=p2.y; positions[i*6+5]=p2.z;
    });
    geometry.attributes.position.needsUpdate=true;
    angles = angles.map((ang,i)=>{
        let next=ang+angleSpeeds[i];
        if(next>Math.PI*2) next-=Math.PI*2;
        else if(next<0) next+=Math.PI*2;
        return next;
    });
}
initCosmicBG();

// --- Animation Loop ---
function animate(){
    requestAnimationFrame(animate);
    updateCosmicBG();
    renderer.render(scene,camera);
}
animate();
