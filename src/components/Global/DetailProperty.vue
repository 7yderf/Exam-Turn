<!-- eslint-disable vue/no-v-html -->
<template>

  <div
    class="property"
  >
    <div class="slide">
      <global-galery-detail
        :images="property.photos || []"
      />
    </div>
    <div class="property__main">
      <h6>{{ property.real_address }}</h6>
      <p class="property__location">
        {{ property.location.short_location }}
      </p>
      <p v-html="property.description_only" />
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
  </div>

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
.slide{
  width: 50%;
  padding: 16px;
}
.property {
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 3px 16px 110px 0px rgba(0, 0, 0, 0.17);
  width: 100%;
 
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

  @include for-size(tablet-landscape) {
    flex-direction: column;
    width: 100%;
    .slide{
      width: 100%;
    }
  }
}

</style>
