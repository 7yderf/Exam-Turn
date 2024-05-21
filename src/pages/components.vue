<!-- eslint-disable vue/max-len -->
<template>
  <div class="body">
    <main class="home">
      <MainBanner
        :back-src="{
          imgSrc: '/backgrounds/home.png',
        }"
        :text-content="{
          title: 'Excelencia en Servicios Inmobiliarios',
          description: 'Nuestra especialidad es en el sector comercial e industrial',
        }"
        :actions="[
          { text: 'Nosotros', to: '/about', type: 'about' },
          { text: 'Contáctenos', to: '/#contact', type: 'contact' },
        ]"
      />
      <article class="home__services w-100">
        <main-content-cards
          v-if="!loading"
          :ubication="mediaQueryXL ? 'left' : 'center'"
          :width="configCardProperty"
        >
          <template #hero>
            <h4>Propiedades destacadas</h4>
            <h5>Encuentre la propiedad que busca</h5>
          </template>
          <template #filters>
            <filter-form
              :ubication="'home'"
            />
          </template>
          <template #content>
            <global-property
              v-for="(property, index) in objects"
              :key="index"
              :property="property"
            />
          </template>
        </main-content-cards>
      </article>
      <article class="home__services w-100">
        <global-background-src
          :img-src="'/backgrounds/service_hero.png'"
        />
        <main-content-cards
          v-if="!loading"
          :ubication=" 'center'"
          :width="configCardServices"
          :gap="'32px'"
        >
          <template #hero>
            <h4>Productos y servicios</h4>
            <global-space-blur
              class="home__services-space-blur"
              :description="'Servicio profesional y altamente especializado enfocado a la búsqueda de inmuebles exclusivos; asesoría técnica, legal y financiera; valuación y estudios de mercado; negociación; soluciones integrales a corto, mediano y largo plazo; proyectos llave en mano; gestión y trámites.'"
              :box-shadow="true"
              background="rgb(41 56 49 / 46%)"
              blur="60px"
            />
          </template>
          <template #content>
            <global-card
              v-for="(service, index) in infoServices"
              :key="index"
              :img="service.img"
              :title="service.title"
              :description="service.description"
            />
          </template>
        </main-content-cards>
      </article>
      <article
        id="contact"
        class="home__contact"
      >
        <section class="container home__contact-section">
          <div class="box home__contact-left">
            <h4>¿Tiene alguna duda o Proyecto en mente?</h4>
            <h5>Estamos para ayudarle</h5>
            <Contact />
          </div>
          <div
            class="box home__contact-right"
          >
            <global-background-src
              :img-src="'/backgrounds/contact.png'"
            />
          </div>
        </section>
      </article>
    </main>
  </div>
</template>

<script lang="ts" setup>
const load = useload()
const loading = ref<boolean>(true)
const mediaQueryXL = useMediaQueryXL()
const { useFetch } = useProperty()
const { productsList }: any = await useFetch({ limit: 6 })
load.value = false
const dataProperty = ref<any>({
  meta: {},
  objects: [],
})
const configCardProperty = ref({
  sizeCard: '270px',
  cards: 4,
  gap: '16px',
})
const configCardServices = ref({
  sizeCard: '250px',
  cards: 3,
  gap: '56px',
  maxWidht: '992px',
})
const infoServices = useContentServices()

dataProperty.value = productsList.value || dataProperty.value
const { objects } = dataProperty.value

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
  title: 'Productos',
})

onMounted(async () => {
  // console.log('mounted', window.scroll)
  console.log('🚀 ~ mediaQueryXL:', mediaQueryXL.value)
  animationScroll()
  loading.value = false
})

</script>
<style lang="scss" scoped>
@import "@/assets/scss/Home.scss";
</style>
