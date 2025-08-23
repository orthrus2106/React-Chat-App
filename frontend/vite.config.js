import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 5002,
//     proxy: {
//       // Проксируем запросы к API
//       '/api': {
//         target: 'http://localhost:5001',
//       },
//       // Проксируем WebSocket соединения
//       '/socket.io': {
//         target: 'ws://localhost:5001',
//         ws: true,
//         rewriteWsOrigin: true,
//       },
//     },
//   },
// });
// eslint-disable-next-line no-undef
const isRender = process.env.RENDER === 'true'

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
