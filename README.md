
<div align="center">

# PT Adto Cipta Usaha Mandiri

### Enterprise Company Profile Website

[![Frontend CI](https://github.com/adto-cipta/adto-company-profile/actions/workflows/ci-frontend.yml/badge.svg)](https://github.com/adto-cipta/adto-company-profile/actions/workflows/ci-frontend.yml)
[![Backend CI](https://github.com/adto-cipta/adto-company-profile/actions/workflows/ci-backend.yml/badge.svg)](https://github.com/adto-cipta/adto-company-profile/actions/workflows/ci-backend.yml)
[![License](https://img.shields.io/badge/license-proprietary-red.svg)]()

</div>

---

## Overview

Production-ready enterprise company profile website for **PT Adto Cipta Usaha Mandiri**, built with a modern full-stack architecture featuring a decoupled frontend and backend with containerized deployment.

## Tech Stack

### Frontend

| Technology      | Version | Purpose                    |
| --------------- | ------- | -------------------------- |
| Next.js         | 15.x    | React framework (App Router) |
| React           | 19.x    | UI library                 |
| TypeScript      | 5.x     | Type safety                |
| Tailwind CSS    | 4.x     | Utility-first CSS          |
| Shadcn UI       | latest  | Component library          |
| Framer Motion   | 12.x    | Animations                 |
| Zustand         | 5.x     | State management           |
| React Hook Form | 7.x     | Form handling              |
| Zod             | 3.x     | Schema validation          |
| TanStack Query  | 5.x     | Server state management    |
| Axios           | 1.x     | HTTP client                |
| Lucide React    | latest  | Icon library               |

### Backend

| Technology       | Version | Purpose                 |
| ---------------- | ------- | ----------------------- |
| Laravel          | 12.x   | PHP framework           |
| PHP              | 8.4    | Runtime                 |
| MySQL            | 8.x    | Relational database     |
| Redis            | 7.x    | Caching & queues        |
| Sanctum          | latest | API authentication      |
| Spatie Permission | latest | Role-based access       |

### Infrastructure

| Technology     | Purpose               |
| -------------- | --------------------- |
| Docker         | Containerization      |
| Nginx          | Reverse proxy         |
| GitHub Actions | CI/CD pipeline        |

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         Nginx                               │
│                    (Reverse Proxy)                           │
├────────────────────┬────────────────────────────────────────┤
│                    │                                        │
│   ┌────────────┐   │   ┌────────────────────────────────┐   │
│   │  Frontend  │   │   │           Backend              │   │
│   │  Next.js   │   │   │          Laravel               │   │
│   │  (SSR/SSG) │   │   │        (REST API)              │   │
│   └────────────┘   │   └──────┬──────────┬──────────────┘   │
│                    │          │          │                   │
│                    │   ┌──────┘    ┌─────┘                   │
│                    │   │          │                          │
│                    │   ▼          ▼                          │
│                    │  MySQL     Redis                        │
│                    │            (Cache/Queue)                │
└────────────────────┴────────────────────────────────────────┘
```

## Project Structure

```
adto-company-profile/
├── .github/          # CI/CD workflows, issue templates
├── assets/           # Brand assets, images, videos
├── frontend/         # Next.js 15 application
├── backend/          # Laravel 12 API
├── database/         # Schemas, backups, ERD
├── docker/           # Dockerfiles, service configs
├── deployment/       # Environment-specific configs
├── monitoring/       # Health checks, alerts
├── docs/             # Architecture, API, guides
├── scripts/          # Build, deploy, maintenance
├── logs/             # Per-service log directories
├── config/           # Editor, Git, IDE settings
└── docker-compose.yml
```

## Prerequisites

- **Node.js** >= 20.x
- **PHP** >= 8.4
- **Composer** >= 2.x
- **Docker** >= 24.x
- **Docker Compose** >= 2.x

## Quick Start

```bash
# Clone the repository
git clone https://github.com/adto-cipta/adto-company-profile.git
cd adto-company-profile

# Start all services
docker compose up -d

# Or start in development mode
docker compose -f docker-compose.dev.yml up -d
```

### Frontend Development

```bash
cd frontend
npm install
npm run dev
# → http://localhost:3000
```

### Backend Development

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve
# → http://localhost:8000
```

## Available Commands

### Frontend

| Command              | Description                   |
| -------------------- | ----------------------------- |
| `npm run dev`        | Start development server      |
| `npm run build`      | Production build              |
| `npm run start`      | Start production server       |
| `npm run lint`       | Run ESLint                    |
| `npm run lint:fix`   | Fix ESLint issues             |
| `npm run format`     | Format with Prettier          |
| `npm run type-check` | TypeScript type checking      |
| `npm run test`       | Run unit tests                |
| `npm run test:e2e`   | Run E2E tests                 |
| `npm run analyze`    | Bundle analysis               |

### Backend

| Command                            | Description              |
| ---------------------------------- | ------------------------ |
| `php artisan serve`                | Start development server |
| `php artisan migrate`              | Run migrations           |
| `php artisan migrate --seed`       | Migrate and seed         |
| `php artisan test`                 | Run tests                |
| `php artisan queue:work`           | Start queue worker       |
| `php artisan optimize`             | Cache optimization       |
| `composer run lint`                | PHP Pint linting         |
| `composer run analyse`             | PHPStan analysis         |

### Docker

| Command                                          | Description           |
| ------------------------------------------------ | --------------------- |
| `docker compose up -d`                           | Start all services    |
| `docker compose -f docker-compose.dev.yml up -d` | Start dev environment |
| `docker compose down`                            | Stop all services     |
| `docker compose logs -f`                         | Follow logs           |
| `make build`                                     | Build all containers  |
| `make deploy-staging`                            | Deploy to staging     |
| `make deploy-production`                         | Deploy to production  |

## Environments

| Environment | URL                             | Branch    |
| ----------- | ------------------------------- | --------- |
| Development | `http://localhost:3000`          | `develop` |
| Staging     | `https://staging.adtocipta.co.id` | `staging` |
| Production  | `https://adtocipta.co.id`       | `main`    |

## Contributing

1. Create a feature branch from `develop`
2. Follow the coding standards in `docs/development/coding-standards.md`
3. Write tests for new features
4. Submit a Pull Request using the PR template

## License

This project is proprietary software. All rights reserved.
**© 2026 PT Adto Cipta Usaha Mandiri**
