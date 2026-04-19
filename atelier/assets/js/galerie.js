'use strict';

(function () {
  const btns  = document.querySelectorAll('.galerie__filter .tag');
  const items = document.querySelectorAll('.galerie__item');
  const empty = document.getElementById('galerieEmpty');
  if (!btns.length) return;

  function filter(cat) {
    let visible = 0;
    items.forEach(item => {
      const match = cat === 'all' || item.dataset.cat === cat;
      item.classList.toggle('hidden', !match);
      if (match) visible++;
    });
    if (empty) empty.hidden = visible > 0;
  }

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('tag--active'));
      btn.classList.add('tag--active');
      filter(btn.dataset.filter);
    });
  });

  // Support URL param ?filter=xxx (from homepage category cards)
  const params = new URLSearchParams(window.location.search);
  const init   = params.get('filter');
  if (init) {
    const target = document.querySelector(`.galerie__filter [data-filter="${init}"]`);
    if (target) {
      btns.forEach(b => b.classList.remove('tag--active'));
      target.classList.add('tag--active');
      filter(init);
    }
  }
})();
