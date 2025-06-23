# Site Vitrine Photographe Sensuelle

Site vitrine professionnel créé avec React 18, Vite, TypeScript et Tailwind CSS, optimisé pour la conversion et les performances.

## 🚀 Fonctionnalités

- **Design luxueux et minimaliste** avec couleur d'accent #9B1B30
- **Animations subtiles** avec Framer Motion
- **Portfolio filtrable** avec modal zoom
- **Formulaire de contact optimisé** avec validation temps réel
- **SEO avancé** avec Schema.org et Open Graph
- **Tracking GA4** pour mesurer les conversions
- **Responsive design** et accessibilité WCAG 2.2 AA
- **Performances optimisées** (Core Web Vitals "Good")

## 📁 Structure du Projet

```
src/
├── components/
│   ├── home/           # Composants page d'accueil
│   ├── layout/         # Header, Footer
│   └── ui/             # Composants UI réutilisables
├── contexts/           # Context API (Analytics)
├── pages/              # Pages principales
├── types/              # Types TypeScript
└── utils/              # Utilitaires
```

## 🛠️ Installation

1. **Cloner le projet**
```bash
git clone [url-du-repo]
cd photo-sensuelle-site
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Démarrer en développement**
```bash
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

## 🎨 Personnalisation

### Couleurs et Branding
- **Couleur d'accent** : Modifiez `#9B1B30` dans `tailwind.config.js`
- **Logo/Nom** : Remplacez "Votre Nom" dans les composants Header et Footer
- **Polices** : Configurées dans `index.html` (Inter + Playfair Display)

### Images
Remplacez les images dans le dossier `public/images/` :
- `hero-bg.jpg` - Image de fond hero section
- `portfolio/` - Photos du portfolio
- `og-image.jpg` - Image Open Graph pour les réseaux sociaux

### Contenu
- **Textes** : Modifiez directement dans les composants
- **SEO** : Mettez à jour les meta tags dans `index.html`
- **Contact** : Changez les coordonnées dans Footer et Contact

### Google Analytics
1. Remplacez `GA_MEASUREMENT_ID` par votre ID dans `index.html`
2. Les événements de conversion sont déjà configurés

## 🚀 Déploiement

### Netlify (Recommandé)
1. **Build du projet**
```bash
npm run build
```

2. **Déployer sur Netlify**
- Connectez votre repo GitHub à Netlify
- Build command: `npm run build`
- Publish directory: `dist`

### Vercel
```bash
npm install -g vercel
vercel --prod
```

### Hébergement classique
```bash
npm run build
# Uploadez le contenu du dossier 'dist' sur votre serveur
```

## 📊 Optimisations Conversion

### CTA Stratégiques
- Hero section avec CTA principal
- Bouton sticky mobile
- Bandeau de bas de page
- CTA dans le header

### Preuves Sociales
- Compteurs animés (clients, satisfaction)
- Témoignages clients
- Logos de presse (à ajouter)

### UX Optimisée
- Navigation intuitive
- Chargement rapide des images
- Formulaire simplifié (3-4 champs)
- Validation instantanée

## 🔧 Configuration Avancée

### Variables d'Environnement
Créez un fichier `.env.local` :
```
VITE_GA_ID=votre-id-google-analytics
VITE_CONTACT_EMAIL=votre@email.com
```

### Optimisation Images
- Utilisez des formats WebP/AVIF pour les performances
- Implémentez le lazy loading (déjà configuré)
- Optimisez les tailles avec srcset

### SEO Technique
- Sitemap XML généré automatiquement
- Schema.org configuré pour chaque page
- Meta tags Open Graph
- Breadcrumbs (à implémenter si besoin)

## 📱 Tests et Validation

### Performance
```bash
# Lighthouse audit
npm run build
npm run preview
# Testez avec Lighthouse dans Chrome DevTools
```

### Accessibilité
- Navigation au clavier
- Contrastes WCAG 2.2 AA
- Textes alternatifs sur les images
- Focus visible

## 🆘 Support

Pour toute question ou personnalisation :
1. Consultez les commentaires dans le code
2. Modifiez les variables CSS dans `tailwind.config.js`
3. Les composants sont modulaires et réutilisables

## 📈 Suivi des Conversions

Events GA4 configurés :
- `click_booking_cta` - Clics sur "Réserver"
- `submit_contact_form` - Soumission formulaire
- `view_portfolio` - Consultation portfolio

## 🔒 Sécurité

- Validation côté client et serveur
- Protection CSRF (à implémenter côté serveur)
- Headers de sécurité recommandés
- HTTPS obligatoire en production 