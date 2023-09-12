

<template>
  <div class="row carSlide" :data-grid="isGird">
    <div class="home__five-img g-0" :data-grid="isGird">
      <!-- <img :src="images[0].link" alt="portfolio" class="img__default" /> -->
      <CardSlider :images="images" :typeproduct="'circuito'" :grid="isGird"/>
    </div>
    <div class="carSlide__text-content" :data-grid="isGird">
      <div class="carSlide__data circuits" :data-grid="isGird">
        <div class="carSlide__box-hero">
          <!-- <CardBullet :bullet="type" /> -->
          <p class="carSlide__title">
            {{ name }}
          </p>
        </div>
        <div class="carSlide__info" :data-grid="isGird">
          <Teleport v-if="on_Mounted" :disabled="isGird" :to="`#column-${index}`">
            <p class="carSlide__info-text carSlide__info-text--quantity" :data-grid="isGird">{{qty}} <span v-if="isGird">Productos </span></p>
          </Teleport>
        </div>
        <!-- <p class="turn-card-text-small text-start">{{subtitle}}</p> -->
        <div class="carSlide__prices">
          <span  v-if="priceMax" class="carSlide__prices-text-sale">
            {{ useformatPrice(priceMax) }}
          </span>
          <div v-else class="carSlide__noPrice">
            <Icon name="ri:information-fill" class="carSlide__noPrice-icon" />
            <p class="carSlide__noPrice-text">{{ legend }}</p>
		  </div>
        </div>
        <div class="carSlide__quantity" v-show="!isGird">
          <FormNumberInputWithButtons 
          v-model="quantity" 
          :min="1" 
          :max="1" 
          />
         
          <div :id="`cart-${index}`"></div>
          </div>
       </div> 
       <div class="carSlide__cart" :data-grid="isGird">
        <Teleport v-if="on_Mounted" :disabled="isGird" :to="`#cart-${index}`">
            <button class="carSlide__btn-box" :data-grid="isGird">
              <icon :name="isGird ?'ri:shopping-cart-2-fill':'ri:shopping-basket-line'" class="carSlide__icon" />
            </button>
        </Teleport>
        
        <div :id="`column-${index}`" class="carSlide__box-row"></div>
      </div>
    </div>
    
  </div>
</template>
<script lang="ts" setup>
const on_Mounted = ref<boolean>(false);
type arrayImages = {
  link: string;
  Type: string;
};

const props = defineProps<{
  name: string;
  legend: string;
  qty: number;
  priceMax: number;
  images: arrayImages[];
  isGird?: boolean;
	index?: number;
}>();

const quantity = ref(props.qty ? 1 : 0); // Valor inicial
onMounted(async () => {
		on_Mounted.value = true;
});
</script>
<style lang="scss" scoped>
@import "@/assets/scss/components/CardSilde.scss";
</style>
