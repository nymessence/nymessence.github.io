import * as THREE from '../node_modules/three/build/three.module.js';
import { PointerLockControls } from '../node_modules/three/examples/jsm/controls/PointerLockControls.js';

const container = document.getElementById('container');
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 5000);
camera.position.set(0, 200, 500);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

// Lights
const ambient = new THREE.AmbientLight(0xffffff, 0.7);
scene.add(ambient);
const directional = new THREE.DirectionalLight(0xffffff, 0.8);
directional.position.set(100, 200, 100);
scene.add(directional);

// Controls
const controls = new PointerLockControls(camera, renderer.domElement);
container.addEventListener('click', ()=>controls.lock());

// Movement
let move = { forward:0, backward:0, left:0, right:0, up:0, down:0 };
let velocity = new THREE.Vector3();
const accel = 50, damping = 0.85;
document.addEventListener('keydown', e => {
    if(e.code==='KeyW') move.forward=1;
    if(e.code==='KeyS') move.backward=1;
    if(e.code==='KeyA') move.left=1;
    if(e.code==='KeyD') move.right=1;
    if(e.code==='KeyR') move.up=1;
    if(e.code==='KeyF') move.down=1;
});
document.addEventListener('keyup', e => {
    if(e.code==='KeyW') move.forward=0;
    if(e.code==='KeyS') move.backward=0;
    if(e.code==='KeyA') move.left=0;
    if(e.code==='KeyD') move.right=0;
    if(e.code==='KeyR') move.up=0;
    if(e.code==='KeyF') move.down=0;
});

// Pyramid generation
const MAX_LEVEL = 15;
const SPHERE_SIZE = 5;
let pyramidMesh;

function combinations(n,k){
    if(k<0||k>n) return 0;
    if(k===0||k===n) return 1;
    if(k>n/2) k=n-k;
    let res=1;
    for(let i=1;i<=k;i++) res=res*(n-i+1)/i;
    return Math.round(res);
}

function pascalValue(n,i,j){
    return combinations(n,i)*combinations(n-i,j);
}

function isPrime(n){
    if(n<2) return false;
    for(let i=2;i*i<=n;i++) if(n%i===0) return false;
    return true;
}

const PRIME_COLORS = [0xff0000,0x00ff00,0x0000ff,0xffff00,0xff00ff,0x00ffff,0xff8800];
const OTHER_PRIME_COLOR = 0xffffff;

function blendPrimeColors(val){
    const base = new THREE.Color(0x000000);
    let weighted=false;
    const primes=[2,3,5,7,11,13,17];
    primes.forEach((p,idx)=>{
        if(val%p===0){
            weighted=true;
            const col=new THREE.Color(PRIME_COLORS[idx]);
            const factor=Math.min(Math.floor(Math.log(val)/Math.log(p)),4)/4;
            base.lerp(col,factor);
        }
    });
    if(!weighted && isPrime(val)) base.set(OTHER_PRIME_COLOR);
    return base;
}

function createPyramid(){
    if(pyramidMesh) scene.remove(pyramidMesh);

    const positions=[];
    const colors=[];

    const scale=12;
    const yOffset=(MAX_LEVEL*scale)/2;

    for(let n=0;n<=MAX_LEVEL;n++){
        for(let i=0;i<=n;i++){
            for(let j=0;j<=n-i;j++){
                const k=n-i-j;
                const pos=new THREE.Vector3(
                    (i-j)*0.866*scale,
                    (k-(i+j)/2)*scale - yOffset,
                    n*scale*0.5
                );
                positions.push(pos);
                const val=pascalValue(n,i,j);
                colors.push(blendPrimeColors(val));
            }
        }
    }

    const geom=new THREE.SphereGeometry(SPHERE_SIZE,12,12);
    const mat=new THREE.MeshStandardMaterial({ vertexColors: false });

    pyramidMesh=new THREE.InstancedMesh(geom, mat, positions.length);
    pyramidMesh.instanceColor=new THREE.InstancedBufferAttribute(new Float32Array(positions.length*3),3);

    const dummy=new THREE.Object3D();
    positions.forEach((p,idx)=>{
        dummy.position.copy(p);
        dummy.updateMatrix();
        pyramidMesh.setMatrixAt(idx,dummy.matrix);

        const c=colors[idx];
        pyramidMesh.setColorAt(idx,c);
    });

    pyramidMesh.instanceMatrix.needsUpdate=true;
    if(pyramidMesh.instanceColor) pyramidMesh.instanceColor.needsUpdate=true;

    scene.add(pyramidMesh);
}

// Initial pyramid
createPyramid();

// Animate
const clock=new THREE.Clock();
function animate(){
    requestAnimationFrame(animate);
    const delta=clock.getDelta();
    const moveDir=new THREE.Vector3(move.right-move.left, move.up-move.down, move.backward-move.forward);
    if(moveDir.lengthSq()>0){
        moveDir.normalize();
        moveDir.applyQuaternion(camera.quaternion);
        velocity.add(moveDir.multiplyScalar(accel*delta));
    }
    camera.position.add(velocity.clone().multiplyScalar(delta*5));
    velocity.multiplyScalar(damping);
    renderer.render(scene,camera);
}
animate();

// Window resize
window.addEventListener('resize',()=>{
    camera.aspect=window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth,window.innerHeight);
});

