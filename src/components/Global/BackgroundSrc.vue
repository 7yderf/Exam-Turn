<script lang="ts" setup>

defineProps<{
 imgSrc?: string
 blur?: boolean
 position?: string
 background?: string
 from?: string
}>()

</script>
<template>
  <div
    class="background-srcImg"
    :data-blur="blur"
    :data-from="from"
    :style="`--background: ${background}; --backdrop-filter: blur(60px);`"
  >
    <img
      v-if="!blur"
      :src="imgSrc"
      alt="city"
      :style="'object-position: ' + position"
    >
  </div>
</template>

<style lang="scss" scoped>
.background-srcImg{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
  object-position: center;
  z-index: -1;
  &[data-blur="true"]{
    background: var(--background);
    backdrop-filter: var(--backdrop-filter);
  }
}

</style>>
