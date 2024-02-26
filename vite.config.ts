import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import removeConsole from "vite-plugin-remove-console";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      }
    }
  },
  plugins: [vue(), removeConsole()],
})
