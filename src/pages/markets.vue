<template>
  <section
    ref="servic"
    class="markets"
  >
    <!-- <article class="markets__hero">
      <div class="markets__hero-tit">
        <h1>
          Nuestros servicios
        </h1>
        <p>
          Conoce en qué te podemos ayudar
        </p>
        <button
          type="button"
        >
          Descubre más
        </button>

      </div>
      <div class="markets__hero-img">
        <MarketsImgCircleApp
          :img_top="'/circle_4.png'"
          :image_bottom="'/circle_2.png'"
          :type="'services'"
        />
      </div>
    </article> -->
    <div class="markets__hero-back js">
      <article class="container markets__hero">
        <div class="markets__hero-content">
          <h1>Markets</h1>
          <div class="markets__hero-img markets__hero-img">
            <img
              src="../assets/images/beyond-black.png"
              alt=""
            >
          </div>
          <div class="markets__hero-img markets__hero-img--logo">
            <img
              src="../assets/images/icon-go.png"
              alt=""
            >
          </div>
        </div>
        <div class="markets__hero-content markets__hero-content--bottom">
          <div class="markets__hero-img markets__hero-img--bottom">
            <img
              src="../assets/images/patron.png"
              alt=""
            >
          </div>
          <h3>Vision</h3>
          <p>Nuestro enfoque es proporcionar una educación integral de trading y un servicio de copy trading en todos los mercados, priorizando la transparencia y responsabilidad hacia nuestros clientes.
          </p>
        </div>
        <div class="markets__hero-content markets__hero-content--bottom pt-5">
          <p>Nos esforzamos por convertirnos en la principal compañía de educación de trading y copy trading, brindando a nuestros clientes las herramientas necesarias para alcanzar el éxito financiero en los mercados globales. <br>
            Buscamos establecer relaciones sólidas y duraderas con equipos comerciales y con experiencia en network marketing, ofreciéndoles una oportunidad única para generar ingresos adicionales. Nos enfocamos en atender tanto a principiantes que desean adquirir conocimientos básicos como a traders experimentados que buscan ampliar sus habilidades.
          </p>
        </div>
      </article>
    </div>

    <div class="markets__cards">
      <div class="markets__cards-canvas">
        <div class="markets__cards-stroke markets__cards-stroke--uno" />
        <div class="markets__cards-stroke markets__cards-stroke--dos" />
        <div class="markets__cards-stroke-content">
          <div class="markets__cards-box">
            <div class="markets__card">
              <p>ACADEMY</p>
              <img
                src="/aca_demy.png"
                alt=""
              >
            </div>
            <div class="markets__card">
              <p>TRADING</p>
              <img
                src="/tradi-ding.jpg"
                alt=""
              >
            </div>
            <div class="markets__card">
              <p>PARTNERSHIP</p>
              <img
                src="/partners.jpg"
                alt=""
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <article class=" container markets__paragraphs paused">
      <div class="markets__paragraph-1 ">
        <ServicesParagraph
          :titulo="types_proyects[0].titulo"
          :bullets="types_proyects[0].bullets"
          :texto="types_proyects[0].texto"
          :action="types_proyects[0].action"
          :image="'/academy-1.png'"
        />
      </div>
      <div class="markets__list-1">
        <ServicesListServices
          :list-services="list_proyects_design"
        />
      </div>
    </article>
    <article class=" container markets__paragraphs paused">
      <div class="markets__list-1 markets__list-1--order">
        <ServicesListServices
          :list-services="list_proyects_apps"
        />
      </div>
      <div class="markets__paragraph-1 markets__paragraph-1--order">
        <ServicesParagraph
          :titulo="types_proyects[1].titulo"
          :bullets="types_proyects[1].bullets"
          :texto="types_proyects[1].texto"
          :action="types_proyects[1].action"
          :image="'/academy-02.png'"
        />
      </div>
    </article>
    <article class=" container markets__paragraphs paused">
      <div class="markets__paragraph-1">
        <ServicesParagraph
          :titulo="types_proyects[2].titulo"
          :bullets="types_proyects[2].bullets"
          :texto="types_proyects[2].texto"
          :action="types_proyects[2].action"
          :image="'/academy-03.png'"
        />
      </div>
      <div class="markets__list-1">
        <ServicesListServices
          :list-services="list_proyects_web"
        />
      </div>
    </article>
    <article class=" container markets__paragraphs paused">
      <div class="markets__list-1 markets__list-1--order">
        <ServicesListServices
          :list-services="list_proyects_apps"
        />
      </div>
      <div class="markets__paragraph-1 markets__paragraph-1--order">
        <ServicesParagraph
          :titulo="types_proyects[1].titulo"
          :bullets="types_proyects[1].bullets"
          :texto="types_proyects[1].texto"
          :action="types_proyects[1].action"
          :image="'/academy-04.png'"
        />
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const servic = ref(null)
const types_proyects = ref([

  {
    titulo: 'ACADEMIA BASICA',
    bullets: [
      'Diseño UX/UI',
    ],
    texto: 'La clave para desarrollar una aplicación exitosa es combinar la funcionalidad que exigen los usuarios con un diseño y una experiencia intuitivos que la hagan lo más simple posible de usar.',
    action: 'Cotiza tu proyecto',
  },
  {
    titulo: 'ACADEMIA INTERMEDIA',
    bullets: [
      'Aplicaciones nativos',
      'Aplicaciones nativos',
    ],
    texto: 'Confiamos en nuestra experiencia tecnológica en varias industrias para ofrecer aplicaciones web, móviles, de escritorio e híbridas altamente escalables, flexibles e interoperables.',
    action: 'Cotiza tu proyecto',
  },
  {
    titulo: 'ACADEMIA MEDIA',
    bullets: [
      'Desarrollos a la medida',
    ],
    texto: 'Servicios de desarrollo de software personalizado. Contamos con desarrolladores expertos, y con vasta experiencia en industrias específicas.',
    action: 'Cotiza tu proyecto',
  },
  {
    titulo: 'ACADEMIA AVANZADA',
    bullets: [
      'Desarrollos a la medida',
    ],
    texto: 'Servicios de desarrollo de software personalizado. Contamos con desarrolladores expertos, y con vasta experiencia en industrias específicas.',
    action: 'Cotiza tu proyecto',
  },

])

