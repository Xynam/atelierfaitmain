const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
const btn = document.getElementById('submitBtn');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    
    btn.disabled = true;
    btn.innerText = "Envoi en cours...";
    
    const data = new FormData(form);
    
    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' }
        });
        
        if (response.ok) {
            status.innerHTML = "✦ Merci ! Votre message a bien été envoyé.";
            status.className = "form-status success";
            form.reset(); // Vide le formulaire
        } else {
            throw new Error();
        }
    } catch (error) {
        status.innerHTML = "Oups ! Il y a eu un problème lors de l'envoi.";
        status.className = "form-status error";
    } finally {
        btn.disabled = false;
        btn.innerText = "Envoyer le message";
    }
});