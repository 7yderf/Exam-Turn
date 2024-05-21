<script lang="ts" setup>
type dataWidth = {
  maxWidht?: string
  sizeCard?: string
  cards?: number
  gap?: string | number
}

defineProps<{
  ubication?: string
  width?: dataWidth
  gap?: string | number
}>()
</script>
<template>
  <section
    class="container home__property"
    :style="`gap: ${gap}`"
  >
    <div class="box home__property-hero">
      <slot name="hero" />
    </div>
    <div class="home__property-filters">
      <slot name="filters" />
    </div>
    <div
      class="home__property-body"
      :data-ubication="ubication"
      :style="{
        '--size-card': width?.sizeCard,
        '--cards': width?.cards,
        '--gap': width?.gap || '16px',
        '--max-width': width?.maxWidht || '100%',
      }"
    >
      <slot name="content" />
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/Mixins";

.home{
  &__property{
    @include flex;
    flex-direction: column;
    padding: 70px 0;
  }
  &__property-hero{
    @include flex(center);
    flex-direction: column;
    width: 100%;
    padding-bottom: 32px
  }
  &__property-body{
    @include flex(inherit, var(--gap), stretch);
    flex-wrap: wrap;
    margin: auto;
    &[data-ubication="left"]{
      width: calc((var(--size-card) * var(--cards)) + (var(--gap) * (var(--cards) - 1)));
      justify-content: flex-start;
    }
    &[data-ubication="right"]{
      width: calc((var(--size-card) * var(--cards)) + (var(--gap) * (var(--cards) - 1)));
      justify-content: flex-end;
    }
    &[data-ubication="center"]{
      justify-content: center;
      max-width: var(--max-width);
    }
  }
}

</style>
