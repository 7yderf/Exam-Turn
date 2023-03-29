<template>
  <main class="home__main">
      <div class="canvas-cursor" ref="cursor">
      </div>

      <div class="home__section home__section--hero">
        <div class="home__hero-copy">
          <h1 class="home__h1">
              Crea, construye y consigue tu nueva app.
          </h1>
          <p class="home__subtitle">Más <span class="">6 años</span> de experiencia.</p>
          <div class="d-flex gap-5">
              <button class="home__button-solid">
                  Cotiza tu desarrollo
              </button>
              <button class="home__button-outline">
                {{ $t('text') }}
              </button>
          </div>
      </div>
      <div class="home__hero-img">
          <!-- <div class="float-left backlight"></div> -->
          <img src="../assets/images/cel.png" alt="iphone" class="backlights img__default"/>
      </div>          
      </div>

      <div class="home__section home__section--app">
        <div class="home__app">
            <h2 class="home__subtitle">Aplicaciones móviles</h2>
            <button class="home__button-solid"> Cotiza tu desarrollo</button>
        </div>
        <p class="home__text home__text--app">
          Transformamos tu idea en una app móvil de vanguardia para llevar tu negocio al siguiente nivel.
        </p>
        <div class="home__list-1">
          <ServicesListServices
          :listServices="list"
          :type="'home'"
          />
        </div>
        
      </div>
      <div class="home__section home__section--app">
        <div class="home__app">
            <h2 class="home__subtitle">Desarrollo web</h2>
            <button class="home__button-solid">Cotiza tu desarrollo</button>
        </div>
        <p class="home__text home__text--app">
          Potencia tu sitio web con nuestro enfoque y tecnologías de vanguardia para aumentar tus ventas.
        </p>
        <div class="home__list-1">
          <ServicesListServices
          :listServices="list_app_web"
          :type="'home'"
          />
        </div>
        
      </div>

      
      <div class="home__section home__brands">
        <h2>Nuestros clientes</h2>
        <div class="home__brands-box">
          <div class="home__brands-box-img" v-for="brand, index in brands" :key="index">
            <img :src="brand" alt="">
          </div>
        </div>
      </div>
      

      <div class="home__section home__section--exito">
        <div class="home__exito-container">
          <h2 class="home__title home__title--center">Casos de éxito</h2>
          <div class="row mt-5 ">
            <HomeCarousel 
              :cards="app_tecnologics" 
              :type="'tecno'" 
            />
          </div>
        </div>
      </div>
      
      <div class="home__section home__section--agil"> 
          <h2 class="home__title home__title--agil">Trabajamos de manera ágil.</h2>
                          
          <p class="home__text  home__text--agil">Trabajamos de manera ágil para adaptarnos rápidamente a los cambios y entregar valor constante a nuestros clientes a través de colaboración y entregas incrementales.</p>
                
          <div class="home__agil">
            <div class="home__agil-box-backlog">
              <p class="home__text home__text--tit-agil">
                Backlog
              </p>
              <HomeCardColor :text="'Pruebas'" :color="'#D6FBE0'" />
              <HomeCardColor :text="'Requerimientos'" :color="'#D6E3FB'" />
              <HomeCardColor :text="'Mantenimiento'" :color="'#FBDED6'" />
              <HomeCardColor :text="'Despliegue'" :color="'#FBDED6'" />
              <HomeCardColor :text="'Implementación'" :color="'#D6FBE0'" />
              <HomeCardColor :text="'Análisis y diseño'" :color="'#D6E3FB'" />
              <p class="home__text home__text--tit-agil mt-5">
                Sprint backlog
              </p>
              <div class="home__agil-backlog">
                <HomeCardColor :text="'Sprint 1'" :color="''" :whith="'100%'"  />
                <HomeCardColor :text="'Análisis y diseño'" :color="'#D6E3FB'" :whith="'100%'" />
                <HomeCardColor :text="'Requerimientos'" :color="'#D6E3FB'" :whith="'100%'" />
              </div>
              <div class="home__agil-backlog">
                <HomeCardColor :text="'Sprint 2'" :color="''" :whith="'100%'" />
                <HomeCardColor :text="'Implementación'" :color="'#D6FBE0'" :whith="'100%'" />
                <HomeCardColor :text="'Pruebas'" :color="'#D6FBE0'" :whith="'100%'" />
              </div>
              <div class="home__agil-backlog">
                <HomeCardColor :text="'Sprint 3'" :color="''" :whith="'100%'" />
                <HomeCardColor :text="'Despliegue'" :color="'#FBDED6'" :whith="'100%'" />
                <HomeCardColor :text="'Mantenimiento'" :color="'#FBDED6'" :whith="'100%'" />
              </div>
            </div>
              <div class="home__agil-circle">
                <HomeImgCircle />
              </div>
              <div class="home__agil-img">
                <p class="home__text home__text--tit-agil">Incrementos</p>
                <img src="/Fases.png" alt="">
              </div>
          </div>
         
      </div>

      <div class="home__section home__section--contact">
          <div class="container">
              <div class="row d-flex align-items-center justify-content-center">
                  <div class="col-12 col-md-10 col-lg-8 col-xl-7 ">
                      <div class="">
                          <h2 class="home__title">
                              Contáctanos
                          </h2>
                          
                          <h4 class="home__subtitle">Estamos encantados de oir tu proyecto.</h4>
                      </div>
                      
                      <div class="p-2">
                          <Contact />
                      </div>
                  </div>
  
              </div>
          </div>
      </div>

      <BotonContacto />

  </main>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from "vue";
  import {useI18n} from "vue-i18n";
  const { t, tm } = useI18n();
  const card_active = ref(1);
  const cursor = ref<any | HTMLElement>(null);
  const list = ref<any>(tm('list_app_movile'))

  watch(() => t('lang'), (value) => {
        console.log('🚀 ~ file: index.vue:145 ~ watch ~ value:', value)
        list.value = tm('list_app_movile');
    });

  const list_app_web = ref([
        {
            titulo: "Front End ",
            description: "La parte de una aplicación o sitio web que los usuarios ven y con la que interactúan directamente.",
        },
        {
            titulo: "Backend ",
            description: "Parte de una sitio web que no es visible para los usuarios y que maneja la lógica de la aplicación y la gestión de datos.",  
        },
        {
            titulo: "Servidores web",
            description: "Tecnologías de servidores web populares que se utilizan para alojar y entregar sitios web a los navegadores de los usuarios.",
        },
        {
            titulo: "APIs y servicios web",
            description: "Tecnologías como RESTful APIs y servicios web se utilizan para integrar aplicaciones web con otras aplicaciones y servicios.",
        }
        
    ]);
  
  const app_tecnologics = ref<any>([
      {
          image_left: "/home/app-1.png",
          
          title_tecno: "Nombre del proyecto",
          
          text_tecno: "Proyecto donde se requería desarrollar una aplicación móvil con un administrador web.",
          sub_title_tecno: "TECNOLOGÍAS",
          bullets: [
            "Análisis",
            "Diseño",
            "Aplicación web",
            "Aplicación híbrida"
        ],
      },
      {
          image_left: "/home/app-2.png",
          
          title_tecno: "Nombre del proyecto",
          
          text_tecno: "Proyecto donde se requería desarrollar una aplicación móvil con un administrador web.",
          sub_title_tecno: "TECNOLOGÍAS",
          bullets: [
            "Análisis",
            "Diseño",
            "Aplicación web",
            "Desarrollo",
            "Arquitectura",
            "DevOps",
            "Hosting"

        ],
      },
      {
          image_left: "/home/app-3.png",
          
          title_tecno: "Nombre del proyecto",
          
          text_tecno: "Proyecto donde se requería desarrollar una aplicación móvil con un administrador web.",
          sub_title_tecno: "TECNOLOGÍAS",
          bullets: [
            "Análisis",
            "Diseño",
            "Aplicación web",
            "Arquitectura",
            "DevOps",
            "Hosting"
        ],
      }
  ]);

  const brands = ref<any>([
    '/home/toyota.png',
    '/home/cartera.png',
    '/home/vanguardia.png',
    '/home/optimum.png',
    '/home/movicar.png',
    '/home/tingit.png',
  ])
  const show = (index: any) => {
      card_active.value = index;
  };

 

  onMounted(async () => {

    window.addEventListener("mousemove", (e: any) => {

      cursor.value.style.top = (e.pageY - 60) + "px";
      cursor.value.style.left = (e.pageX - 5)+ "px";
      // cursor.value.style.background = `radial-gradient(circle at ${x}px ${y - 50}px, rgba(217, 77, 37, 0.5) 0%, transparent 100px)`;
    });
  });
  
</script>
<style lang="scss" scoped>
@import "@/assets/scss/Home.scss";
</style>