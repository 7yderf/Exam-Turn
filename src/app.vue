<script setup lang="ts">
useHead({
  titleTemplate: (title) => title ? `${title} - Turn ` : 'Turn',
})
useServerSeoMeta({
  title: 'Turn',
  ogTitle: 'Turn my app',
  ogType: 'website',
  ogUrl: 'https://cozy-cobbler-561525.netlify.app/',
  ogLocale: 'es_MX',
  description: 'Desarrollo de software a la medida',
  ogDescription: 'Desarrollo de software a la medida',
  ogImage: 'https://cozy-cobbler-561525.netlify.app/turn_my_app.png',
  twitterCard: 'summary_large_image',
})
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
