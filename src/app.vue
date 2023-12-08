<script setup lang="ts">
useHead({
  titleTemplate: title => (title ? `${title} - exsin ` : 'exsin'),
})

</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
