/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    global: true,
    environment: 'happy-dom',
    deps: {
      inline: ['@vue']
    }
  }
})
