// ~/plugins/gtm.client.ts
export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.hooks.hook('vue:setup', () => {
		const {
			public: { adsContainerId, IS_PROD },
		} = useRuntimeConfig()

		if ( !!IS_PROD && adsContainerId) {
			useHead({
				script: [
          {
						async: true,
            src:`https://www.googletagmanager.com/gtag/js?id=${adsContainerId}`,
            tagPriority: 'high',
          },
					{
						children: `window.dataLayer = window.dataLayer || [];
            function gtag() {
                dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', '${adsContainerId}');`,
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