<script setup lang="ts">
useHead({
  titleTemplate: (title) => title ? `${title} - Turn ` : 'Turn',
})
useServerSeoMeta({
  title: 'Turn',
  ogTitle: 'Turn my app',
  description: 'Description de la página',
  ogDescription: 'Description de la pagina para redes sociales',
  ogImage: 'https://cozy-cobbler-561525.netlify.app/turn.png',
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