const list_proyects_design = ref([
  {
    titulo: '1. Introducción en el trading ',
    description: '',
  },
  {
    titulo: '2. Historia del dinero',
    description: '',
  },
  {
    titulo: '3. Bancos centrales',
    description: '',
  },
  {
    titulo: '4. Que es el trading ',
    description: '',
  },
  {
    titulo: '5. Historia del forex',
    description: '',
  },
  {
    titulo: '6. Que son los CFDs ',
    description: '',
  },
  {
    titulo: '7. Vocabulario del trading',
    description: '',
  },
  {
    titulo: '8. Desarrollo del mercado ',
    description: '',
  },
  {
    titulo: '9. Que es una divisa ',
    description: '',
  },
  {
    titulo: '10. Que es un broker',
    description: '',
  },
  {
    titulo: '11. Introducción a las herramientas',
    description: '',
  },
  {
    titulo: '12. Que son pips',
    description: '',
  },
  {
    titulo: '13. Que es Spread y comisiones ',
    description: '',
  },
  {
    titulo: '14. Lotaje ',
    description: '',
  },
  {
    titulo: '15. Broker y apalancamiento ',
    description: '',
  },
  {
    titulo: '16. Tipos de órdenes  ',
    description: '',
  },
  {
    titulo: '17. Tipos de análisis ',
    description: '',
  },
  {
    titulo: '18. Velas japonesas',
    description: '',
  },

])

const list_proyects_apps = ref([
  {
    titulo: '1. Introducción avanzada ',
    description: '',
  },
  {
    titulo: '2. Patrones de velas',
    description: '',
  },
  {
    titulo: '3. Estructura del mercado 1',
    description: '',
  },
  {
    titulo: '4. Estructura del mercado 2',
    description: '',
  },
  {
    titulo: '5. Soportes y resistencias',
    description: '',
  },
  {
    titulo: '6. Líneas de tendencia',
    description: '',
  },
  {
    titulo: '7. Indicadores ',
    description: '',
  },
  {
    titulo: '8. Chartismo ',
    description: '',
  },
  {
    titulo: '9. Análisis del día ',
    description: '',
  },

])

const list_proyects_web = ref([
  {
    titulo: '1. Introducción para la rentabilidad ',
    description: '',
  },
  {
    titulo: '2. Ondas de Elliot ',
    description: '',
  },
  {
    titulo: '3. Fractalidad',
    description: '',
  },
  {
    titulo: '4. Liquidez ',
    description: '',
  },
  {
    titulo: '5. Stop hunt ',
    description: '',
  },
  {
    titulo: '4. Liquidez ',
    description: '',
  },

])

const list_proyects_apps_dos = ref([
  {
    titulo: '1. Introducción avanzada ',
    description: '',
  },
  {
    titulo: '2. Patrones de velas',
    description: '',
  },
  {
    titulo: '3. Estructura del mercado 1',
    description: '',
  },
  {
    titulo: '4. Estructura del mercado 2',
    description: '',
  },
  {
    titulo: '5. Soportes y resistencias',
    description: '',
  },
  {
    titulo: '6. Líneas de tendencia',
    description: '',
  },
  {
    titulo: '7. Indicadores ',
    description: '',
  },
  {
    titulo: '8. Chartismo ',
    description: '',
  },
  {
    titulo: '9. Análisis del día ',
    description: '',
  },

])

function isVisible(elm: any) {
  const rect = elm.getBoundingClientRect()
  const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight)
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0)
}

const animationScroll = () => {
  window.addEventListener('scroll', e => {
    document.querySelectorAll('.paused').forEach(elm => {
      if (isVisible(elm)) // que sean visibles...
      { elm.classList.remove('paused') } // les quitamos la clase paused
    })
  })
}

onMounted(async () => {
  console.log('mounted', window.scroll)
  animationScroll()
  console.log('mounted', servic)
})

</script>
<style lang="scss" scoped>
@import "@/assets/scss/Markets.scss";
</style>
