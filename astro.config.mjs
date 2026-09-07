import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://smartcookdera.com',
  compressHTML: true,
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});
