import Lightgallery from 'lightgallery/vue/LightGalleryVue.common'

import 'lightgallery/scss/lightgallery.scss'
import 'lightgallery/scss/lg-zoom.scss'
import 'lightgallery/scss/lg-thumbnail.scss'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('VLightgallery', Lightgallery)
})
