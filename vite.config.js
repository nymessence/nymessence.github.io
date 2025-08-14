// vite.config.js
import { defineConfig } from 'vite';
import rewriteAll from 'vite-plugin-rewrite-all';

export default defineConfig({
  plugins: [
    rewriteAll()
  ],
  // The 'base' property is crucial for GitHub Pages.
  // It tells Vite where to find your assets.
  // Replace 'nymessence.github.io' with your repository name.
  base: '/',
  build: {
    outDir: 'dist', // This is the folder that will be deployed
    sourcemap: true, // Useful for debugging in production
  },
});

