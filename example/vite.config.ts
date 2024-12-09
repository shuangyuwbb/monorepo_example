/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import { resolve } from 'path'

const __dirname = resolve()
// https://vitejs.dev/config/
export default ({mode}:{mode: string}) =>{
  const pkg = mode === 'test'? '@fsdev': '@fscut'
  return defineConfig({
    plugins: [vue()],
    test: {
      global: true,
      environment: 'happy-dom',
      deps: {
        inline: ['@vue']
      }
    },
    resolve:{
      alias: {
        '@': resolve(__dirname, 'src'),
        '@fs/bochui': path.resolve(__dirname, `node_modules/${pkg}/bochui`), 
        '@fs/utils': path.resolve(__dirname, `node_modules/${pkg}/fs-utils`),
        '@fs/fscadweb': path.resolve(__dirname, `node_modules/${pkg}/fscadweb`),
        '@fs/sandbox': path.resolve(__dirname, `node_modules/${pkg}/assemblysandbox`),
        '@fs/sandbox/assets': path.resolve(__dirname, `node_modules/${pkg}/assemblysandbox/lib/assets`),
        '@fs/webcad-platform': path.resolve(__dirname, `node_modules/${pkg}/webcad-platform`),
      }
    }
  })
}

