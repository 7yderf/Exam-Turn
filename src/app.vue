<script setup lang="ts">
useHead({
  titleTemplate: (title) => title ? `${title} - Turn - Especialistas en sistemas web y apps móviles` : 'Turn My App - Especialistas en sistemas web y apps móviles',
})
useServerSeoMeta({
  title: 'Turn',
  ogTitle: 'Turn my app',
  ogType: 'website',
  ogUrl: 'https://turn.com.mx/',
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
