<!-- eslint-disable vue/max-len -->
<!-- eslint-disable vue/no-v-html -->
<!-- `/property/${property.id}` -->
<template>

  <nuxt-link
    :to="''"
    class="property"
  >
    <div class="slide">
      <global-slider
        v-if="!load"
        :images="property?.title_image_thumb ? [property.title_image_thumb] : ['./backgrounds/no-images.png']"
      />
    </div>
    <div class="property__main">
      <h6>{{ property.title }}</h6>
      <p class="property__location">
        {{ property.location }}
      </p>
      <div class="property__description-html">
        <p class="property__type">
          {{ operationType }}
        </p>
        <div class="property__prices">
          <p>
            {{ property.operations[0].formatted_amount }}
          </p>
          <!-- <p v-html="property.operations[0].prices[0].currency === 'USD' ? `USD m<sup><small>2</small></sup>` : property.operations[0].prices[0].currency " /> -->
        </div>
      </div>
    </div>
  </nuxt-link>

</template>

<script lang="ts" setup>

const load = useload()

const props = defineProps<{
  property: {
    operations: []
  } | any;
}>()

const translateType: { [key: string]: string} = {
  rental: 'Renta',
  sale: 'Venta',
  temporary_rental: 'Renta Temporal',
}

const operationType = computed(() => {
  console.log('🚀 ~ load:', load.value)
  return translateType[props.property.operations[0].type] || 'Venta'
})

// limirar el numero de caracteres de la descripcion
</script>

<style lang="scss" scoped>
@import "@/assets/scss/Mixins";
.property {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 3px 16px 110px 0px rgba(0, 0, 0, 0.17);
  width: 270px;
  position: relative;
  &__main{
    @include flex(center, 8px);
    flex-direction: column;
    padding: 16px;
    flex-grow: 1;
    h6{
      @include text(1.6rem, 500, 2.4rem, center);
    }
  }
  &__description-html{
    @include flex(flex-end, 4px, flex-end);
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
    flex-grow: 1;
    padding-top: 8px;
    padding-bottom: 4px
  }
  &__location{
    @include text(1.4rem, 600, 1.8rem, center);
  }
  &__type{
    @include text(1.6rem, 600, 1.8rem, center);
    color: var(--text-invert);
    background: var(--primary-color);
    padding: 5px 16px 4px;
    position: absolute;
    top: 20px;
    z-index: 1;
  }
  &__prices{
    @include flex(center, 4px, center);
    width: 100%;
    p{
      @include text(2rem, 600, 1.8rem, center);
      color: var(--primary-color);
    }
  }
}
</style>
