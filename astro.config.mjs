// @ts-check
import { defineConfig } from 'astro/config';

// Repo is `williamzqliu.github.io`, so the site serves from the root and
// `base` is never needed -- including after the custom domain is cut over.
// TODO: flip `site` to https://williamzqliu.com when the apex DNS moves (SPEC §10).
export default defineConfig({
  site: 'https://williamzqliu.github.io',
  build: {
    // Emit /work/slug/index.html so links work on GitHub Pages without a server.
    format: 'directory',
  },
});
