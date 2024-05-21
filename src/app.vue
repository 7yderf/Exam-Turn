<script setup lang="ts">
useHead({
  titleTemplate: title => (title ? `${title} - Grupo torres ` : 'Grupo torres'),
})
const mediaQueryXL = useMediaQueryXL()
onMounted(async () => {
  const { windowSize } = useMediaQuery('(min-width: 1200px)')
  mediaQueryXL.value = windowSize
  watch(
    () => windowSize.value,
    value => { mediaQueryXL.value = value },
  )
})
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
