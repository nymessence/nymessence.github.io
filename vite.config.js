// vite.config.js
import { defineConfig } from 'vite';
import rewriteAll from 'vite-plugin-rewrite-all';

export default defineConfig({
  // Set the base path to ensure relative URLs work correctly for GitHub Pages.
  base: './',
  
  // This tells Vite to look for your HTML files in the project's root directory.
  root: './',

  // The build configuration will output to the 'dist' folder.
  build: {
    outDir: 'dist',
    
    // This setting ensures that the output paths are relative.
    assetsDir: '',
  },

  // Use the plugin to automatically rewrite all paths.
  plugins: [
    rewriteAll()
  ],
});
