// ~/plugins/gtm.client.ts
export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.hooks.hook('vue:setup', () => {
    useHead({
      script: [
        {
          async: true,
          src: 'https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.min.js',
          body: true,
        },
        {
          async: true,
          src: 'https://cdnjs.cloudflare.com/ajax/libs/simplex-noise/2.4.0/simplex-noise.min.js',
          body: true,
        },
      ],
      noscript: [
        {},
      ],
    })
  })
})
