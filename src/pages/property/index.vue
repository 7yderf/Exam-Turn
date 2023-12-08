<!-- eslint-disable import/extensions -->
<!-- eslint-disable no-param-reassign -->
<!-- eslint-disable no-unused-expressions -->
<script lang="ts" setup>
import { useFiltersEcom } from '@/stores/FiltersEcom'
import { storeToRefs } from 'pinia'

const { $bootstrap } : any = useNuxtApp()
const offcanvasRight = ref<HTMLElement | string >('')
let offcanvas: any

const toggleOffcanvas = () => {
  offcanvas.toggle()
}

const router = useRouter()
const loading = ref<boolean>(true)
const store = useFiltersEcom()
const load = useload()
const {
  getProducts, transformUrlToFiltersObject, setFilters, rangePriceParams, setOffset,
} = store

let { query } = useRoute()
if (JSON.stringify(useRoute().query) !== '{}') {
  if (query.price) {
    query = rangePriceParams(query)
  }
  await getProducts(query)
} else {
  console.log('🚀 ~ file: index.vue:18 ~ query:', query)
  // setFilters({})
  await getProducts()
}

const {
  getProductsList, getFilters, getNextPaginator, getPrevPaginator, getLimit, getOffset, getTotal,
} = storeToRefs(store)

const propertys = ref<any>([])
propertys.value = getProductsList.value
// setFilters({
//   ...getFilters.value,
//   price_from: propertys.value?.price_range.min || 0,
//   price_to: propertys.value?.price_range.max || 1,
// })

const mounted = ref<boolean>(false)

const pagination = async (direccion: any) => {
  direccion === 'next' && setOffset(getOffset.value + 20)
  direccion === 'prev' && setOffset(getOffset.value - 20)
  if (direccion === 'next' && (getOffset.value < getTotal.value)) {
    router.replace({
      query: {
        ...{ ...JSON.parse(getFilters.value.data), offset: getOffset.value },
      },
    })
  } else if (direccion === 'prev' && (getOffset.value >= 0)) {
    router.replace({
      query: {
        ...{ ...JSON.parse(getFilters.value.data), offset: getOffset.value },
      },
    })
  }
}

onMounted(async () => {
  mounted.value = true
  loading.value = false
  offcanvas = new $bootstrap.Offcanvas(offcanvasRight.value)
  setTimeout(() => {
    load.value = false
  }, 100)
})

watch(
  () => useRoute().query,
  async value => {
    load.value = false
    loading.value = true
    if (JSON.stringify(value) !== '{}') {
      if (value.price) {
        value = rangePriceParams(value)
      }
      await getProducts(value)
      loading.value = false
    } else {
      // setFilters({ identifier: 1 })
      await getProducts({})
      loading.value = false
    }
    propertys.value = getProductsList.value
    // setFilters({
    //   ...getFilters.value,
    //   price_from: propertys.value?.price_range.min || 0,
    //   price_to: propertys.value?.price_range.max || 1,
    // })
  },
)

watch(
  () => useRoute().query,
  async value => {
    if (JSON.stringify(value) !== '{}') {
      // /cerrar offcanvas
      offcanvas.hide()
    } else {
      console.log('entro')
    }
  },
)

definePageMeta({
  middleware: 'observer-nav',
  icon: 'mdi-home',
  title: 'Propiedades',
})

useHead({
  title: 'Propiedades',
  link: [
    { rel: 'canonical', href: '' },
  ],
})
useSeoMeta({
  title: 'Propiedades',
})

</script>
<template>
  <div class="body">
    <main class="property">
      <article class="w-100 property__hero">
        <global-background-src
          :img-src="'/backgrounds/valores.png'"
        />
        <section class="property__hero-section">
          <h4>Propiedades</h4>
        </section>
      </article>
      <article
        class="w-100 property__body-search"
      >
        <section
          v-if="!loading"
          class="container property__body"
        >
          <div class="box property__propertys-tit">
            <h5>{{ `${getTotal} Propiedades en la busqueda` }}</h5>
            <button
              type="button"
              class="property__btn-filter"
              @click="toggleOffcanvas"
            >
              <icon
                name="ri:equalizer-fill"
                class="property__btn-icon"
              />
              <span class="property__filter-text property__btn-filter--txt-filter">Filtrar</span>
            </button>
          </div>
          <div class="box property__propertys">
            <global-property
              v-for="(property, index) in propertys"
              :key="index"
              :property="property"
            />
          </div>
          <div class="box property__paginate">
            <button
              type="button"
              :disabled="getOffset === 0"
              @click="pagination('prev')"
            >
              {{ `<< Regresar` }}
            </button>
            <div
              class="property__pag-actuality"
            >
              <span>{{ `${getOffset + 1} - ${getOffset + getLimit} de ${getTotal}` }}</span>
            </div>
            <button
              type="button"
              :disabled="(getOffset + 20) > getTotal"
              @click="pagination('next')"
            >
              {{ `siguiente >>` }}
            </button>
          </div>
        </section>
        <section
          v-else
          class="container property__body property__body--loading"
        >
          <span class="loader" />
        </section>
      </article>
    </main>
    <div
      id="offcanvasRight"
      ref="offcanvasRight"
      class="offcanvas offcanvas-end"
      tabindex="-1"
      aria-labelledby="offcanvasRightLabel"
    >
      <filter-header />
      <div class="offcanvas-body p-0">
        <filter-form />
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
@import "@/assets/scss/Property.scss";
.loader {
  width: 48px;
  height: 48px;
  display: block;
  margin: 20px auto;
  position: relative;
  border: 3px solid #555555;
  border-radius: 50%;
  box-sizing: border-box;
  animation: animloader 2s linear infinite;
}
.loader::after {
  content: '';
  box-sizing: border-box;
  width: 6px;
  height: 24px;
  background: #555555;
  transform: rotate(-45deg);
  position: absolute;
  bottom: -20px;
  left: 46px;
}

@keyframes animloader {
  0% {
    transform: translate(-10px, -10px);
  }
  25% {
    transform: translate(-10px, 10px);
  }
  50% {
    transform: translate(10px, 10px);
  }
  75% {
    transform: translate(10px, -10px);
  }
  100% {
    transform: translate(-10px, -10px);
  }
}
</style>
