import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/nutep-system-frontend/',
  server: {
    proxy: {
      '/cep': {
        target: 'https://viacep.com.br',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/cep/, '')
      },
      '/json': {
        target: 'http://localhost:3001/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/json/, '')
      }
    }
  }
})
