<template>
    <section class="about"  >
        <article class="about__hero">
            <div class="about__hero-tit">
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
            <div class="about__hero-img">
                <HomeImgCircleApp
                :img_top="'/turn.png'" 
                :image_bottom="'/circle_2.png'"
                :type="'about'"
                />
            </div>
        </article>

        <article class="about__strategy">
            <h2>El mejor aliado estratégico</h2>
            <p>Trabajamos de la mano contigo desde el proceso de creación y diseño hasta la operación de tu nuevo negocio digital.</p>
            <div class="about__strategy-cards">
                <AboutCardAbout
                v-for="kpi, index in kpis"
                :key="index"
                :title="kpi.title"
                :description="kpi.description"
                :type="'strategy'"
                :id="index"
                />
            </div>
        </article>

        <article class="about__why">
         <div class="about__why-box">
          <h2>¿Porqué turn?</h2>
          <div class="about__why-box-cards" v-for="card, index in card_tecno" :key="index" >
              <ServicesCardTecnologias :action="card.action" :description="card.description" :arrayTecno="card.arrayTecno" :title="card.titulo" />
          </div>
         </div> 
        </article>

        <article class="about__our">
            <h2>Nuestro equipo</h2>
            <p>Lleno de personas talentosas en diversas áreas.</p>
            <div class="about__our-cards">
                <button
                v-for="(teem, index) in Object.keys(teems)"
                :key="index"
                @click="(e) => key_teem = teem" 
                class="about__our-btns"
                :class="key_teem == teem ? 'about__our-btns--active' : ''"
                >
                {{teem}}
                </button>
            </div>
            <div class="about__our-self">
              <p>{{teems[`${key_teem}`].description}}</p>
              <h4>{{teems[`${key_teem}`].title}}</h4>
              <div class="about__our-tecno-self">
                <img v-for="img,index in teems[`${key_teem}`].img" 
                :key="index"
                :src="img" alt="">
              </div>
            </div>
        </article>
        <!-- <article class="about__ideology">
          <h4 class="about__ideology-tit">
            Nosotros creemos en
          </h4>
          <div class="about__ideology-cards">
            <AboutCardIcons
              v-for="idelogy, index in card_idelogy"
              :key="index"
              :img="idelogy.img"
              :description="idelogy.description"
              :type="'strategy'"
              :id="index"
              />
          </div>

        </article> -->
        
        <article class="about__contact">
          <div class="about__contact-box">
            <h2>Contactános</h2>
            <p>Estamos encantados de oir tu proyecto</p>
            <Contact />
          </div>
        </article>

    </section>
</template>

<script lang="ts" setup>
    import { ref, onMounted } from "vue";
    type Teem = {
      img: string[];
      title: string;
      description: string;
    };
    type Teems = {
      [key: string]: Teem;
    };
    
    const key_teem = ref<String>('Análisis');

    const kpis = ref([
        {
            title: "6+",
            description: "años laborales",
        },
        {
            title: "100+",
            description: "proyectos realizados",
        },
        {
            title: "10+",
            description: "industrias",
        },
    ]);

    const teems = ref<Teems>({
      Análisis: 
        {
          img: ["/img/logos/kotlin.png", "/img/logos/android.png"],
          description: "El equipo Front-end se enfoca en el diseño y desarrollo de la interfaz de usuario, optimización y usabilidad.",
          title: "TECNOLOGÍAS",
        },
        Diseño: 
        {
          img: ["/img/logos/css.png", "/img/logos/html5.png"],
          description: "El equipo Front-end se enfoca en el diseño y desarrollo de la interfaz de usuario, optimización y usabilidad.",
          title: "TECNOLOGÍAS",
        },
        FrontEnd: 
        {
          img: ["/img/logos/css.png", "/img/logos/html5.png"],
          description: "El equipo Front-end se enfoca en el diseño y desarrollo de la interfaz de usuario, optimización y usabilidad.",
          title: "TECNOLOGÍAS",
        },
        BackEnd: 
        {
          img: ["/img/logos/css.png", "/img/logos/html5.png"],
          description: "El equipo Front-end se enfoca en el diseño y desarrollo de la interfaz de usuario, optimización y usabilidad.",
          title: "TECNOLOGÍAS",
        },
        Aplicaciones: 
        {
          img: ["/img/logos/css.png", "/img/logos/html5.png"],
          description: "El equipo Front-end se enfoca en el diseño y desarrollo de la interfaz de usuario, optimización y usabilidad.",
          title: "TECNOLOGÍAS",
        },
        QA: 
        {
          img: ["/img/logos/css.png", "/img/logos/html5.png"],
          description: "El equipo Front-end se enfoca en el diseño y desarrollo de la interfaz de usuario, optimización y usabilidad.",
          title: "TECNOLOGÍAS",
        },
    });

    const card_idelogy = ref([
      {
        img: "./icon/tecn_1.svg",
        description: "El software es el cambio",
      },
      {
        img: "./icon/tecn_2.svg",
        description: "El software nos conecta",
      },
      {
        img: "./icon/tecn_3.svg",
        description: "El software es cotidiano",
      },
      {
        img: "./icon/tecn_4.svg",
        description: "El software es indispensable",
      },
    ]);

    const card_tecno = ref([
        {
        titulo: "¿Qué ofrecemos?",
        description: "",
        arrayTecno:['Desarrollo aplicación web', 'Desarrollo aplicación móvil', 'Diseño UI/UX'],
        action: "Conoce más"
        },
        {
        titulo: "¿Cómo lo hacemos?",
        description: "",
        arrayTecno:['Escuchamos tus necesidades','Seleccionamos un marco de trabajo: Agile o cascada', 'Bloqueamos a un equipo de trabajo para tu proyecto', 'Iniciamos con las etapas de tu desarrollo'],
        action: "Conoce más"
        },
        {
        titulo: "Trabajamos bajo  ISO29110",
        description: "",
        arrayTecno:['Documentación de proyecto', 'Control de calidad','Buenas prácticas de desarrollo'],
        action: "Conoce más"
        },
        {
        titulo: "Arquitectura en microservicios",
        description: "",
        arrayTecno:['Escalabilidad','Implementación sencilla','Código reutilizable','Agilidad en cambios'],
        action: "Conoce más"
        }
    ])

      onMounted(() => {
        key_teem.value = Object.keys(teems.value)[0];
      });


</script>
<style lang="scss" scoped>
@import "@/assets/scss/about";
</style>