#!/bin/sh
set -e

# Définir le port par défaut si pas défini
export PORT=${PORT:-8080}

echo "=== Démarrage du conteneur DesBois Photography ==="
echo "PORT défini: $PORT"
echo "Variables d'environnement PORT:"
env | grep PORT || echo "Aucune variable PORT dans l'environnement"

echo "=== Template nginx original ==="
cat /etc/nginx/nginx.conf.template | grep -A 3 -B 3 "listen"

echo "=== Substitution de la variable PORT ==="
# Remplacer la variable PORT dans la configuration nginx
envsubst '$PORT' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

echo "=== Configuration nginx générée ==="
cat /etc/nginx/nginx.conf | grep -A 3 -B 3 "listen"

echo "=== Test de la configuration nginx ==="
# Tester la configuration nginx
nginx -t

echo "=== Démarrage de nginx ==="
# Démarrer nginx
exec nginx -g "daemon off;" 