

<template>
  <NuxtLink :to="`/products/${id}`" class="row carSlide" :data-grid="isGird">
    <div class="home__five-img g-0 position-relative" :data-grid="isGird">
      <CardBullet v-if="legend" :bullet="legend" style="position: absolute" />
      <CardSlider :images="images" :typeproduct="'producto'" :grid="isGird" />
    </div>

    <div class="carSlide__text-content" :data-grid="isGird">
      <div class="carSlide__data" :data-grid="isGird">
        <div class="carSlide__box-hero">
          <CardBullet :bullet="type" />
          <p class="carSlide__title">
            {{ name }}
          </p>
        </div>
        <div class="carSlide__info" :data-grid="isGird">
          <span class="carSlide__info-text" :data-grid="isGird">{{
            brand
          }}</span>
          <Teleport
            v-if="on_Mounted"
            :disabled="isGird"
            :to="`#column-${index}`"
          >
            <span
              class="carSlide__info-text carSlide__info-text--model"
              :data-grid="isGird"
              >{{ model }}</span
            >
            <span
              class="carSlide__info-text carSlide__info-text--type"
              :data-grid="isGird"
              >{{ type == 'Usado'? tag : code }}</span
            >
          </Teleport>
        </div>
        <!-- <p class="turn-card-text-small text-start">{{subtitle}}</p> -->
        <div class="carSlide__prices">
          <span class="carSlide__prices-text-price" v-if="priceSale">
            {{ useformatPrice(priceMax) }}
          </span>
          <span v-if="priceMax" class="carSlide__prices-text-sale">
            {{ useformatPrice(priceMax) }}
          </span>
		  <div v-else class="carSlide__noPrice">
			<Icon name="ri:information-fill" class="carSlide__noPrice-icon" />
			<p class="carSlide__noPrice-text">{{ legend }}</p>
		  </div>
        </div>
        <div class="carSilde__quantity" v-show="!isGird">
          <FormNumberInputWithButtons v-model="quantity" :min="1" :max="qty" />
          <p class="carSlide__info-text" :data-grid="isGird">
            {{ qty }} disponibles
          </p>
          <div :id="`cart-${index}`"></div>
        </div>
      </div>
      <div class="carSlide__cart" :data-grid="isGird">
        <Teleport v-if="on_Mounted" :disabled="isGird" :to="`#cart-${index}`">
          <button class="carSlide__btn-box" :data-grid="isGird">
            <icon
              :name="
                isGird ? 'ri:shopping-cart-2-fill' : 'ri:shopping-basket-line'
              "
              class="carSlide__icon"
            />
          </button>
        </Teleport>

        <div :id="`column-${index}`" class="carSlide__box-row"></div>
      </div>
    </div>
  </NuxtLink>
</template>
<script lang="ts" setup>
const on_Mounted = ref<boolean>(false);

import { defineProps } from "vue";
type arrayImages = {
  link: string;
  Type: string;
};

const props = defineProps<{
  sale?: {
    type: string;
    default: "";
  };
  type: string;
  legend: string;
  name: string;
  qty: number;
  brand: string;
  model: string;
  code: string;
  priceMax?: number;
  priceSale?: number;
  isQuote?: string;
  images: arrayImages[];
  isGird?: boolean;
  index?: number;
  id?: string|number;
  tag?: string;
}>();

const quantity = ref(props.qty ? 1 : 0); // Valor inicial
onMounted(async () => {
  on_Mounted.value = true;
});
</script>
<style lang="scss" scoped>
@import "@/assets/scss/components/CardSilde.scss";
</style>
