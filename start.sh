#!/bin/sh
set -e

# Définir le port par défaut si pas défini
export PORT=${PORT:-8080}

echo "Démarrage avec PORT=$PORT"

# Remplacer la variable PORT dans la configuration nginx
envsubst '$PORT' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

# Afficher la configuration générée pour debug
echo "Configuration nginx générée:"
cat /etc/nginx/nginx.conf | grep -A 5 -B 5 "listen"

# Tester la configuration nginx
nginx -t

# Démarrer nginx
exec nginx -g "daemon off;" 