// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://hotaka-law.hotaka-g.jp/',
  integrations: [sitemap()],
  // 💡 ViteのCSSプリプロセッサ設定を追加
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // node_modules（依存関係）内の古いSass書き方による警告を非表示にする
          quietDeps: true,
          // 最新のSassコンパイラ APIを使用することを明示（推奨）
          // api: 'modern-compiler',
        },
      },
    },
  },
})
