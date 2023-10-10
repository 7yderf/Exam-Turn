<template>
  <section
    ref="servic"
    class="services"
  >
    <div class="services__home-back">
      <article class=" container services__hero">
        <div class="services__hero-tit">
          <p>ARE YOU</p>
          <h1 class="services__hero_tit-top">
            <span>Already</span> part
          </h1>
          <h1 class="services__hero_tit-top services__hero_tit-top--rigth">
            of the <span>Change?</span>
          </h1>

        </div>
        <div class="services__hero-img">
          <img
            src="../assets//images/Ellipse.png"
            class="elipse"
            alt=""
          />
          <img
            src="../assets/images/liner_back.png"
            class="services__hero-img-back"
            alt=""
          />
          <img
            src="../assets/images/icon-go.png"
            class="services__hero-img-icon"
            alt=""
          />
        </div>
      </article>
      <div class="container services__hero-bottom">
        <p>MENTAL, EMOTIONAL <span>AND</span> FINANCIAL FREEDOM</p>
      </div>
    </div>
    <div class="services__box-city">
      <div class="services__box-city-content">
        <p>
          Action! change your paradigm
        </p>
      </div>
      <p>
        Action! change your paradigm
      </p>
    </div>
    <article class="container paused">
      <div class="services__whoAre">
        <div class="services__whoAre-box">
          <div class="services__whoAre-blur" />
          <div class="services__whoAre-content">
            <h3>Who we are?</h3>
            <p>GoBeyond is a community which combines diferent services and focus on solving unsatisfied needs for different industries and markets. We are a global community that have changed the mindset and reality of millions of people around the world through awareness, information and technology applied to everyday life and design for regular and common individuals, in order to get above average results by understanding and applying universal laws and principles, keeping it simple and practical.</p>
          </div>
        </div>
        <img
          src="../assets/images/woman-enjoy.png"
          class="services__whoAre-img"
          alt=""
        >
      </div>
    </article>
    <article class="container services__products-card paused">
      <div class="services__card services__card--left services__paragraph-1">

        <img
          src="../assets//images/knowl-web.png"
          alt=""
          class="services__card-img"
        >

        <div class="services__card-txt">
          <h3>Knowledge</h3>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exerci tation veniam consequat sunt nostrud amet...</p>
          <button
            type="button"
            class="services__card-btn-read services__card-btn-read--radius"
          >
            Read more
            <icon :name="'ri:arrow-right-fill'" />
          </button>
        </div>
      </div>
      <div class="services__card services__card--rigth services__paragraph-1">

        <img
          src="../assets//images/finnace_web.png"
          alt=""
          class="services__card-img"
        >

        <div class="services__card-txt">
          <h3>Finance</h3>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exerci tation veniam consequat sunt nostrud amet...</p>
          <button
            type="button"
            class="services__card-btn-read services__card-btn-read--radius"
          >
            Read more
            <icon :name="'ri:arrow-right-fill'" />
          </button>
        </div>
      </div>
      <div class="services__card services__card--left services__paragraph-1">

        <img
          src="../assets//images/knw_web.png"
          alt=""
          class="services__card-img"
        >

        <div class="services__card-txt">
          <h3>Connect</h3>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exerci tation veniam consequat sunt nostrud amet...</p>
          <button
            type="button"
            class="services__card-btn-read services__card-btn-read--radius"
          >
            Read more
            <icon :name="'ri:arrow-right-fill'" />
          </button>
        </div>
      </div>
      <div class="services__card services__card--rigth services__paragraph-1">

        <img
          src="../assets//images/markets_web.png"
          alt=""
          class="services__card-img"
        >

        <div class="services__card-txt">
          <h3>Markets</h3>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exerci tation veniam consequat sunt nostrud amet...</p>
          <button
            type="button"
            class="services__card-btn-read services__card-btn-read--radius"
          >
            Read more
            <icon :name="'ri:arrow-right-fill'" />
          </button>
        </div>
      </div>
    </article>
    <!-- <article class=" container  services__paragraphs paused">
      <div class="services__paragraph-1">
        <ServicesParagraph
          :titulo="types_proyects[1].titulo"
          :bullets="types_proyects[1].bullets"
          :texto="types_proyects[1].texto"
          :action="types_proyects[1].action"
        />
      </div>
      <div class="services__list-1">
        <ServicesListServices
          :list-services="list_proyects_apps"
        />
      </div>
    </article>
    <article class=" container  services__paragraphs paused">
      <div class="services__paragraph-1">
        <ServicesParagraph
          :titulo="types_proyects[2].titulo"
          :bullets="types_proyects[2].bullets"
          :texto="types_proyects[2].texto"
          :action="types_proyects[2].action"
        />
      </div>
      <div class="services__list-1">
        <ServicesListServices
          :list-services="list_proyects_web"
        />
      </div>
    </article>
    <article class=" container services__contact">
      <h2>Contactános</h2>
      <p>Estamos encantados de oir tu proyecto</p>

    </article> -->

  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const servic = ref(null)
