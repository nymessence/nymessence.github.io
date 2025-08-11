const canvas = document.getElementById("ulamCanvas");
const ctx = canvas.getContext("2d");
const modeSelect = document.getElementById("modeSelect");

let width = 0, height = 0;
// cellSize now represents the radius of the hexagon (center to vertex)
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
    const A = Math.abs(a), B = Math.abs(b);
    if (A === 0 && B === 0) return false;
    if (A === 0) return isPrime(B) && (B % 4 === 3);
    if (B === 0) return isPrime(A) && (A % 4 === 3);
    return isPrime(A * A + B * B);
}

// Eisenstein integer prime test approximation (norm-based)
function isEisensteinPrime(a, b) {
    // norm = a^2 - a*b + b^2
    if (a === 0 && b === 0) return false;
    const norm = a * a - a * b + b * b;
    if (norm <= 1) return false; // units and zero not prime
    // An Eisenstein integer a+bω is prime if its norm is a rational prime p,
    // and p is congruent to 1 mod 3. Or if p=3.
    // A simpler check for visualization is just checking if the norm itself is a prime number.
    return isPrime(norm);
}

// ------- Eisenstein lattice mapping for correct tessellation -------
const sqrt3 = Math.sqrt(3);

// --- MODIFIED ---
// This function now correctly converts axial hex coordinates to pixel coordinates for a flat-top grid.
function eisensteinToCanvas(a, b, size) {
    const x = size * sqrt3 * (a + b / 2.0);
    const y = size * (3.0 / 2.0 * b);
    return [x, y];
}

// --- MODIFIED ---
// This function now correctly and robustly converts pixel coordinates to the nearest hex coordinate.
// It does this by converting to fractional "cube" coordinates, rounding them, and converting back.
function canvasToEisenstein(x, y, size) {
    // Convert pixel to fractional axial coordinates
    const b_frac = (2.0 / 3.0 * y) / size;
    const a_frac = (x / (size * sqrt3)) - (b_frac / 2.0);

    // Convert fractional axial to fractional cube coordinates
    const cx_frac = a_frac;
    const cz_frac = b_frac;
    const cy_frac = -cx_frac - cz_frac;

    // Round cube coordinates to nearest integer
    let cx_round = Math.round(cx_frac);
    let cy_round = Math.round(cy_frac);
    let cz_round = Math.round(cz_frac);

    // Correct for rounding errors by finding the largest change and adjusting it
    const cx_diff = Math.abs(cx_round - cx_frac);
    const cy_diff = Math.abs(cy_round - cy_frac);
    const cz_diff = Math.abs(cz_round - cz_frac);

    if (cx_diff > cy_diff && cx_diff > cz_diff) {
        cx_round = -cy_round - cz_round;
    } else if (cy_diff > cz_diff) {
        cy_round = -cx_round - cz_round;
    } else {
        cz_round = -cx_round - cy_round;
    }

    // Convert rounded cube coordinates back to axial coordinates (a, b)
    return [cx_round, cz_round];
}


// Draw a filled hexagon centered at (x,y) with a given radius (size)
function drawHex(ctx, x, y, size, fillStyle, strokeStyle, lineWidth) {
    ctx.beginPath();
    // Use Math.PI/6 as the starting angle for a flat-top hexagon
    for (let i = 0; i < 6; i++) {
        const angle = Math.PI / 6 + i * Math.PI / 3;
        const dx = size * Math.cos(angle);
        const dy = size * Math.sin(angle);
        if (i === 0) ctx.moveTo(x + dx, y + dy);
        else ctx.lineTo(x + dx, y + dy);
    }
    ctx.closePath();
    if (fillStyle) {
        ctx.fillStyle = fillStyle;
        ctx.fill();
    }
    if (strokeStyle) {
        ctx.strokeStyle = strokeStyle;
        ctx.lineWidth = lineWidth;
        ctx.stroke();
    }
}

