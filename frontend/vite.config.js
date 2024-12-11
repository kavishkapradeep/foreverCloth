import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-toastify': path.resolve(__dirname, 'node_modules/react-toastify'),
    },
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        console.warn('Rollup warning:', warning);
        warn(warning); // Log other warnings
      },
    },
  },
});

