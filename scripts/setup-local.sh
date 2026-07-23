#!/usr/bin/env bash
set -euo pipefail

echo "╔════════════════════════════════════════╗"
echo "║   ADTO Local Development Setup         ║"
echo "╚════════════════════════════════════════╝"

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]:-$0}")/.." && pwd)"
FRONTEND_DIR="$ROOT_DIR/frontend"
BACKEND_DIR="$ROOT_DIR/backend"

echo ""
echo "📁 Root: $ROOT_DIR"
echo ""

# ── Step 1: Copy env files ─────────────────────────────────────
echo "[1/7] Setting up environment files..."
if [ ! -f "$ROOT_DIR/.env" ]; then
  cp "$ROOT_DIR/.env.example" "$ROOT_DIR/.env"
  echo "  ✅ Root .env created"
fi

if [ ! -f "$BACKEND_DIR/.env" ]; then
  cp "$BACKEND_DIR/.env.example" "$BACKEND_DIR/.env"
  echo "  ✅ Backend .env created"
fi

if [ ! -f "$FRONTEND_DIR/.env.local" ]; then
  cp "$FRONTEND_DIR/.env.local.example" "$FRONTEND_DIR/.env.local"
  echo "  ✅ Frontend .env.local created"
fi

# ── Step 2: Install frontend dependencies ─────────────────────
echo ""
echo "[2/7] Installing frontend dependencies..."
cd "$FRONTEND_DIR"
npm install
echo "  ✅ Frontend node_modules installed"

# ── Step 3: Install backend dependencies ──────────────────────
echo ""
echo "[3/7] Installing backend dependencies..."
cd "$BACKEND_DIR"
composer install
echo "  ✅ Backend vendor/ installed"

# ── Step 4: Generate app key ───────────────────────────────────
echo ""
echo "[4/7] Generating Laravel app key..."
cd "$BACKEND_DIR"
php artisan key:generate
echo "  ✅ App key generated"

# ── Step 5: Run database migrations ───────────────────────────
echo ""
echo "[5/7] Running database migrations..."
cd "$BACKEND_DIR"
php artisan migrate --force
echo "  ✅ Migrations complete"

# ── Step 6: Seed database ──────────────────────────────────────
echo ""
echo "[6/7] Seeding database..."
cd "$BACKEND_DIR"
php artisan db:seed --force
echo "  ✅ Database seeded"

# ── Step 7: Create storage symlink ────────────────────────────
echo ""
echo "[7/7] Creating storage link..."
cd "$BACKEND_DIR"
php artisan storage:link
echo "  ✅ Storage symlink created"

echo ""
echo "╔════════════════════════════════════════╗"
echo "║   ✅ Local setup complete!              ║"
echo "╚════════════════════════════════════════╝"
echo ""
echo "  Start frontend:  cd frontend && npm run dev"
echo "  Start backend:   cd backend && php artisan serve"
echo "  Start Docker:    docker compose up -d"
echo ""
