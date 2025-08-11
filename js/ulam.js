const canvas = document.getElementById("ulamCanvas");
const ctx = canvas.getContext("2d");

let width, height;

const modeSelect = document.getElementById("modeSelect");
const resetBtn = document.getElementById("resetBtn");

let cellSize = 20;
let scale = 1;
let translateX = 0;
let translateY = 0;

let isDragging = false;
let dragStartX = 0;
let dragStartY = 0;
let dragTranslateX = 0;
let dragTranslateY = 0;

// Cache for visible cells: Map from "x,y" to {n: number, color: string}
const visibleCells = new Map();

// Create tooltip div
const tooltip = document.createElement("div");
tooltip.style.position = "fixed";
tooltip.style.background = "rgba(0,0,0,0.8)";
tooltip.style.color = "#0f0";
tooltip.style.padding = "6px 10px";
tooltip.style.borderRadius = "5px";
tooltip.style.fontFamily = "monospace";
tooltip.style.fontSize = "14px";
tooltip.style.pointerEvents = "none";
tooltip.style.whiteSpace = "pre";
tooltip.style.display = "none";
tooltip.style.zIndex = 1000;
document.body.appendChild(tooltip);

function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width * devicePixelRatio;
  canvas.height = height * devicePixelRatio;
  canvas.style.width = width + "px";
  canvas.style.height = height + "px";
  ctx.setTransform(1,0,0,1,0,0);
  ctx.scale(devicePixelRatio, devicePixelRatio);
  updateVisibleCells();
  draw();
}

// Prime check cache
const primeCache = new Map();
function isPrime(n) {
  if (n < 2) return false;
  if (primeCache.has(n)) return primeCache.get(n);
  if (n === 2) return true;
  if (n % 2 === 0) {
    primeCache.set(n, false);
    return false;
  }
  const limit = Math.sqrt(n) | 0;
  for (let i=3; i <= limit; i+=2) {
    if (n % i === 0) {
      primeCache.set(n, false);
      return false;
    }
  }
  primeCache.set(n, true);
  return true;
}

function countFactors(n) {
  if (n < 2) return 0;
  let count = 0;
  const limit = Math.sqrt(n) | 0;
  for (let i = 2; i <= limit; i++) {
    if (n % i === 0) {
      count++;
      if (i !== n / i) count++;
    }
  }
  return count;
}

// Prime factorization function returning a map {prime: exponent}
function primeFactorization(n) {
  const factors = new Map();
  let num = n;
  for (let p = 2; p * p <= num; p++) {
    while (num % p === 0) {
      factors.set(p, (factors.get(p) || 0) + 1);
      num /= p;
    }
  }
  if (num > 1) factors.set(num, (factors.get(num) || 0) + 1);
  return factors;
}

function formatFactorization(factors) {
  let parts = [];
  for (const [prime, exp] of factors.entries()) {
    parts.push(exp > 1 ? `${prime}^${exp}` : `${prime}`);
  }
  return parts.join(" × ");
}

function ulamNumberAt(x, y) {
  if (x === 0 && y === 0) return 1;

  const layer = Math.max(Math.abs(x), Math.abs(y));
  const legLen = layer * 2;
  const maxVal = (2*layer + 1) ** 2;

  let n;

  if (y === layer) {
    n = maxVal - (layer - x);
  } else if (x === -layer) {
    n = maxVal - legLen - (layer - y);
  } else if (y === -layer) {
    n = maxVal - 2*legLen - (x + layer);
  } else {
    n = maxVal - 3*legLen - (y + layer);
  }

  return n;
}

function getColorForNumber(n) {
  if (modeSelect.value === "primes") {
    return isPrime(n) ? "#00ff00" : "transparent";
  } else {
    if (n === 1) return "black";
    if (isPrime(n)) return "#ffffff";
    const factors = countFactors(n);
    let brightness = Math.max(0, 255 - factors * 12);
    brightness = Math.min(255, brightness);
    return `rgb(${brightness},${brightness / 2},0)`;
  }
}

// Margin cells beyond viewport to load
const marginCells = 5;

