# Torchon — Sandwicherie Premium à Lille

Site web multi-pages pour Torchon, une nouvelle sandwicherie premium ouvrant à Lille en 2026.

## Structure du site

- **Accueil** (`index.html`) — Page d'accueil avec hero, promesse, formats, produits locaux
- **Concept** (`concept.html`) — Présentation du concept Torchon
- **Carte** (`carte.html`) — Menu complet : classiques, originaux, Dwish
- **Dwish** (`dwish.html`) — Présentation du concept Dwish
- **Producteurs** (`producteurs.html`) — Nos artisans et producteurs locaux
- **Lieu** (`lieu.html`) — Présentation du lieu
- **Ouverture** (`ouverture.html`) — Informations sur l'ouverture avec formulaire d'inscription
- **Contact** (`contact.html`) — Formulaire de contact

## Design System

### Couleurs
- Rouge Torchon : `#d62c11`
- Beige papier : `#e7ddca`
- Noir profond : `#1a1a1a`
- Blanc pur : `#ffffff`

### Typographie
- **Titres** : Bubblegum Sans (alternative à Bubble Body Neue) — MAJUSCULES, bold
- **Texte** : Inter / Space Grotesk

### Grille
- Système de grille 12 colonnes
- Marges latérales : 80px desktop / 24px mobile
- Espacement vertical : 64px
- Border radius : 4px

## Installation

1. Cloner le dépôt
2. Ouvrir `index.html` dans un navigateur
3. Ou servir via un serveur local (ex: `python -m http.server`)

## Structure des fichiers

```
torchon-lille/
├── index.html
├── concept.html
├── carte.html
├── dwish.html
├── producteurs.html
├── lieu.html
├── ouverture.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── README.md
```

## Notes

- Les images doivent être ajoutées dans un dossier `images/` et référencées dans les pages
- Les formulaires utilisent actuellement une alerte JavaScript (à connecter à un backend)
- Le site est entièrement responsive

## Licence

© Torchon — 2026

