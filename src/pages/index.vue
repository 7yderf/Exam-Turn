<template>
  <div class="body">
    <main class="home">
      <article class="w-100 home__hero">
        <global-background-src
          :img-src="'/backgrounds/home.png'"
        />
        <section class="home__hero-section">
          <h4>Excelencia en Servicios Inmobiliarios</h4>
          <p>Nuestra especialidad es el ramo comercial e industrial</p>
          <div class="home__hero-actions container box">
            <button
              type="button"
              class="home__hero-action home__hero-action--about"
            >
              Nosotros
            </button>
            <button
              type="button"
              class="home__hero-action home__hero-action--contact"
            >
              Contáctanos
            </button>
          </div>
        </section>
      </article>
      <article class="home__services w-100">
        <global-background-src
          :img-src="'/backgrounds/service_hero.png'"
        />
        <section class="container home__services-section">
          <div class="box home__services-hero">
            <h4>Productos y servicios</h4>
            <global-space-blur
              class="home__services-space-blur"
              :description="'servicio profesional y muy especializado enfocado a retos de almacenamiento, la búsqueda de inmuebles especializados, asesoría técnica, legal y financiera; valuación y estudios de mercado, negociación, soluciones a corto, mediano y largo plazo, proyectos llave en mano, gestión de trámites'"
              :box-shadow="true"
              background="rgba(255, 255, 255, 0.10)"
              blur="60px"
            />
          </div>
          <div class="box home__services-cards">
            <global-card
              :img="'/backgrounds/card-4.png'"
              :title="'Bodegas y naves industriales'"
              :description="'Encontrar la propiedad que busca el cliente ya sea en venta, renta o renta con opción de compra; administración; valuación de inmuebles, estudios de mercado, búsqueda de oportunidades de inversión. \n Servicio confiable, discreto buscando una negociación satisfactoria para todas las partes.'"
            />
            <global-card
              :img="'/backgrounds/card-3.png'"
              :title="'Terrenos comerciales e industriales'"
              :description="'Efectividad en encontrar el terreno no importando cuan especializado tenga que ser este en cuanto a su uso de suelo, uso de suelo específico, dimensiones, servicios, viabilidad.'"
            />
            <global-card
              :img="'/backgrounds/card.png'"
              :title="'Proyectos BTS Y Propiedades Industriales especializadas'"
              :description="'Desarrollos de proyecto llave en mano, construcción de un inmueble tal como lo necesita el cliente en un plazo de seis meses, buscando que sea permitido legalmente, físicamente posible, económicamente viable y técnicamente factible'"
            />
            <global-card
              :img="'/backgrounds/card-1.png'"
              :title="'Plazas comerciales y locales'"
              :description="'Tenemos los contactos para desarrollar, comercializar y operar centros comerciales así como ofrecer en venta cuando ya están totalmente ocupados, con una rentabilidad competitiva.'"
            />
            <global-card
              :img="'/backgrounds/card-2.png'"
              :title="'Edificio de oficinas y oficina'"
              :description="'Desarrollo de edificio de oficinas desde el estudio de mercado, encontrar el terreno ideal, construcción, pre venta, venta, administración y venta del mismo una vez que ya esté rentado en su totalidad.'"
            />
          </div>
        </section>
      </article>
      <article
        v-if="!loading"
        class="home__property container">

        <div class="box home__property-hero">
          <h4>Propiedades destacadas</h4>
          <h5>Encuentre la propiedad que busca</h5>
        </div>
        <div class="box home__property-body">
          <global-property
            v-for="(property, index) in objects"
            :key="index"
            :property="property"
          />
        </div>

      </article>
      <article class="home__contact">
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
const loading = ref<boolean>(true)
const { useFetch } = useProperty()
const { productsList, error }: any = await useFetch({ limit: 5 })

const dataProperty = ref<any>({
  meta: {},
  objects: [],
})

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
      if (isVisible(elm)) // que sean visibles...
      { elm.classList.remove('paused') } // les quitamos la clase paused
    })
  })
}

onMounted(async () => {
  console.log('mounted', window.scroll)
  animationScroll()
  loading.value = false
})

</script>
<style lang="scss" scoped>
@import "@/assets/scss/Home.scss";
</style>
