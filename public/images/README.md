# 📸 Images du Site Photographe

## Structure des dossiers

```
public/images/
├── hero-bg.jpg                 # Image de fond de la section Hero (1920x1080px minimum)
├── portfolio/                  # Images du portfolio
│   ├── featured-1.jpg          # Image mise en avant 1 (800x800px)
│   ├── featured-2.jpg          # Image mise en avant 2 (800x800px)
│   ├── featured-3.jpg          # Image mise en avant 3 (800x800px)
│   ├── featured-4.jpg          # Image mise en avant 4 (800x800px)
│   ├── portrait-1.jpg          # Portrait sensuel 1
│   ├── portrait-2.jpg          # Portrait sensuel 2
│   ├── fineart-1.jpg           # Fine art 1
│   ├── fineart-2.jpg           # Fine art 2
│   ├── elegance-1.jpg          # Élégance 1
│   └── elegance-2.jpg          # Élégance 2
├── testimonials/               # Photos des clientes (témoignages)
│   ├── client-1.jpg            # Photo cliente 1 (300x300px)
│   ├── client-2.jpg            # Photo cliente 2 (300x300px)
│   └── client-3.jpg            # Photo cliente 3 (300x300px)
└── about/                      # Photos pour la page À propos
    ├── photographer.jpg        # Photo de la photographe (600x800px)
    └── studio.jpg              # Photo du studio (1200x800px)
```

## Recommandations techniques

### Formats recommandés
- **Format** : JPG pour les photos, PNG pour les logos
- **Qualité** : 85-90% pour équilibrer qualité/taille
- **Optimisation** : Utiliser des outils comme TinyPNG ou ImageOptim

### Dimensions optimales
- **Hero background** : 1920x1080px (paysage)
- **Portfolio featured** : 800x800px (carré)
- **Portfolio gallery** : 600x800px (portrait) ou 800x600px (paysage)
- **Témoignages** : 300x300px (carré)
- **À propos** : 600x800px (portrait photographe), 1200x800px (studio)

### Nommage des fichiers
- Utiliser des noms descriptifs en minuscules
- Séparer les mots par des tirets (-)
- Éviter les espaces et caractères spéciaux
- Exemple : `portrait-sensuel-lumiere-naturelle.jpg`

## Images temporaires

Pour le développement, des images de placeholder sont utilisées via Unsplash :
- Les URLs sont générées automatiquement
- Elles seront remplacées par vos vraies photos
- Dimensions : 800x800 pour le portfolio, 1920x1080 pour le hero

## Remplacement des images

1. Ajoutez vos photos dans les dossiers correspondants
2. Respectez les noms de fichiers indiqués dans le code
3. Optimisez les images avant upload
4. Testez le site après remplacement

## SEO et Accessibilité

- Ajoutez des textes alternatifs descriptifs
- Utilisez des noms de fichiers SEO-friendly
- Compressez les images pour les performances
- Considérez le format WebP pour les navigateurs modernes 