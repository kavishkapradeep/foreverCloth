import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Log all warnings to understand the issue
        console.warn(warning);
        // Use the default handler for critical warnings
        if (warning.code !== 'THIS_IS_UNDEFINED') warn(warning);
      },
    },
  },
});
