import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import alpine from '@astrojs/alpinejs';


import jopSoftwarecookieconsent from '@jop-software/astro-cookieconsent';


// https://astro.build/config
export default defineConfig({
  integrations: [
    alpine({ entrypoint: '/src/entrypoint' }),
    tailwind(),
    compress(),
    jopSoftwarecookieconsent(),
  ],
});