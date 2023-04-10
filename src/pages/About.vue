<template>
    <section class="about"  >
        <article class="about__hero">
            <div id="mobile_title-a" class="services__hero-tit-mobile" />
            <div class="about__hero-tit">
                <Teleport  v-if="on_Mounted" :disabled="device" to="#mobile_title-a" >
                <h1>
                    Nosotros
                </h1>
                </Teleport>
                <p>Somos una empresa orgullosamente Mexicana fundada en 2016. Especialistas en desarrollar sistemas que transforman la manera de hacer negocios, superando las expectativas de nuestros clentes.
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
            <p>Nuestra calidad nos respalda. Nuestros procesos y buenas prácticas aseguran el éxito y satisfacción de nuestros clientes</p>
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
              <ServicesCardTecnologias :action="card.action" :description="card.description" :arrayTecno="card.arrayTecno" :title="card.titulo"
              :section="'about'"
               />
          </div>
         </div> 
        </article>

        <article class="about__our">
            <h2>Nuestro equipo</h2>
            <p>Lleno de personas talentosas en diversas áreas.</p>
            <div class="about__our-cards scroll" ref="teems_buttons">
                <button
                v-for="(teem, index) in Object.keys(teems)"
                :key="index"
                @click="() => teemActive(teem, index)" 
                class="about__our-btns"
                :id="`team_${index}`"
                :class="key_teem == teem ? 'about__our-btns--active' : ''"
                >
                {{teem}}
                </button>
                <div class="about__line-button " />
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
        <BotonContacto />
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



    const device = ref<boolean>(true);

    const teems_buttons = ref<null | any>(null) 
    
    const key_teem = ref<String>('Análisis');

    const on_Mounted = ref<boolean>(false);

    const kpis = ref([
        {
            title: "6+",
            description: "Años laborales",
        },
        {
            title: "40,000+",
            description: "Horas de programación",
        },
        {
            title: "5+",
            description: "Industrias",
        },
    ]);

    
      
    const teemActive = (teem: string, id: any) => {
      key_teem.value = teem;
      // const buttonsLength = Array.from(teems_buttons.value.children).length;
      // const scroll = (teems_buttons.value.scrollWidth - teems_buttons.value.offsetWidth) / 2;

      // Array.from(teems_buttons.value.children).forEach((element: any, index ) => {
      //   if( index == 1){
      //     element.style.order = index+3;}
      //   if( index !== 1){
      //     element.style.order = index;}
      //   if(element.id.split('_')[1] == id){
      //     element.style.order = 1;
      //   }
      // })
    }; 
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
        titulo: "Transaprencia",
        description: "Somos una empresa construida con bases en la honestidad y transparencia hacia los clientes. La comunicación es constante y continua. Serás parte del proceso de principio a fin.",
        arrayTecno:[],
        action: "Conoce más"
        },
        {
        titulo: "Calidad",
        description: "Nuestro equipo abarca todas las etapas del desarrollo de software; desde análisis hasta ingenieros de Quality Assurance. Hemos ido perfeccionando  nuestros proceso con el paso del tiempo y la mejora continua nunca se detiene.",
        arrayTecno:[],
        action: "Conoce más"
        },
        {
        titulo: "Experiencia",
        description: "Teniendo conocimiento en más de 5 industrias , y habiendo desarrollado diferentes tipos de plataformas, hemos creado múltiples módulos que se utilizan en diversos sectores. Podemos reutilizar toda esta experiencia y aprovecharla para tu proyecto.",
        arrayTecno:[],
        action: "Conoce más"
        },
        {
        titulo: "Adaptabilidad",
        description: "Desde un Proyecto con scope limitado, hasta un producto que requiera de muchos incrementales, dominamos tanto la metodología en cascada como agile. Te ayudamos a definir una metodología para que tu proyecto sea lo más rentable posible.",
        arrayTecno:[],
        action: "Conoce más"
        }
    ])

        const listenerResize = () => {
          if (window.innerWidth < 960) {
            const scroll = teems_buttons.value.scrollWidth
            teems_buttons.value.children[6].style.width = `${scroll}px`;
          } else {
            teems_buttons.value.children[6].style.width = `100%`;
          }
        }
      onMounted(() => {
        const { windowSize } = useMediaQuery("(min-width: 767px)");
        device.value = windowSize.value;
        watch(() => windowSize.value, (value) => {
        device.value = value;
        });
        key_teem.value = Object.keys(teems.value)[0];
        on_Mounted.value = true;

        window.addEventListener("resize", listenerResize);

      });

      onUnmounted(() => {
      window.removeEventListener("resize",listenerResize);
    });

    useHead({
   title: 'Nosotros',    
  })
</script>
<style lang="scss" scoped>
@import "@/assets/scss/About";
</style>