<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
const historyNav = useItemNav()
const circuits = ref<any>([]);
const { useFetchCircuits } = useCircuits();
const { circuits_list }: any = await useFetchCircuits(null, null);
const grid = ref<boolean>(true);
circuits.value = circuits_list.value;

const on_Mounted = ref<boolean>(false);


const pagination = async (data: any) => {
  const { circuits_list, error }: any = await useFetchCircuits(null, data);
  circuits.value = circuits_list.value;
}
const isGrid = async (data: any) => {
  grid.value = data;
}

definePageMeta({
    middleware: 'observer-nav',
    icon: 'mdi-home',
    title: 'Circuitos',
    });

onMounted(async () => {
    
  on_Mounted.value = true;

});
useHead({
  title: "Inicio",
  link: [
    {
      rel: "canonical",
      href: "https://turn.com.mx/",
    },
  ],
});
useSeoMeta({
  title: "Circuitos",
});

</script>

<template>
  <main class="products__main mb-5">
    <article class="container">
      <ListNavDirectory :links="historyNav"/>
    </article>
    <article class="container products__products">
    <ListHero :total="circuits.total" :title="'Circuitos'" v-if="on_Mounted" @view="isGrid"/>
      <div class="row mt-5 w-100" v-if="on_Mounted">
        <div class="products__card-desktop-box" :data-grid="grid">
          <CardMarketplace :products="circuits.data" :type="'circuits'" :grid="grid" />
        </div>
      </div>
      <hr class="mb-5">

      <ListPagination 
      v-if="on_Mounted" 
      :links="circuits.links" 
      :current="circuits.current_page"
      @linkPagination="pagination" />
    </article>
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/products.scss";
</style>