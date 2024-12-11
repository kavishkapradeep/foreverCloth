export default defineConfig({
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
