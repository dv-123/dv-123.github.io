// ── NAV: SCROLL EFFECT ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ── NAV: HAMBURGER MENU ──
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── SCROLL ANIMATIONS: FADE-IN + TIMELINE ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 100);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in, .timeline-item').forEach(el => observer.observe(el));

// ── HERO CANVAS: NETWORK PARTICLE ANIMATION ──
const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');
let W, H, nodes = [], mouse = { x: null, y: null };

const MAX_DIST = 140;
const MOUSE_DIST = 180;

function resize() {
  W = canvas.width = canvas.offsetWidth;
  H = canvas.height = canvas.offsetHeight;
}

function Node() {
  this.x = Math.random() * W;
  this.y = Math.random() * H;
  this.vx = (Math.random() - 0.5) * 0.4;
  this.vy = (Math.random() - 0.5) * 0.4;
  this.r = Math.random() * 2 + 1;
}

Node.prototype.update = function () {
  this.x += this.vx;
  this.y += this.vy;
  if (this.x < 0 || this.x > W) this.vx *= -1;
  if (this.y < 0 || this.y > H) this.vy *= -1;
};

function initNodes() {
  nodes = [];
  const count = Math.min(Math.floor((W * H) / 14000), 80);
  for (let i = 0; i < count; i++) nodes.push(new Node());
}

function drawNodes() {
  ctx.clearRect(0, 0, W, H);

  for (let i = 0; i < nodes.length; i++) {
    nodes[i].update();

    // Draw node dot
    ctx.beginPath();
    ctx.arc(nodes[i].x, nodes[i].y, nodes[i].r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(56,189,248,0.5)';
    ctx.fill();

    // Connect to neighbouring nodes
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < MAX_DIST) {
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.strokeStyle = `rgba(56,189,248,${0.12 * (1 - dist / MAX_DIST)})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
    }

    // Connect to mouse cursor
    if (mouse.x !== null) {
      const dx = nodes[i].x - mouse.x;
      const dy = nodes[i].y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < MOUSE_DIST) {
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = `rgba(129,140,248,${0.25 * (1 - dist / MOUSE_DIST)})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(drawNodes);
}

// Event listeners for canvas
window.addEventListener('resize', () => { resize(); initNodes(); });

canvas.addEventListener('mousemove', e => {
  const rect = canvas.getBoundingClientRect();
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});

canvas.addEventListener('mouseleave', () => {
  mouse.x = null;
  mouse.y = null;
});

// Init
resize();
initNodes();
drawNodes();
