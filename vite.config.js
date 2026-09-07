import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: './',
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        top: 'index.html',
        archive2025: 'archive/2025/index.html',
        archive2025Competition: 'archive/2025/competition.html',
        archive2025Creation: 'archive/2025/creation.html',
      },
    },
  },
})
