import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Example: Handle or ignore specific warnings
      onwarn(warning, warn) {
        if (warning.code === 'UNRESOLVED_IMPORT') {
          return;  // Suppress unresolved import warnings
        }
        warn(warning);  // Log other warnings
      },
    },
  },
});


