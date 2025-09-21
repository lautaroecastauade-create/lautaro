const canvas = document.getElementById('sunflowerCanvas');
const ctx = canvas.getContext('2d');
let drawing = false;

// Ajustar tamaño real del canvas
function resizeCanvas() {
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function drawPetal(x, y, radiusX, radiusY, rotation, color, delay) {
  setTimeout(() => {
    ctx.strokeStyle = color;
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.ellipse(x, y, radiusX, radiusY, rotation, 0, Math.PI * 2);
    ctx.stroke();
  }, delay);
}

function drawCircle(x, y, radius, color, delay) {
  setTimeout(() => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }, delay);
}

function drawStem(centerX, centerY, length, delay) {
  setTimeout(() => {
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY + 40);
    ctx.lineTo(centerX, centerY + 40 + length);
    ctx.stroke();
  }, delay);
}

function drawSunflower(centerX, centerY, scale, delayOffset) {
  const petalColor = 'yellow';
  const centerColor = 'brown';

  // Pétalos
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 18; j++) {
      const angle = (i * Math.PI * 2) / 16;
      const petalRadius = (50 - j * 3) * scale;
      const petalX = centerX + Math.cos(angle) * 40 * scale;
      const petalY = centerY + Math.sin(angle) * 40 * scale;

      drawPetal(
        petalX,
        petalY,
        petalRadius,
        petalRadius / 2,
        angle,
        petalColor,
        delayOffset + i * 100 + j * 20
      );
    }
  }

  // Semillas
  const phi = 137.508 * (Math.PI / 180);
  for (let i = 0; i < 150; i++) {
    const r = 2 * Math.sqrt(i) * scale;
    const theta = i * phi;
    const x = centerX + r * Math.cos(theta);
    const y = centerY + r * Math.sin(theta);

    drawCircle(x, y, 2 * scale, centerColor, delayOffset + 1600 + i * 10);
  }

  // Tallo
  drawStem(centerX, centerY, 120 * scale, delayOffset + 2500);
}

function drawBouquet() {
  if (drawing) return;
  drawing = true;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const w = canvas.width;
  const h = canvas.height;
  const scale = w / 600; // escala proporcional al tamaño del canvas

  drawSunflower(w * 0.33, h * 0.33, scale, 0);
  drawSunflower(w * 0.66, h * 0.33, scale, 2000);
  drawSunflower(w * 0.5, h * 0.66, scale, 4000);

  // Mensaje romántico
  setTimeout(() => {
    ctx.fillStyle = "white";
    ctx.font = `${Math.floor(h * 0.05)}px Segoe UI`;
    ctx.textAlign = "center";
    ctx.fillText("Para ti, mi amor 🌻💛", w / 2, h - 30);
  }, 7000);
}

document.getElementById('drawButton').addEventListener('click', drawBouquet);
