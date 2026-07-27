// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import { loadEnv } from 'vite';

// Mirror `.env` into `process.env` for local dev. Server-only secrets are read
// via `process.env` at request time rather than `import.meta.env` — the latter is
// inlined by Vite as a string literal, which would bake the secret into the built
// server bundle. Real environment variables (Vercel project settings) take
// precedence, so production always uses the runtime value.
for (const [key, value] of Object.entries(
  loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), ''),
)) {
  process.env[key] ??= value;
}

// https://astro.build/config
// Site stays static by default; only the API endpoints opt into on-demand
// rendering (`export const prerender = false`) so secret keys never ship to
// the browser.
export default defineConfig({
  site: 'https://shageldi.dev',
  integrations: [sitemap()],
  adapter: vercel(),
  build: {
    inlineStylesheets: 'auto',
  },
});
