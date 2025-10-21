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
          three: ['three'],
          threeFiber: ['@react-three/fiber', '@react-three/drei'],
          threeLoaders: ['three-mtl-loader', 'three-obj-loader'],
          antd: ['antd'],
          ui: ['styled-components', 'react-icons'],
          animations: ['animate.css', 'react-animate-on-scroll', 'react-type-animation'],
          i18n: ['i18next', 'react-i18next'],
          redux: ['@reduxjs/toolkit', 'react-redux']
        }
      }
    },
    chunkSizeWarningLimit: 500,
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
