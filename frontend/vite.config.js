import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-router-dom', 'react-toastify'], // Externalize both react-router-dom and react-toastify
    },
  },
});

