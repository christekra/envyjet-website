# 🛩️ EnvyJet - Site Web Premium

Site web moderne et professionnel pour EnvyJet, spécialiste du charter de jets privés.

## ✨ Fonctionnalités

- **Design Premium** : Interface moderne avec animations fluides
- **Responsive** : Optimisé pour mobile, tablette et desktop
- **Animations Interactives** : Effets visuels avec Framer Motion
- **Formulaire de Réservation** : Processus de réservation en étapes
- **Section FAQ** : Questions fréquentes interactives
- **Espace Membre** : Zone de connexion/inscription
- **Pages Multiples** : Accueil, À propos, Contact, etc.

## 🚀 Technologies Utilisées

- **React 18** avec TypeScript
- **Framer Motion** pour les animations
- **Lucide React** pour les icônes
- **React Router DOM** pour la navigation
- **CSS Modules** pour le styling

## 📦 Installation

```bash
# Cloner le repository
git clone [URL_DU_REPO]

# Aller dans le dossier
cd EnvyJet

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm start
```

Le site sera accessible sur `http://localhost:3000`

## 🏗️ Structure du Projet

```
src/
├── components/          # Composants réutilisables
│   ├── Header.tsx      # Navigation principale
│   ├── Hero.tsx        # Section d'accueil
│   ├── Features.tsx    # Avantages EnvyJet
│   ├── FAQ.tsx         # Questions fréquentes
│   └── Footer.tsx      # Pied de page
├── pages/              # Pages de l'application
│   ├── HomePage.tsx    # Page d'accueil
│   ├── AboutPage.tsx   # À propos
│   ├── ContactPage.tsx # Contact
│   └── MemberAreaPage.tsx # Espace membre
└── App.tsx             # Composant principal
```

## 🎨 Design System

### Couleurs
- **Primaire** : Noir (#1a1a1a)
- **Secondaire** : Or (#d4af37)
- **Arrière-plan** : Blanc cassé (#f8f9fa)
- **Texte** : Gris foncé (#333333)

### Typographie
- **Police principale** : Inter (Google Fonts)
- **Titres** : Font-weight 700
- **Corps de texte** : Font-weight 400

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints pour :
- **Mobile** : < 768px
- **Tablette** : 768px - 1024px
- **Desktop** : > 1024px

## 🎭 Animations

- **Entrée des éléments** : Fade-in avec décalage
- **Hover effects** : Élévation et transformation
- **Particules animées** : Autour des icônes
- **Transitions fluides** : Entre les pages

## 📄 Pages Disponibles

1. **Accueil** (`/`) - Landing page principale
2. **À propos** (`/about`) - Pourquoi choisir EnvyJet
3. **Vols Partagés** (`/shared-flights`) - En développement
4. **Vols à Vide** (`/empty-legs`) - En développement
5. **Contact** (`/contact`) - Informations de contact
6. **Espace Membre** (`/member-area`) - Connexion/Inscription

## 🔧 Scripts Disponibles

```bash
npm start          # Lance le serveur de développement
npm run build      # Crée une version de production
npm test           # Lance les tests
npm run eject      # Éjecte la configuration (irréversible)
```

## 📞 Contact

Pour toute question concernant ce projet, contactez l'équipe de développement.

---

**EnvyJet** - "At the heart of your travels" ✈️
