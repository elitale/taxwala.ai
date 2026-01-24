// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import sentry from '@sentry/astro';
import spotlightjs from '@spotlightjs/astro';

import sitemap from '@astrojs/sitemap';

import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({

  site: "https://taxwala.ai",
  integrations: [react(), sentry(), spotlightjs(), sitemap(), robotsTxt()],

  vite: {
    plugins: [tailwindcss()]
  }
});