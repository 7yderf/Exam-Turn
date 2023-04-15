// ~/plugins/gtm.client.ts
export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.hooks.hook('vue:setup', () => {
		const {
			public: { fcbContainerId },
		} = useRuntimeConfig()

		if (fcbContainerId) {
			useHead({
				script: [
					{
						children: `! function(f, b, e, v, n, t, s) {
              if (f.fbq) return;
              n = f.fbq = function() {
                  n.callMethod ?
                      n.callMethod.apply(n, arguments) : n.queue.push(arguments)
              };
              if (!f._fbq) f._fbq = n;
              n.push = n;
              n.loaded = !0;
              n.version = '2.0';
              n.queue = [];
              t = b.createElement(e);
              t.async = !0;
              t.src = v;
              s = b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t, s)
          }(window, document, 'script',
              'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', ${fcbContainerId});
          fbq('track', 'PageView');`,
						tagPriority: 'high',
					},
				],
				noscript: [
					{
						children:`<img height="1" width="1" src="https://www.facebook.com/tr?id=${fcbContainerId}&ev=PageView&noscript=1" />`,
						tagPosition: 'bodyOpen',
					},
				],
			})
		}
	})
})