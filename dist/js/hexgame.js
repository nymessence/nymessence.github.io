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
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
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
    [1, 1, 0, 0], [1, -1, 0, 0], [-1, 1, 0, 0], [-1, -1, 0, 0],
    [1, 0, 1, 0], [1, 0, -1, 0], [-1, 0, 1, 0], [-1, 0, -1, 0],
    [0, 1, 1, 0], [0, 1, -1, 0], [0, -1, 1, 0], [0, -1, -1, 0],
    [1, 0, 0, 1], [1, 0, 0, -1], [-1, 0, 0, 1], [-1, 0, 0, -1],
    [0, 1, 0, 1], [0, 1, 0, -1], [0, -1, 0, 1], [0, -1, 0, -1],
    [0, 0, 1, 1], [0, 0, 1, -1], [0, 0, -1, 1], [0, 0, -1, -1]
];
const edges = [];
function distSquared(a, b) { return a.reduce((s, v, i) => s + (v - b[i]) ** 2, 0); }
for (let i = 0; i < vertices4D.length; i++)
    for (let j = i + 1; j < vertices4D.length; j++)
        if (Math.abs(distSquared(vertices4D[i], vertices4D[j]) - 2) < 0.01) edges.push([i, j]);

function rotationMatrix4D(a, b, theta) {
    const m = Array(4).fill(0).map(() => Array(4).fill(0));
    for (let i = 0; i < 4; i++) m[i][i] = 1;
    m[a][a] = Math.cos(theta); m[a][b] = -Math.sin(theta);
    m[b][a] = Math.sin(theta); m[b][b] = Math.cos(theta);
    return m;
}
function matVecMul(mat, vec) { return mat.map((row, i) => row.reduce((s, v, j) => s + v * vec[j], 0)); }
function matMul(a, b) {
    const res = Array(4).fill(0).map(() => Array(4).fill(0));
    for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) for (let k = 0; k < 4; k++)
        res[i][j] += a[i][k] * b[k][j];
    return res;
}
function composeRotations(rotations) { return rotations.reduce((m, r) => matMul(m, r)); }
function project4Dto3D(v4, d = 6) {
    const w = d - v4[3];
    const safeW = w < 0.1 ? 0.1 : w;
    return new THREE.Vector3(v4[0] * d / safeW, v4[1] * d / safeW, v4[2] * d / safeW);
}

const rotationPlanes = [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]];
let angles = rotationPlanes.map(() => 0);
let angleSpeeds = rotationPlanes.map(() => (Math.random() * 0.001 + 0.0003) * (Math.random() < 0.5 ? 1 : -1));

let positions, geometry, wireframe;
function initCosmicBG() {
    cosmicGroup = new THREE.Group();
    positions = new Float32Array(edges.length * 2 * 3);
    geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.15 });
    wireframe = new THREE.LineSegments(geometry, mat);
    cosmicGroup.add(wireframe);
    scene.add(cosmicGroup);
}
function updateCosmicBG() {
    const rotations = rotationPlanes.map((p, i) => rotationMatrix4D(p[0], p[1], angles[i]));
    const rotMatrix = composeRotations(rotations);
    const pts3D = vertices4D.map(v => project4Dto3D(matVecMul(rotMatrix, v)));
    edges.forEach((e, i) => {
        const [a, b] = e, p1 = pts3D[a], p2 = pts3D[b];
        positions[i * 6 + 0] = p1.x; positions[i * 6 + 1] = p1.y; positions[i * 6 + 2] = p1.z;
        positions[i * 6 + 3] = p2.x; positions[i * 6 + 4] = p2.y; positions[i * 6 + 5] = p2.z;
    });
    geometry.attributes.position.needsUpdate = true;
    angles = angles.map((ang, i) => {
        let next = ang + angleSpeeds[i];
        if (next > Math.PI * 2) next -= Math.PI * 2;
        else if (next < 0) next += Math.PI * 2;
        return next;
    });
}
initCosmicBG();

// --------------------------------------------------------------------------------------------------
// --- START: NEW GAME-SPECIFIC LOGIC ---
// --------------------------------------------------------------------------------------------------

// --- Game State and UI ---
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const scoreDisplay = document.getElementById('score');
const highscoreDisplay = document.getElementById('highscore');
const livesDisplay = document.getElementById('lives');

let gameIsRunning = false;
let score = 0;
let highscore = localStorage.getItem('hexgameHighscore') || 0;
let lives = 3;
let playerPosition = { a: 0, b: 0 }; // Player's position on the Eisenstein grid
let playerMesh;
const cellSize = 20; // Radius of a hex cell
let gameGroup = new THREE.Group(); // Container for all game-related 3D objects
scene.add(gameGroup);

