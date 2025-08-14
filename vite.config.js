// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';
import rewriteAll from 'vite-plugin-rewrite-all';

export default defineConfig({
  plugins: [
    rewriteAll()
  ],
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        binaural: resolve(__dirname, 'demos/binaural.html'),
        fractal: resolve(__dirname, 'demos/fractal.html'),
        hexgame: resolve(__dirname, 'demos/hexgame.html'),
        ipfs: resolve(__dirname, 'demos/ipfs.html'),
        polytopes: resolve(__dirname, 'demos/4d_polytopes.html'),
        polytopeCanvas: resolve(__dirname, 'demos/polytope_canvas.html'),
        polytopeUI: resolve(__dirname, 'demos/polytope_ui.html'),
        ulam: resolve(__dirname, 'demos/ulam.html'),
        // Assuming 'demos/index.html' is a separate entry point
        demosIndex: resolve(__dirname, 'demos/index.html'),
      },
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      }
    }
  }
});

