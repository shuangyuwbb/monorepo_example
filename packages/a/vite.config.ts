import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
const __dirname = resolve()

export default defineConfig({
  plugins: [dts({ rollupTypes: true })],
  build: {
    outDir: './lib',
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [
        '@fs/utils', '@fs/fscadweb', '@fs/assemblysandbox'
      ]
    },
    lib: {
      entry: resolve(__dirname, './index.ts'),
      name: 'CrepesModel',
      fileName: 'index',
      formats: ['es']
    }
  }
})
