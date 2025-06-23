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

# Installer gettext pour envsubst (substitution des variables d'environnement)
RUN apk add --no-cache gettext

# Copier la configuration nginx comme template
COPY nginx.conf /etc/nginx/nginx.conf.template

# Copier les fichiers buildés depuis le stage builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Créer le script d'entrée pour Railway
RUN echo '#!/bin/sh' > /docker-entrypoint.sh && \
    echo 'export PORT=${PORT:-8080}' >> /docker-entrypoint.sh && \
    echo 'envsubst "\$PORT" < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf' >> /docker-entrypoint.sh && \
    echo 'exec nginx -g "daemon off;"' >> /docker-entrypoint.sh && \
    chmod +x /docker-entrypoint.sh

# Exposer le port dynamique pour Railway
EXPOSE $PORT

# Ajouter des labels pour la documentation
LABEL maintainer="DesBois Photography"
LABEL description="Site vitrine professionnel de photographie"

# Commande de démarrage avec script d'entrée
CMD ["/docker-entrypoint.sh"] 