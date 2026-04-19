# L'Atelier Fait Main — Site Portfolio

Site portfolio artisanal pour **L'Atelier Fait Main** — dessins, peintures, port-clés et créations faites main.

---

## 📁 Structure

```
atelier/
├── index.html              # Accueil
├── 404.html                # Page d'erreur
├── CNAME                   # Domaine personnalisé
├── .nojekyll               # Désactive Jekyll sur GitHub Pages
├── pages/
│   ├── galerie.html        # Galerie avec filtres par catégorie
│   ├── about.html          # À propos & processus créatif
│   └── contact.html        # Formulaire de contact
└── assets/
    ├── css/
    │   ├── main.css        # Design system complet
    │   ├── home.css
    │   ├── galerie.css
    │   ├── about.css
    │   └── contact.css
    ├── js/
    │   ├── main.js         # Nav, révélations au scroll
    │   ├── galerie.js      # Filtre de galerie
    │   └── contact.js      # Validation du formulaire
    └── images/
        └── favicon.svg
```

---

## 🚀 Déploiement GitHub Pages

```bash
cd atelier/
git init
git add .
git commit -m "Initial commit — L'Atelier Fait Main"
git branch -M main
git remote add origin https://VOTRE_TOKEN@github.com/Xynam/Portfolio.git
git push -u origin main
```

Puis dans GitHub → **Settings → Pages** → source : branche `main`, dossier `/ (root)` → **Save**.

Votre site sera en ligne sur `https://xynam.github.io/Portfolio/`

---

## 🖼️ Ajouter vos vraies photos

Remplacez les dégradés de couleur par vos vraies photos dans `pages/galerie.html` :

```html
<!-- Avant (placeholder) -->
<div class="galerie__bg" style="background: linear-gradient(...)"></div>

<!-- Après (vraie photo) -->
<img src="../assets/images/ma-creation.jpg" alt="Description de la pièce" />
```

Format recommandé : `.webp` ou `.jpg`, largeur 800–1200px.

---

## 📬 Activer le formulaire de contact

Le formulaire est prêt visuellement. Pour recevoir les messages, connectez-le à **Formspree** (gratuit) :

1. Créez un compte sur [formspree.io](https://formspree.io)
2. Créez un formulaire et copiez votre ID
3. Dans `pages/contact.html`, remplacez la balise form :

```html
<form action="https://formspree.io/f/VOTRE_ID" method="POST" ...>
```

4. Supprimez le fichier `assets/js/contact.js` et ajoutez simplement `type="submit"` sur le bouton.

---

## ✏️ Personnalisation

| Ce que vous voulez changer | Où |
|---|---|
| Couleur principale (terracotta) | `--accent` dans `assets/css/main.css` |
| Nom affiché | Cherchez `L'Atelier Fait Main` dans tous les `.html` |
| Liens réseaux sociaux | Footer de chaque page + page contact |
| Lien Etsy / boutique | Footer + page contact |
| Texte "À propos" | `pages/about.html` |

---

*Fait avec soin — HTML, CSS et JavaScript vanilla.*
