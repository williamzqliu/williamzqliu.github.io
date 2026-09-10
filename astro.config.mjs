// @ts-check
import { defineConfig } from 'astro/config';

// Repo is `williamzqliu.github.io`, so the site serves from the root and
// `base` is never needed -- the custom domain does not change that.
export default defineConfig({
  site: 'https://williamzqliu.com',
  markdown: {
    // Off. Shiki ships a themed rectangle with its own palette, and this page
    // is built out of rules, space and one ink -- a GitHub-dark block would be
    // the only coloured surface on the site. The excerpts are short enough to
    // read as plain mono, the way the resume sets its figures.
    syntaxHighlight: false,
  },
  build: {
    // Emit /work/slug/index.html so links work on GitHub Pages without a server.
    format: 'directory',
  },
});
