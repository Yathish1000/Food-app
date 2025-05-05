import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // This splits vendor libraries into separate chunks
            return id.toString().split('node_modules/')[1].split('/')[0];
          }
        }
      }
    }
  }
});
