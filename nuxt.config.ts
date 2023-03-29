// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

export default defineNuxtConfig({
  css: [
    '@/assets/scss/Global.scss',
    '@/assets/fonts/outfit/style.css',
  ],
  srcDir: 'src',
  modules: ['nuxt-icon', '@pinia/nuxt'],
  imports: {
    dirs: ['./stores'],
  },
  build: {
    transpile: ['swiper']
  },
  nitro: {
    prerender: {
      routes: [ '/', '/about', '/methodologies', '/services'  ]
    }
  },
  vite: {
      plugins: [
       VueI18nVitePlugin({
        include: [
         resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')
         ]
       })
      ]
     },
  runtimeConfig: {
      // The private keys which are only available within server-side
      // apiSecret: "123",
      // Keys within public, will be also exposed to the client-side
      public: {
        API_BASE_URL: process.env.API_BASE_URL || "http://localhost:3000",
        // otherUrl: process.env.OTHER_URL || "default_other_url"
      }
    }
})
