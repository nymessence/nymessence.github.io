const canvas = document.getElementById("fractalCanvas");
const ctx = canvas.getContext("2d");

const formulaInput = document.getElementById("funcInput");
const cReInput = document.getElementById("cReal");
const cImInput = document.getElementById("cImag");
const iterationsInput = document.getElementById("iterations");
const gradientInput = document.getElementById("gradient");
const resetBtn = document.getElementById("resetView");

let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

let centerX = 0;
let centerY = 0;
let scale = 4 / width;

let dragging = false;
let dragStart = { x: 0, y: 0 };
let dragOffset = { x: 0, y: 0 };
let lastCenter = { x: 0, y: 0 };

let isLoading = false;

// Offscreen canvas to hold fractal pixels for smooth zoom/pan
const offscreenCanvas = document.createElement("canvas");
const offCtx = offscreenCanvas.getContext("2d");
offscreenCanvas.width = width;
offscreenCanvas.height = height;

// Touch/pinch zoom state
let isPinching = false;
let pinchStartDist = 0;
let pinchStartScale = 1;
let pinchStartCenter = null;
let pinchTempScale = 1;
let pinchTempOffset = { x: 0, y: 0 };
let pinchLastCenter = null;

function getDistance(t1, t2) {
  const dx = t2.clientX - t1.clientX;
  const dy = t2.clientY - t1.clientY;
  return Math.sqrt(dx * dx + dy * dy);
}

function getTouchCenter(t1, t2) {
  return {
    x: (t1.clientX + t2.clientX) / 2,
    y: (t1.clientY + t2.clientY) / 2,
  };
}

function parseFormula(formula) {
  try {
    let parsed = formula.replace(/\^/g, "**");
    return math.compile(parsed);
  } catch (err) {
    alert("Invalid formula: " + err);
    return null;
  }
}

function hexToRgb(hex) {
  hex = hex.replace("#", "");
  if (hex.length === 3) {
    hex = hex.split("").map(x => x + x).join("");
  }
  const num = parseInt(hex, 16);
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
}

function getGradient(colors, steps) {
  let grad = [];
  for (let i = 0; i < steps; i++) {
    let t = i / (steps - 1);
    let idx = t * (colors.length - 1);
    let i0 = Math.floor(idx);
    let i1 = Math.min(i0 + 1, colors.length - 1);
    let f = idx - i0;
    let c0 = hexToRgb(colors[i0]);
    let c1 = hexToRgb(colors[i1]);
    grad.push([
      Math.round(c0[0] + f * (c1[0] - c0[0])),
      Math.round(c0[1] + f * (c1[1] - c0[1])),
      Math.round(c0[2] + f * (c1[2] - c0[2]))
    ]);
  }
  return grad;
}

async function drawFractalToOffscreen() {
  isLoading = true;

  const formula = parseFormula(formulaInput.value);
  if (!formula) {
    isLoading = false;
    return;
  }

  const cRe = parseFloat(cReInput.value);
  const cIm = parseFloat(cImInput.value);
  const maxIter = parseInt(iterationsInput.value);
  const colors = gradientInput.value.split(",").map(s => s.trim());
  const gradient = getGradient(colors, maxIter + 1);

  const img = offCtx.createImageData(width, height);
  const pixels = img.data;

  // To keep UI responsive, break loop into chunks
  const chunkSize = 50; // rows per chunk
  for (let startY = 0; startY < height; startY += chunkSize) {
    const endY = Math.min(startY + chunkSize, height);
    for (let py = startY; py < endY; py++) {
      for (let px = 0; px < width; px++) {
        let x0 = centerX + (px - width / 2) * scale;
        let y0 = centerY + (py - height / 2) * scale;
        let zx = x0;
        let zy = y0;

        let iter = 0;
        while (iter < maxIter) {
          let scope = { z: math.complex(zx, zy), c: math.complex(cRe, cIm) };
          let result = formula.evaluate(scope);
          zx = result.re;
          zy = result.im;

          if (zx * zx + zy * zy > 4) break;
          iter++;
        }

        let col = gradient[iter] || [0, 0, 0];
        let idx = 4 * (py * width + px);
        pixels[idx] = col[0];
        pixels[idx + 1] = col[1];
        pixels[idx + 2] = col[2];
        pixels[idx + 3] = 255;
      }
    }
    offCtx.putImageData(img, 0, 0);
    await new Promise(r => setTimeout(r, 0)); // Yield to UI thread
  }

  isLoading = false;
  dragOffset.x = 0;
  dragOffset.y = 0;
}

function drawFromOffscreen(scaleFactor = 1, offsetX = 0, offsetY = 0) {
  ctx.clearRect(0, 0, width, height);
  ctx.save();
  ctx.translate(offsetX, offsetY);
  ctx.scale(scaleFactor, scaleFactor);
  ctx.drawImage(offscreenCanvas, 0, 0);
  ctx.restore();
}

canvas.addEventListener("mousedown", e => {
  dragging = true;
  dragStart.x = e.clientX;
  dragStart.y = e.clientY;
  lastCenter.x = centerX;
  lastCenter.y = centerY;
  // Keep current dragOffset if loading, else reset
  if (!isLoading) {
    dragOffset.x = 0;
    dragOffset.y = 0;
  }
});

