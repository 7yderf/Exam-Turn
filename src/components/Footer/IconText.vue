<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps<{
  text: string
  icon: string
}>()

</script>
<template>
  <div class="icon-text__box">
    <Icon class="icon-text__icon" :name="icon"  />
    <p class="icon-text__text">{{ text }}</p>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/Mixins";
.icon-text{
  &__box{
    @include flex(center, false, flex-start);
  }
  &__icon{
    width: 18px;
    height: 18px;
    color: var(--text-invert);
    margin-left: 0px;
  }
  &__text{
    @include text(1.4rem, 400, 2.4rem, left);
    color: var(--text-invert);
  }
}

</style>