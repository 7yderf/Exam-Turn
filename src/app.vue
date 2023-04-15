<script setup lang="ts">
useHead({
  titleTemplate: (title) => title ? `${title} - Turn My App - Especialistas en desarrollar sistemas web y aplicaciones móviles` : 'Turn My App - Especialistas en desarrollar sistemas web y aplicaciones móviles',
})
useServerSeoMeta({
  title: 'Turn',
  ogTitle: 'Turn my app',
  ogType: 'website',
  ogUrl: 'https://turnv.demosturn.com/',
  ogLocale: 'es_MX',
  description: 'Especialistas en desarrollar sistemas web y aplicaciones móviles que transforman la manera de hacer negocios',
  ogDescription: 'Especialistas en desarrollar sistemas web y aplicaciones móviles que transforman la manera de hacer negocios',
  ogImage: 'https://turnv.demosturn.com/turn_my_app.png',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Turn my app',
  twitterDescription: 'Especialistas en desarrollar sistemas web y aplicaciones móviles que transforman la manera de hacer negocios',
  twitterSite: '@turnmyapp',
  twitterCreator: '@turnmyapp',
  twitterImage: 'https://turnv.demosturn.com/turn_my_app.png',
})

</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
