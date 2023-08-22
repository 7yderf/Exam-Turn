<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";


const {useFetch } = useProducts();
const { products_list, error }: any = await useFetch('highlights', null);
console.log("🚀 ~ file: index.vue:6 ~ products_list:", products_list)
const { products_list:products_offers, error: error_offers }: any = await useFetch('offers', null);
console.log("🚀 ~ file: index.vue:8 ~ products_offers:", products_offers)

const device = ref<boolean>(true);
const deviceMobile = ref<boolean>(true);
const on_Mounted = ref<boolean>(false);
const load = ref<boolean>(true);
const faqItems = useFaqItems();

onMounted(async () => {

  const { windowSize } = useMediaQuery("(min-width: 767px)");
  const { windowSize: mobileSize } = useMediaQuery("(min-width: 535px)");
  

  device.value = windowSize.value;
  deviceMobile.value = mobileSize.value;

  watch(() => windowSize.value, (value) => {
    device.value = value;
  });

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
      <div class="row mt-5 w-100 " v-if="!load">
        <HomeCarousel  :cards="products_list?.data || []" :type="'tecno'"  class="home__card-mobile"/>
        <div class="home__card-desktop-box " v-if="!load">
          <div class="home__card-desktop" v-for="(card, index) in products_list.data || []" :key="index">
            <HomeCardslide 
              :sale="card?.Sale" 
              :type="card.Type" 
              :name="card.Name" 
              :brand="card.brand?.Name"
              :model="card.Model" 
              :code="card.Code" 
              :priceMax="card.Price" 
              :priceSale="card?.PriceSale"
              :isQuote="card?.IsQuote" 
              :images="card.images" 
            />
          </div>
        </div>
      </div>
      <Teleport v-if="on_Mounted" :disabled="device" to="#transport-prod">
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
        <CardHowToBuy :type="'Paso 1'" :name="'Explora nuestro catálogo'"
          :description="'Agrega los productos al carrito de compras y ve al carrito para finalizar la compra.'"
          :images="'/home/HowToBuy-1.png'" :icon="'ri:shopping-basket-line'" />
        <CardHowToBuy :type="'Paso 2'" :name="'Revisa tu carrito'"
          :description="'Completa el formulario de facturación y elige tu método de pago. Haz clic en “Cotizar pedido”'"
          :images="'/home/HowToBuy-2.png'" :icon="'ri:price-tag-2-line'" />
        <CardHowToBuy :type="'Paso 3'" :name="'Finaliza la cotización'"
          :description="'Te cotizaremos tus productos y el envío y te proporcionaremos los detalles cotizados.'"
          :images="'/home/HowToBuy-3.png'" :icon="'ri:hand-heart-line'" />
      </div>
    </article>
    <article class="container home__products">
      <div class="home__title-content">
        <HomeTitles title="Ofertas" />
        <div id="transport-sale"></div>
      </div>
      <div class="row mt-5 w-100">
        <HomeCarousel  :cards="products_offers?.data || [] " :type="'tecno'" class="home__card-mobile" v-if="!load"/>
        <div class="home__card-desktop-box" v-if="!load">
          <div class="home__card-desktop" v-for="(card, index) in products_offers?.data || []" :key="index">
            <HomeCardslide 
              :sale="card?.Sale" 
              :type="card.Type" 
              :name="card.Name" 
              :brand="card.brand?.Name"
              :model="card.Model" 
              :code="card.Code" 
              :priceMax="card.Price" 
              :priceSale="card?.PriceSale"
              :isQuote="card?.IsQuote" 
              :images="card.images" 
            />
          </div>
        </div>
      </div>

      <Teleport v-if="on_Mounted" :disabled="device" to="#transport-sale">
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