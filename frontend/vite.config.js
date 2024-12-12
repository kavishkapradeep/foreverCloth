import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
  plugins: [react(), commonjs()],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'UNRESOLVED_IMPORT' && warning.source === 'react-toastify') {
          console.warn('Ignoring unresolved import for react-toastify.');
          return; // Ignore this specific warning
        }
        warn(warning); // Let Rollup handle all other warnings
      },
    },
  },
});
