import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
// import autoprefixer from 'autoprefixer'

// https://vite.dev/config/
export default defineConfig({
  // css: {
  //   postcss: {
  //     plugins: [autoprefixer()],
  //   },
  // },

  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      features: path.resolve(__dirname, 'src/features'),
      pages: path.resolve(__dirname, 'src/pages'),
      contexts: path.resolve(__dirname, 'src/contexts'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      assets: path.resolve(__dirname, '/src/assets'),
    },
  },
})
