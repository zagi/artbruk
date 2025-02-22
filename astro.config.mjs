import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import alpine from '@astrojs/alpinejs';


// https://astro.build/config
export default defineConfig({
  integrations: [alpine({ entrypoint: '/src/entrypoint' }), tailwind(), compress()],
});
