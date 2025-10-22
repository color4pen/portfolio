import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://color4pen.github.io',
  // Use base path in production (GitHub Pages), not in development
  base: import.meta.env.PROD ? '/portfolio' : undefined,
});
