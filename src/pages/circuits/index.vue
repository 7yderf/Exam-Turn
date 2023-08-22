<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
const historyNav = useItemNav()
const circuits = ref<any>([]);
const { useFetchCircuits } = useCircuits();
const { circuits_list }: any = await useFetchCircuits(null, null);
circuits.value = circuits_list.value;
const device = ref<boolean>(true);
const deviceMobile = ref<boolean>(true);
const on_Mounted = ref<boolean>(false);
const load = ref<boolean>(true);

const pagination = async (data: any) => {
  const { circuits_list, error }: any = await useFetchCircuits(null, data);
  circuits.value = circuits_list.value;
}
const isGrid = async (data: any) => {
 console.log("🚀 ~ file: index.vue:19 ~ isGrid ~ data:", (data))
}

definePageMeta({
    middleware: 'observer-nav',
    icon: 'mdi-home',
    title: 'Circuitos',
    });

onMounted(async () => {
    
  const { windowSize } = useMediaQuery("(min-width: 767px)");
  device.value = windowSize.value;
  watch(
    () => windowSize.value,
    (value) => {
      device.value = value;
    }
  );
  on_Mounted.value = true;
  load.value = false;
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
  title: "Inicio",
});

</script>

<template>
  <main class="home__main mb-5">
    <article class="container">
      <ListNavDirectory :links="historyNav"/>
    </article>
    <article class="container home__products">
    <ListHero :total="circuits.total" :title="'Circuitos'" v-if="!load" @view="isGrid"/>
      <div class="row mt-5 w-100">
        <div class="home__card-desktop-box" v-if="!load">
          <div
            class="home__card-desktop"
            v-for="(card, index) in circuits?.data || []"
            :key="index"
          >
            <CircuitCardslide
              :name="card.Name"
              :qty="card.qty"
              :priceMax="card.price"
              :images="card.images"
            />
          </div>
        </div>
      </div>
      <hr class="mb-5">

      <ListPagination 
      v-if="!load" 
      :links="circuits.links" 
      :current="circuits.current_page"
      @linkPagination="pagination" />
    </article>
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/Home.scss";
</style>