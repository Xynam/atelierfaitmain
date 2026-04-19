'use strict';

// Nav scroll
(function () {
  const nav = document.getElementById('nav');
  if (!nav) return;
  const fn = () => nav.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', fn, { passive: true });
  fn();
})();

// Hamburger
(function () {
  const btn = document.getElementById('hamburger');
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

// Scroll reveal
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  els.forEach(el => obs.observe(el));
})();
