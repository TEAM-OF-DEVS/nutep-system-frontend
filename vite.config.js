import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      '/cep': {
        target: 'https://viacep.com.br',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/cep/, '')
      },
      '/json': {
        target: 'http://localhost:3002/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/json/, '')
      }
    }
  }
})