// Update visibleCells cache based on current viewport
function updateVisibleCells() {
  const cellWidth = cellSize * scale;
  const cellHeight = cellWidth;

  // Calculate visible cell ranges in grid coords (x,y)
  const left = Math.floor((-translateX) / cellWidth) - marginCells;
  const right = Math.ceil((width - translateX) / cellWidth) + marginCells;
  const top = Math.floor((-translateY) / cellHeight) - marginCells;
  const bottom = Math.ceil((height - translateY) / cellHeight) + marginCells;

  // Create a new Map for updated visible cells
  const newVisible = new Map();

  for (let y = top; y <= bottom; y++) {
    for (let x = left; x <= right; x++) {
      const key = `${x},${y}`;
      if (visibleCells.has(key)) {
        // Keep existing cached cell
        newVisible.set(key, visibleCells.get(key));
      } else {
        // Compute new cell info and cache
        const n = ulamNumberAt(x, y);
        if (n < 1) continue;
        const color = getColorForNumber(n);
        if (color === "transparent") continue; // skip drawing invisible cells
        newVisible.set(key, { n, color, x, y });
      }
    }
  }

  // Replace old cache with new one
  visibleCells.clear();
  for (const [k, v] of newVisible.entries()) visibleCells.set(k, v);
}

// Draw only visible cells
function draw() {
  ctx.clearRect(0, 0, width, height);

  ctx.save();
  ctx.translate(translateX, translateY);
  ctx.scale(scale, scale);

  for (const cell of visibleCells.values()) {
    ctx.fillStyle = cell.color;
    ctx.fillRect(cell.x * cellSize, cell.y * cellSize, cellSize, cellSize);
  }

  ctx.restore();
}

// Mouse to grid cell
function getCellUnderMouse(mouseX, mouseY) {
  const x = Math.floor((mouseX - translateX) / (cellSize * scale));
  const y = Math.floor((mouseY - translateY) / (cellSize * scale));
  return visibleCells.get(`${x},${y}`);
}

function onMouseMove(event) {
  if (isDragging) {
    // Hide tooltip while dragging
    tooltip.style.display = "none";
    return;
  }

  const cell = getCellUnderMouse(event.clientX, event.clientY);
  if (cell) {
    // Compute factor count & prime factorization for tooltip
    const factorsCount = countFactors(cell.n);
    const primeFactors = primeFactorization(cell.n);
    const factorStr = formatFactorization(primeFactors);
    tooltip.textContent = `n=${cell.n}\nFactors: ${factorsCount}\nPrime factorization:\n${factorStr}`;
    tooltip.style.display = "block";

    // Position tooltip near mouse but keep inside window
    const padding = 15;
    let left = event.clientX + padding;
    let top = event.clientY + padding;

    if (left + tooltip.offsetWidth > window.innerWidth) {
      left = event.clientX - tooltip.offsetWidth - padding;
    }
    if (top + tooltip.offsetHeight > window.innerHeight) {
      top = event.clientY - tooltip.offsetHeight - padding;
    }

    tooltip.style.left = left + "px";
    tooltip.style.top = top + "px";
  } else {
    tooltip.style.display = "none";
  }
}

function onWheel(event) {
  event.preventDefault();

  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const xBefore = (mouseX - translateX) / scale;
  const yBefore = (mouseY - translateY) / scale;

  const delta = -event.deltaY * 0.0015;
  let newScale = scale + delta;
  newScale = Math.min(Math.max(newScale, 0.1), 10);

  // Adjust translate to zoom around mouse pointer
  translateX -= (xBefore * newScale - xBefore * scale);
  translateY -= (yBefore * newScale - yBefore * scale);

  scale = newScale;

  updateVisibleCells();
  draw();
}

function onMouseDown(event) {
  isDragging = true;
  dragStartX = event.clientX;
  dragStartY = event.clientY;
  dragTranslateX = translateX;
  dragTranslateY = translateY;
  canvas.style.cursor = "grabbing";
  tooltip.style.display = "none"; // hide tooltip while dragging
}

function onMouseMoveDrag(event) {
  if (!isDragging) return;

  const dx = event.clientX - dragStartX;
  const dy = event.clientY - dragStartY;

  translateX = dragTranslateX + dx;
  translateY = dragTranslateY + dy;

  updateVisibleCells();
  draw();
}

function onMouseUp() {
  isDragging = false;
  canvas.style.cursor = "grab";
  updateVisibleCells();
  draw();
}

function resetView() {
  scale = 1;
  translateX = 0;
  translateY = 0;
  updateVisibleCells();
  draw();
}

modeSelect.addEventListener("change", () => {
  visibleCells.clear();
  updateVisibleCells();
  draw();
});
resetBtn.addEventListener("click", resetView);

canvas.addEventListener("wheel", onWheel, { passive: false });
canvas.addEventListener("mousedown", onMouseDown);
window.addEventListener("mousemove", (e) => {
  onMouseMove(e);
  onMouseMoveDrag(e);
});
window.addEventListener("mouseup", onMouseUp);
window.addEventListener("resize", () => {
  resize();
  updateVisibleCells();
  draw();
});

resize();
updateVisibleCells();
draw();

