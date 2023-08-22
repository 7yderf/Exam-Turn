<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
const historyNav = useItemNav()
const products = ref<any>([]);
const {useFetch } = useProducts();
const { products_list, error }: any = await useFetch(null, null);
const grid = ref<boolean>(true);
products.value = products_list.value;

const device = ref<boolean>(true);
const on_Mounted = ref<boolean>(false);
const load = ref<boolean>(true);

const pagination = async (data: any) => {
  const { products_list, error }: any = await useFetch(null, data);
  products.value = products_list.value;
}
const isGrid = async (data: any) => {
 grid.value = data;
}

definePageMeta({
    middleware: 'observer-nav',
    icon: 'mdi-home',
    title: 'Productos',
    });

onMounted(async () => {

  const { windowSize } = useMediaQuery("(min-width: 767px)");
  device.value = windowSize.value;
  
  watch(() => windowSize.value, (value) => {
    device.value = value;
  });

  on_Mounted.value = true;
  load.value = false;

});

useHead({
  title: 'Productos',
  link: [
    { rel: 'canonical', href: 'https://turn.com.mx/' },
  ],
})
useSeoMeta({
  title: 'Productos',
})

</script>
<template>
  <main class="products__main mb-5">
    <article class="container">
      <ListNavDirectory :links="historyNav"/>
    </article>
    
    <article class="container products__products">
      <ListHero :total="products.total" :title="'Productos'" v-if="!load" @view="isGrid"/>
      <div class="row mt-5 w-100 " v-if="!load">
       
        <div class="products__card-desktop-box" :data-grid="grid"  >
          <div class="products__card-desktop" :data-grid="grid" v-for="(card, index) in products.data || []" :key="index">
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
              :isGird="grid"
              :index="index" 
             
            />
          </div>
        </div>
      </div>
      <hr class="mb-5">
      
      <ListPagination 
        v-if="!load" 
        :links="products.links" 
        :current="products.current_page"
        @linkPagination="pagination" />
    </article>

    <!-- <BotonContacto /> -->

  </main>
</template>


<style lang="scss" scoped>
@import "@/assets/scss/products.scss";

</style>