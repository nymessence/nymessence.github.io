// ipfs_uploader.js

// Import the IPFS library
import { create } from 'https://cdn.jsdelivr.net/npm/ipfs-http-client@59.0.0/+esm';

// Get references to the HTML elements
const dragArea = document.getElementById('dragArea');
const fileInput = document.getElementById('fileInput');
const uploadBtn = document.getElementById('uploadBtn');
const status = document.getElementById('status');
const cidSpan = document.getElementById('cid');

let uploadedFile = null;

// Initialize the IPFS client with a public gateway
const ipfs = create({ url: 'https://ipfs.infura.io:5001/api/v0' });

// --- Drag-and-Drop functionality ---
// The click handler on the drag area is removed.
// The file input will now be triggered by a <label> element in the HTML.

// Visually indicate when a file is being dragged over the area
dragArea.addEventListener('dragover', (event) => {
  event.preventDefault();
  dragArea.classList.add('active');
});

// Remove the visual indicator when the file leaves the area
dragArea.addEventListener('dragleave', () => {
  dragArea.classList.remove('active');
});

// Handle the file drop event
dragArea.addEventListener('drop', (event) => {
  event.preventDefault();
  dragArea.classList.remove('active');
  const files = event.dataTransfer.files;
  if (files.length) {
    fileInput.files = files; // Assign the dropped file to the file input
    uploadedFile = files[0];
    status.textContent = `${uploadedFile.name} selected.`;
  }
});

// Handle file selection via the file input
fileInput.addEventListener('change', () => {
  uploadedFile = fileInput.files[0];
  if (uploadedFile) {
    status.textContent = `${uploadedFile.name} selected.`;
  }
});

// --- Upload functionality ---
uploadBtn.onclick = async () => {
  if (!uploadedFile) {
    status.textContent = 'Please select a file first.';
    return;
  }

  // Disable the button to prevent multiple uploads
  uploadBtn.disabled = true;
  status.textContent = 'Uploading...';
  cidSpan.textContent = '';

  try {
    // ipfs.add handles a single file and returns the CID directly
    // The `wrapWithDirectory: true` option ensures it's added inside a folder, which is good practice.
    const added = await ipfs.add(uploadedFile, { wrapWithDirectory: true });
    
    // added is an async iterable, so we need to get the last entry which is the root directory
    let rootCID = '';
    for await (const fileResult of added) {
      rootCID = fileResult.cid.toString();
    }

    status.textContent = 'Upload complete!';
    cidSpan.textContent = rootCID;
  } catch (error) {
    status.textContent = 'Upload failed: ' + error.message;
  } finally {
    // Re-enable the button after upload is complete or failed
    uploadBtn.disabled = false;
    uploadedFile = null; // Clear the file
  }
};

