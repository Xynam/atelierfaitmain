'use strict';

(function () {
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (!form) return;

  const fields = {
    nom:     { el: document.getElementById('nom'),     err: document.getElementById('nomError') },
    email:   { el: document.getElementById('email'),   err: document.getElementById('emailError') },
    message: { el: document.getElementById('message'), err: document.getElementById('messageError') },
  };

  function validate(key) {
    const { el, err } = fields[key];
    const val = el.value.trim();
    let msg = '';
    if (!val) msg = 'Ce champ est requis.';
    else if (key === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) msg = 'Adresse email invalide.';
    else if (key === 'message' && val.length < 15) msg = 'Merci d\'écrire un peu plus (15 caractères min).';
    el.classList.toggle('error', !!msg);
    err.textContent = msg;
    return !msg;
  }

  Object.keys(fields).forEach(k => {
    const { el } = fields[k];
    el.addEventListener('blur', () => validate(k));
    el.addEventListener('input', () => { if (el.classList.contains('error')) validate(k); });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!Object.keys(fields).map(validate).every(Boolean)) return;

    const btn = document.getElementById('submitBtn');
    btn.disabled = true;
    btn.querySelector('.btn__text').hidden = true;
    btn.querySelector('.btn__loading').hidden = false;

    // Replace with Formspree / EmailJS in production
    setTimeout(() => {
      form.style.opacity = '0';
      setTimeout(() => { success.hidden = false; }, 300);
    }, 1500);
  });
})();
