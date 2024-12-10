import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server:{port:5174},
  build: {
    rollupOptions: {
      // Example: Handle or ignore specific warnings
      external: ['react-toastify'],
    },
  },
});


