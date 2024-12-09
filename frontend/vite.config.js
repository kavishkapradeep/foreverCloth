import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  server: { port: 5173 },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        console.warn('Rollup Warning:', warning);
        warn(warning);
      },
    },
  },
  logLevel: 'debug', // Add this for more logs
});
