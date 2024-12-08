import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      plugins: [
        {
          name: 'resolve',
          resolveId(source) {
            if (source === 'react-toastify') {
              return { id: 'react-toastify', external: true };
            }
          },
        },
      ],
    },
  },
});

