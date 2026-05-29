// Prisma 7 config (this project is ESM, so prisma.config.js is valid).
// The Prisma CLI does NOT auto-load .env.local and does NOT bundle dotenv, so
// we load the project's local env explicitly before reading connection vars.
import { config } from 'dotenv'
config({ path: '.env.local' })

import { defineConfig } from 'prisma/config'

// CLI-only connection (migrate / db pull / studio). Use Neon's UNPOOLED/direct
// endpoint here — migrations can't run over the PgBouncer pooler. The runtime
// app connects via the POOLED DATABASE_URL through the adapter in lib/prisma.js.
//
// We omit the datasource block entirely when the direct URL is absent so that
// `prisma generate` (it doesn't need a connection) still succeeds in builds that
// run before DB env vars are present. `prisma migrate` will error clearly if so.
const migrationUrl = process.env.DATABASE_URL_UNPOOLED

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  ...(migrationUrl ? { datasource: { url: migrationUrl } } : {}),
})
