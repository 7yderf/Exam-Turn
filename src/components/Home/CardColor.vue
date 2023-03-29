<template>
  <div 
  class="card-color"
  :style="`background-color: ${color}; width: ${whith}`"
  >
    {{ text }}
  </div>
  
</template>
<script lang="ts" setup>

import { defineProps } from "vue";
const props = defineProps<{
  text: string,
  color: string,
  whith?: string
}>();

</script>

<style lang="scss" scoped>
@import "@/assets/scss/Mixins";

.card-color{
  width: 30%;
  @include flex;
  @include text(1.6rem, 400, 2.8rem, center);
  margin: 8px 0px;
  height: 40px;
  
}

</style>