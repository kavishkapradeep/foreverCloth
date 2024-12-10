import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server:[5174],
  resolve: {
    alias: {
      'react-toastify': '/node_modules/react-toastify',
    },
  },
  build: {
    rollupOptions: {
      external: ['react-toastify', 'react-toastify/dist/ReactToastify.css'],
    },
  },
});

