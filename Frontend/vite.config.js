import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'https://book-store-nine-lac.vercel.app'
    },
  },
  plugins: [react()],
})
