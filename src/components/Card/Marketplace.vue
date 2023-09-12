<template>
  <div class="products__card-desktop" :data-from="from" v-for="(product, index) in products || []" :key="index">
    <ProductCard 
      v-if="type === 'products'"
      :sale="product?.Sale" 
      :type="product.Type" 
      :legend="product.Legend" 
      :name="product.Name"
      :qty="product.Qty" 
      :brand="product.brand?.Name"
      :model="product.Model" 
      :code="product.Code" 
      :priceMax="product.Price" 
      :priceSale="product?.PriceSale"
      :isQuote="product?.IsQuote" 
      :images="product.images"
      :isGird= grid
      :index="index" 
      :id="product.IdProduct"
      :tag="product?.Tag"
    />
    <CircuitCard
      v-if="type === 'circuits'"
      :name="product.Name"
      :legend="product.Legend"
      :qty="product.qty"
      :priceMax="product.Price"
      :images="product.images"
      :isGird="grid"
      :index="index" 
    />
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  
  products: [],
  type: String,
  from?: String,
  grid: Boolean,
}>();

</script>
<style lang="scss" scoped>
@import "@/assets/scss/products.scss";
</style>