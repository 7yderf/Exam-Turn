<!-- eslint-disable vue/no-v-html -->
<template>

  <div class="property">
    <div class="slide">
      <global-slider
        :images="property.photos || []"
      />
    </div>
    <div class="property__main">
      <h6>{{ property.real_address }}</h6>
      <p>{{ property.location.short_location }}</p>
      <div class="property__description-html">
        <p>
          {{ descripcionShort }}...
        </p>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
const props = defineProps<{
  property: {
    photos: []
  } | any;
}>()

// limirar el numero de caracteres de la descripcion

const descripcionShort = props.property.description.substring(0, 100).trim()

</script>

<style lang="scss" scoped>
@import "@/assets/scss/Mixins";
.property {
  @include border;
  width: 300px;
  &__main{
    @include flex(center, 8px, flex-start);
    flex-direction: column;
    padding: 16px;
  }
}
</style>
