import { resolve } from 'path'
import { defineConfig } from 'vite'
import styleImport from 'vite-plugin-style-import'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, '/src')
    }
  },
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style/index`
        }
      ]
    })
  ]
})

