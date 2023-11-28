<script lang="ts" setup>
defineProps<{
  title?: string,
  description: string,
  background: string,
  blur: string,
  boxShadow?: boolean,
}>()

</script>
<template>
  <div
    class="space-blur box"
    :data-shadow="boxShadow"
    :style="{
      background: background,
      backdropFilter: `blur(${blur})`,
    }"
  >
    <h4 class="space-blur__title">
      {{ title }}
    </h4>
    <p class="space-blur__description">
      {{ description }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/Mixins";

.space-blur{
  border-radius: 8px;
  p{
    @include text(2rem, 500, 2.8rem);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    letter-spacing: 0.5px;

  }
  &[data-shadow="true"]{
    @include shadow;
  }
  @include for-size(tablet-portrait) {
   p{
    font-size: 1.6rem;
   }
  }
}
</style>
