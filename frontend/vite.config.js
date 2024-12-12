import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';



export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Ignore certain warnings or handle them differently
        if (warning.code === 'UNRESOLVED_IMPORT' && warning.source === 'react-toastify') {
          return; // Skip the warning for this specific import
        }
        warn(warning); // Log all other warnings
      },
    },
  },
});

