# 📸 Guide des Images - Site Photographe

## 🎯 Images Actuellement Utilisées

### **Images Temporaires (Unsplash)**
Le site utilise actuellement des images de démonstration via Unsplash pour vous permettre de voir le rendu immédiatement. Voici les images à remplacer :

#### **1. Hero Section (Page d'accueil)**
- **Fichier** : `HeroSection.tsx`
- **Image actuelle** : `https://images.unsplash.com/photo-1594736797933-d0b22e8e5b8e`
- **À remplacer par** : `public/images/hero-bg.jpg`
- **Dimensions recommandées** : 1920x1080px (paysage)
- **Description** : Image de fond principale de votre site

#### **2. Mini Portfolio (Page d'accueil)**
- **Fichier** : `MiniPortfolio.tsx`
- **Images actuelles** :
  - Portrait sensuel : `https://images.unsplash.com/photo-1594736797933-d0b22e8e5b8e`
  - Fine art : `https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec`
  - Élégance : `https://images.unsplash.com/photo-1598300042247-d088f8ab3a91`
  - Lumière naturelle : `https://images.unsplash.com/photo-1590736969955-71cc94901144`
- **À remplacer par** : 
  - `public/images/portfolio/featured-1.jpg`
  - `public/images/portfolio/featured-2.jpg`
  - `public/images/portfolio/featured-3.jpg`
  - `public/images/portfolio/featured-4.jpg`
- **Dimensions recommandées** : 800x800px (carré)

#### **3. Portfolio Complet**
- **Fichier** : `Portfolio.tsx`
- **Images actuelles** : 15 images Unsplash différentes
- **À remplacer par** : Vos vraies photos dans `public/images/portfolio/`
- **Catégories** :
  - **Sensuel** : 5 photos (portrait-sensuel-1.jpg à 5.jpg)
  - **Fine Art** : 5 photos (fineart-1.jpg à 5.jpg)
  - **Élégant** : 5 photos (portrait-elegant-1.jpg à 5.jpg)

#### **4. Page À Propos**
- **Fichier** : `About.tsx`
- **Images actuelles** :
  - Portrait photographe : `https://images.unsplash.com/photo-1494790108755-2616c2c96a0e`
  - Studio : `https://images.unsplash.com/photo-1516035069371-29a1b244cc32`
- **À remplacer par** :
  - `public/images/about/photographer.jpg` (600x800px)
  - `public/images/about/studio.jpg` (1200x800px)

## 🔄 Comment Remplacer les Images

### **Méthode 1 : Remplacement Simple**
1. Ajoutez vos images dans les dossiers correspondants
2. Respectez exactement les noms de fichiers indiqués
3. Les images s'afficheront automatiquement

### **Méthode 2 : Personnalisation Avancée**
1. Modifiez les fichiers TypeScript correspondants
2. Changez les chemins d'images
3. Ajustez les descriptions et textes alternatifs

## 📏 Spécifications Techniques

### **Formats Recommandés**
- **JPG** : Pour les photos (qualité 85-90%)
- **WebP** : Pour les navigateurs modernes (optionnel)
- **PNG** : Pour les logos/éléments graphiques

### **Optimisation**
- **Compression** : Utilisez TinyPNG ou ImageOptim
- **Responsive** : Les images s'adaptent automatiquement
- **Lazy Loading** : Chargement différé intégré
- **SEO** : Textes alternatifs descriptifs

### **Dimensions Optimales**
```
Hero Background     : 1920x1080px (Full HD)
Portfolio Featured  : 800x800px (Carré)
Portfolio Gallery   : 600x800px (Portrait) ou 800x600px (Paysage)
Portrait Photographe: 600x800px (Portrait)
Studio             : 1200x800px (Paysage)
Témoignages        : 300x300px (Carré) - si ajoutées
```

## 🎨 Conseils Artistiques

### **Style Cohérent**
- Palette de couleurs harmonieuse
- Traitement uniforme (luminosité, contraste)
- Style artistique cohérent

### **Qualité Professionnelle**
- Résolution élevée
- Netteté parfaite
- Composition soignée
- Éclairage maîtrisé

### **Optimisation SEO**
- Noms de fichiers descriptifs
- Textes alternatifs détaillés
- Métadonnées appropriées

## 🚀 Déploiement

### **Avant Mise en Ligne**
1. ✅ Vérifiez toutes les images
2. ✅ Testez sur différents appareils
3. ✅ Optimisez les tailles de fichiers
4. ✅ Validez les textes alternatifs

### **Performance**
- Taille totale images < 5MB
- Temps de chargement < 3 secondes
- Score PageSpeed > 90

## 📝 Checklist de Remplacement

- [ ] **Hero Background** (1920x1080px)
- [ ] **4 Images Portfolio Featured** (800x800px)
- [ ] **15 Images Portfolio Complet** (800x600px)
- [ ] **Portrait Photographe** (600x800px)
- [ ] **Photo Studio** (1200x800px)
- [ ] **Optimisation des images**
- [ ] **Test sur mobile/desktop**
- [ ] **Validation SEO**

## 🆘 Support

Si vous avez des questions sur le remplacement des images :
1. Consultez ce guide
2. Vérifiez les dimensions recommandées
3. Testez sur différents appareils
4. Optimisez les performances

---

**Note** : Les images Unsplash actuelles sont parfaites pour la démonstration, mais remplacez-les par vos vraies créations pour lancer votre site professionnel ! 📸✨ 