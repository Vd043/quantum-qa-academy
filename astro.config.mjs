import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://Vd043.github.io',
  base: '/quantum-qa-academy',
  integrations: [starlight()]
});

