<script lang="ts" setup>

defineProps<{
 imgSrc?: string
 blur?: boolean
 position?: string
}>()

</script>
<template>
  <div
    class="background-srcImg"
    :data-blur="blur"
  >
    <img
      v-if="!blur"
      :src="imgSrc"
      alt="city"
      :style="'object-position: ' + position"
    >
  </div>
</template>

<style>

</style>
