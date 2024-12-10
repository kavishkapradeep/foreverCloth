import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Exclude external dependencies to avoid bundling
      external: ['react-toastify'],
    },
  },
  resolve: {
    alias: {
      // Set up aliases if needed
      '@': '/src',
    },
  },
  server: {
    port: 4000, // Default dev server port
    open: true, // Open browser on start
  },
});

