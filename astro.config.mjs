// @ts-check
import { defineConfig } from 'astro/config';

// Custom domain -> `site` is set, `base` is not (SPEC §10).
export default defineConfig({
  site: 'https://williamzqliu.com',
  trailingSlash: 'ignore',
  build: {
    // Emit /work/slug/index.html so links work on GitHub Pages without a server.
    format: 'directory',
  },
});
