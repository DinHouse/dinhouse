// client.js

import imageUrlBuilder from '@sanity/image-url';

// Fungsi utilitas untuk membangun URL gambar dari Sanity
const builder = imageUrlBuilder({
  projectId: 'kes3lx7i', // Ganti dengan project ID Anda
  dataset: 'production', // Ganti dengan nama dataset Anda
});

export function imageUrlFor(source) {
  return builder.image(source);
}
