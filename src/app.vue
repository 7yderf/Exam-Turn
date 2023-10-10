<script setup lang="ts">
useHead({
  titleTemplate: title => (title ? `${title} - Turn ` : 'By gobeyond'),
})

</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
