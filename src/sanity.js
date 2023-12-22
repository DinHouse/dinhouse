// sanityClient.js

import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'kes3lx7i',
  dataset: 'production', // Ganti dengan nama dataset Anda
  useCdn: true, // Gunakan CDN untuk mempercepat pembacaan data (opsional)
  token: 'skK8bCnfB5T35h2AaMDYpU0VQFQszam3kkfkzeQpt1fACkWlDVqMnlq2F3vY5h75LfMK8cKHl0LiggymbiLBlJpcbFuSDlzNTwfJ1UNzhlnvYleBgZvs1SDSMa7uKQ3iGaHhWfqsXYF7vI9bq96x7R2krgUZg2SosTghyb6hhJsrJOAK6egW', // Ganti dengan token API Anda
});

export default client;
