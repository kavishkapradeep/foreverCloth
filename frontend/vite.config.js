import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'SOME_WARNING_CODE') return; // Ignore specific warnings
        warn(warning); // Log all other warnings
      },
    },
  },
});
