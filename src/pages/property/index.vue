<!-- eslint-disable import/extensions -->
<!-- eslint-disable no-param-reassign -->
<!-- eslint-disable no-unused-expressions -->
<script lang="ts" setup>
import { useFiltersEcom } from '@/stores/FiltersEcom'

import { storeToRefs } from 'pinia'

const router = useRouter()
const loading = ref<boolean>(true)
const store = useFiltersEcom()
const {
  getProducts, transformUrlToFiltersObject, setFilters, rangePriceParams,
} = store

if (JSON.stringify(useRoute().query) !== '{}') {
  let { query } = useRoute()

  if (query.price) {
    query = rangePriceParams(query)
  }
  await getProducts(query)
} else {
  setFilters({})
  await getProducts({})
}

const { getProductsList, getFilters } = storeToRefs(store)

const propertys = ref<any>([])
propertys.value = getProductsList.value

// setFilters({
//   ...getFilters.value,
//   price_from: propertys.value?.price_range.min || 0,
//   price_to: propertys.value?.price_range.max || 1,
// })

const mounted = ref<boolean>(false)

const pagination = async (data: any) => {
  router.replace({
    query: {
      ...transformUrlToFiltersObject(data),
    },
  })
}

definePageMeta({
  middleware: 'observer-nav',
  icon: 'mdi-home',
  title: 'Productos',
})

onMounted(async () => {
  mounted.value = true
  loading.value = false
})

watch(
  () => useRoute().query,
  async value => {
    if (JSON.stringify(value) !== '{}') {
      if (value.price) {
        value = rangePriceParams(value)
      }
      await getProducts(value)
    } else {
      console.log('entro')
      // setFilters({ identifier: 1 })
      await getProducts({})
    }
    propertys.value = getProductsList.value
    setFilters({
      ...getFilters.value,
      price_from: propertys.value?.price_range.min || 0,
      price_to: propertys.value?.price_range.max || 1,
    })
  },
)

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
  <div class="body">
    <main class="property">
      <article
        v-if="!loading"
        class="home__property container"
      >

        <div class="box home__property-hero">
          <h4>Propiedades destacadas</h4>
          <h5>Encuentre la propiedad que busca</h5>
        </div>
        <div class="box home__property-body">
          <global-property
            v-for="(property, index) in propertys"
            :key="index"
            :property="property"
          />
        </div>

      </article>
    </main>
  </div>

</template>

<style lang="scss" scoped>
@import "@/assets/scss/Home.scss";
</style>
