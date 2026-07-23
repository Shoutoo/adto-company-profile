# ╔══════════════════════════════════════════════════════════════╗
# ║  Stage 1: Dependencies                                       ║
# ╚══════════════════════════════════════════════════════════════╝
FROM node:22-alpine AS deps

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --frozen-lockfile

# ╔══════════════════════════════════════════════════════════════╗
# ║  Stage 2: Builder                                            ║
# ╚══════════════════════════════════════════════════════════════╝
FROM node:22-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN npm run build

# ╔══════════════════════════════════════════════════════════════╗
# ║  Stage 3: Runner — lean production image                     ║
# ╚══════════════════════════════════════════════════════════════╝
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

# Copy built standalone output
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
    CMD wget -qO- http://127.0.0.1:3000/ || exit 1

EXPOSE 3000
CMD ["node", "server.js"]
