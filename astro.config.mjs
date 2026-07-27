import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://jnsahani2017-creator.github.io/aimezik-website/',
  output: 'static',
  outDir: './docs',
  integrations: [tailwind()],
  build: {
    assets: 'assets'
  }
});