canvas.addEventListener("mousemove", e => {
  if (!dragging) return;
  dragOffset.x = e.clientX - dragStart.x;
  dragOffset.y = e.clientY - dragStart.y;
  drawFromOffscreen(1, dragOffset.x, dragOffset.y);
});

canvas.addEventListener("mouseup", e => {
  if (!dragging) return;
  if (!isLoading) {
    centerX = lastCenter.x - dragOffset.x * scale;
    centerY = lastCenter.y - dragOffset.y * scale;
    dragOffset.x = 0;
    dragOffset.y = 0;
    drawFractalToOffscreen();
    drawFromOffscreen();
  }
  dragging = false;
});

canvas.addEventListener("mouseleave", () => {
  if (!dragging) return;
  if (!isLoading) {
    centerX = lastCenter.x - dragOffset.x * scale;
    centerY = lastCenter.y - dragOffset.y * scale;
    dragOffset.x = 0;
    dragOffset.y = 0;
    drawFractalToOffscreen();
    drawFromOffscreen();
  }
  dragging = false;
});

let lastZoomFactor = 1;
let zoomTimeout = null;

canvas.addEventListener("wheel", e => {
  e.preventDefault();

  const zoomFactor = e.deltaY < 0 ? 0.9 : 1.1;
  scale /= zoomFactor;

  lastZoomFactor *= zoomFactor;

  drawFromOffscreen(lastZoomFactor);

  if (zoomTimeout) clearTimeout(zoomTimeout);
  zoomTimeout = setTimeout(() => {
    lastZoomFactor = 1;
    drawFractalToOffscreen();
    drawFromOffscreen();
  }, 300);
});

// Touch / pinch zoom handling

canvas.addEventListener("touchstart", e => {
  e.preventDefault();
  if (e.touches.length === 1) {
    dragging = true;
    dragStart.x = e.touches[0].clientX;
    dragStart.y = e.touches[0].clientY;
    lastCenter.x = centerX;
    lastCenter.y = centerY;
    if (!isLoading) {
      dragOffset.x = 0;
      dragOffset.y = 0;
    }
    isPinching = false;
  } else if (e.touches.length === 2) {
    dragging = false;
    isPinching = true;
    pinchStartDist = getDistance(e.touches[0], e.touches[1]);
    pinchStartScale = scale;
    pinchStartCenter = getTouchCenter(e.touches[0], e.touches[1]);
    pinchTempScale = 1;
    pinchTempOffset = { x: 0, y: 0 };
    pinchLastCenter = pinchStartCenter;
  }
});

canvas.addEventListener("touchmove", e => {
  e.preventDefault();
  if (e.touches.length === 1 && dragging) {
    dragOffset.x = e.touches[0].clientX - dragStart.x;
    dragOffset.y = e.touches[0].clientY - dragStart.y;
    drawFromOffscreen(1, dragOffset.x, dragOffset.y);
  } else if (e.touches.length === 2 && isPinching) {
    const newDist = getDistance(e.touches[0], e.touches[1]);
    const newCenter = getTouchCenter(e.touches[0], e.touches[1]);
    pinchTempScale = newDist / pinchStartDist;

    pinchTempOffset.x += newCenter.x - pinchLastCenter.x;
    pinchTempOffset.y += newCenter.y - pinchLastCenter.y;

    pinchLastCenter = newCenter;

    drawFromOffscreen(pinchTempScale, pinchTempOffset.x, pinchTempOffset.y);
  }
});

canvas.addEventListener("touchend", e => {
  e.preventDefault();
  if (dragging) {
    if (!isLoading) {
      centerX = lastCenter.x - dragOffset.x * scale;
      centerY = lastCenter.y - dragOffset.y * scale;
      dragOffset.x = 0;
      dragOffset.y = 0;
      drawFractalToOffscreen();
      drawFromOffscreen();
    }
    dragging = false;
  }
  if (isPinching && e.touches.length < 2) {
    const pinchCenterCanvasX = pinchStartCenter.x - width / 2;
    const pinchCenterCanvasY = pinchStartCenter.y - height / 2;

    scale /= pinchTempScale;

    centerX += pinchCenterCanvasX * (scale - scale * pinchTempScale);
    centerY += pinchCenterCanvasY * (scale - scale * pinchTempScale);

    pinchTempScale = 1;
    pinchTempOffset = { x: 0, y: 0 };
    isPinching = false;

    drawFractalToOffscreen();
    drawFromOffscreen();
  }
});

resetBtn.addEventListener("click", () => {
  centerX = 0;
  centerY = 0;
  scale = 4 / width;
  drawFractalToOffscreen();
  drawFromOffscreen();
});

window.addEventListener("resize", () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
  offscreenCanvas.width = width;
  offscreenCanvas.height = height;
  scale = 4 / width;
  drawFractalToOffscreen();
  drawFromOffscreen();
});

window.addEventListener("DOMContentLoaded", () => {
  drawFractalToOffscreen();
  drawFromOffscreen();
});

