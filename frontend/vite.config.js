import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{port:5173},
  resolve: {
    alias: {
      // Ensure Vite resolves the react-toastify CSS properly
      'react-toastify/dist/ReactToastify.css': 'node_modules/react-toastify/dist/ReactToastify.css'
    }
  }
})
