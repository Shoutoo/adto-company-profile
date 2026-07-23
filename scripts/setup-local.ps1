<#
.SYNOPSIS
    ADTO Company Profile — Local Development Setup Script (Windows)
.DESCRIPTION
    Sets up the complete local development environment:
    - Copies .env files
    - Installs frontend and backend dependencies
    - Generates Laravel app key
    - Runs database migrations and seeders
#>

$ErrorActionPreference = 'Stop'

Write-Host "╔════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║   ADTO Local Development Setup         ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════╝" -ForegroundColor Cyan

$RootDir = Split-Path -Parent $PSScriptRoot
$FrontendDir = Join-Path $RootDir "frontend"
$BackendDir = Join-Path $RootDir "backend"

Write-Host ""
Write-Host "📁 Root: $RootDir"
Write-Host ""

# Step 1: Copy env files
Write-Host "[1/7] Setting up environment files..." -ForegroundColor Yellow

if (-not (Test-Path (Join-Path $RootDir ".env"))) {
    Copy-Item (Join-Path $RootDir ".env.example") (Join-Path $RootDir ".env")
    Write-Host "  ✅ Root .env created" -ForegroundColor Green
}

if (-not (Test-Path (Join-Path $BackendDir ".env"))) {
    Copy-Item (Join-Path $BackendDir ".env.example") (Join-Path $BackendDir ".env")
    Write-Host "  ✅ Backend .env created" -ForegroundColor Green
}

if (-not (Test-Path (Join-Path $FrontendDir ".env.local"))) {
    Copy-Item (Join-Path $FrontendDir ".env.local.example") (Join-Path $FrontendDir ".env.local")
    Write-Host "  ✅ Frontend .env.local created" -ForegroundColor Green
}

# Step 2: Frontend dependencies
Write-Host ""
Write-Host "[2/7] Installing frontend dependencies..." -ForegroundColor Yellow
Set-Location $FrontendDir
npm install
Write-Host "  ✅ Frontend node_modules installed" -ForegroundColor Green

# Step 3: Backend dependencies
Write-Host ""
Write-Host "[3/7] Installing backend dependencies..." -ForegroundColor Yellow
Set-Location $BackendDir
composer install
Write-Host "  ✅ Backend vendor/ installed" -ForegroundColor Green

# Step 4: App key
Write-Host ""
Write-Host "[4/7] Generating Laravel app key..." -ForegroundColor Yellow
Set-Location $BackendDir
php artisan key:generate
Write-Host "  ✅ App key generated" -ForegroundColor Green

# Step 5: Migrations
Write-Host ""
Write-Host "[5/7] Running database migrations..." -ForegroundColor Yellow
Set-Location $BackendDir
php artisan migrate --force
Write-Host "  ✅ Migrations complete" -ForegroundColor Green

# Step 6: Seed
Write-Host ""
Write-Host "[6/7] Seeding database..." -ForegroundColor Yellow
Set-Location $BackendDir
php artisan db:seed --force
Write-Host "  ✅ Database seeded" -ForegroundColor Green

# Step 7: Storage link
Write-Host ""
Write-Host "[7/7] Creating storage link..." -ForegroundColor Yellow
Set-Location $BackendDir
php artisan storage:link
Write-Host "  ✅ Storage symlink created" -ForegroundColor Green

Write-Host ""
Write-Host "╔════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║   ✅ Local setup complete!              ║" -ForegroundColor Green  
Write-Host "╚════════════════════════════════════════╝" -ForegroundColor Green
Write-Host ""
Write-Host "  Start frontend:  cd frontend; npm run dev"
Write-Host "  Start backend:   cd backend; php artisan serve"
Write-Host "  Start Docker:    docker compose up -d"
Write-Host ""

Set-Location $RootDir
