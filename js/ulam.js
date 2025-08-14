const canvas = document.getElementById("ulamCanvas");
const ctx = canvas.getContext("2d");
const modeSelect = document.getElementById("modeSelect");

let width = 0, height = 0;
// cellSize now represents the radius of the hexagon (center to vertex)
let cellSize = 20;
let scale = 1;
let translateX = 0;
let translateY = 0;
// New variable for device pixel ratio
const pixelRatio = window.devicePixelRatio || 1;

// New variables for inertia
let velocityX = 0;
let velocityY = 0;
const friction = 0.92; // Adjust this value for more or less "slide"
let isDragging = false;
let dragStartX = 0;
let dragStartY = 0;
let dragTranslateX = 0;
let dragTranslateY = 0;

// New variables for pinch-to-zoom
let initialDistance = -1;
let initialScale = 1;

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

// --- Goldbach Comet related functions ---
function countGoldbachPairs(n) {
    if (n <= 2 || n % 2 !== 0) return 0;
    let count = 0;
    for (let i = 2; i <= n / 2; i++) {
        if (isPrime(i) && isPrime(n - i)) {
            count++;
        }
    }
    return count;
}

const C2 = 0.6601618158; // Twin prime constant

function hardyLittlewoodApproximation(n) {
    if (n <= 2 || n % 2 !== 0) return 1;
    const ln_n = Math.log(n);
    if (ln_n === 0) return 1;
    let productCorrection = 1.0;
    const factors = primeFactorization(n);
    for (const [p] of factors.entries()) {
        if (p > 2) { // p is an odd prime factor
            productCorrection *= (p - 1) / (p - 2);
        }
    }
    const approximation = 2 * C2 * (n / (ln_n * ln_n)) * productCorrection;
    return approximation;
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

function isEisensteinPrime(a, b) {
    if (a === 0 && b === 0) return false;
    const norm = a * a - a * b + b * b;
    if (norm <= 1) return false;
    return isPrime(norm);
}

// ------- Eisenstein lattice mapping for correct tessellation -------
const sqrt3 = Math.sqrt(3);

function eisensteinToCanvas(a, b, size) {
    const x = size * sqrt3 * (a + b / 2.0);
    const y = size * (3.0 / 2.0 * b);
    return [x, y];
}

function canvasToEisenstein(x, y, size) {
    const b_frac = (2.0 / 3.0 * y) / size;
    const a_frac = (x / (size * sqrt3)) - (b_frac / 2.0);
    const cx_frac = a_frac;
    const cz_frac = b_frac;
    const cy_frac = -cx_frac - cz_frac;
    let cx_round = Math.round(cx_frac);
    let cy_round = Math.round(cy_frac);
    let cz_round = Math.round(cz_frac);
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
    return [cx_round, cz_round];
}


function drawHex(ctx, x, y, size, fillStyle, strokeStyle, lineWidth) {
    ctx.beginPath();
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

// ------- color picking -------
function pickColorForCell(x, y) {
    const mode = modeSelect.value;
    const lowerCaseMode = mode.toLowerCase();

    if (lowerCaseMode.includes("-comet")) {
        let n;
        if (lowerCaseMode.startsWith("ulam-")) {
            n = ulamNumberAt(x, y);
        } else if (lowerCaseMode.startsWith("gauss-")) {
            n = x * x + y * y;
        } else { // eisen
            n = x * x - x * y + y * y;
        }

        if (n <= 2 || n % 2 !== 0) {
            return "rgba(20, 20, 20, 1)"; // Dark gray for odd/small numbers
        }

        const actualPairs = countGoldbachPairs(n);
        
        // --- MODIFIED --- New normalization curve
        const normalizationFactor = Math.log(n);
        const ratio = actualPairs / (n / (normalizationFactor**2) );
        const hue = 240 - (ratio * 120);
        const clampedHue = Math.max(0, Math.min(240, hue));
        
        return `hsl(${clampedHue}, 90%, 55%)`;
    }


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
    
    const isEisensteinMode = mode.toLowerCase().includes("eisen");

    const viewLeft = (-translateX) / scale;
    const viewRight = (width - translateX) / scale;
    const viewTop = (-translateY) / scale;
    const viewBottom = (height - translateY) / scale;

    if (isEisensteinMode) {
        const hexRadius = cellSize;
        const hexWidth = hexRadius * sqrt3;
        const hexHeight = hexRadius * 2;
        
        const [a1, b1] = canvasToEisenstein(viewLeft, viewTop, hexRadius);
        const [a2, b2] = canvasToEisenstein(viewRight, viewTop, hexRadius);
        const [a3, b3] = canvasToEisenstein(viewLeft, viewBottom, hexRadius);
        const [a4, b4] = canvasToEisenstein(viewRight, viewBottom, hexRadius);
        
        const aMin = Math.min(a1, a2, a3, a4) - marginCells;
        const aMax = Math.max(a1, a2, a3, a4) + marginCells;
        const bMin = Math.min(b1, b2, b3, b4) - marginCells;
        const bMax = Math.max(b1, b2, b3, b4) + marginCells;

        for (let b = Math.floor(bMin); b <= Math.ceil(bMax); b++) {
            for (let a = Math.floor(aMin); a <= Math.ceil(aMax); a++) {
                const [cellX, cellY] = eisensteinToCanvas(a, b, hexRadius);
                
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
    ctx.clearRect(0, 0, width * pixelRatio, height * pixelRatio);
    ctx.save();
    // The pixel ratio is already applied to the context in `resize()`
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
        
        const axisLen = Math.max(width, height) / scale;
        const [e1x, e1y] = eisensteinToCanvas(axisLen, 0, 1);
        ctx.moveTo(-e1x, -e1y); ctx.lineTo(e1x, e1y);
        
        const [e2x, e2y] = eisensteinToCanvas(0, axisLen, 1);
        ctx.moveTo(-e2x, -e2y); ctx.lineTo(e2x, e2y);
        ctx.stroke();
    }

    // Main drawing loop
    if (lowerCaseMode.includes("eisen")) {
        const size = cellSize;
        
        for (const cell of visibleCells.values()) {
            const [x, y] = eisensteinToCanvas(cell.x, cell.y, size);
            
            if (cell.color !== "transparent") {
                drawHex(ctx, x, y, size, cell.color, null, null);
            }

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

// ------- Animation Loop for Inertia -------
function animate() {
    // If not dragging, apply inertia
    if (!isDragging) {
        if (Math.abs(velocityX) > 0.1 || Math.abs(velocityY) > 0.1) {
            translateX += velocityX;
            translateY += velocityY;
            velocityX *= friction;
            velocityY *= friction;
            updateVisibleCells();
            draw();
        } else if (Math.abs(velocityX) <= 0.1 && Math.abs(velocityY) <= 0.1 && (velocityX !== 0 || velocityY !== 0)) {
            // Stop motion when it's negligible
            velocityX = 0;
            velocityY = 0;
        }
    }
    requestAnimationFrame(animate);
}

// ------- Mouse / tooltip helpers -------
function getCellUnderMouse(mouseX, mouseY) {
    const mode = modeSelect.value;
    // Mouse coordinates must be divided by the pixel ratio
    const xCanvas = (mouseX / pixelRatio - translateX) / scale;
    const yCanvas = (mouseY / pixelRatio - translateY) / scale;
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
        translateX = dragTranslateX + dx * pixelRatio;
        translateY = dragTranslateY + dy * pixelRatio;
        // Update velocity for inertia effect
        velocityX = e.movementX * pixelRatio;
        velocityY = e.movementY * pixelRatio;
        updateVisibleCells();
        draw();
        return;
    }

    const cell = getCellUnderMouse(e.clientX * pixelRatio, e.clientY * pixelRatio);
    if (!cell) {
        tooltip.style.display = "none";
        return;
    }

    const mode = modeSelect.value;
    let tooltipText = "";
    
    // --- MODIFIED --- New tooltip logic for comet mode
    if (mode.toLowerCase().includes("-comet")) {
        const n = cell.value;
        let coordLabel = `n = ${n}`; // Default for Ulam
        if (mode.startsWith("gauss-")) {
            coordLabel = `${cell.x}${cell.y >= 0 ? "+" : ""}${cell.y}i\nNorm = ${n}`;
        } else if (mode.startsWith("eisen-")) {
            coordLabel = `${cell.x}${cell.y >= 0 ? "+" : ""}${cell.y}ω\nNorm = ${n}`;
        }

        if (n <= 2 || n % 2 !== 0) {
            tooltipText = `${coordLabel}\n(Odd or too small)`;
        } else {
            const actual = countGoldbachPairs(n);
            const expected = hardyLittlewoodApproximation(n);
            const ratio = expected > 0.1 ? actual / expected : 0;
            tooltipText = `${coordLabel}\nGoldbach Pairs: ${actual}\nHeuristic: ${expected.toFixed(2)}\nRatio: ${ratio.toFixed(2)}`;
        }
    } else if (mode.toLowerCase().includes("ulam-")) {
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
    const mx = e.clientX * pixelRatio;
    const my = e.clientY * pixelRatio;
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
    // Reset velocity on drag start to prevent coasting
    velocityX = 0;
    velocityY = 0;
    canvas.style.cursor = "grabbing";
    tooltip.style.display = "none";
}

function onMouseUp() {
    isDragging = false;
    canvas.style.cursor = "grab";
}

function onTouchStart(e) {
    e.preventDefault(); // Prevents default touch behavior like scrolling
    
    if (e.touches.length === 2) {
        // Pinch-to-zoom start
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        initialDistance = Math.hypot(touch2.clientX - touch1.clientX, touch2.clientY - touch1.clientY);
        initialScale = scale;
        isDragging = false;
        tooltip.style.display = "none";
    } else if (e.touches.length === 1) {
        // Panning start
        isDragging = true;
        dragStartX = e.touches[0].clientX;
        dragStartY = e.touches[0].clientY;
        dragTranslateX = translateX;
        dragTranslateY = translateY;
        velocityX = 0;
        velocityY = 0;
        tooltip.style.display = "none";
    }
}

function onTouchMove(e) {
    e.preventDefault(); // Prevents default touch behavior like scrolling and pinch-zoom
    
    if (e.touches.length === 2 && initialDistance > 0) {
        // Pinch-to-zoom move
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        const currentDistance = Math.hypot(touch2.clientX - touch1.clientX, touch2.clientY - touch1.clientY);
        
        const newScale = initialScale * (currentDistance / initialDistance);
        scale = Math.min(Math.max(newScale, MIN_SCALE), MAX_SCALE);
        
        // Calculate the center of the pinch gesture
        const centerClientX = (touch1.clientX + touch2.clientX) / 2;
        const centerClientY = (touch1.clientY + touch2.clientY) / 2;

        const oldCenterWorldX = (centerClientX * pixelRatio - dragTranslateX) / initialScale;
        const oldCenterWorldY = (centerClientY * pixelRatio - dragTranslateY) / initialScale;
        
        const newCenterWorldX = (centerClientX * pixelRatio - translateX) / scale;
        const newCenterWorldY = (centerClientY * pixelRatio - translateY) / scale;
        
        translateX += (newCenterWorldX - oldCenterWorldX) * scale;
        translateY += (newCenterWorldY - oldCenterWorldY) * scale;
        
        updateVisibleCells();
        draw();
        
    } else if (isDragging && e.touches.length === 1) {
        // Panning move
        const dx = e.touches[0].clientX - dragStartX;
        const dy = e.touches[0].clientY - dragStartY;
        translateX = dragTranslateX + dx * pixelRatio;
        translateY = dragTranslateY + dy * pixelRatio;
        // Update velocity for inertia effect
        if (e.touches[0].previousClientX !== undefined) {
             velocityX = (e.touches[0].clientX - e.touches[0].previousClientX) * pixelRatio;
             velocityY = (e.touches[0].clientY - e.touches[0].previousClientY) * pixelRatio;
        }
        updateVisibleCells();
        draw();
    }
}

function onTouchEnd(e) {
    initialDistance = -1;
    
    if (e.touches.length === 0) {
      isDragging = false;
    } else if (e.touches.length === 1) {
      isDragging = true;
      dragStartX = e.touches[0].clientX;
      dragStartY = e.touches[0].clientY;
      dragTranslateX = translateX;
      dragTranslateY = translateY;
    }
}

function resetView() {
    scale = 1;
    translateX = width / 2;
    translateY = height / 2;
    velocityX = 0;
    velocityY = 0;
    updateVisibleCells();
    draw();
}

// ------- Resize & init -------
function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    
    // Set the display size of the canvas (CSS pixels)
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    
    // Set the drawing buffer size (physical pixels)
    canvas.width = width * pixelRatio;
    canvas.height = height * pixelRatio;
    
    // Scale the entire drawing context by the pixel ratio
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

    if (translateX === 0 && translateY === 0) {
        translateX = width * pixelRatio / 2;
        translateY = height * pixelRatio / 2;
    }
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
window.addEventListener("mousemove", onMouseMove);
window.addEventListener("mouseup", onMouseUp);

// Add touch event listeners for mobile support
canvas.addEventListener("touchstart", onTouchStart, { passive: false });
window.addEventListener("touchmove", onTouchMove, { passive: false });
window.addEventListener("touchend", onTouchEnd);

window.addEventListener("resize", resize);

// initial
resize();
animate(); // Start the animation loop
