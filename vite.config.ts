import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Markdown from 'vite-plugin-md'
import styleImport from 'vite-plugin-style-import'
import { VitePWA } from 'vite-plugin-pwa'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import Inspect from 'vite-plugin-inspect'
import Prism from 'markdown-it-prism'
import LinkAttributes from 'markdown-it-link-attributes'
import Unocss from 'unocss/vite'
import { presetUno } from 'unocss'
import presetAttributify from '@unocss/preset-attributify'
import presetIcons from '@unocss/preset-icons'
import mix from 'vite-plugin-mix'

const markdownWrapperClasses = 'prose prose-stone mx-auto prose-headings:text-rose-600 dark:prose-headings:text-indigo-400 prose-pre:bg-stone-800 dark:prose-invert prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-a:hover:text-indigo-700 prose-a:focus:text-indigo-700'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ['vue', 'md'],
    }),
    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        '@vueuse/head',
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
    }),
    styleImport({
      libs: [{
        libraryName: 'element-plus',
        esModule: true,
        ensureStyleFile: true,
        resolveStyle: (name) => {
          name = name.slice(3)
          return `element-plus/packages/theme-chalk/src/${name}.scss`
        },
        resolveComponent: (name) => {
          return `element-plus/lib/${name}`
        },
      }],
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      // custom resolvers
      resolvers: [],
      dts: 'src/components.d.ts',
    }),
    Unocss({
      presets: [
        presetUno(),
        presetIcons({
          extraProperties: {
            display: 'inline-block',
          },
        }),
        presetAttributify({ /* options */ }),
      ],
      rules: [
        // https://codepen.io/peruvianidol/full/1ef232a3401bca5717bb7d36d295fd4f
        // Palett makes
        // https://video.twimg.com/tweet_video/FE2Ef5OakAAd6x5.mp4
        [/^grid-minmax-(.+)$/, ([, d]) => ({ 'grid-template-columns': `repeat(auto-fit, minmax(${d}, 1fr))` })],
      ],
    }),
    // https://github.com/antfu/vite-plugin-md
    Markdown({
      wrapperClasses: markdownWrapperClasses,
      headEnabled: true,
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Prism)
        md.use(LinkAttributes, {
          pattern: /^https?:\/\//,
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })
      },
    }),
    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'safari-pinned-tab.svg'],
      manifest: {
        name: 'Campfire App',
        short_name: 'Campfire',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
    // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, 'locales/**')],
    }),
    mix({
      handler: './server/index.ts',
    }),
    // https://github.com/antfu/vite-plugin-inspect
    Inspect({
      // change this to enable inspect for debugging
      enabled: true,
    }),
  ],
  server: {
    fs: {
      strict: true,
    },
    host: true,
  },
  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
  },
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
      '@vueuse/head',
    ],
    exclude: [
      'vue-demi',
    ],
  },
})
