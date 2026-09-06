// @ts-check
import { defineConfig } from 'astro/config';

// Repo is `williamzqliu.github.io`, so the site serves from the root and
// `base` is never needed -- the custom domain does not change that.
export default defineConfig({
  site: 'https://williamzqliu.com',
  build: {
    // Emit /work/slug/index.html so links work on GitHub Pages without a server.
    format: 'directory',
  },
});
