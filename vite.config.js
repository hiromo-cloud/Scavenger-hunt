import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // 開発サーバーのポート番号を指定（任意）
    port: 3000,
    // ホストを公開して他のデバイスから確認可能にする場合
    host: true
  },
  build: {
    // 本番環境でのチャンク分割の最適化
    outDir: 'dist',
    sourcemap: false
  }
})
