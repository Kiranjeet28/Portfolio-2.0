import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240, // Only assets >10kb
      deleteOriginFile: false,
    }),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240,
      deleteOriginFile: false,
    })
  ],
  build: {
    target: 'esnext', // Allow modern JS features like top-level await
  },
  esbuild: {
    target: 'esnext', // Ensure esbuild uses modern syntax
  },
})

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     target: 'esnext',
//     brotliSize: true, // Enable brotli compression for assets
//     assetsInlineLimit: 4096, // Inline small assets for faster loading
//   },
//   esbuild: {
//     target: 'esnext', // Ensure esbuild uses modern syntax
//   },
//   optimizeDeps: {
//     exclude: ['three'],
//   },
// })

// To further speed up model loading, add this to your index.html <head>:
// <link rel="preload" href="/public/assets/models/your-model.glb" as="fetch" crossorigin>
