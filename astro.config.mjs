// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://fomadev.github.io',
  base: '/fomadev',

  vite: {
    plugins: [tailwindcss()],
  },
});