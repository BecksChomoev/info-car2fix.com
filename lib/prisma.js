import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

// Prisma 7 requires a driver adapter for the runtime connection. We use the
// node-postgres adapter against the POOLED Neon endpoint (DATABASE_URL).
// A single client is reused across hot-reloads in dev and reused function
// instances on serverless — a new client per request would exhaust the pool.
const globalForPrisma = globalThis

function createPrismaClient() {
  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
  return new PrismaClient({ adapter })
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}
