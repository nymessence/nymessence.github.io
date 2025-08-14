// vite.config.js
import { defineConfig } from 'vite';
import rewriteAll from 'vite-plugin-rewrite-all';

export default defineConfig({
  // The 'base' property defines the public path during development and build.
  // Setting it to './' ensures all URLs are relative to the current path,
  // which is crucial for GitHub Pages hosting on a project-level repository.
  base: './',

  // The 'root' specifies the root directory of your project.
  // This is typically './' for a standard project structure.
  root: './',

  // The 'build' object configures the production build process.
  build: {
    // 'outDir' sets the output directory for the build files.
    // 'dist' is the standard Vite output folder.
    outDir: 'dist',

    // 'assetsDir' defines the directory where assets (like images and fonts)
    // are stored relative to the 'outDir'. Setting it to an empty string
    // places assets directly in the 'dist' folder, simplifying paths.
    assetsDir: '',

    // This option prevents Vite from generating separate chunks for vendor libraries.
    // It can be helpful for small projects to consolidate everything into a single bundle.
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },

  // 'plugins' is an array where you can add Vite plugins.
  // 'rewriteAll()' is a useful plugin that helps rewrite asset URLs,
  // further ensuring they are handled correctly.
  plugins: [
    rewriteAll()
  ],
});

