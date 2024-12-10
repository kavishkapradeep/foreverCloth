import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Example of externalizing problematic packages
      external: ['react-toastify'],
    },
  },
  server: {
    port: 4000,
    open: true,
  },
  onwarn(warning, warn) {
    // Suppress specific warnings or log them
    if (warning.code === 'UNRESOLVED_IMPORT') {
      return;  // Ignore unresolved import warnings
    }
    warn(warning);  // Default behavior: log other warnings
  },
});

