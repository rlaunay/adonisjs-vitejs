import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/assets/',
  build: {
    manifest: true,
    outDir: '../../public/assets',
    assetsDir: './',
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'resources/assets/main.ts')
    }
  },
  root: './resources/assets'
})

/*
PORT=3333 HOST=0.0.0.0 NODE_ENV=production APP_KEY=r7vMPBVjdiV6xIDyI-QTBPwo8jUbFY1h DRIVE_DISK=local SESSION_DRIVER=cookie CACHE_VIEWS=false node server.js
*/