const types_proyects = ref([

  {
    titulo: 'Diseño UX/UI',
    bullets: [
      'Diseño UX/UI',
    ],
    texto: 'La clave para desarrollar una aplicación exitosa es combinar la funcionalidad que exigen los usuarios con un diseño y una experiencia intuitivos que la hagan lo más simple posible de usar.',
    action: 'Cotiza tu proyecto',
  },
  {
    titulo: 'Desarrollo de Apps',
    bullets: [
      'Aplicaciones nativos',
      'Aplicaciones nativos',
    ],
    texto: 'Confiamos en nuestra experiencia tecnológica en varias industrias para ofrecer aplicaciones web, móviles, de escritorio e híbridas altamente escalables, flexibles e interoperables.',
    action: 'Cotiza tu proyecto',
  },
  {
    titulo: 'Desarrollo web',
    bullets: [
      'Desarrollos a la medida',
    ],
    texto: 'Servicios de desarrollo de software personalizado. Contamos con desarrolladores expertos, y con vasta experiencia en industrias específicas.',
    action: 'Cotiza tu proyecto',
  },

])

const list_proyects_design = ref([
  {
    titulo: 'Arquitectura de información y wireframes',
    description: 'La creación de un diseño y una interfaz fáciles de usar comienza aquí.',
  },
  {
    titulo: 'Diseño de interfaz de usuario',
    description: 'Construimos interfaces gráficas de usuario exquisitamente receptivas, animaciones y medios integrados.',
  },
  {
    titulo: 'Desarrollo de UI / UX móviles',
    description: 'Como parte de nuestros servicios de desarrollo de aplicaciones móviles de extremo a extremo.',
  },
  {
    titulo: 'Programación de Front-End',
    description: 'Las impresionantes interfaces de aplicaciones cobran vida gracias a nuestros desarrolladores front-end.',
  },

])

const list_proyects_apps = ref([
  {
    titulo: 'Mantenimiento de aplicaciones',
    description: 'Diseñados para garantizar la escalabilidad, el rendimiento y la sostenibilidad de la aplicación',
  },
  {
    titulo: 'Integraciones de API',
    description: 'Creamos API personalizadas para todas las clases de aplicaciones, agregando funcionalidades a sus sistemas.',
  },
  {
    titulo: 'Diseñamos UI/UX',
    description: 'aplicaciones receptivas y escalables que transforman las experiencias de los clientes a través de múltiples canales.',
  },

])

const list_proyects_web = ref([
  {
    titulo: 'Desarrollo web personalizado',
    description: 'Nuestras soluciones facilitan los flujos de trabajo, aumentan los ingresos y optimizan las operaciones comerciales',
  },
  {
    titulo: 'Implementación y despliegue',
    description: 'Diseñamos un plan de implementación y despliegue de software a profundidad.',
  },
  {
    titulo: 'Desarrollo de API',
    description: 'Desarrollamos APIs confiables que permiten integraciones flexibles y personalización de productos de software.',
  },
  {
    titulo: 'Integración de sistemas',
    description: 'Nuestros equipo de integración de software adoptan nuevas tecnologías y procesos para superar posibles desafíos.',
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
@import "@/assets/scss/Services";
</style>
