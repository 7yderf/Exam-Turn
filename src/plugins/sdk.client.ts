// ~/plugins/gtm.client.ts
export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.hooks.hook('vue:setup', () => {
    const {
      public: { IS_PROD },
    } = useRuntimeConfig()

    if (IS_PROD) {
      useHead({
        script: [

          {
            children:
            `
              window.smartlook||(function(d) {
              var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
              var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
              c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
              })(document);
              smartlook('init', 'cf744b3827b28c810954de8d14932fd2a4332577', { region: 'eu' });
            `,
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