// ------- color picking
function pickColorForCell(x, y) {
    const mode = modeSelect.value;
    const lowerCaseMode = mode.toLowerCase(); // Case-insensitive check
    if (lowerCaseMode.includes("ulam-")) {
        const n = ulamNumberAt(x, y);
        if (lowerCaseMode === "ulam-green") return isPrime(n) ? "#00ff00" : "transparent";
        if (n === 1) return "black";
        if (isPrime(n)) return "#ffffff";
        const f = countFactors(n);
        let brightness = Math.max(0, 255 - f * 12);
        brightness = Math.min(255, brightness);
        return `rgb(${brightness},${Math.floor(brightness/2)},0)`;
    } else if (lowerCaseMode.includes("gauss-")) {
        const a = x, b = y;
        const norm = a * a + b * b;
        if (lowerCaseMode === "gauss-green") {
            return isGaussianPrime(a, b) ? "#00ff00" : "transparent";
        } else {
            if (isGaussianPrime(a, b)) return "#ffffff";
            if (norm <= 1) return "black";
            const f = countFactors(norm);
            let brightness = Math.max(0, 255 - f * 12);
            brightness = Math.min(255, brightness);
            return `rgb(${brightness},${Math.floor(brightness/2)},0)`;
        }
    } else if (lowerCaseMode.includes("eisen")) {
        const a = x, b = y;
        const norm = a * a - a * b + b * b;
        if (lowerCaseMode.includes("eisen-green")) {
            return isEisensteinPrime(a, b) ? "#00ff00" : "transparent";
        } else {
            if (isEisensteinPrime(a, b)) return "#ffffff";
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
const MIN_SCALE = 0.05;
const MAX_SCALE = 12;

function updateVisibleCells() {
    visibleCells.clear();
    const mode = modeSelect.value;
    
    // Check mode to determine grid type
    const isEisensteinMode = mode.toLowerCase().includes("eisen");

    // Calculate viewport in canvas coordinates, accounting for scale and translate
    const viewLeft = (-translateX) / scale;
    const viewRight = (width - translateX) / scale;
    const viewTop = (-translateY) / scale;
    const viewBottom = (height - translateY) / scale;

    if (isEisensteinMode) {
        const hexRadius = cellSize;
        const hexWidth = hexRadius * sqrt3;
        const hexHeight = hexRadius * 2;
        
        // Calculate the Eisenstein coordinates of the scaled and translated viewport corners
        const [a1, b1] = canvasToEisenstein(viewLeft, viewTop, hexRadius);
        const [a2, b2] = canvasToEisenstein(viewRight, viewTop, hexRadius);
        const [a3, b3] = canvasToEisenstein(viewLeft, viewBottom, hexRadius);
        const [a4, b4] = canvasToEisenstein(viewRight, viewBottom, hexRadius);
        
        // Determine the integer bounds for the loop
        const aMin = Math.min(a1, a2, a3, a4) - marginCells;
        const aMax = Math.max(a1, a2, a3, a4) + marginCells;
        const bMin = Math.min(b1, b2, b3, b4) - marginCells;
        const bMax = Math.max(b1, b2, b3, b4) + marginCells;

        for (let b = Math.floor(bMin); b <= Math.ceil(bMax); b++) {
            for (let a = Math.floor(aMin); a <= Math.ceil(aMax); a++) {
                const [cellX, cellY] = eisensteinToCanvas(a, b, hexRadius);
                
                // Check if the cell's center is within a slightly expanded viewport
                if (cellX > viewLeft - hexWidth && cellX < viewRight + hexWidth && 
                    cellY > viewTop - hexHeight && cellY < viewBottom + hexHeight) {
                    const key = `${a},${b}`;
                    let label, value, color;

                    value = a * a - a * b + b * b;
                    label = `${a}${b >= 0 ? "+" : ""}${b}ω`;
                    color = pickColorForCell(a, b);
                    visibleCells.set(key, { x: a, y: b, label, value: value, color });
                }
            }
        }
    } else { // Square grid for Ulam and Gaussian
        const cellW = cellSize;
        const cellH = cellW;
        const left = Math.floor(viewLeft / cellW) - marginCells;
        const right = Math.ceil(viewRight / cellW) + marginCells;
        const top = Math.floor(viewTop / cellH) - marginCells;
        const bottom = Math.ceil(viewBottom / cellH) + marginCells;

        for (let gy = top; gy <= bottom; gy++) {
            for (let gx = left; gx <= right; gx++) {
                const key = `${gx},${gy}`;
                let label, value, color;

                if (mode.toLowerCase().includes("ulam-")) {
                    value = ulamNumberAt(gx, gy);
                    label = String(value);
                } else { // Gaussian
                    value = gx * gx + gy * gy;
                    label = `${gx}${gy >= 0 ? "+" : ""}${gy}i`;
                }
                color = pickColorForCell(gx, gy);
                visibleCells.set(key, { x: gx, y: gy, label, value: value, color });
            }
        }
    }
}

// ------- Drawing -------
function draw() {
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.translate(translateX, translateY);
    ctx.scale(scale, scale);

    const mode = modeSelect.value;
    const lowerCaseMode = mode.toLowerCase();

    // Draw axes
    if (lowerCaseMode.includes("gauss-")) {
        ctx.strokeStyle = "#666";
        ctx.lineWidth = 1 / scale;
        ctx.beginPath();
        ctx.moveTo(-width/scale, 0); ctx.lineTo(width/scale, 0); // Real axis
        ctx.moveTo(0, -height/scale); ctx.lineTo(0, height/scale); // Imag axis
        ctx.stroke();
    } else if (lowerCaseMode.includes("eisen")) {
        ctx.strokeStyle = "#666";
        ctx.lineWidth = 1 / scale;
        ctx.beginPath();
        
        // --- MODIFIED --- Correctly draw the two main axes for Eisenstein integers
        const axisLen = Math.max(width, height) / scale;
        // Real axis (1, 0)
        const [e1x, e1y] = eisensteinToCanvas(axisLen, 0, 1);
        ctx.moveTo(-e1x, -e1y); ctx.lineTo(e1x, e1y);
        
        // Omega axis (0, 1)
        const [e2x, e2y] = eisensteinToCanvas(0, axisLen, 1);
        ctx.moveTo(-e2x, -e2y); ctx.lineTo(e2x, e2y);
        ctx.stroke();
    }

    // Main drawing loop
    if (lowerCaseMode.includes("eisen")) {
        const size = cellSize;
        
        for (const cell of visibleCells.values()) {
            const [x, y] = eisensteinToCanvas(cell.x, cell.y, size);
            
            // Fill with the appropriate color
            if (cell.color !== "transparent") {
                drawHex(ctx, x, y, size, cell.color, null, null);
            }

            // Draw border lines for all cells
            drawHex(ctx, x, y, size, null, "rgba(0,0,0,0.2)", 1 / scale);
        }

    } else { // Square grid
        const size = cellSize;
        for (const cell of visibleCells.values()) {
            if (cell.color === "transparent") continue;
            ctx.fillStyle = cell.color;
            ctx.fillRect(cell.x * size, cell.y * size, size, size);
            ctx.strokeStyle = "rgba(0,0,0,0.2)";
            ctx.lineWidth = 1 / scale;
            ctx.strokeRect(cell.x * size, cell.y * size, size, size);
        }
    }
    ctx.restore();
}

// ------- Mouse / tooltip helpers -------
function getCellUnderMouse(mouseX, mouseY) {
    const mode = modeSelect.value;
    const xCanvas = (mouseX - translateX) / scale;
    const yCanvas = (mouseY - translateY) / scale;
    const isEisensteinMode = mode.toLowerCase().includes("eisen");

    if (isEisensteinMode) {
        const [a, b] = canvasToEisenstein(xCanvas, yCanvas, cellSize);
        const key = `${a},${b}`;
        return visibleCells.get(key);
    } else {
        const gx = Math.floor(xCanvas / cellSize);
        const gy = Math.floor(yCanvas / cellSize);
        return visibleCells.get(`${gx},${gy}`);
    }
}

function onMouseMove(e) {
    if (isDragging) {
        tooltip.style.display = "none";
        const dx = e.clientX - dragStartX;
        const dy = e.clientY - dragStartY;
        translateX = dragTranslateX + dx;
        translateY = dragTranslateY + dy;
        updateVisibleCells();
        draw();
        return;
    }

    const cell = getCellUnderMouse(e.clientX, e.clientY);
    if (!cell) {
        tooltip.style.display = "none";
        return;
    }

    const mode = modeSelect.value;
    let tooltipText = "";
    if (mode.toLowerCase().includes("ulam-")) {
        const n = cell.value;
        const fc = countFactors(n);
        const pf = formatFactorization(primeFactorization(n));
        tooltipText = `n = ${n}\nFactors (excluding 1,n): ${fc}\nPrime factorization:\n${pf}`;
    } else if (mode.toLowerCase().includes("gauss-")) {
        const a = cell.x, b = cell.y;
        const norm = cell.value;
        const gp = isGaussianPrime(a, b) ? "Yes" : "No";
        const fc = countFactors(norm);
        const pf = formatFactorization(primeFactorization(norm));
        tooltipText = `${a}${b >= 0 ? "+" : ""}${b}i\nGaussian prime: ${gp}\nNorm = ${norm}\nNorm factors (excl 1,norm): ${fc}\nPrime factorization of norm:\n${pf}`;
    } else if (mode.toLowerCase().includes("eisen")) {
        // --- MODIFIED --- Fixed a bug where 'y' was used instead of 'cell.y'
        const a = cell.x, b = cell.y;
        const norm = cell.value;
        const ep = isEisensteinPrime(a, b) ? "Yes" : "No";
        const fc = countFactors(norm);
        const pf = formatFactorization(primeFactorization(norm));
        tooltipText = `${a}${b >= 0 ? "+" : ""}${b}ω\nEisenstein prime: ${ep}\nNorm = ${norm}\nNorm factors (excl 1,norm): ${fc}\nPrime factorization of norm:\n${pf}`;
    }

    tooltip.textContent = tooltipText;
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
    const mx = e.clientX;
    const my = e.clientY;
    const delta = -e.deltaY * 0.001;
    let newScale = scale * (1 + delta);
    newScale = Math.min(Math.max(newScale, MIN_SCALE), MAX_SCALE);

    const wx = (mx - translateX) / scale;
    const wy = (my - translateY) / scale;

    translateX -= (wx * newScale - wx * scale);
    translateY -= (wy * newScale - wy * scale);
    scale = newScale;

    updateVisibleCells();
    draw();
}

function onMouseDown(e) {
    isDragging = true;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    dragTranslateX = translateX;
    dragTranslateY = translateY;
    canvas.style.cursor = "grabbing";
    tooltip.style.display = "none";
}

function onMouseUp() {
    isDragging = false;
    canvas.style.cursor = "grab";
}

function resetView() {
    scale = 1;
    translateX = width / 2;
    translateY = height / 2;
    updateVisibleCells();
    draw();
}

// ------- Resize & init -------
function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    
    // Don't reset view on every resize, just recenter if it's the first time
    if (translateX === 0 && translateY === 0) {
        translateX = width / 2;
        translateY = height / 2;
    }
    updateVisibleCells();
    draw();
}

// event wiring
modeSelect.addEventListener("change", () => {
    visibleCells.clear();
    // No need to call resetView(), just update and draw
    updateVisibleCells();
    draw();
});
canvas.addEventListener("wheel", onWheel, { passive: false });
canvas.addEventListener("mousedown", onMouseDown);
window.addEventListener("mousemove", onMouseMove);
window.addEventListener("mouseup", onMouseUp);
window.addEventListener("resize", resize);

// initial
resize();
// No need for these calls here, resize() handles it.
// updateVisibleCells();
// draw();