const sqrt3 = Math.sqrt(3);
const hexBaseHeight = 0.5;
let worldPillars = new Map(); // Store pillar info for collision detection
let prizes = new Map(); // Store prize info: key is "a,b" string, value is prize type/object

// Prize types
const PRIZE_CRYSTAL = "crystal";
const PRIZE_COIN = "coin";
const PRIZE_BAD = "bad";

// Message Box
const messageBox = document.createElement('div');
messageBox.style.cssText = `
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.7); color: white; padding: 20px;
    border-radius: 10px; text-align: center; font-family: sans-serif;
    display: none; z-index: 1000;
`;
document.body.appendChild(messageBox);
function showMessage(text) {
    messageBox.textContent = text;
    messageBox.style.display = 'block';
    setTimeout(() => {
        messageBox.style.display = 'none';
    }, 3000);
}

function updateUI() {
    scoreDisplay.textContent = score;
    highscoreDisplay.textContent = highscore;
    livesDisplay.textContent = lives;
}

// Eisenstein lattice mapping from your other file
function eisensteinToCanvas(a, b, size) {
    const x = size * sqrt3 * (a + b / 2.0);
    const y = size * (3.0 / 2.0 * b);
    return [x, y];
}

// Utility functions for number theory
function isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    const lim = Math.floor(Math.sqrt(n));
    for (let i = 3; i <= lim; i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

function countFactors(n) {
    if (n < 2) return 0;
    let count = 0;
    const lim = Math.floor(Math.sqrt(n));
    for (let i = 2; i <= lim; i++) {
        if (n % i === 0) {
            count++;
            if (i !== n / i) count++;
        }
    }
    return count;
}

function isEisensteinPrime(a, b) {
    if (a === 0 && b === 0) return false;
    const norm = a * a - a * b + b * b;
    if (norm <= 1) return false;
    return isPrime(norm);
}


// --- Game Functions ---
function startGame() {
    if (gameIsRunning) return;
    gameIsRunning = true;
    console.log('Game started!');

    score = 0;
    lives = 3;
    
    // Clear any previous game objects
    while (gameGroup.children.length > 0) {
        gameGroup.remove(gameGroup.children[0]);
    }
    worldPillars.clear();
    prizes.clear();

    updateUI();
    spawnPlayer();
    generateWorld();
    generateEisensteinPrimeSpiral(); // Updated function call
}

function resetGame() {
    gameIsRunning = false;
    console.log('Game reset!');

    if (score > highscore) {
        highscore = score;
        localStorage.setItem('hexgameHighscore', highscore);
    }
    
    score = 0;
    lives = 3;
    
    while (gameGroup.children.length > 0) {
        gameGroup.remove(gameGroup.children[0]);
    }
    
    worldPillars.clear();
    prizes.clear();
    
    updateUI();
}

function endGame() {
    gameIsRunning = false;
    // Update high score on game over
    if (score > highscore) {
        highscore = score;
        localStorage.setItem('hexgameHighscore', highscore);
    }
    updateUI();
    showMessage(`Game Over!\nFinal Score: ${score}\nHigh Score: ${highscore}`);
}

function spawnPlayer() {
    // Player is a 3D projection of a 24-cell
    if (playerMesh) {
        gameGroup.remove(playerMesh);
    }

    const playerScale = 0.5;
    playerMesh = cosmicGroup.clone();
    playerMesh.scale.set(playerScale, playerScale, playerScale);
    
    // Randomly spawn within a 128-hex radius
    const a = Math.floor(Math.random() * 256) - 128;
    const b = Math.floor(Math.random() * 256) - 128;
    playerPosition = { a, b };
    
    const [x, y] = eisensteinToCanvas(a, b, cellSize);
    playerMesh.position.set(x, y, 0); // Position at the base of the pillar
    gameGroup.add(playerMesh);
}

function spawnPrizes(a, b, height) {
    if (Math.random() < 0.01) { // 1% chance to spawn a prize
        const prizeType = Math.random() < 0.1 ? PRIZE_BAD : Math.random() < 0.5 ? PRIZE_CRYSTAL : PRIZE_COIN;
        
        let prizeMesh;
        const [x, y] = eisensteinToCanvas(a, b, cellSize);

        if (prizeType === PRIZE_CRYSTAL) {
            const geometry = new THREE.OctahedronGeometry(2);
            const material = new THREE.MeshStandardMaterial({ color: 0x00ffff, emissive: 0x00ffff, emissiveIntensity: 0.5 });
            prizeMesh = new THREE.Mesh(geometry, material);
        } else if (prizeType === PRIZE_COIN) {
            const geometry = new THREE.CylinderGeometry(2, 2, 0.5, 32);
            const material = new THREE.MeshStandardMaterial({ color: 0xffff00, emissive: 0xffff00, emissiveIntensity: 0.5 });
            prizeMesh = new THREE.Mesh(geometry, material);
        } else if (prizeType === PRIZE_BAD) {
            const geometry = new THREE.TorusGeometry(2, 0.5, 16, 100);
            const material = new THREE.MeshStandardMaterial({ color: 0xff0000, emissive: 0xff0000, emissiveIntensity: 0.5 });
            prizeMesh = new THREE.Mesh(geometry, material);
        }

        prizeMesh.position.set(x, y, height + 5);
        gameGroup.add(prizeMesh);
        prizes.set(`${a},${b}`, { type: prizeType, object: prizeMesh });
    }
}

function generateWorld() {
    const spawnRadius = 128;
    
    // Iterate over the grid to create pillars
    for (let a = -spawnRadius; a <= spawnRadius; a++) {
        for (let b = -spawnRadius; b <= spawnRadius; b++) {
            const norm = a * a - a * b + b * b;
            let height = hexBaseHeight;
            let color = 0x555555;
            let isPrimePillar = false;

            if (isEisensteinPrime(a, b)) {
                height = hexBaseHeight * 3; // Prime pillar is 3x higher
                color = 0x00ff00; // Green for prime
                isPrimePillar = true;
            } else if (norm > 1) {
                const factorCount = countFactors(norm);
                // Adjust height based on number of factors
                height = hexBaseHeight / (factorCount + 1); 
                color = 0xaaaaaa;
            }
            
            // Store pillar data
            worldPillars.set(`${a},${b}`, { height, isPrime: isPrimePillar });

            // Skip the origin pillar for now, or make it special
            if (a === 0 && b === 0) continue;

            const [x, y] = eisensteinToCanvas(a, b, cellSize);
            const geometry = new THREE.CylinderGeometry(cellSize * 0.9, cellSize * 0.9, height, 6);
            const material = new THREE.MeshStandardMaterial({ color });
            const pillar = new THREE.Mesh(geometry, material);
            pillar.position.set(x, y, height / 2); // Position based on pillar height
            gameGroup.add(pillar);
            
            spawnPrizes(a, b, height);
        }
    }
}

// --- NEW Hexagonal Ulam Spiral Visualization ---
function generateEisensteinPrimeSpiral() {
    const spiralGroup = new THREE.Group();
    const spiralRadius = 150;
    const spiralSize = 1; // Size of each prime number cube
    const spiralHeight = 10;
    const geometry = new THREE.BoxGeometry(spiralSize, spiralSize, spiralSize);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xff00ff, emissiveIntensity: 0.8 });

    let a = 0, b = 0; // Coordinates on the Eisenstein grid
    let step = 1;
    let turnCount = 0;
    let direction = 0; // 0=E, 1=NE, 2=NW, 3=W, 4=SW, 5=SE

    for (let i = 1; i <= spiralRadius * spiralRadius; i++) {
        if (isEisensteinPrime(a, b)) {
            const primeCube = new THREE.Mesh(geometry, material);
            const [x, y] = eisensteinToCanvas(a, b, spiralSize * 2); // Use a smaller 'cellSize' for the spiral
            primeCube.position.set(x, y, spiralHeight);
            spiralGroup.add(primeCube);
        }

        // Move one step in the current direction
        switch(direction) {
            case 0: a++; break;
            case 1: a++; b--; break;
            case 2: b--; break;
            case 3: a--; break;
            case 4: a--; b++; break;
            case 5: b++; break;
        }

        // Check for a turn
        if (i === step || i === step + 1) {
            turnCount++;
            direction = (direction + 1) % 6;
            if (turnCount % 2 === 0) {
                step += 1;
            }
        }
    }
    
    // Position the Eisenstein spiral above the hexagonal game board
    spiralGroup.position.set(0, 0, 50);
    gameGroup.add(spiralGroup);
}

