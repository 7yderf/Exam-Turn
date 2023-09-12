

<template>
  <div class="row product">
    <div class="home__five-img g-0 position-relative">
      <CardBullet v-if="legend" :bullet="legend" style="position: absolute" />
      <CardSlider :images="images" :typeproduct="'producto'" :grid="'detail'" />
    </div>

    <div class="product__text-content">
      <div class="product__data">
        <div class="product__box-hero">
          <CardBullet :bullet="type" />
          <p class="product__title">
            {{ name }}
          </p>
        </div>
        <div class="product__info" style="flex-direction: column">
          <span class="product__info-text mt-1">{{
            brand
          }}</span>
          
          <div class="product__box-row ">
            <span
              class="product__info-text product__info-text--model"
            
              >{{ model }}</span
            >
            <span
              class="product__info-text product__info-text--type"
              >{{ type == 'Usado' || type == 'Remanufacturado' ? tag : code }}</span
            >
            <span v-if="color"
              class="product__info-text product__info-text--color"
              >{{ color.Name }}</span
            >
            <span v-if="tapiz"
              class="product__info-text product__info-text--tapiz"
              >{{ tapiz.Name }}</span
            >
          </div>
        </div>
        <!-- <p class="turn-card-text-small text-start">{{subtitle}}</p> -->
        <div class="product__prices">
          <span class="product__prices-text-price" v-if="priceSale">
            {{ useformatPrice(priceMax) }}
          </span>
          <span v-if="priceMax" class="product__prices-text-sale">
            {{ useformatPrice(priceMax) }}
          </span>
		  <div v-else class="product__noPrice">
			<Icon name="ri:information-fill" class="product__noPrice-icon" />
			<p class="product__noPrice-text">{{ legend }}</p>
		  </div>
        </div>
        <div class="carSilde__quantity">
          <FormNumberInputWithButtons v-model="quantity" :min="1" :max="qty" />
          <p class="product__info-text">
            {{ qty }} disponibles
          </p>
          <div class="product__content-buttons">
            <button class="product__btn-box">
              <icon
                :name="'ri:shopping-cart-2-fill'"
                class="product__icon"
              />
            </button>
            <button class="product__btn-box product__btn-box--whats">
              <icon
                :name="'logos:whatsapp-icon'"
                class="product__icon"
              />
            </button>
          </div>
        </div>
      </div>
      <div class="product__cart">
      </div>
    </div>
  </div>
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
  color: [] | null;
  tapiz: [] | null;
  tag: string;
}>();

const quantity = ref(props.qty ? 1 : 0); // Valor inicial
onMounted(async () => {
  on_Mounted.value = true;
});
</script>
<style lang="scss" scoped>
@import "@/assets/scss/components/DetailProduct.scss";
</style>
