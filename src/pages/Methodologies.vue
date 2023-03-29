<template>
  <section class="methodologies"  >
      <article class="methodologies__hero">
          <div class="methodologies__hero-tit">
              <h1>
                  Nosotros
              </h1>
              <p>
                  Queremos convertirnos en una de las principales compañías de México para el desarrollo de software.
              </p>
              <button>
                  Cotiza tu desarrollo
              </button>

          </div>
          <div class="methodologies__hero-img">
              <HomeImgCircleApp
              :img_top="'/turn.png'" 
              :image_bottom="'/circle_2.png'"
              :type="'methodologies'"
              />
          </div>
      </article>
      <article class="methodologies__marco">
        <div class="methodologies__marco-box">
          <h2>Metodología marco Agile</h2>
          <p>Metodología que se centra en la implementación rápida de un equipo eficiente y flexible para planear el flujo de trabajo.</p>
        </div>
        <div class="methodologies__marco-box-img">
          <div class="methodologies__marco-header">
            <button class="methodologies__header-btn-1">Por hacer</button>
            <button class="methodologies__header-btn-2">Haciendo</button>
            <button class="methodologies__header-btn-3">Finalizado</button>
          </div>
          <div class="methodologies__marco-body">
            <div class="methodologies__marco-body-box">
              <button>Despliegue</button>
              <button>Mantenimiento</button>
            </div>
            <div class="methodologies__marco-body-box">
              <button>Implementación</button>
            </div>
            <div class="methodologies__marco-body-box">
              <button>Análisis y diseño</button>
              <button>Requerimientos</button>
            </div>
          </div>
        </div>
      </article>

      <article class="methodologies__carrusel">
        <h2>Ventajas</h2>
        <div class="methodologies__carrusel-box">
          <HomeCarousel 
          :cards="card_soluciones" 
          :type="'methodologies'" 
          />
        </div>
      </article>

      <article class="methodologies__section methodologies__section--agil"> 
        <h2 class="methodologies__title-agil">Proceso de la metodología</h2>
                        
        
              
        <div class="methodologies__agil-box">
          <div class="methodologies__agil-box-backlog">
            <p class="methodologies__text-agil methodologies__text-agil--tit">
              Backlog
            </p>
            <HomeCardColor :text="'Pruebas'" :color="'#D6FBE0'" />
            <HomeCardColor :text="'Requerimientos'" :color="'#D6E3FB'" />
            <HomeCardColor :text="'Mantenimiento'" :color="'#FBDED6'" />
            <HomeCardColor :text="'Despliegue'" :color="'#FBDED6'" />
            <HomeCardColor :text="'Implementación'" :color="'#D6FBE0'" />
            <HomeCardColor :text="'Análisis y diseño'" :color="'#D6E3FB'" />
            <p class="methodologies__text-agil methodologies__text-agil--tit mt-5">
              Sprint backlog
            </p>
            <div class="methodologies__agil-backlog">
              <HomeCardColor :text="'Sprint 1'" :color="''" :whith="'100%'"  />
              <HomeCardColor :text="'Análisis y diseño'" :color="'#D6E3FB'" :whith="'100%'" />
              <HomeCardColor :text="'Requerimientos'" :color="'#D6E3FB'" :whith="'100%'" />
            </div>
            <div class="methodologies__agil-backlog">
              <HomeCardColor :text="'Sprint 2'" :color="''" :whith="'100%'" />
              <HomeCardColor :text="'Implementación'" :color="'#D6FBE0'" :whith="'100%'" />
              <HomeCardColor :text="'Pruebas'" :color="'#D6FBE0'" :whith="'100%'" />
            </div>
            <div class="methodologies__agil-backlog">
              <HomeCardColor :text="'Sprint 3'" :color="''" :whith="'100%'" />
              <HomeCardColor :text="'Despliegue'" :color="'#FBDED6'" :whith="'100%'" />
              <HomeCardColor :text="'Mantenimiento'" :color="'#FBDED6'" :whith="'100%'" />
            </div>
          </div>
            <div class="methodologies__agil-circle">
              <HomeImgCircle />
            </div>
            <div class="methodologies__agil-img">
              <p class="methodologies__text-agil methodologies__text-agil--tit">Incrementos</p>
              <img src="/Fases.png" alt="">
            </div>
        </div>

        <div class="methodologies__carrusel-box methodologies__carrusel-box--agil">
          <HomeCarousel 
          :cards="card_soluciones" 
          :type="'methodologies'" 
          />
        </div>
       
      </article>

      <article class="methodologies__marco">
        <div class="methodologies__marco-box">
          <h2>Metodología en cascada</h2>
          <p>Metodología secuencial para la gestión de proyectos que se divide en fases. Cada fase comienza cuando ha terminado la anterior.</p>
        </div>
        <div class="methodologies__marco-box-img">
          <img src="/grafica.png" alt="">
        </div>
      </article>

      <article class="methodologies__carrusel">
        <h2>Ventajas</h2>
        <div class="methodologies__carrusel-box">
          <HomeCarousel 
          :cards="card_soluciones" 
          :type="'methodologies'" 
          />
        </div>
      </article>

      <article class="methodologies__proceso">
        <div class="methodologies__proceso-box">
          <h2>Proceso de la metodología</h2>
          <MethodologiesRows 
            :title="'Título'" 
            :description="'Pequeña descripción de un renglón.'" 
            :distance="'80px'"
            :action="'Requerimientos'" 
          />
          <MethodologiesRows 
            :title="'Título'" 
            :description="'Pequeña descripción de un renglón.'" 
            :distance="'150px'"
            :action="'Requerimientos'" 
          />
          <MethodologiesRows 
            :title="'Título'" 
            :description="'Pequeña descripción de un renglón.'" 
            :distance="'200px'"
            :action="'Requerimientos'" 
          />
          <MethodologiesRows 
            :title="'Título'" 
            :description="'Pequeña descripción de un renglón.'" 
            :distance="'270px'"
            :action="'Requerimientos'" 
            :arrow="true"
          />
        </div>

      </article>
      
      <article class="methodologies__contact">
        <div class="methodologies__contact-box">
          <h2>Contactános</h2>
          <p>Estamos encantados de oir tu proyecto</p>
          <Contact />
        </div>
      </article>

  </section>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from "vue";
  
  const card_soluciones = ref([
        {
        titulo: "Ventaja 1 título",
        description: "Pequeña descripción de un renglón.",
        action: "Conoce más"
        },
        {
        titulo: "Ventaja 2 título",
        description: "Pequeña descripción de un renglón.",
        action: "Conoce más"
        },
        {
        titulo: "Ventaja 3 título",
        description: "Pequeña descripción de un renglón.",
        action: "Conoce más"
        },
        {
        titulo: "Ventaja 4 título",
        description: "Pequeña descripción de un renglón.",
        action: "Conoce más"
        }
    ])
  

  


</script>
<style lang="scss">
@import "@/assets/scss/Methodologies";
</style>