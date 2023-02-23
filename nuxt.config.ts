// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    // ssr: false,
    css: [  
            "~/assets/fonts/outfit/style.css",
            "~/assets/fonts/iconsax/style.css",
            "~/assets/scss/main.scss",
            "~/assets/scss/Home.scss"
        ],
    build: {
            transpile: ['swiper']
          },
    nitro: {
            prerender: {
              routes: [ '/index', '/About' ]
            }
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

