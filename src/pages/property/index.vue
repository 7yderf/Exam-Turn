<!-- eslint-disable import/extensions -->
<!-- eslint-disable no-param-reassign -->
<!-- eslint-disable no-unused-expressions -->
<script lang="ts" setup>
import { storeToRefs } from 'pinia'

const load = useload()
const mounted = ref(false)
const { $bootstrap } : any = useNuxtApp()
const offcanvasRight = ref<HTMLElement | string >('')
let offcanvas: any

const toggleOffcanvas = () => {
  offcanvas.toggle()
}

const router = useRouter()
const { query, path } = useRoute()

const storB = useFilters()

const {
  getProperties, splitRanges, stringToArray, setOffset, setPaginate,
} = storB

const listenerQuery = async (queri:any) => {
  let dataQuery: any | undefined = queri
  dataQuery = await splitRanges(queri)
  dataQuery = stringToArray(dataQuery, { propertyTypes: 'property_types' })
  return dataQuery
}

if (JSON.stringify(useRoute().query) !== '{}') {
  const dataQuery = await listenerQuery(query)
  await getProperties(dataQuery)
} else {
  await getProperties({})
}

const {
  filters, getProductsList, offset, total,
} = storeToRefs(storB)

const propertys = computed(() => {
  if (getProductsList.value.length > 0 && path === '/property') {
    return getProductsList.value
  }
  return []
})

const pagination = async (direccion: any) => {
  if (direccion === 'next') {
    setOffset(offset.value + 20)
    setPaginate(filters.value.page + 1)
  }
  if (direccion === 'prev') {
    setOffset(offset.value - 20)
    setPaginate(filters.value.page - 1)
  }
  if (direccion === 'next' && (offset.value < total.value)) {
    router.replace({
      query: {
        ...{ ...query, page: filters.value.page },
      },
    })
  } else if (direccion === 'prev' && (offset.value >= 0)) {
    router.replace({
      query: {
        ...{ ...query, page: filters.value.page },
      },
    })
  }
}

onMounted(async () => {
  offcanvas = new $bootstrap.Offcanvas(offcanvasRight.value)
  setTimeout(() => {
    mounted.value = true
  }, 100)
})

watch(
  () => useRoute().query,
  async value => {
    if (JSON.stringify(value) !== '{}') {
      offcanvas.hide()
      const dataQuery = await listenerQuery(value)
      await getProperties(dataQuery)
    } else {
      await getProperties({})
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
          :img-src="'/backgrounds/header.png'"
        />
        <section class="property__hero-section">
          <h4>Propiedades</h4>
        </section>
      </article>
      <article
        class="w-100 property__body-search"
      >
        <section
          v-if="!load && mounted"
          class="container property__body"
        >
          <div class="box property__propertys-tit">
            <h5>{{ `${total} Propiedades en la busqueda` }}</h5>
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
              :disabled="offset === 0"
              @click="pagination('prev')"
            >
              {{ `<< Regresar` }}
            </button>
            <div
              class="property__pag-actuality"
            >
              <span>{{ `${offset + 1} - ${offset + filters.limit} de ${total}` }}</span>
            </div>
            <button
              type="button"
              :disabled="(offset + 20) > total"
              @click="pagination('next')"
            >
              {{ `Siguiente >>` }}
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
        <filter-filters-form />
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
