// ~/plugins/gtm.client.ts
export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.hooks.hook('vue:setup', () => {
		const {
			public: { gtmContainerId },
		} = useRuntimeConfig()

		if (gtmContainerId) {
			useHead({
				script: [
          {
            children:`<script async src='https://www.googletagmanager.com/gtag/js?id=${gtmContainerId}'><script>`,
            tagPriority: 'high',
          },
					{
						children: `window.dataLayer = window.dataLayer || [];
              function gtag() {
                  dataLayer.push(arguments);
              }
              gtag('js', new Date());
              gtag('config', ${gtmContainerId});`,
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