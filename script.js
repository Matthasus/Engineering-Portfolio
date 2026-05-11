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

// ── View-tab bubble sliders ───────────────────────────────────
document.querySelectorAll('.proj-slider').forEach(slider => {
  const slides   = slider.querySelectorAll('.proj-slide');
  const tabsEl   = slider.querySelector('.view-tabs');
  const gallery  = slider.dataset.gallery;
  let idx = 0;

  // Inject the sliding bubble element
  const bubble = document.createElement('div');
  bubble.className = 'view-tabs-bubble';
  tabsEl.appendChild(bubble);

  // Build tab buttons
  slides.forEach((slide, i) => {
    const label = slide.dataset.label || `View ${i + 1}`;
    const btn = document.createElement('button');
    btn.className = 'view-tab' + (i === 0 ? ' active' : '');
    btn.textContent = label;
    btn.addEventListener('click', () => go(i));
    tabsEl.appendChild(btn);
  });

  // Move bubble to sit under a given tab button
  function moveBubble(tabBtn) {
    // offsetLeft is relative to tabsEl since tabsEl is position:relative
    bubble.style.left  = `${tabBtn.offsetLeft}px`;
    bubble.style.width = `${tabBtn.offsetWidth}px`;
  }

  function go(n) {
    const tabs = tabsEl.querySelectorAll('.view-tab');
    slides[idx].classList.remove('active');
    tabs[idx].classList.remove('active');
    idx = (n + slides.length) % slides.length;
    slides[idx].classList.add('active');
    tabs[idx].classList.add('active');
    moveBubble(tabs[idx]);
  }

  // Click image → open lightbox
  slides.forEach((slide, i) => {
    slide.addEventListener('click', () => openLightbox(gallery, i));
  });

  // Init bubble position after paint so offsetLeft is correct
  requestAnimationFrame(() => {
    const firstTab = tabsEl.querySelector('.view-tab');
    if (firstTab) moveBubble(firstTab);
  });
});

// ── Lightbox ──────────────────────────────────────────────────
const lightbox  = document.getElementById('lightbox');
const lbImg     = document.getElementById('lbImg');
const lbCounter = document.getElementById('lbCounter');
let lbGallery = [], lbIdx = 0;

function openLightbox(galleryId, startIdx) {
  // Collect all img srcs from the slider for this gallery
  const slider = document.querySelector(`.proj-slider[data-gallery="${galleryId}"]`);
  lbGallery = Array.from(slider.querySelectorAll('.proj-slide img')).map(img => ({
    src: img.src,
    alt: img.alt
  }));
  lbIdx = startIdx;
  showLbSlide();
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function showLbSlide() {
  lbImg.src = lbGallery[lbIdx].src;
  lbImg.alt = lbGallery[lbIdx].alt;
  lbCounter.textContent = `${lbIdx + 1} / ${lbGallery.length}`;
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
  lbImg.src = '';
}

document.getElementById('lbClose').addEventListener('click', closeLightbox);
document.getElementById('lbPrev').addEventListener('click', () => { lbIdx = (lbIdx - 1 + lbGallery.length) % lbGallery.length; showLbSlide(); });
document.getElementById('lbNext').addEventListener('click', () => { lbIdx = (lbIdx + 1) % lbGallery.length; showLbSlide(); });

lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft')  { lbIdx = (lbIdx - 1 + lbGallery.length) % lbGallery.length; showLbSlide(); }
  if (e.key === 'ArrowRight') { lbIdx = (lbIdx + 1) % lbGallery.length; showLbSlide(); }
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
    document.getElementById('mobileNav').classList.remove('open');
  });
});

// ── Burger ────────────────────────────────────────────────────
document.getElementById('burger').addEventListener('click', () => {
  document.getElementById('mobileNav').classList.toggle('open');
});