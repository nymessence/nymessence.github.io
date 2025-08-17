import { defineConfig } from 'vite';
import { resolve } from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        { src: 'styles/*', dest: 'styles' },
        { src: 'js/*', dest: 'js' },
        { src: 'assets/*', dest: 'assets' },
        { src: 'vision/*', dest: 'vision' },
        { src: 'demos/*', dest: 'demos' },
        { src: 'internship/*', dest: 'internship' },
        { src: 'merch/*', dest: 'merch' },
      ]
    })
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
        demosIndex: resolve(__dirname, 'demos/index.html'),
        pascalsPyramid: resolve(__dirname, 'demos/pascals-pyramid.html')
      },
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      }
    }
  }
});

