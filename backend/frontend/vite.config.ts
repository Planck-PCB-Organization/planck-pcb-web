import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/books': {
        target: 'http://localhost:3001', // Değiştirilmesi gereken hedef URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/books/, ''),
      },
    },
  },
  optimizeDeps: {
    include: ['react-stl-viewer'],
  },
})
