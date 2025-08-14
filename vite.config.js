// vite.config.js
import { defineConfig } from 'vite';
import rewriteAll from 'vite-plugin-rewrite-all';

export default defineConfig({
  plugins: [
    rewriteAll()
  ],
  // Add other configurations here if needed
  build: {
    // You might want to add a base path for GitHub Pages
    // base: '/nymessence.github.io/',
  }
});

