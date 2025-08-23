import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isRender = String(globalThis.process?.env?.RENDER ?? '') === 'true'

export default defineConfig({
  plugins: [react()],
  server: isRender
    ? undefined
    : {
        port: 5002,
        proxy: {
          '/api': {
            target: 'http://localhost:5001',
          },
          '/socket.io': {
            target: 'ws://localhost:5001',
            ws: true,
            rewriteWsOrigin: true,
          },
        },
      },
  build: {
    outDir: 'dist',
  },
})
