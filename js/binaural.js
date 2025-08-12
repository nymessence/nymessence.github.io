const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;
let oscillatorLeft = null;
let oscillatorRight = null;
let gainNodeLeft = null;
let gainNodeRight = null;

const presetSelect = document.getElementById('presetSelect');
const baseFreqInput = document.getElementById('baseFreq');
const binauralFreqInput = document.getElementById('binauralFreq');
const playBtn = document.getElementById('playBtn');
const stopBtn = document.getElementById('stopBtn');

const presets = {
  delta: { binaural: 2.25, base: 100 },
  theta: { binaural: 6, base: 200 },
  alpha: { binaural: 10.5, base: 400 },
  beta: { binaural: 21.5, base: 500 },
  gamma: { binaural: 35, base: 600 }
};

presetSelect.addEventListener('change', () => {
  const val = presetSelect.value;
  if (val && presets[val]) {
    baseFreqInput.value = presets[val].base;
    binauralFreqInput.value = presets[val].binaural;
  }
});

function createOscillator(freq, pan) {
  const osc = audioCtx.createOscillator();
  osc.type = 'sine';
  osc.frequency.value = freq;

  const gainNode = audioCtx.createGain();
  gainNode.gain.value = 0.5;

  const panner = audioCtx.createStereoPanner();
  panner.pan.value = pan;

  osc.connect(gainNode).connect(panner).connect(audioCtx.destination);
  return { osc, gainNode, panner };
}

function startBinaural() {
  if (!audioCtx) audioCtx = new AudioContext();

  const baseFreq = Number(baseFreqInput.value);
  const binauralFreq = Number(binauralFreqInput.value);
  if (
    baseFreq < 30 || baseFreq > 1000 ||
    binauralFreq < 0.5 || binauralFreq > 40
  ) {
    alert("Frequencies out of range");
    return;
  }

  const leftFreq = baseFreq;
  const rightFreq = baseFreq + binauralFreq;

  const left = createOscillator(leftFreq, -1);
  const right = createOscillator(rightFreq, 1);

  oscillatorLeft = left.osc;
  gainNodeLeft = left.gainNode;
  oscillatorRight = right.osc;
  gainNodeRight = right.gainNode;

  oscillatorLeft.start();
  oscillatorRight.start();

  playBtn.disabled = true;
  stopBtn.disabled = false;
}

function stopBinaural() {
  if (oscillatorLeft) oscillatorLeft.stop();
  if (oscillatorRight) oscillatorRight.stop();
  oscillatorLeft = null;
  oscillatorRight = null;
  gainNodeLeft = null;
  gainNodeRight = null;
  playBtn.disabled = false;
  stopBtn.disabled = true;
}

playBtn.addEventListener('click', () => {
  startBinaural();
});
stopBtn.addEventListener('click', () => {
  stopBinaural();
});