function checkCollisions(newA, newB) {
    const prevPillar = worldPillars.get(`${playerPosition.a},${playerPosition.b}`);
    const newPillar = worldPillars.get(`${newA},${newB}`);
    
    if (!newPillar) {
        lives--;
        console.log("Fell off the world! Lives remaining:", lives);
        if (lives <= 0) {
            endGame();
        }
        return false;
    }

    if (prevPillar && prevPillar.isPrime && newPillar && !newPillar.isPrime) {
        lives--;
        console.log("Fell from a prime pillar! Lives remaining:", lives);
        if (lives <= 0) {
            endGame();
        }
    }
    
    const prizeKey = `${newA},${newB}`;
    if (prizes.has(prizeKey)) {
        const prize = prizes.get(prizeKey);
        if (prize.type === PRIZE_CRYSTAL) {
            // TODO: Handle 3x jump crystal logic
            score += 100;
            console.log("Collected a crystal!");
        } else if (prize.type === PRIZE_COIN) {
            score += 10;
            console.log("Collected a coin!");
        } else if (prize.type === PRIZE_BAD) {
            lives--;
            console.log("Collected a bad item! Lives remaining:", lives);
            if (lives <= 0) {
                endGame();
            }
        }
        
        gameGroup.remove(prize.object);
        prizes.delete(prizeKey);
    }
    
    updateUI();
    return true;
}

