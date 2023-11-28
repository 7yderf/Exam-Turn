import { VueReCaptcha } from 'vue-recaptcha-v3'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(VueReCaptcha, {
    siteKey: '6LcU864kAAAAAJ4oJDIDGPZjpXgXRwMSyfJBlx6s',
  })
})
