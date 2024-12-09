import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{port:5173},
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Skip specific warnings if needed
        if (warning.code === 'UNRESOLVED_IMPORT') {
          console.warn('Skipping unresolved import:', warning.source);
          return;
        }
        warn(warning);
      },
    },
  },
})