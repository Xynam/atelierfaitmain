'use strict';

// ─── Curseur personnalisé ─────────────────────────────────────────────────────
(function () {
  const dot  = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring) return;
  if (window.matchMedia('(pointer: coarse)').matches) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left  = mx + 'px';
    dot.style.top   = my + 'px';
  });

  // Ring légèrement en retard
  (function animRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animRing);
  })();

  // Hover sur éléments interactifs
  const interactifs = 'a, button, .gallery-item, .oeuvre, .category-card, select, input, textarea';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(interactifs)) {
      dot.classList.add('cursor--hover');
      ring.classList.add('cursor--hover');
    }
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(interactifs)) {
      dot.classList.remove('cursor--hover');
      ring.classList.remove('cursor--hover');
    }
  });
})();

// ─── Navigation sticky ────────────────────────────────────────────────────────
(function () {
  const nav = document.getElementById('nav');
  if (!nav) return;
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 30);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// ─── Hamburger mobile ─────────────────────────────────────────────────────────
(function () {
  const btn  = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('open');
    btn.classList.remove('open');
    document.body.style.overflow = '';
  }));
})();

// ─── Scroll reveal ────────────────────────────────────────────────────────────
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
  els.forEach(el => obs.observe(el));
})();
