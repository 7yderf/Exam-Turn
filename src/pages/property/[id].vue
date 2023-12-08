<script lang="ts" setup>
const load = useload()
const { id } = useRoute().params
const products = ref<any>({})
const { usePropertyDetail } = useProperty()
const { product }: any = await usePropertyDetail(id)
console.log('🚀 ~ file: [id].vue:6 ~ product:', product.value)
products.value = product.value || products.value
console.log('🚀 ~ file: [id].vue:6 ~ product:', products.value)

onMounted(async () => {
  setTimeout(() => {
    load.value = false
  }, 100)
})

definePageMeta({
  middleware: 'observer-nav',
  icon: 'mdi-home',
  title: 'Detalle de propiedad',
})

</script>
<template>
  <main>
    <article>
      <section class="container">
        <div class="box home__property-body">
          <global-detail-property
            :property="products"
          />
        </div>
      </section>
    </article>

  </main>
</template>
<style lang="scss" scoped>
</style>