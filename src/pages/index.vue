<!-- eslint-disable vue/max-len -->
<template>
  <div class="body">
    <main class="home">
      <MainBanner
        :back-src="{
          imgSrc: '/backgrounds/header.png',
        }"
        :text-content="{
          title: 'Excelencia en Servicios Inmobiliarios',
          description: 'Nuestra especialidad es en el sector comercial e industrial',
        }"
        :actions="[
          { text: 'Conoce la casa de tus sueños', to: '/about', type: 'initial' },
        ]"
        :from="from"
      />
      <div class="box home__services-filters">
        <filter-filters-form
          class="container"
          :ubication="'home'"
        />
      </div>
      <article class="home__services w-100">
        <main-content-cards
          v-if="!load && mounted"
          :ubication="mediaQueryXL ? 'left' : 'center'"
          :width="configCardProperty"
        >
          <template #hero>
            <main-paragraph
              :styles="{
                titleDirection: 'center',
              }"
              :title="{ h4: 'Propiedades destacadas', h5: 'Encuentra la propiedad que buscas' }"
              :is-title="true"
            />
          </template>
          <template #content>
            <global-property
              v-for="(property, index) in propertys"
              :key="index"
              :property="property"
            />
          </template>
        </main-content-cards>
      </article>
      <article
        id="contact"
        class="home__contact"
      >
        <main-flex-box
          :class="`${from}__contact`"
          :styles="{
            gap: '0px',
            maxWidhtRight: '450px',
          }"
        >
          <template #left>
            <main-paragraph
              :styles="{
                alignItem: 'centar',
                titleDirection: 'center',
                gap: '16px',
              }"
              :title="{ h4: '¿porque comprar una propiedad con nosotros?' }"
              :from="from"
              :is-title="true"
            />
            <div class="box container home__contact-box-list">
              <global-icon-text
                v-for="(item, index) in contactCopy"
                :key="index"
                :class="`${from}__contact-item`"
                :title="item.title"
                :text="item.text"
                :img-src="item.imgSrc"
                :styles="{
                  gap: '16px',
                }"
              />
            </div>
          </template>
          <template #rigth>
            <div class="home__contact-box--hero box position-relative">
              <global-background-src
                :blur="true"
                :background="'#4464AD'"
                :from="from"
              />
              <main-paragraph
                :styles="{
                  tilteTypeColor: 'binary',
                }"
                :title="{ h5: 'Encuentra la casa de tus sueños' }"
                :from="from"
              />
            </div>
            <div class="home__contact-box--main box">
              <Contact />
            </div>
          </template>
        </main-flex-box>
      </article>
      <global-partners />
    </main>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'

const from = 'home'
const { fullPath } = useRoute()
const storB = useFilters()
const load = useload()
const mounted = ref(false)
const { getProperties } = storB
const { getProductsList } = storeToRefs(storB)

const propertys = computed(() => {
  if (getProductsList.value.length > 0 && fullPath === '/') {
    return getProductsList.value
  }
  return []
})

const mediaQueryXL = useMediaQueryXL()

const configCardProperty = ref({
  sizeCard: '270px',
  cards: 4,
  gap: '16px',
})

const contactCopy = [
  { title: 'Hacemos una casa tu hogar', text: 'Encontramos siempre el mejor trato para usted', imgSrc: '/icons/icon-contac-1.png' },
  // eslint-disable-next-line vue/max-len
  { title: 'Calidad Garantizada', text: 'Nuestro crecimiento constante es el resultado del profesionalismo, capacitacion y entusiasmo de nuestro equipo de trabajo', imgSrc: '/icons/icon-contac-2.png' },
  { title: 'Aceptamos Creditos', text: 'Se aceptan diferentes tipos de creditos hipotecarios', imgSrc: '/icons/icon-contac-3.png' },
]

function isVisible(elm: any) {
  const rect = elm.getBoundingClientRect()
  const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight)
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0)
}

const animationScroll = () => {
  window.addEventListener('scroll', () => {
    document.querySelectorAll('.paused').forEach(elm => {
      // que sean visibles...
      if (isVisible(elm)) {
        elm.classList.remove('paused')
      } // les quitamos la clase paused
    })
  })
}

definePageMeta({
  middleware: 'observer-nav',
  icon: 'mdi-home',
  title: 'home',
})

onMounted(async () => {
  await getProperties({ sort_by: 'updated_at-desc', limit: 8 })
  animationScroll()
  setTimeout(() => {
    mounted.value = true
  }, 100)
})

// onUnmounted(() => {
//   window.removeEventListener('scroll', animationScroll)
//   setTimeout(() => {
//     load.value = false
//     console.log('🚀 ~ setTimeout ~ load.value:', load.value)
//   }, 100)
// })

</script>
<style lang="scss" scoped>
@import "@/assets/scss/Home.scss";
</style>
