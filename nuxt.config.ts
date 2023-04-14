// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: { lang: 'es'},
      meta: [
        { 
          name: 'Turn My App - Especialistas en desarrollar sistemas web y aplicaciones móviles que transforman la manera de hacer negocios',
          content: 'Especialistas en desarrollar sistemas web y aplicaciones móviles que transforman la manera de hacer negocios',
          
          
        },
      ],
      link: [{rel: 'icon', type: 'image/png', href: '/favicon.png'}]
    },
  },
  css: [
    '@/assets/scss/Global.scss',
    '@/assets/fonts/outfit/style.css',
  ],
  srcDir: 'src',
  modules: ['nuxt-icon', '@pinia/nuxt', 'nuxt-simple-sitemap', ['@nuxtjs/robots', {
    UserAgent: '*',
    Disallow: '/',
    BlankLine: true ,
    Comment: 'Comment here',
    Sitemap: 'https://turnv.demosturn.com/sitemap.xml'
  }],],
  
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
  // hooks: {
  //   'vite:extendConfig' (config, { isClient }) {
  //     if (isClient) {
  //       config.base = './'
  //     }
  //   }
  // },
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
        siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://urlpage.com',
        // otherUrl: process.env.OTHER_URL || "default_other_url"
      }
    },
})
