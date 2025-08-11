// js/ulam.js (replace your current file)
const canvas = document.getElementById("ulamCanvas");
const ctx = canvas.getContext("2d");

let width = 0, height = 0;
const modeSelect = document.getElementById("modeSelect");

let cellSize = 20;
let scale = 1;
let translateX = 0;
let translateY = 0;

let isDragging = false;
let dragStartX = 0;
let dragStartY = 0;
let dragTranslateX = 0;
let dragTranslateY = 0;

// visibleCells: Map "x,y" -> { x, y, label, value, color }
const visibleCells = new Map();

// tooltip
const tooltip = document.createElement("div");
tooltip.style.position = "fixed";
tooltip.style.background = "rgba(0,0,0,0.85)";
tooltip.style.color = "#0f0";
tooltip.style.padding = "6px 10px";
tooltip.style.borderRadius = "5px";
tooltip.style.fontFamily = "monospace";
tooltip.style.fontSize = "13px";
tooltip.style.pointerEvents = "none";
tooltip.style.whiteSpace = "pre";
tooltip.style.display = "none";
tooltip.style.zIndex = 10000;
document.body.appendChild(tooltip);

// ------- Utilities -------
const primeCache = new Map();
function isPrime(n) {
  if (n < 2) return false;
  if (primeCache.has(n)) return primeCache.get(n);
  if (n === 2) { primeCache.set(n, true); return true; }
  if (n % 2 === 0) { primeCache.set(n, false); return false; }
  const lim = Math.floor(Math.sqrt(n));
  for (let i = 3; i <= lim; i += 2) {
    if (n % i === 0) { primeCache.set(n, false); return false; }
  }
  primeCache.set(n, true);
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

function primeFactorization(n) {
  const out = new Map();
  let num = n;
  for (let p = 2; p * p <= num; p++) {
    while (num % p === 0) {
      out.set(p, (out.get(p) || 0) + 1);
      num = Math.floor(num / p);
    }
  }
  if (num > 1) out.set(num, (out.get(num) || 0) + 1);
  return out;
}

function formatFactorization(map) {
  if (!map || map.size === 0) return "(none)";
  const parts = [];
  for (const [p, e] of map.entries()) parts.push(e > 1 ? `${p}^${e}` : `${p}`);
  return parts.join(" × ");
}

// ------- Coordinate mappings -------
function ulamNumberAt(x, y) {
  if (x === 0 && y === 0) return 1;
  const layer = Math.max(Math.abs(x), Math.abs(y));
  const legLen = 2 * layer;
  const maxVal = (2 * layer + 1) ** 2;
  let n;
  if (y === layer) {
    n = maxVal - (layer - x);
  } else if (x === -layer) {
    n = maxVal - legLen - (layer - y);
  } else if (y === -layer) {
    n = maxVal - 2 * legLen - (x + layer);
  } else {
    n = maxVal - 3 * legLen - (y + layer);
  }
  return n;
}

function isGaussianPrime(a, b) {
  // Gaussian primes:
  // - a=0: |b| is ordinary prime and |b| % 4 == 3
  // - b=0: |a| is ordinary prime and |a| % 4 == 3
  // - otherwise: a^2 + b^2 is ordinary prime
  const A = Math.abs(a), B = Math.abs(b);
  if (A === 0 && B === 0) return false;
  if (A === 0) return isPrime(B) && (B % 4 === 3);
  if (B === 0) return isPrime(A) && (A % 4 === 3);
  return isPrime(A * A + B * B);
}

// color mapping for the four modes (returns color string; 'transparent' -> not visible)
function pickColorForCell(x, y) {
  const mode = modeSelect.value;
  if (mode === "ulam-green" || mode === "ulam-heat") {
    const n = ulamNumberAt(x, y);
    if (mode === "ulam-green") return isPrime(n) ? "#00ff00" : "transparent";
    // heat:
    if (n === 1) return "black";
    if (isPrime(n)) return "#ffffff";
    const f = countFactors(n);
    let brightness = Math.max(0, 255 - f * 12);
    brightness = Math.min(255, brightness);
    return `rgb(${brightness},${Math.floor(brightness/2)},0)`;
  } else if (mode === "gauss-green" || mode === "gauss-heat") {
    const a = x, b = y;
    const norm = a * a + b * b;
    if (mode === "gauss-green") {
      return isGaussianPrime(a, b) ? "#00ff00" : "transparent";
    } else {
      // gaussian-heat: primes brightest, others shade by factor count of norm
      if (isGaussianPrime(a, b)) return "#ffffff";
      if (norm <= 1) return "black";
      const f = countFactors(norm);
      let brightness = Math.max(0, 255 - f * 12);
      brightness = Math.min(255, brightness);
      return `rgb(${brightness},${Math.floor(brightness/2)},0)`;
    }
  }
  return "transparent";
}

// ------- Viewport & caching -------
const marginCells = 5;

function updateVisibleCells() {
  const cellW = cellSize * scale;
  const cellH = cellW;
  const left = Math.floor((-translateX) / cellW) - marginCells;
  const right = Math.ceil((width - translateX) / cellW) + marginCells;
  const top = Math.floor((-translateY) / cellH) - marginCells;
  const bottom = Math.ceil((height - translateY) / cellH) + marginCells;

  const newVisible = new Map();

  for (let gy = top; gy <= bottom; gy++) {
    for (let gx = left; gx <= right; gx++) {
      const key = `${gx},${gy}`;
      if (visibleCells.has(key)) {
        newVisible.set(key, visibleCells.get(key));
        continue;
      }

      // compute numeric fields consistently:
      let label, value; // value is integer used for factorization; label is string for display
      const mode = modeSelect.value;
      if (mode === "ulam-green" || mode === "ulam-heat") {
        const n = ulamNumberAt(gx, gy);
        label = String(n);
        value = n; // factor/use n
      } else {
        // gaussian modes -> represent a + bi (grid coordinates are a=x, b=y)
        const a = gx, b = gy;
        label = `${a}${b >= 0 ? "+" : ""}${b}i`;
        value = a * a + b * b; // use norm for factorization & heatmap
      }

      const color = pickColorForCell(gx, gy);
      // store cell even if transparent so tooltip works across the grid
      newVisible.set(key, { x: gx, y: gy, label, value, color });
    }
  }

  visibleCells.clear();
  for (const [k, v] of newVisible.entries()) visibleCells.set(k, v);
}

// ------- Drawing -------
function draw() {
  ctx.clearRect(0, 0, width, height);

  ctx.save();
  ctx.translate(translateX, translateY);
  ctx.scale(scale, scale);

  // Draw Gaussian axes
  if (modeSelect.value.startsWith("gauss")) {
    ctx.strokeStyle = "#666";
    ctx.lineWidth = 1 / scale; // keep axis thin regardless of zoom

    ctx.beginPath();
    // Real axis
    ctx.moveTo(-width, 0);
    ctx.lineTo(width, 0);
    // Imag axis
    ctx.moveTo(0, -height);
    ctx.lineTo(0, height);
    ctx.stroke();
  }

  // Draw cells
  for (const cell of visibleCells.values()) {
    ctx.fillStyle = cell.color;
    ctx.fillRect(cell.x * cellSize, cell.y * cellSize, cellSize, cellSize);
  }

  ctx.restore();
}


// ------- Mouse / tooltip helpers -------
function getCellUnderMouse(mouseX, mouseY) {
  const gx = Math.floor((mouseX - translateX) / (cellSize * scale));
  const gy = Math.floor((mouseY - translateY) / (cellSize * scale));
  return visibleCells.get(`${gx},${gy}`);
}

function onMouseMove(e) {
  if (isDragging) {
    tooltip.style.display = "none";
    return;
  }
  const cell = getCellUnderMouse(e.clientX, e.clientY);
  if (!cell) {
    tooltip.style.display = "none";
    return;
  }

  const mode = modeSelect.value;
  if (mode === "ulam-green" || mode === "ulam-heat") {
    const n = cell.value;
    const fc = countFactors(n);
    const pf = formatFactorization(primeFactorization(n));
    tooltip.textContent = `n = ${n}\nFactors (excluding 1,n): ${fc}\nPrime factorization:\n${pf}`;
  } else {
    const a = cell.x, b = cell.y;
    const norm = cell.value; // a^2 + b^2
    const gp = isGaussianPrime(a, b) ? "Yes" : "No";
    const fc = countFactors(norm);
    const pf = formatFactorization(primeFactorization(norm));
    tooltip.textContent = `${a}${b >= 0 ? "+" : ""}${b}i\nGaussian prime: ${gp}\nNorm = ${norm}\nNorm factors (excl 1,norm): ${fc}\nPrime factorization of norm:\n${pf}`;
  }

  tooltip.style.display = "block";
  const padding = 12;
  let left = e.clientX + padding;
  let top = e.clientY + padding;
  if (left + tooltip.offsetWidth > window.innerWidth) left = e.clientX - tooltip.offsetWidth - padding;
  if (top + tooltip.offsetHeight > window.innerHeight) top = e.clientY - tooltip.offsetHeight - padding;
  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;
}

// ------- Interaction handlers -------
function onWheel(e) {
  e.preventDefault();
  const mx = e.clientX, my = e.clientY;
  const wx = (mx - translateX) / scale;
  const wy = (my - translateY) / scale;
  const delta = -e.deltaY * 0.0015;
  let newScale = scale + delta;
  newScale = Math.min(Math.max(newScale, 0.12), 12);
  translateX -= (wx * newScale - wx * scale);
  translateY -= (wy * newScale - wy * scale);
  scale = newScale;
  updateVisibleCells();
  draw();
}

function onMouseDown(e) {
  isDragging = true;
  dragStartX = e.clientX; dragStartY = e.clientY;
  dragTranslateX = translateX; dragTranslateY = translateY;
  canvas.style.cursor = "grabbing";
  tooltip.style.display = "none";
}

function onMouseMoveDrag(e) {
  if (!isDragging) return;
  const dx = e.clientX - dragStartX;
  const dy = e.clientY - dragStartY;
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

// ------- Resize & init -------
function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width * devicePixelRatio;
  canvas.height = height * devicePixelRatio;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.scale(devicePixelRatio, devicePixelRatio);
  updateVisibleCells();
  draw();
}

// event wiring
modeSelect.addEventListener("change", () => {
  visibleCells.clear();
  updateVisibleCells();
  draw();
});
canvas.addEventListener("wheel", onWheel, { passive: false });
canvas.addEventListener("mousedown", onMouseDown);
window.addEventListener("mousemove", (e) => { onMouseMove(e); onMouseMoveDrag(e); });
window.addEventListener("mouseup", onMouseUp);
window.addEventListener("resize", resize);

// initial
resize();
updateVisibleCells();
draw();

