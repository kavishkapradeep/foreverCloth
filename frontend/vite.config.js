import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-toastify': path.resolve(__dirname, 'node_modules/react-toastify'),
    },
  },
});



