'use strict';

(function () {
  const form    = document.getElementById('contactForm');
  const succes  = document.getElementById('formSucces');
  const submitBtn = document.getElementById('submitBtn');
  if (!form) return;

  const champs = {
    nom:     { el: document.getElementById('nom'),     err: document.getElementById('nomErreur') },
    email:   { el: document.getElementById('email'),   err: document.getElementById('emailErreur') },
    message: { el: document.getElementById('message'), err: document.getElementById('messageErreur') },
  };

  function validerEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  function validerChamp(key) {
    const { el, err } = champs[key];
    const val = el.value.trim();
    let msg = '';
    if (!val) msg = 'Ce champ est obligatoire.';
    else if (key === 'email' && !validerEmail(val)) msg = 'Adresse email invalide.';
    else if (key === 'message' && val.length < 20) msg = 'Merci d\'écrire au moins 20 caractères.';
    el.classList.toggle('erreur', !!msg);
    err.textContent = msg;
    return !msg;
  }

  Object.keys(champs).forEach(key => {
    const { el } = champs[key];
    el.addEventListener('blur', () => validerChamp(key));
    el.addEventListener('input', () => { if (el.classList.contains('erreur')) validerChamp(key); });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const ok = Object.keys(champs).map(validerChamp).every(Boolean);
    if (!ok) return;

    const txtBtn = submitBtn.querySelector('.btn__text');
    const charge = submitBtn.querySelector('.btn__chargement');
    submitBtn.disabled = true;
    txtBtn.hidden = true;
    charge.hidden = false;

    // Simuler l'envoi (remplacer par Formspree/EmailJS en production)
    setTimeout(() => {
      form.style.opacity = '0';
      form.style.pointerEvents = 'none';
      setTimeout(() => {
        succes.hidden = false;
      }, 300);
    }, 1500);
  });
})();
