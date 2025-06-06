import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    projectId: 'bhx74x',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:5173/',
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});
