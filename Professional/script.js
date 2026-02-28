// ── NAV: SCROLL EFFECT + SCROLL PROGRESS + BACK TO TOP ──
const navbar = document.getElementById('navbar');
const scrollProgress = document.getElementById('scroll-progress');
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;

  navbar.classList.toggle('scrolled', scrollY > 40);
  scrollProgress.style.width = (scrollY / docHeight * 100) + '%';
  backToTop.classList.toggle('visible', scrollY > 400);
});

backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

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

// ── TYPED TEXT ANIMATION ──
const typedEl = document.getElementById('typed');
const phrases = ['Protocol Engineer', 'AI Developer', 'Researcher', 'VoWiFi Specialist'];
let phraseIdx = 0, charIdx = 0, deleting = false;

function typeLoop() {
  const current = phrases[phraseIdx];
  if (!deleting) {
    typedEl.textContent = current.slice(0, ++charIdx);
    if (charIdx === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1800);
      return;
    }
  } else {
    typedEl.textContent = current.slice(0, --charIdx);
    if (charIdx === 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
    }
  }
  setTimeout(typeLoop, deleting ? 50 : 80);
}
typeLoop();

// ── TOAST NOTIFICATION ──
const toast = document.getElementById('toast');
let toastTimer;

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

// ── CLIPBOARD COPY (contact items with data-copy) ──
document.querySelectorAll('[data-copy]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    navigator.clipboard.writeText(el.dataset.copy).then(() => {
      showToast('Copied: ' + el.dataset.copy);
    });
  });
});

// ── ACTIVE NAV LINK ──
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));

// ── ANIMATED COUNTERS ──
function animateCounter(el, target, decimals, duration = 1500) {
  const suffix = el.querySelector('span');
  const suffixHTML = suffix ? suffix.outerHTML : '';
  let start = null;
  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.innerHTML = (eased * target).toFixed(decimals) + suffixHTML;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

let countersStarted = false;
const counterObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && !countersStarted) {
    countersStarted = true;
    document.querySelectorAll('.stat-num').forEach(el => {
      const raw = el.childNodes[0].textContent.trim();
      const val = parseFloat(raw);
      const decimals = raw.includes('.') ? raw.split('.')[1].length : 0;
      animateCounter(el, val, decimals);
    });
  }
}, { threshold: 0.5 });

counterObserver.observe(document.querySelector('.hero-stats'));

// ── CONTACT FORM ──
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  const name    = document.getElementById('cf-name').value.trim();
  const email   = document.getElementById('cf-email').value.trim();
  const message = document.getElementById('cf-message').value.trim();
  if (!name || !email || !message) { showToast('Please fill in all fields.'); return; }
  const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
  const body    = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  window.location.href = `mailto:dvbhaik@gmail.com?subject=${subject}&body=${body}`;
});

// ── THEME TOGGLE ──
const themeToggle = document.getElementById('theme-toggle');
const themeIcon   = document.getElementById('theme-icon');

if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light');
  themeIcon.textContent = '🌙';
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  themeIcon.textContent = isLight ? '🌙' : '☀️';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});
