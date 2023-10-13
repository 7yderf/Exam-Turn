// ~/plugins/gtm.client.ts
export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.hooks.hook('vue:setup', () => {
    const {
      public: { gtmContainerId, IS_PROD },
    } = useRuntimeConfig()

    if (!!IS_PROD && gtmContainerId) {
      console.log('🚀 ~ file: gtm.client.ts:9 ~ nuxtApp.hooks.hook ~ IS_PROD:', IS_PROD)
      useHead({
        script: [
          {
            async: true,
            src: `https://www.googletagmanager.com/gtag/js?id=${gtmContainerId}`,
            tagPriority: 'high',
          },
          {
            children: `window.dataLayer = window.dataLayer || [];
              function gtag() {
                  dataLayer.push(arguments);
              }
              gtag('js', new Date());
              gtag('config', '${gtmContainerId}');`,
            tagPriority: 'high',
          },
        ],
        noscript: [
          {},
        ],
      })
    }
  })
})
