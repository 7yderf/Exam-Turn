<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
const isRezise = useSizeResponsive();

const {useFetch } = useProducts();
const { products_list, error }: any = await useFetch('highlights', null);
const { products_list:products_offers, error: error_offers }: any = await useFetch('offers', null);


const deviceMobile = ref<boolean>(true);
const on_Mounted = ref<boolean>(false);
const load = ref<boolean>(true);
const faqItems = useFaqItems();
const howBuy = useHowBuy();

onMounted(async () => {

  const { windowSize: mobileSize } = useMediaQuery("(min-width: 535px)");
  deviceMobile.value = mobileSize.value;

  watch(() => mobileSize.value, (value) => {
    deviceMobile.value = value;
  });

  on_Mounted.value = true;
  load.value = false;

});

useHead({
  title: 'Inicio',
  link: [
    { rel: 'canonical', href: 'https://turn.com.mx/' },
  ],
})
useSeoMeta({
  title: 'Inicio',
})

</script>
<template>
  <main class="home__main">
    <article class="home__hero">
      <img :src="deviceMobile ? '/home/baner-opt.png' : '/home/bannerOptMobile.png'" alt="">
    </article>
    <article class="container home__products">
      <div class="home__title-content">
        <HomeTitles title="productos destacados" />
        <div id="transport-prod"></div>
      </div>
      <div class="row mt-5 w-100 " v-if="on_Mounted">
        <CardCarousel  :cards="products_list?.data || []" :type="'tecno'"  class="home__card-mobile"/>
        <div class="home__card-desktop-box ">
         <CardMarketplace :products="products_list?.data || []" :type="'products'" :grid="true" from="home"/>
        </div>
      </div>
      <Teleport v-if="on_Mounted" :disabled="isRezise" to="#transport-prod">
        <button class="home__btn-outline">
          <router-link to="/products">VER TODOS</router-link>
          <icon name="ri:arrow-right-line" class="home__btn-icon" />
        </button>
      </Teleport>
    </article>
    <article class="home__How-buy">
      <div class="home__How-buy-title container">
        <h3>¿Cómo comprar con nosotros?</h3>
        <p>¡Gracias por tu interés en comprar con nosotros! Estos son los pasos para realizar tu compra</p>
      </div>
      <div class="home__How-buy-container container">
        <CardHowToBuy v-for="how, index in howBuy" 
        :key="index" 
        :name="how.name" 
        :type="how.type"
        :description="how.description"
        :images="how.images"
        :icon="how.icon" 
        />
      </div>
    </article>
    <article class="container home__products">
      <div class="home__title-content">
        <HomeTitles title="Ofertas" />
        <div id="transport-sale"></div>
      </div>
      <div class="row mt-5 w-100" v-if="on_Mounted">
        <CardCarousel  :cards="products_offers?.data || [] " :type="'tecno'" class="home__card-mobile"/>
        <div class="home__card-desktop-box">
          <CardMarketplace :products="products_offers?.data || []" :type="'products'"  :grid="true" from="home"/>
        </div>
      </div>

      <Teleport v-if="on_Mounted" :disabled="isRezise" to="#transport-sale">
        <button class="home__btn-outline">
          <router-link to="/products">VER TODOS</router-link>
          <icon name="ri:arrow-right-line" class="home__btn-icon" />
        </button>
      </Teleport>
    </article>
    <article class="container-fluid home__faq">
      <HomeAccordion :title="'PREGUNTAS FRECUENTES'" :items="faqItems" />
    </article>




    <!-- <BotonContacto /> -->

  </main>
</template>


<style lang="scss" scoped>
@import "@/assets/scss/Home.scss";
</style>