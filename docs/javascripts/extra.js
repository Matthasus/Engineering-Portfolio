/* ============================================================
   ENHANCED PARALLAX SCROLL
   Moves the hero background-position as you scroll for a
   smoother effect than CSS background-attachment: fixed alone.
   ============================================================ */
document$.subscribe(() => {
  // document$ is Material for MkDocs' built-in RxJS observable —
  // it fires after every page navigation (including instant-loading).
  // Always put your init code here instead of DOMContentLoaded.

  const heroes = document.querySelectorAll('.parallax-hero');

  if (heroes.length === 0) return;

  function updateParallax() {
    const scrollY = window.scrollY;
    heroes.forEach(hero => {
      // Move background at 40% of scroll speed — tweak this value (0.3–0.6)
      const offset = scrollY * 0.4;
      hero.style.backgroundPositionY = `calc(50% + ${offset}px)`;
    });
  }

  window.addEventListener('scroll', updateParallax, { passive: true });
  updateParallax(); // set initial position

  // Clean up listener when Material navigates away
  // (prevents stacking listeners across page loads)
  return () => window.removeEventListener('scroll', updateParallax);
});

/* ============================================================
   SCROLL-REVEAL
   Any element with class="reveal" fades in when scrolled into view.
   Usage in Markdown:
     <div class="reveal" markdown>
     Your content here
     </div>
   ============================================================ */
document$.subscribe(() => {
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // only trigger once
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach(el => observer.observe(el));
});