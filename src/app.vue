<script setup lang="ts">
useHead({
  titleTemplate: title => (title ? `${title} - Turn ` : 'exsin'),
})

</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
