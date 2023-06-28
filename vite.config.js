import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: "/git-find",
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    mimeTypes: {
      'application/javascript': ['js', 'mjs', 'jsx'], // Adicione 'jsx' aqui
    },
  },
})
