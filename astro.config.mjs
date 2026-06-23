// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
// Site stays static by default; only the /api/chat endpoint opts into
// on-demand rendering (`export const prerender = false`) so the Gemini
// API key never ships to the browser.
export default defineConfig({
  site: 'https://shageldi.dev',
  integrations: [sitemap()],
  adapter: vercel(),
  build: {
    inlineStylesheets: 'auto',
  },
});
