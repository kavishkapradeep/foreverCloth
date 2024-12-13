import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      onwarn(warning, warn) {
        // Log all warnings to the console
        console.warn('Rollup warning:', warning);

        // Optionally suppress specific warnings
        if (warning.code === 'UNRESOLVED_IMPORT') {
          console.warn(`Unresolved import: ${warning.source}`);
          return;
        }

        // Pass all other warnings to Rollup
        warn(warning);
      },
    },
  },
});
