<script setup lang="ts">
useHead({
  titleTemplate: (title) => title ? `${title} - Turn ` : 'Turn ',
})

</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
