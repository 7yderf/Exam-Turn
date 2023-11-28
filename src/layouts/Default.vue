<!-- eslint-disable vue/no-multiple-template-root -->
<template>

  <Navbar />

  <div class="container-fluid overflow g-0">
    <slot />
  </div>
  <Footer />
</template>

<script lang="ts" setup>

onMounted(async () => {})

</script>
<style lang="scss" scoped>
    .overflow {
        overflow-x: hidden;
        height: 100%;
    }
</style>
