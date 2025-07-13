import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"], // Example: separate vendor bundle
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