function movePlayer(direction) {
    if (!gameIsRunning) return;

    let { a, b } = playerPosition;
    
    const newPos = { a, b };
    switch(direction) {
        case 0: newPos.a++; break;
        case 1: newPos.a++; newPos.b--; break;
        case 2: newPos.b--; break;
        case 3: newPos.a--; break;
        case 4: newPos.a--; newPos.b++; break;
        case 5: newPos.b++; break;
    }
    
    if (checkCollisions(newPos.a, newPos.b)) {
        playerPosition = newPos;
        const [x, y] = eisensteinToCanvas(newPos.a, newPos.b, cellSize);
        
        playerMesh.position.x = x;
        playerMesh.position.y = y;
    }
}

// --- Keyboard Controls ---
window.addEventListener('keydown', (e) => {
    if (!gameIsRunning) return;
    switch(e.key.toLowerCase()) {
        case 'd': movePlayer(0); break; // East
        case 'q': movePlayer(2); break; // Northwest
        case 'z': movePlayer(4); break; // Southwest
        case 'a': movePlayer(3); break; // West
        case 'e': movePlayer(1); break; // Northeast
        case 'x': movePlayer(5); break; // Southeast
    }
});

// --- Touch Controls ---
let touchStartX, touchStartY;
const minSwipeDistance = 50;
window.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
});
window.addEventListener("touchend", (e) => {
    if (!gameIsRunning) return;
    if (!touchStartX || !touchStartY) return;

    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const dx = endX - touchStartX;
    const dy = endY - touchStartY;
    
    if (Math.abs(dx) > minSwipeDistance || Math.abs(dy) > minSwipeDistance) {
        const angle = Math.atan2(dy, dx);
        if (angle > -Math.PI / 6 && angle <= Math.PI / 6) movePlayer(0); // East
        else if (angle > Math.PI / 6 && angle <= Math.PI / 2) movePlayer(5); // Southeast
        else if (angle > Math.PI / 2 && angle <= 5 * Math.PI / 6) movePlayer(4); // Southwest
        else if (angle > 5 * Math.PI / 6 || angle <= -5 * Math.PI / 6) movePlayer(3); // West
        else if (angle > -5 * Math.PI / 6 && angle <= -Math.PI / 2) movePlayer(2); // Northwest
        else if (angle > -Math.PI / 2 && angle <= -Math.PI / 6) movePlayer(1); // Northeast
    }
    
    touchStartX = null;
    touchStartY = null;
});

// --------------------------------------------------------------------------------------------------
// --- END: NEW GAME-SPECIFIC LOGIC ---
// --------------------------------------------------------------------------------------------------

// --- Event Listeners ---
startBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', resetGame);

// --- Initial Setup ---
updateUI();

// --- Camera Following Logic ---
function updateCamera() {
    if (!playerMesh) return;

    // Define a target position for the camera
    const cameraTarget = new THREE.Vector3(playerMesh.position.x, playerMesh.position.y - 15, playerMesh.position.z + 15);
    
    // Smoothly move the camera to the target position
    camera.position.lerp(cameraTarget, 0.05);

    // Make the camera look at the player
    controls.target.copy(playerMesh.position);
    controls.update();
}

// --- Animation Loop ---
function animate() {
    requestAnimationFrame(animate);

    updateCosmicBG();
    
    if (gameIsRunning) {
        if (playerMesh) {
            playerMesh.rotation.z += 0.01;
            updateCamera(); // Call the new camera function
        }
    }
    
    renderer.render(scene, camera);
}
animate();

