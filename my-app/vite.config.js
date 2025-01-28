import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'build', // Ensure the correct output folder for gh-pages
  },
  base: '/Reactjs/my-app/', // GitHub Pages base path
})