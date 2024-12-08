export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true, // Exit with an error if the port is in use
    hmr: {
      overlay: true, // Display errors in the browser
    },
  },
});

