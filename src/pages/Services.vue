<template>
  <div class="body">
    <main class="services">
      <article class="w-100 services__hero">
        <global-background-src
          :img-src="'/backgrounds/services.png'"
        />
        <section class="services__hero-section">
          <h4>Servicios</h4>
          <p class="container">servicio profesional y muy especializado enfocado a retos de almacenamiento, la búsqueda de inmuebles especializados, asesoría técnica, legal  y financiera; valuación y estudios de mercado, negociación, soluciones a corto, mediano y largo plazo, proyectos llave en mano, gestión de trámites.
            Las ventajas de trabajar con nosotros es la versatilidad y gran experiencia y conocimiento en el ramo, el apoyado en un gran equipo de trabajo y asociaciones inmobiliarias a las que pertenecemos, la habilidad en la negociación, la búsqueda de la satisfacción de nuestros clientes, altas probabilidades de éxito.</p>
        </section>
      </article>
      <article class="services__mision">
        <global-background-src
          :img-src="'/backgrounds/venta_renta.jpg'"
        />
        <section class="container services__mision-section">
          <div class="box services__mision-box">
            <h4>Venta y renta</h4>
            <div class="box services__box">
              <global-button-services
                v-for="item, index in saleServices"
                :key="index"
                :whatsapp="item.whatsapp"
                :text-boton="item.textBoton"
                :message="item.message"
              />
            </div>
          </div>
        </section>
      </article>
      <article class="services__mision">
        <global-background-src
          :img-src="'/backgrounds/valuation.jpg'"
        />
        <section class="container services__mision-section">
          <div class="box services__mision-box">
            <h4>Valuación de inmuebles</h4>
            <div class="box services__box">
              <global-button-services
                v-for="item, index in valueProperty"
                :key="index"
                :whatsapp="item.whatsapp"
                :text-boton="item.textBoton"
                :message="item.message"
              />
            </div>
          </div>
        </section>
      </article>
      <article class="services__mision">
        <global-background-src
          :img-src="'/backgrounds/admin.jpg'"
        />
        <section class="container services__mision-section">
          <div class="box services__mision-box">
            <h4>Administración</h4>
            <div class="box services__box">
              <global-button-services
                v-for="item, index in administration"
                :key="index"
                :whatsapp="item.whatsapp"
                :text-boton="item.textBoton"
                :message="item.message"
              />
            </div>
          </div>
        </section>
      </article>
      <article class="services__mision">
        <global-background-src
          :img-src="'/backgrounds/capacitacion.jpg'"
        />
        <section class="container services__mision-section">
          <div class="box services__mision-box">
            <h4>Capacitación y Asesoría</h4>
            <div class="box services__box">
              <global-button-services
                v-for="item, index in capacitation"
                :key="index"
                :whatsapp="item.whatsapp"
                :text-boton="item.textBoton"
                :message="item.message"
              />
            </div>
          </div>
        </section>
      </article>
      <article class="services__contact">
        <section class="container services__contact-section">
          <div class="box services__contact-left">
            <h4>¿Tiene alguna duda o Proyecto en mente?</h4>
            <h5>Estamos para ayudarle</h5>
            <Contact />
          </div>
          <div
            class="box services__contact-right"
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

const saleServices = useSale()
const valueProperty = useValue()
const administration = useAdmin()
const capacitation = useCap()

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
})

</script>
<style lang="scss" scoped>
@import "@/assets/scss/Services.scss";
</style>
