<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
const historyNav = useItemNav()
const products = ref<any>([]);
const {useFetch } = useProducts();
const { products_list, error }: any = await useFetch(null, null);
const grid = ref<boolean>(true);
products.value = products_list.value;


const on_Mounted = ref<boolean>(false);


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

  on_Mounted.value = true;
  

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
      <ListHero :total="products.total" :title="'Productos'" v-if="on_Mounted" @view="isGrid"/>
      <div class="row mt-5 w-100 " v-if="on_Mounted">
       
        <div class="products__card-desktop-box" :data-grid="grid"  >
          <CardMarketplace :products="products.data" :type="'products'" :grid="grid" />
        </div>
      </div>
      <hr class="mb-5">
      
      <ListPagination 
        v-if="on_Mounted" 
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