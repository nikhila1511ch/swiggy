import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // Example: forward /api to real backend to avoid CORS (optional)
    // proxy: {
    //   '/api': {
    //     target: 'https://your-backend.example.com',
    //     changeOrigin: true,
    //     rewrite: path => path.replace(/^\/api/, '')
    //   }
    // }
  }
})
