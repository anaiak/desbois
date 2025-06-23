# Guide de Déploiement Docker - Site DesBois Photography

## 🚀 Déploiement Rapide

### 1. Construction et lancement avec Docker Compose
```bash
# Construction et démarrage en arrière-plan
docker-compose up -d --build

# Vérifier les logs
docker-compose logs -f desbois-photography

# Vérifier le statut
docker-compose ps
```

### 2. Accès au site
- **URL locale :** http://localhost
- **Health check :** `docker-compose ps` (doit afficher "healthy")

## 🔧 Commandes Docker Utiles

### Construction manuelle
```bash
# Construire l'image
docker build -t desbois-photography .

# Lancer le conteneur
docker run -d -p 80:80 --name desbois-site desbois-photography
```

### Gestion des conteneurs
```bash
# Arrêter les services
docker-compose down

# Redémarrer les services
docker-compose restart

# Voir les logs en temps réel
docker-compose logs -f

# Accéder au conteneur
docker exec -it desbois-photography-site sh
```

### Nettoyage
```bash
# Arrêter et supprimer les conteneurs
docker-compose down --volumes --rmi all

# Nettoyer les images non utilisées
docker system prune -a
```

## 📊 Monitoring et Maintenance

### Vérification de l'état
```bash
# Statut des conteneurs
docker-compose ps

# Utilisation des ressources
docker stats

# Logs nginx
docker exec desbois-photography-site tail -f /var/log/nginx/access.log
```

### Mise à jour
```bash
# 1. Arrêter le service
docker-compose down

# 2. Récupérer les dernières modifications
git pull

# 3. Reconstruire et redémarrer
docker-compose up -d --build
```

## 🌐 Déploiement Production

### Avec reverse proxy (recommandé)
1. **Installer Traefik ou nginx-proxy**
2. **Modifier docker-compose.yml :**
```yaml
services:
  desbois-photography:
    # ... configuration existante
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.desbois.rule=Host(`votre-domaine.com`)"
      - "traefik.http.routers.desbois.tls.certresolver=letsencrypt"
```

### Variables d'environnement production
```bash
# Créer un fichier .env.production
echo "NODE_ENV=production" > .env.production
echo "DOMAIN=votre-domaine.com" >> .env.production
```

### Configuration SSL/HTTPS
```bash
# Avec certbot (Let's Encrypt)
sudo certbot --nginx -d votre-domaine.com
```

## 🚨 Dépannage

### Problèmes courants
```bash
# Port 80 déjà utilisé
sudo lsof -i :80
sudo fuser -k 80/tcp

# Problème de permissions
sudo chown -R $USER:$USER ./logs

# Erreur de build
docker-compose build --no-cache

# Voir les erreurs nginx
docker exec desbois-photography-site cat /var/log/nginx/error.log
```

### Performance
- **Images :** Optimiser avec WebP/AVIF
- **Cache :** Nginx gère automatiquement le cache
- **Compression :** Gzip activé par défaut
- **CDN :** Recommandé pour les images en production

## 📝 Structure des fichiers Docker

```
.
├── Dockerfile              # Configuration multi-stage
├── docker-compose.yml      # Orchestration des services
├── nginx.conf              # Configuration nginx optimisée
├── .dockerignore           # Fichiers exclus du build
└── docker-deploy.md        # Ce guide
```

## 🔒 Sécurité

### Headers de sécurité (configurés automatiquement)
- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`

### Bonnes pratiques
- Utilisez HTTPS en production
- Configurez un firewall
- Surveillez les logs nginx
- Mettez à jour régulièrement les images de base 