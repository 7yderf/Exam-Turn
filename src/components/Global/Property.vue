<!-- eslint-disable vue/no-v-html -->
<template>

  <nuxt-link
    :to="`/property/${property.id}`"
    class="property"
  >
    <div class="slide">
      <global-slider
        :images="property.photos || []"
      />
    </div>
    <div class="property__main">
      <h6>{{ property.real_address }}</h6>
      <p class="property__location">
        {{ property.location.short_location }}
      </p>
      <div class="property__description-html">
        <p class="property__type">
          {{ property.operations[0].operation_type === 'Rent' ? 'Renta' : 'Venta' }}
        </p>
        <div class="property__prices">
          <p>
            {{ useformatPrice(property.operations[0].prices[0].price) }}
          </p>
          <p>
            {{ property.operations[0].prices[0].currency }}
          </p>
        </div>
      </div>
    </div>
  </nuxt-link>

</template>

<script lang="ts" setup>
const props = defineProps<{
  property: {
    photos: []
  } | any;
}>()

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
  &__main{
    @include flex(flex-start, 8px, flex-start);
    flex-direction: column;
    padding: 16px;
    flex-grow: 1;
    h6{
      font-weight: 700;
      font-size: 1.6rem;
    }
  }
  &__description-html{
    @include flex(flex-end, 4px, flex-end);
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
    flex-grow: 1;
    padding-top: 16px;
    position: relative;
  }
  &__location{
    @include text(1.4rem, 600, 1.8rem);
    color: #293831c4;
  }
  &__type{
    font-size: 32px;
    font-weight: 700;
    color: #29383138;
  }
  &__prices{
    @include flex(flex-end, 4px, flex-end);
    width: 100%;
    p{
      font-weight: 600;
      color: #293831c4;
    }
  }
}
</style>
