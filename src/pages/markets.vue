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

    <article class="markets__academy container">
      <div class="markets__tit">
        <h4>Academia</h4>
      </div>

      <h5 class="markets__academy-tit">
        ¡Bienvenidos a nuestra academia de trading!
      </h5>
      <p class="markets__acadmey-txt">
        Aquí encontrarás una fuente inagotable de inspiración y conocimientos valiosos para alcanzar tus metas financieras. Nuestro compromiso es brindarte contenido educativo de la más alta calidad respaldado por instructores reconocidos en la industria. Únete a nosotros y descubre cómo transformar tus habilidades en el mundo del trading. Juntos, alcanzaremos nuevos horizontes financieros. Tu academia contendrá:
      </p>
    </article>
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
    <article class="markets__trading">
      <div class=" container markets__tit">
        <h4>Trading</h4>
      </div>
      <article class="container markets__products-card  paused">
        <div class="markets__trading-card markets__trading-card--left markets__trading-paragraph-1">

          <img
            src="../assets//images/trading.png"
            alt=""
            class="markets__trading-card-img"
          >

          <div class="markets__trading-card-txt">
            <h3>QUE ES TRADING?</h3>
            <p>El trading es una actividad financiera que implica comprar y vender diferentes instrumentos financieros con el objetivo de obtener ganancias a través de la especulación de los movimientos de precios en los mercados. Los beneficios del trading incluyen la posibilidad de obtener altos rendimientos en un corto período de tiempo, la flexibilidad para operar en diferentes mercados y la oportunidad de generar ingresos adicionales.
            </p>
            <button
              type="button"
              class="markets__trading-card-btn-read markets__trading-card-btn-read--radius"
            >
              {{ $t('read-more') }}
              <icon :name="'ri:arrow-right-fill'" />
            </button>
          </div>
        </div>
        <div class="markets__trading-card markets__trading-card--rigth markets__trading-paragraph-1">

          <div class="markets__trading-card-txt">
            <h3>MERCADOS A OPERAR EN TRADING</h3>
            <p>El trading es una actividad financiera que implica comprar y vender diferentes instrumentos financieros con el objetivo de obtener ganancias a través de la especulación de los movimientos de precios en los mercados. Los beneficios del trading incluyen la posibilidad de obtener altos rendimientos en un corto período de tiempo, la flexibilidad para operar en diferentes mercados y la oportunidad de generar ingresos adicionales. </p>
            <button
              type="button"
              class="markets__trading-card-btn-read markets__trading-card-btn-read--radius"
            >
              {{ $t('read-more') }}
              <icon :name="'ri:arrow-right-fill'" />
            </button>
          </div>
          <img
            src="../assets//images/trading.png"
            alt=""
            class="markets__trading-card-img"
          >
        </div>
        <div class="markets__trading-card markets__trading-card--left markets__trading-paragraph-1">

          <img
            src="../assets//images/trading.png"
            alt=""
            class="markets__trading-card-img"
          >

          <div class="markets__trading-card-txt">
            <h3>COPYTRADING</h3>
            <p>El copytrading es una estrategia en la que los usuarios pueden beneficiarse al replicar las operaciones realizadas por profesionales en los mercados financieros. En lugar de operar de forma independiente, los usuarios pueden seleccionar a traders experimentados y seguir automáticamente sus estrategias y decisiones de operacion en tiempo real. Los beneficios de una estrategia de copytrading son varios. En primer lugar, los usuarios tienen la oportunidad de aprovechar la experiencia y el conocimiento de traders profesionales, incluso si no tienen un amplio conocimiento del mercado financiero. Esto les permite participar en los mercados y potencialmente obtener beneficios sin tener que realizar un análisis exhaustivo ni tomar decisiones de operación por sí mismos. Además, el copytrading ofrece una oportunidad de aprendizaje. Al seguir a traders experimentados, los usuarios pueden observar y comprender las estrategias utilizadas, los patrones de mercado identificados y las técnicas de gestión de riesgos implementadas.
            </p>
            <button
              type="button"
              class="markets__trading-card-btn-read markets__trading-card-btn-read--radius"
            >
              {{ $t('read-more') }}
              <icon :name="'ri:arrow-right-fill'" />
            </button>
          </div>
        </div>
        <div class="markets__trading-card markets__trading-card--rigth markets__trading-paragraph-1">

          <div class="markets__trading-card-txt">
            <h3>EXCHANGE</h3>
            <p>Un exchange de criptomonedas es una plataforma digital que permite a los usuarios comprar, vender e intercambiar diferentes criptomonedas. Funciona como un intermediario que facilita las transacciones entre compradores y vendedores de criptomonedas. Los usuarios deben crear billeteras digitales (wallets) en el exchange para almacenar sus criptomonedas. Estas billeteras permiten recibir, almacenar y enviar criptomonedas de manera segura, Se pueden depositar criptomonedas en sus billeteras del exchange desde otras fuentes externas o retirar criptomonedas del exchange a sus billeteras personales Es importante tener en cuenta que los exchanges pueden variar en términos de características, servicios y regulaciones. Al elegir un exchange, es esencial investigar y considerar su reputación, seguridad, comisiones y disponibilidad en la jurisdicción en la que te encuentres.
            </p>
            <button
              type="button"
              class="markets__trading-card-btn-read markets__trading-card-btn-read--radius"
            >
              {{ $t('read-more') }}
              <icon :name="'ri:arrow-right-fill'" />
            </button>
          </div>
          <img
            src="../assets//images/trading.png"
            alt=""
            class="markets__trading-card-img"
          >
        </div>
      </article>
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
@import "@/assets/scss/Services";
</style>
