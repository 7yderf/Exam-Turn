<script lang="ts" setup>

import { ref, onMounted, watch } from "vue";
const historyNav = useItemNav()
const { id } = useRoute().params
const products = ref<any>([]);
const {useFetchDetail } = useProducts();
const { product, error }: any = await useFetchDetail(id);
const grid = ref<boolean>(false);
products.value = product.value;
console.log("🚀 ~ file: [id].vue:11 ~ products.value:", products.value)
const on_Mounted = ref<boolean>(false);

console.log("🚀 ~ file: [id].vue:5 ~ historyNav:", historyNav)

definePageMeta({
    middleware: 'observer-nav',
    icon: 'mdi-home',
    title: 'Productos',
    detail: 'Detalle de producto',
    });

    onMounted(async () => {

on_Mounted.value = true;

});
const validateInfo = () => {
  return products.value?.Description || products.value?.Heigh || products.value?.Width || products.value?.Length
}
</script>
<template>
  <main class="products__main mb-5">
  <article class="container">
    <ListNavDirectory :links="historyNav"/>
  </article>
 <article class="container products__products">
 
  <div class="mt-5 w-100 " v-if="on_Mounted">
   
    <div class="products__card-desktop-box" :data-grid="grid"  >
      <div class="products__card-desktop" :data-grid="grid" >
        <ProductDetailCard 
          :sale="products?.Sale" 
          :type="products.Type" 
          :legend="products.Legend" 
          :name="products.Name" 
          :qty="products.Qty" 
          :brand="products.brand?.Name"
          :model="products.Model" 
          :code="products.Code" 
          :priceMax="products.Price" 
          :priceSale="products?.PriceSale"
          :isQuote="products?.IsQuote" 
          :images="products.images"
          :isGird="grid"
          :index="id"
          :color="products?.paint"
          :tapiz="products?.tapestry" 
          :tag="products?.Tag"
         
        />
      </div>
    </div>
  </div>
</article>
<article class="container" v-if="validateInfo()">
  <HomeTitles title="Sobre el producto" />
  
    <p class="mt-5">{{products.Description}}</p>
  
  <hr class="mb-5">
  <div class="products__detail-info">
    <h6>Medidas:</h6>
    <span v-if="products.Heigh" class="products__detail-heigth">{{products.Heigh}} cm (al.)</span>
    <span v-if="products.Width"  class="products__detail-width">{{products.Width}} cm (an.)</span>
    <span v-if="products.Length" class="products__detail-length">{{products.Length}} cm (long)</span>
  </div>
</article>
 </main>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/products.scss";
</style>