import * as THREE from '../node_modules/three/build/three.module.js';

// 24-cell vertices in 4D
const vertices4D = [
  [1,1,0,0], [1,-1,0,0], [-1,1,0,0], [-1,-1,0,0],
  [1,0,1,0], [1,0,-1,0], [-1,0,1,0], [-1,0,-1,0],
  [0,1,1,0], [0,1,-1,0], [0,-1,1,0], [0,-1,-1,0],
  [1,0,0,1], [1,0,0,-1], [-1,0,0,1], [-1,0,0,-1],
  [0,1,0,1], [0,1,0,-1], [0,-1,0,1], [0,-1,0,-1],
  [0,0,1,1], [0,0,1,-1], [0,0,-1,1], [0,0,-1,-1]
];

// Compute edges: pairs with squared distance ~2
const edges = [];
function distSquared(a,b) {
  let s=0;
  for(let i=0; i<4; i++) {
    const d = a[i] - b[i];
    s += d*d;
  }
  return s;
}
for(let i=0; i<vertices4D.length; i++) {
  for(let j=i+1; j<vertices4D.length; j++) {
    if (Math.abs(distSquared(vertices4D[i], vertices4D[j]) - 2) < 0.01) {
      edges.push([i,j]);
    }
  }
}

// Rotation helpers
function rotationMatrix4D(a,b,theta) {
  const mat = Array(4).fill(0).map(() => Array(4).fill(0));
  for(let i=0; i<4; i++) mat[i][i] = 1;
  mat[a][a] = Math.cos(theta);
  mat[a][b] = -Math.sin(theta);
  mat[b][a] = Math.sin(theta);
  mat[b][b] = Math.cos(theta);
  return mat;
}
function matVecMul(mat, vec) {
  const res = [0,0,0,0];
  for(let i=0; i<4; i++) {
    for(let j=0; j<4; j++) {
      res[i] += mat[i][j] * vec[j];
    }
  }
  return res;
}
function matMul(a,b) {
  const res = Array(4).fill(0).map(() => Array(4).fill(0));
  for(let i=0; i<4; i++) {
    for(let j=0; j<4; j++) {
      for(let k=0; k<4; k++) {
        res[i][j] += a[i][k]*b[k][j];
      }
    }
  }
  return res;
}
function composeRotations(rotations) {
  let m = rotations[0];
  for(let i=1; i<rotations.length; i++) {
    m = matMul(m, rotations[i]);
  }
  return m;
}

// Project 4D → 3D perspective
const projectionDistance = 5;
const scale3D = 7;
function project4Dto3D(v4, distance=projectionDistance) {
  let w = distance - v4[3];
  if (w < 0.1) w = 0.1; // avoid divide-by-zero or negative
  return new THREE.Vector3(
    v4[0] * distance / w * scale3D,
    v4[1] * distance / w * scale3D,
    v4[2] * distance / w * scale3D
  );
}

// Rotation planes for 4D rotation (XY,XZ,XW,YZ,YW,ZW)
const rotationPlanes = [
  [0,1],[0,2],[0,3],
  [1,2],[1,3],[2,3]
];
let angles = [0,0,0,0,0,0];
let angleSpeeds = [];
for(let i=0; i<6; i++) {
  angleSpeeds[i] = (Math.random()*0.001 + 0.0003) * (Math.random() < 0.5 ? 1 : -1);
}

window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('bgCanvas');
  const renderer = new THREE.WebGLRenderer({canvas, alpha:true});
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0, 8);
  camera.fov = 60;
  camera.updateProjectionMatrix();
  
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
  });

  // Create geometry and material for edges
  const positions = new Float32Array(edges.length * 2 * 3);
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const material = new THREE.LineBasicMaterial({color: 0xffffff, opacity: 0.8, transparent: true});
  const wireframe = new THREE.LineSegments(geometry, material);
  scene.add(wireframe);

  function updateGeometry(rotMatrix) {
    const pts3D = vertices4D.map(v => project4Dto3D(matVecMul(rotMatrix, v)));

    for(let i=0; i<edges.length; i++) {
      const [a,b] = edges[i];
      const p1 = pts3D[a];
      const p2 = pts3D[b];

      positions[i*6 + 0] = p1.x;
      positions[i*6 + 1] = p1.y;
      positions[i*6 + 2] = p1.z;

      positions[i*6 + 3] = p2.x;
      positions[i*6 + 4] = p2.y;
      positions[i*6 + 5] = p2.z;
    }

    geometry.attributes.position.needsUpdate = true;
  }

    function animate() {
      requestAnimationFrame(animate);

      // Update rotation matrix and geometry
      const rotations = rotationPlanes.map((p, i) => rotationMatrix4D(p[0], p[1], angles[i]));
      const rotMatrix = composeRotations(rotations);

      updateGeometry(rotMatrix);

      // Remove or comment out cube rotation updates:
      // cube.rotation.x += 0.003;
      // cube.rotation.y += 0.004;

      // Update rotation angles
      for (let i = 0; i < angles.length; i++) {
        angles[i] += angleSpeeds[i];
        if (angles[i] > Math.PI * 2) angles[i] -= Math.PI * 2;
        else if (angles[i] < 0) angles[i] += Math.PI * 2;
      }

      renderer.render(scene, camera);
    }

  animate();
});

