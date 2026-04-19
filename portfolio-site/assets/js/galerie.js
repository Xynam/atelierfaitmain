'use strict';

(function () {
  const btns   = document.querySelectorAll('.filtre__btn');
  const oeuvres = document.querySelectorAll('.oeuvre');
  if (!btns.length) return;

  function filtrer(cat) {
    oeuvres.forEach(o => {
      const match = cat === 'tout' || o.dataset.cat === cat;
      if (match) {
        o.classList.remove('masque');
        o.style.display = '';
      } else {
        o.classList.add('masque');
        setTimeout(() => {
          if (o.classList.contains('masque')) o.style.display = 'none';
        }, 400);
      }
    });
    btns.forEach(b => b.classList.toggle('filtre__btn--active', b.dataset.filter === cat));
  }

  btns.forEach(btn => btn.addEventListener('click', () => filtrer(btn.dataset.filter)));

  // Lire le paramètre ?cat= dans l'URL
  const params = new URLSearchParams(window.location.search);
  const catUrl = params.get('cat');
  if (catUrl) {
    const mapping = { dessins: 'dessins', tableaux: 'tableaux', portcles: 'portcles' };
    const cat = mapping[catUrl];
    if (cat) filtrer(cat);
  }
})();
