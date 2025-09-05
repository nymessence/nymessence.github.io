import { defineConfig } from 'vite';
import { resolve } from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import fs from 'fs';

// This plugin ensures that when a page requests 'navbar.html', it receives
// the version from its own directory (e.g., /internship/navbar.html)
// instead of the one from the project root.
const dynamicNavbarPlugin = {
  name: 'dynamic-navbar-resolver',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      // Intercept requests specifically for 'navbar.html' at the root level.
      if (req.url === '/navbar.html') {
        const referer = req.headers.referer;
        if (referer) {
          try {
            const refererUrl = new URL(referer);
            // Get the path of the page that made the request
            const refererPath = refererUrl.pathname;

            // Don't modify requests coming from the homepage itself.
            if (refererPath && refererPath !== '/') {
              // Normalize the path: remove trailing slash and 'index.html'
              let directory = refererPath;
              if (directory.endsWith('/')) {
                directory = directory.slice(0, -1);
              }
              if (directory.endsWith('/index.html')) {
                directory = directory.slice(0, -11); // '/index.html'.length = 11
              }

              // Ensure we have a valid directory path
              if (directory && directory !== '/') {
                // Construct the path to the potential directory-specific navbar
                const potentialNavbarPath = `${directory}/navbar.html`;
                const root = server.config.root;
                const absolutePath = resolve(root, potentialNavbarPath.substring(1));

                // If a local navbar.html exists, rewrite the request URL to serve it
                if (fs.existsSync(absolutePath)) {
                  req.url = potentialNavbarPath;
                }
              }
            }
          } catch (e) {
            console.error('Error processing referer for navbar.html:', e);
          }
        }
      }
      // Continue to the next middleware
      next();
    });
  },
};

// Custom Vite plugin to handle clean URLs (e.g., /internship -> /internship/index.html)
const cleanUrlPlugin = {
  name: 'clean-url-resolver',
  configureServer(server) {
    // This middleware will be added to the Vite development server
    const fixUrlMiddleware = (req, res, next) => {
      const urlParts = req.url.split('?');
      const urlPath = urlParts[0];
      const queryString = urlParts.length > 1 ? `?${urlParts[1]}` : '';

      // Get the project root directory directly from Vite's resolved config
      const root = server.config.root;

      // Check if the URL path looks like a directory and is not the root
      if (!urlPath.includes('.') && urlPath !== '/') {
        // Construct the absolute file system path for the potential index.html file
        const htmlPath = resolve(root, urlPath.substring(1), 'index.html');

        // Check if an index.html file actually exists at that location
        if (fs.existsSync(htmlPath)) {
          // If it exists, rewrite the request URL to point directly to the index.html file
          req.url = `${urlPath}/index.html${queryString}`;
        }
      }

      // Pass control to the next middleware
      next();
    };

    server.middlewares.use(fixUrlMiddleware);
  },
};

// This plugin injects a client-side script to fix active link highlighting
// when using clean URLs, without needing to modify the source HTML files
const activeLinkHighlighterPlugin = {
  name: 'active-link-highlighter',
  // The transformIndexHtml hook allows us to modify the final HTML before it's sent to the browser
  transformIndexHtml(html) {
    const script = `
<script>
  // This script runs after the page content has loaded
  document.addEventListener('DOMContentLoaded', () => {
    try {
      // Normalize the browser's current path by removing trailing slashes or 'index.html'
      const currentPath = window.location.pathname.replace(/\\/$/, "").replace(/\\/index\\.html$/, "");

      // Target links within common navigation elements to apply the active state
      const navLinks = document.querySelectorAll('nav a, header a, .nav a, .navbar a');

      // Check if the page's own scripts have already set an active link
      let activeLinkAlreadySet = false;
      navLinks.forEach(link => {
        if (link.classList.contains('active')) {
          activeLinkAlreadySet = true;
        }
      });
      
      // If no link is marked as active, apply our own logic
      if (!activeLinkAlreadySet) {
        navLinks.forEach(link => {
          const linkUrl = new URL(link.href, window.location.origin);
          // Normalize the link's path in the same way as the browser's current path
          const linkPath = linkUrl.pathname.replace(/\\/$/, "").replace(/\\/index\\.html$/, "");

          // If the normalized paths match, highlight the link
          if (linkPath === currentPath) {
            link.classList.add('active');
          }
        });
      }
    } catch (e) {
      console.error('Vite active link highlighter script failed:', e);
    }
  });
</script>
`;
    // Inject our script right before the closing </body> tag
    return html.replace('</body>', `${script}</body>`);
  },
};

export default defineConfig({
  plugins: [
    dynamicNavbarPlugin,
    cleanUrlPlugin,
    activeLinkHighlighterPlugin,
    viteStaticCopy({
      targets: [
        { src: 'styles/*', dest: 'styles' },
        { src: 'js/*', dest: 'js' },
        { src: 'assets/*', dest: 'assets' },
        { src: 'csv/*', dest: 'csv' },
        { src: 'vision/*', dest: 'vision' },
        { src: 'demos/*', dest: 'demos' },
        { src: 'internship/*', dest: 'internship' },
        { src: 'merch/*', dest: 'merch' },
      ],
    }),
  ],
  // THE CORRECT FIX: Use a relative base path.
  base: './',
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
        pascalsPyramid: resolve(__dirname, 'demos/pascals-pyramid.html'),
        numerology: resolve(__dirname, 'demos/numerology.html'),
        internship: resolve(__dirname, 'internship/index.html'),
      },
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
  server: {
    host: true,
    allowedHosts: ['erick-pi.local'],
  },
});

