<template>
  <main class="home__main">
      
      <div class="home__section home__section--hero">
        <div id="transport"></div>
        <div class="home__hero-copy">
          <Teleport v-if="on_Mounted" :disabled="device" to="#transport"  >
            <h1 class="home__h1">
                Transformación digital con la mejor calidad
            </h1>
          </Teleport>
          <p class="home__subtitle">Desarrollo de software a la medida</p>
          <div class="home__hero-action">
              <a href="#Home" class="home__button-solid">
                Cotiza tu desarrollo
              </a>
              <NuxtLink to="#" class="home__button-outline">
                <!-- {{ $t('text') }} -->
                Conoce más
              </NuxtLink>
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
            <Teleport v-if="on_Mounted" :disabled="device" to="#button_1"  >
              <a href="#Home" class="home__button-solid"> Cotiza tu desarrollo</a>
            </Teleport>
            
        </div>
        
        <div id="button_1" class="w-100 mt-5"></div>
        
        
      </div>
      <div class="home__section home__section--app">
        <div class="home__app">
            <h2 class="home__subtitle">Desarrollo web</h2>
            <Teleport v-if="on_Mounted" :disabled="device" to="#button_2"  >
              <a href="#Home" class="home__button-solid">Cotiza tu desarrollo</a>
            </Teleport>
            
        </div>
        
        <div id="button_2" class="w-100 mt-5"></div>
      </div>

      
      <div class="home__section home__brands">
        <h2>Nuestros clientes</h2>
        <div v-if="device" class="home__brands-box">
          <div class="home__brands-box-img" v-for="brand, index in brands" :key="index">
            <img :src="brand" alt="">
          </div>
          
        </div>
        <div class="home__brands-box">
          <HomeBrands v-if="!device" :brands="brands" />
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
                
         
      </div>

      <div class="home__section home__section--contact" id="Home">
          <div class="container">
              <div class="row d-flex align-items-center justify-content-center">
                  <div class="col-12 col-md-10 col-lg-8 col-xl-7 ">
                      <div class="">
                          <h2 class="home__title">
                              Contáctanos
                          </h2>
                          
                          <h4 class="home__subtitle">Estamos encantados de oir tu proyecto.</h4>
                      </div>
                      
                      <!-- <div class="p-2">
                          <Contact />
                      </div> -->

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

  // configuracíon de lightgallery
  // import lgZoom  from 'lightgallery/plugins/zoom/lg-zoom.umd';
  // const plugins = [lgZoom];

  const { t, tm } = useI18n();
  const card_active = ref(1);
  const list = ref<any>(tm('list_app_movile'))
  const device = ref<boolean>(true);
  const on_Mounted = ref<boolean>(false);

 
  

  watch(() => t('lang'), (value) => {
        console.log('🚀 ~ file: index.vue:145 ~ watch ~ value:', value)
        list.value = tm('list_app_movile');
    });

  
  
  const app_tecnologics = ref<any>([
      {
          image_left: "/carrusel/toyota.webp",
          
          title_tecno: "Sitio 360 para seminuevos",
          
          text_tecno: "Nuestro cliente es una da las marcas más importantes de México. Creamos una plataforma donde monitorea desde la carga de inventario, hasta la venta, con interacción de cliente final. ",
          sub_title_tecno: "TECNOLOGÍAS",
          bullets: [
            "Análisis",
            "Diseño",
            "Aplicación web",
            "devops",
            "apis y servicios",
        ],
      },
      {
          image_left: "/carrusel/cartera.webp",
          
          title_tecno: "App para la gestión de carteras",
          
          text_tecno: "Aplicación móvil para los clientes finales de una institución financiera.\nPueden conocer el estatus de sus créditos, pagos, y descarga de estados de cuenta.  ",
          sub_title_tecno: "TECNOLOGÍAS",
          bullets: [
            "Análisis",
            "Diseño",
            "Aplicación móvil",
            "Desarrollo web",
            "apis y servicios",
            "DevOps",

        ],
      },
      {
          image_left: "/carrusel/tingit.webp",
          
          title_tecno: "Sistema para transportistas",
          
          text_tecno: "Sistema para la gestión y seguimiento de las empresas de transporte.\n Facturación; registro de gastos y fletes; mantenimiento de unidades; entre otras funciones.",
          sub_title_tecno: "TECNOLOGÍAS",
          bullets: [
            "Análisis",
            "Diseño",
            "Desarrollo web",
            "DevOps",
            "APIs y servicios"
        ],
      },
      {
          image_left: "/carrusel/optimum.webp",
          
          title_tecno: "ERP a la medida",
          
          text_tecno: "Una de las principales importadoras de equipo de gimnasio del país nos pidió un ERP completamente adaptado al flujo que llevan actualmente.",
          sub_title_tecno: "TECNOLOGÍAS",
          bullets: [
            "Análisis",
            "Diseño",
            "Desarrollo web",
            "DevOps",
        ],
      },
      {
          image_left: "/carrusel/movi.webp",
          
          title_tecno: "Arrendamiento automotriz",
          
          text_tecno: "Aplicación web para la solicitud y pre-autorización de un arrendamiento automotriz.",
          sub_title_tecno: "TECNOLOGÍAS",
          bullets: [
            "Análisis",
            "Desarrollo web",
            "DevOps",
            "APIs y servicios"
        ],
      },
      {
          image_left: "/carrusel/autodeal.webp",
          
          title_tecno: "Marketplace Seminuevos",
          
          text_tecno: "Aplicación web para la compra y venta de autos seminuevos. Los principales grupos automotrices del país exponen su inventario para que los clientes adquieran su próximo vehículo.",
          sub_title_tecno: "TECNOLOGÍAS",
          bullets: [
            "Análisis",
            "Diseño",
            "Desarrollo web",
            "DevOps",
            "APIs y servicios"
        ],
      },
      {
          image_left: "/carrusel/progreza.webp",
          
          title_tecno: "Fitness App",
          
          text_tecno: "Aplicación móvil para el seguimiento diario de una vida balanceada de ejercicio, alimentación, y hábitos de sueño. Cuenta con administrador para la carga de rutinas y seguimiento de los clientes finales.",
          sub_title_tecno: "TECNOLOGÍAS",
          bullets: [
            "Análisis",
            "Diseño",
            "Desarrollo web",
            "Desarrollo móvil",	
            "DevOps",
        ],
      },
      {
          image_left: "/carrusel/vanguardia.webp",
          
          title_tecno: "Marketplace seminuevos",
          
          text_tecno: "Uno de los principales grupos de Guadalajara. Aplicación web para la compra y venta de autos seminuevos. Además, cuenta con una herramienta de valuación para conocer el precio de tu vehículo. ",
          sub_title_tecno: "TECNOLOGÍAS",
          bullets: [
            "Análisis",
            "Diseño",
            "Desarrollo web",
            "DevOps",
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
 

  onMounted(async () => {

    const { windowSize } = useMediaQuery("(min-width: 767px)");
    device.value = windowSize.value;
    watch(() => windowSize.value, (value) => {
      device.value = value;
    });
    on_Mounted.value = true;

  });

   useHead({
   title: 'Inicio', 
   link: [
     {rel: 'canonical', href: 'https://turn.com.mx/'  },
   ],
  })
  useSeoMeta({
  title: 'Inicio',
  })
  
</script>
<style lang="scss" scoped>
@import "@/assets/scss/Home.scss";
</style>