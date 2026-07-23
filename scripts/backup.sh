#!/usr/bin/env bash
set -euo pipefail

DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="./backups/$DATE"

mkdir -p "$BACKUP_DIR"

echo "🗄️  Backing up database..."
docker compose exec -T mysql mysqldump \
  -u root -p"${DB_ROOT_PASSWORD:-secret}" \
  "${DB_DATABASE:-adto_company}" \
  > "$BACKUP_DIR/database.sql"

echo "📁 Backing up storage..."
tar -czf "$BACKUP_DIR/storage.tar.gz" backend/storage/app/

echo "✅ Backup complete: $BACKUP_DIR"
