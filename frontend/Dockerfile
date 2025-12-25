# Multi-stage build for Nuxt.js frontend
FROM node:22-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Build the application
FROM base AS builder
WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the Nuxt application
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

# Set to production environment
ENV NODE_ENV=production

# Copy built application
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package.json ./package.json

# Expose the port Nuxt runs on
EXPOSE 3000

# Set the host to 0.0.0.0 to allow external connections
ENV HOST=0.0.0.0
ENV PORT=3000

# Start the application
CMD ["node", ".output/server/index.mjs"]
