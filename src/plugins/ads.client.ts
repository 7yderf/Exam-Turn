// ~/plugins/gtm.client.ts
export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.hooks.hook('vue:setup', () => {
		const {
			public: { adsContainerId },
		} = useRuntimeConfig()

		if (adsContainerId) {
			useHead({
				script: [
          {
            children:`<script async src="https://www.googletagmanager.com/gtag/js?id=${adsContainerId}"></script>`,
            tagPriority: 'high',
          },
					{
						children: `window.dataLayer = window.dataLayer || [];
            function gtag() {
                dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', ${adsContainerId});`,
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