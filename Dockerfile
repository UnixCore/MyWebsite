# ── 1. Build the static site ────────────────────────────────────────
FROM node:22-alpine AS build
WORKDIR /app

# Install dependencies first so this layer is cached when only content changes.
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

COPY . .
ARG VITE_SITE_URL=""
ENV VITE_SITE_URL=${VITE_SITE_URL}
RUN npm run build

# ── 2. Serve it with an unprivileged nginx ──────────────────────────
FROM nginxinc/nginx-unprivileged:1.27-alpine AS runtime

COPY deploy/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY deploy/nginx/security-headers.conf /etc/nginx/snippets/security-headers.conf
COPY --from=build /app/dist /usr/share/nginx/html

# The base image already runs as the non-root user "nginx" (uid 101) and listens on 8080.
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://127.0.0.1:8080/healthz || exit 1
