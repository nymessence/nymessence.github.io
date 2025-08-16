// main.js

// This file serves as your main entry point. All other scripts are imported here
// so that the build tool (Vite) can correctly bundle them.

// Import all necessary Three.js dependencies from node_modules.
// The relative paths have been corrected to be relative to the root of your project.
import * as THREE from "./node_modules/three/build/three.module.js";
import { OrbitControls } from "./node_modules/three/examples/jsm/controls/OrbitControls.js";
import { ConvexGeometry } from "./node_modules/three/examples/jsm/geometries/ConvexGeometry.js";
import { PointerLockControls } from "../node_modules/three/examples/jsm/controls/PointerLockControls.js";

// Import all your custom JavaScript files from the 'js' directory.
// The paths are now correctly relative to the root of your project.
import './js/24cell_bg.js';
import './js/binaural.js';
import './js/fractal.js';
import './js/hexgame.js';
import './js/ipfs.js';
import './js/item-listing.js';
import './js/polytopes-ui.js';
import './js/ulam.js';
import './js/pascals-pyramid.js';

// The rest of your main application logic goes here.
// All the functions, classes, and variables from the imported files
// are now available for use in this file.
