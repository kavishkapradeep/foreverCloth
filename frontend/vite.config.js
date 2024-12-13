import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      onwarn(warning, warn) {
        // Log all warnings to the console
        console.log('Rollup warning:', warning);

        // Optionally suppress specific warnings
        if (warning.code === 'UNRESOLVED_IMPORT') {
          console.log(`Unresolved import: ${warning.source}`);
          return;
        }

        // Pass all other warnings to Rollup
        warn(warning);
      },
    },
  },
});
