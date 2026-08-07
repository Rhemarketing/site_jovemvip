# =============================================================================
# Dockerfile — Arena Jovem VIP (EasyPanel / Hostinger VPS)
# Multi-stage build para imagem de produção otimizada
# =============================================================================

# ---------------------------------------------------------------------------
# Stage 1: Dependências
# ---------------------------------------------------------------------------
FROM node:22-alpine AS deps

WORKDIR /app

# Copiar apenas arquivos de dependências para cache eficiente
COPY package.json package-lock.json ./

# Instalar apenas dependências de produção + build
RUN npm ci

# ---------------------------------------------------------------------------
# Stage 2: Build da aplicação
# ---------------------------------------------------------------------------
FROM node:22-alpine AS builder

WORKDIR /app

# Copiar node_modules do stage anterior
COPY --from=deps /app/node_modules ./node_modules

# Copiar código-fonte
COPY . .

# Variáveis de ambiente para o build
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV WRANGLER_LOG_PATH=.wrangler/wrangler.log

# Build da aplicação com vinext
RUN npx vinext build

# ---------------------------------------------------------------------------
# Stage 3: Runner de produção (imagem mínima)
# ---------------------------------------------------------------------------
FROM node:22-alpine AS runner

WORKDIR /app

# Criar usuário não-root para segurança
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Variáveis de ambiente de produção
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME="0.0.0.0"
ENV PORT=80

# Copiar arquivos necessários do builder
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/next.config.ts ./next.config.ts
COPY --from=builder /app/.vinext ./.vinext

# Ajustar permissões
RUN chown -R nextjs:nodejs /app

# Usar usuário não-root
USER nextjs

# Expor a porta da aplicação
EXPOSE 80

# Health check para o EasyPanel monitorar o container
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:80/ || exit 1

# Iniciar a aplicação
CMD ["node", "node_modules/.bin/vinext", "start"]
