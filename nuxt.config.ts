// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: { lang: 'es' },
      meta: [
        {
          name: '',
          content: '',

        },
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.ico' }],
    },
  },
  css: [
    '@/assets/scss/Global.scss',
    '@/assets/fonts/artegra/style.css',
  ],
  srcDir: 'src',
  modules:
  [
    'nuxt-icon', '@pinia/nuxt', 'nuxt-simple-sitemap',
    // si el variable de entorno es develop no inciar el robots
    process.env?.NUXT_PRODUCTION
    && [
      '@nuxtjs/robots',
      {
        UserAgent: '*',
        Disallow: '/',
        BlankLine: true,
        Comment: 'Comment here',
        Sitemap: 'https://turn.com.mx/sitemap.xml',
      },
    ],

  ],

  imports: {
    dirs: ['./stores'],
  },
  build: {
    transpile: ['swiper'],
  },
  nitro: {
    prerender: {
      routes: [
        '/',
        '/property',
        '/property/[id]',
        '/about',
        '/services',
      ],
    },
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
          resolve(dirname(fileURLToPath(import.meta.url)), './locales/**'),
        ],
      }),
    ],
  },
  runtimeConfig: {
    // The private keys which are only available within server-side
    // apiSecret: "123",
    // Keys within public, will be also exposed to the client-side
    public: {
      API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:3000',
      API_KEY: process.env.API_KEY || '123',
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://urlpage.com',
      gtmContainerId: process.env.NUXT_PUBLIC_GTM_CONTAINER_ID || 'GTM-XXXXXXX',
      fcbContainerId: process.env.NUXT_PUBLIC_FCB_CONTAINER_ID || 'FCB-XXXXXXX',
      adsContainerId: process.env.NUXT_PUBLIC_ADS_CONTAINER_ID || 'ADS-XXXXXXX',
      IS_PROD: process.env?.NUXT_PRODUCTION || '',
      // otherUrl: process.env.OTHER_URL || "default_other_url"
    },
  },
})
