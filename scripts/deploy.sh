#!/usr/bin/env bash
set -euo pipefail

echo "🚀 Starting production deployment..."

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]:-$0}")/.." && pwd)"

# Pull latest changes
git pull origin main

# Build and restart containers
docker compose pull
docker compose build --no-cache
docker compose up -d

# Wait for backend to be healthy
echo "Waiting for backend to be healthy..."
for i in {1..30}; do
  if docker compose exec -T backend php artisan --version >/dev/null 2>&1; then
    echo "Backend is ready."
    break
  fi
  echo "Attempt $i/30..."
  sleep 5
done

# Run migrations
docker compose exec -T backend php artisan migrate --force

# Clear and warm caches
docker compose exec -T backend php artisan config:cache
docker compose exec -T backend php artisan route:cache
docker compose exec -T backend php artisan view:cache
docker compose exec -T backend php artisan event:cache

# Restart queue workers
docker compose restart queue scheduler

echo "✅ Deployment complete!"
