// ── Hero gallery ──────────────────────────────────────────────
const heroSlideEls = document.querySelectorAll('.hero .slide');
const heroDotsEl   = document.getElementById('heroDots');
let heroIdx = 0;

heroSlideEls.forEach((_, i) => {
  const d = document.createElement('button');
  d.className = 'dot' + (i === 0 ? ' active' : '');
  d.addEventListener('click', () => goHero(i));
  heroDotsEl.appendChild(d);
});

function goHero(n) {
  heroSlideEls[heroIdx].classList.remove('active');
  heroDotsEl.children[heroIdx].classList.remove('active');
  heroIdx = (n + heroSlideEls.length) % heroSlideEls.length;
  heroSlideEls[heroIdx].classList.add('active');
  heroDotsEl.children[heroIdx].classList.add('active');
}

document.getElementById('heroPrev').addEventListener('click', () => goHero(heroIdx - 1));
document.getElementById('heroNext').addEventListener('click', () => goHero(heroIdx + 1));
setInterval(() => goHero(heroIdx + 1), 5000);

// ── Per-project sliders ───────────────────────────────────────
document.querySelectorAll('.proj-slider').forEach(slider => {
  const slides = slider.querySelectorAll('.proj-slide');
  const dotsEl  = slider.querySelector('.dots');
  let idx = 0;

  // Build dots
  slides.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => go(i));
    dotsEl.appendChild(d);
  });

  function go(n) {
    slides[idx].classList.remove('active');
    dotsEl.children[idx].classList.remove('active');
    idx = (n + slides.length) % slides.length;
    slides[idx].classList.add('active');
    dotsEl.children[idx].classList.add('active');
  }

  slider.querySelector('.arrow-l').addEventListener('click', () => go(idx - 1));
  slider.querySelector('.arrow-r').addEventListener('click', () => go(idx + 1));
});

// ── Nav active state on scroll ────────────────────────────────
const projSections = document.querySelectorAll('.project');
const navLinks     = document.querySelectorAll('.proj-nav a');

const navObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      const match = document.querySelector(`.proj-nav a[href="#${e.target.id}"]`);
      if (match) match.classList.add('active');
    }
  });
}, { threshold: 0.35 });

projSections.forEach(s => navObserver.observe(s));

// ── Smooth scroll ─────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
    // close mobile nav if open
    document.getElementById('mobileNav').classList.remove('open');
  });
});

// ── Mobile burger ─────────────────────────────────────────────
document.getElementById('burger').addEventListener('click', () => {
  document.getElementById('mobileNav').classList.toggle('open');
});