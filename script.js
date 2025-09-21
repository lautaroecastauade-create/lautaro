const canvas = document.getElementById('sunflowerCanvas');
const ctx = canvas.getContext('2d');
let drawing = false;

function drawPetal(x, y, radiusX, radiusY, rotation, color, delay) {
  setTimeout(() => {
    ctx.strokeStyle = color;
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.ellipse(x, y, radiusX, radiusY, rotation, 0, Math.PI * 2);
    ctx.stroke();
  }, delay);
}

function drawCircle(x, y, radius, color, delay) {
  setTimeout(() => {
    ctx.strokeStyle = color;
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
  }, delay);
}

function drawStem(centerX, centerY, length, delay) {
  setTimeout(() => {
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY + 40);
    ctx.lineTo(centerX, centerY + 40 + length);
    ctx.stroke();
  }, delay);
}

function drawSunflower(centerX, centerY, delayOffset) {
  const petalColor = 'yellow';
  const centerColor = 'brown';

  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 18; j++) {
      const angle = (i * Math.PI * 2) / 16;
      const petalRadius = 50 - j * 3;
      const petalX = centerX + Math.cos(angle) * 40;
      const petalY = centerY + Math.sin(angle) * 40;

      drawPetal(petalX, petalY, petalRadius, petalRadius / 2, angle, petalColor, delayOffset + i * 100 + j * 20);
    }
  }

  const phi = 137.508 * (Math.PI / 180);
  for (let i = 0; i < 150; i++) {
    const r = 2 * Math.sqrt(i);
    const theta = i * phi;
    const x = centerX + r * Math.cos(theta);
    const y = centerY + r * Math.sin(theta);

    drawCircle(x, y, 2, centerColor, delayOffset + 1600 + i * 10);
  }

  drawStem(centerX, centerY, 100, delayOffset + 2500);
}

function drawBouquet() {
  if (drawing) return;
  drawing = true;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawSunflower(200, 200, 0);
  drawSunflower(400, 200, 2000);
  drawSunflower(300, 400, 4000);
}

document.getElementById('drawButton').addEventListener('click', drawBouquet);
