import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import React from 'react';

export default defineConfig({
  plugins:[react()],
  
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'UNRESOLVED_IMPORT') {
          console.error('Unresolved import:', warning);
        } else {
          warn(warning);
        }
      },
    },
  },
});
