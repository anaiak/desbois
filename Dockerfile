# Multi-stage build pour optimiser la taille de l'image finale
FROM node:18-alpine AS builder

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer TOUTES les dépendances (dev + prod) pour le build
RUN npm ci

# Copier le code source
COPY . .

# Build de l'application pour la production
RUN npm run build

# Stage de production avec nginx
FROM nginx:alpine AS production

# Copier la configuration nginx personnalisée
COPY nginx.conf /etc/nginx/nginx.conf

# Copier les fichiers buildés depuis le stage builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Ajouter des labels pour la documentation
LABEL maintainer="DesBois Photography"
LABEL description="Site vitrine professionnel de photographie"

# Commande de démarrage
CMD ["nginx", "-g", "daemon off;"] 