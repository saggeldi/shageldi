import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          threeJs: ['three', '@react-three/fiber', '@react-three/drei', 'three-mtl-loader', 'three-obj-loader'],
          ui: ['antd', 'styled-components', 'react-icons'],
          animations: ['animate.css', 'react-animate-on-scroll', 'react-type-animation'],
          utils: ['i18next', 'react-i18next', '@reduxjs/toolkit', 'react-redux']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  server: {
    open: true,
    port: 3000
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'three', '@react-three/fiber']
  }
})
