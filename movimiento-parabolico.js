const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let g = 9.81; // gravedad en m/s^2
const dt = 0.01; // incremento de tiempo en segundos
let v0 = 90; // velocidad inicial en m/s
let theta = Math.PI / 4;
const y0 = canvas.height; // altura inicial en píxeles
const x0 = 0; // posición inicial en píxeles
let x = x0;
let y = y0;
let t = 0;
let vy = -v0 * Math.sin(theta);
let vx = v0 * Math.cos(theta);

function data() {
  g = document.getElementById("gravedad").value;
  v0 = document.getElementById("velocidad").value;
  theta = (document.getElementById("angulo").value * Math.PI) / 180;
  vy = -v0 * Math.sin(theta);
  vx = v0 * Math.cos(theta);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fill();

  x = x0 + vx * t;
  y = y0 + vy * t + 0.5 * g * t * t;
  vy = vy + g * dt;
  t = t + dt;

  if (y > canvas.height) {
    y = canvas.height;
    vy = -vy * 0.8;
  }

  if (x > canvas.width) {
    x = canvas.width;
    vx = -vx;
  }

  requestAnimationFrame(draw);
}
