import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-toastify': require.resolve('react-toastify'),
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
