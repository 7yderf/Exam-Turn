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
          }
})

