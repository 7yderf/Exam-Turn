<template>
  <section class="methodologies"  >
      <article class="methodologies__hero">
        <div id="mobile_title-m" class="services__hero-tit-mobile" />
          <div class="methodologies__hero-tit">
            <Teleport  v-if="on_Mounted" :disabled="device" to="#mobile_title-m" >
              <h1>
                Conoce nuestra forma de trabajo
              </h1>
            </Teleport>
              
              <p>Queremos convertirnos en una de las principales compañías de México para el desarrollo de software.
              </p>
              <a href="#Methodologies" class="button">
                  Cotiza tu desarrollo
              </a>

          </div>
          <div class="methodologies__hero-img">
              <HomeImgCircleApp
              :img_top="'/hero_m.png'" 
              :image_bottom="'/circle_2.png'"
              :type="'methodologies'"
              />
          </div>
      </article>
      <article class="methodologies__marco">
        <div class="methodologies__marco-box">
          <h2>Metodología Scrum Agile</h2>
          <p>Metodología enfocada en entregas iterativas, equipos autodirigibles, y colaboración constante con el cliente</p>
        </div>
        <div class="methodologies__marco-box-img">
          <div class="methodologies__marco-header">
            <button class="methodologies__header-btn-1">Por hacer</button>
            <button class="methodologies__header-btn-2">Haciendo</button>
            <button class="methodologies__header-btn-3">Finalizado</button>
          </div>
          <div class="methodologies__marco-body">
            <div class="methodologies__marco-body-box">
              <button class="methodologies__move_1" >Despliegue</button>
              <button class="methodologies__move_2">Mantenimiento</button>
            </div>
            <div class="methodologies__marco-body-box">
              <button class="methodologies__move_3">Implementación</button>
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
          <MethodologiesCardMethodologies 
          v-for="(card, index) in card_soluciones"
          :key="index"
          :description="card.description" 
          :action="card.action"
          :title="card.titulo" 
          />
        </div>
      </article>

      <article class="methodologies__section methodologies__section--agil"> 
        <h2 class="methodologies__title-agil">Proceso de la metodología</h2>
                        
        
              
        <div v-if="device" class="methodologies__agil-box">
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
        <div v-if="!device" class="methodologies__agil-box">
          <img src="/agil.png" alt="" class="w-100">
        </div>

        <div class="methodologies__carrusel-box methodologies__carrusel-box--agil">
          <MethodologiesCardMethodologies 
          v-for="(card, index) in card_agil"
          :key="index"
          :description="card.description" 
          :action="card.action"
          :title="card.titulo" 
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
          <MethodologiesCardMethodologies 
          v-for="(card, index) in card_ventajas_2"
          :key="index"
          :description="card.description" 
          :action="card.action"
          :title="card.titulo" 
          />
        </div>
      </article>

      <article class="methodologies__proceso">
        <div class="methodologies__proceso-box">
          <h2>Proceso de la metodología</h2>
          <MethodologiesRows 
            :title="'Título'" 
            :description="'Entrevistas para conocer el alcance'" 
            :distance="80"
            :action="'Ánalisis'" 
          />
          <MethodologiesRows 
            :title="'Título'" 
            :description="'Maquetación UI/UX'" 
            :distance="150"
            :action="'Diseño'" 
          />
          <MethodologiesRows 
            :title="'Título'" 
            :description="'Etapa de desarrollo de software'" 
            :distance="150"
            :action="'Implementación'" 
          />
          <MethodologiesRows 
            :title="'Título'" 
            :description="'Testing para verificar funcionamiento'" 
            :distance="300"
            :action="'Pruebas'" 
          />
          <MethodologiesRows 
            :title="'Título'" 
            :description="'Producción y monitoreo de usabilidad'" 
            :distance="320"
            :action="'Despliegue y mantenimiento'" 
            :arrow="true"
          />
        </div>

      </article>
      
      <article class="methodologies__contact" id="Methodologies">
        <div class="methodologies__contact-box">
          <h2>Contactános</h2>
          <p>Estamos encantados de oir tu proyecto</p>
          <Contact />
        </div>
      </article>
      <BotonContacto />
  </section>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from "vue";
  const device = ref<boolean>(true);
  const on_Mounted = ref<boolean>(false);
  
  const card_soluciones = ref([
        {
        titulo: "Adaptabilidad",
        description: "Facilidad de cambios durante el proyecto",
        action: "Conoce más"
        },
        {
        titulo: "Mayor calidad",
        description: "Medida en cada entregable",
        action: "Conoce más"
        },
        {
        titulo: "Entregas frecuentes",
        description: "Uso inmediato del sistema",
        action: "Conoce más"
        },
        {
        titulo: "Mitigación",
        description: "Redice el riesgo de fracaso",
        action: "Conoce más"
        }
    ])
  const card_agil = ref([
        {
        titulo: "backlog",
        description: "Lista total de tareas a trabajar ordenadas por prioridad",
        action: "Conoce más"
        },
        {
        titulo: "Sprint backlog",
        description: "Lista de tareas a trabajar en la siguiente iteración",
        action: "Conoce más"
        },
        {
        titulo: "Sprint",
        description: "Iteración de 15 días donde se trabaja el sprint backlog",
        action: "Conoce más"
        },
        {
        titulo: "Incrementos",
        description: "Entregas constantes al finalizar cada sprint",
        action: "Conoce más"
        }
    ])
  const card_ventajas_2 = ref([
        {
        titulo: "Presupuesto claro",
        description: "Lo conoces desde la segunda etapa",
        action: "Conoce más"
        },
        {
        titulo: "Documentación",
        description: "Entregables al finalizar cada fase",
        action: "Conoce más"
        },
        {
        titulo: "Medición",
        description: "Plan de trabajo detallado",
        action: "Conoce más"
        },
        {
        titulo: "Para proyectos limitados",
        description: "Ideal para alcances definidos y sencillos",
        action: "Conoce más"
        }
    ])
  


  onMounted(() => {
        const { windowSize } = useMediaQuery("(min-width: 767px)");
        device.value = windowSize.value;
        watch(() => windowSize.value, (value) => {
        device.value = value;
        });
        on_Mounted.value = true;
      });

      useHead({
   title: 'Metodologías',    
  })
</script>
<style lang="scss">
@import "@/assets/scss/Methodologies";
</style>