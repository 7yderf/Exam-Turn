<template>
    <section class="services" ref="servic" >
        
        <article class="services__hero">
            <div id="mobile_title" class="services__hero-tit-mobile" />
            <div class="services__hero-tit">
                <Teleport  v-if="on_Mounted" :disabled="device" to="#mobile_title" >
                <h1>
                    Nuestros servicios
                </h1>
                </Teleport>   
                
                <p>Conoce en qué te podemos ayudar
                </p>
                <a href="#Services" class="button">
                    Descubre más
                </a>
            </div>
            <div class="services__hero-img">
                <HomeImgCircleApp
                :img_top="'/circle_4.png'" 
                :image_bottom="'/circle_2.png'"
                :type="'services'"
                />
            </div>
        </article>
        <article class="services__soluciones">
            <h2>Ingeniería de software de calidad mundial</h2>
            <p>Todos los desarrollos los trabajamos con enfoque en la escalabilidad. Conocemos los retos de los cambios y la evolución de la tecnología. Por eso es que nuestros códigos tienen prácticas de creación y trazabiidad de versiones</p>
            <div class="services__soluciones-box">
                <div class="services__soluciones-card"
                v-for="card, index in card_soluciones" :key="index"
                >
                <ServicesCardSoluciones
                    :title="card.titulo" 
                    :description="card.description"
                    :action="card.action" 
                    :section="card.section"
                />
                </div>
            </div>
        </article>
        <article class="services__paragraphs paused" id="ux" >
            <div class="services__paragraph-1">
                <ServicesParagraph
                :titulo="types_proyects[0].titulo"
                :bullets="types_proyects[0].bullets"
                :texto="types_proyects[0].texto"
                :action="types_proyects[0].action"
                />
            </div>
            <div class="services__list-1">
                <ServicesListServices
                :listServices="list_proyects_design"
                />
            </div>
        </article>
        <article class="services__paragraphs services__paragraphs--orange paused" id="apps">
            <div class="services__paragraphs-box">
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
                    :listServices="list_proyects_apps"
                    />
                </div>
            </div>
        </article>
        <article class="services__paragraphs paused" id="webs">
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
                :listServices="list_proyects_web"
                />
            </div>
        </article>
        <article class="services__tecnologias" id="tecnologi">
            <h2>Tecnologías</h2>
            <div class="services__tecnologias-brand-box">
                <button v-for="icon, index in icons" :key="index"
                  class="services__tecnologias-brand-btn"
                >
                  <img :src="icon" alt="">
                </button>
            </div>
            <div class="services__tecnologias-box" v-for="card, index in card_tecno" :key="index" >
                <ServicesCardTecnologias :action="card.action" :description="card.description" :arrayTecno="card.arrayTecno" :title="card.titulo" />
            </div>
        </article>
        <article class="services__contact" id="Services">
            <div class="services__contact-box">
                <h2>Contactános</h2>
            <p>Estamos encantados de oir tu proyecto</p>

            <Contact />
            </div>

        </article>
        <BotonContacto />
    </section>
</template>

<script lang="ts" setup>
    import { ref, onMounted, HtmlHTMLAttributes } from "vue";
    
    const servic = ref(null);
    const device = ref<boolean>(true);
    const ux = ref<HTMLElement | null>(null);
    const apps = ref<HTMLElement | null>(null);
    const webs = ref<HTMLElement | null>(null);
    const tecnologi = ref<HTMLElement | null>(null);

    const on_Mounted = ref<boolean>(false);

   const types_proyects = ref([
    
    {
        titulo: "Diseño UX/UI",
        bullets: [
            "Diseño UX/UI",
        ],
        texto: "Experiencias digitales inmersivas que cautivan a los usuarios con interfaces intuitivas y funcionales. Nuestro enfoque centrado en el usuario garantiza que cada interacción sea excepcional y funcional.",
        action: "Cotiza tu proyecto",
    },
    {
        titulo: "Aplicaciones móviles",
        bullets: [
            "Aplicaciones nativos",
            "Aplicaciones híbridas",
        ],
        texto: "Confiamos en nuestra experiencia tecnológica en varias industrias para ofrecer aplicaciones web, móviles, de escritorio e híbridas altamente escalables, flexibles e interoperables.",
        action: "Cotiza tu proyecto",
    },
    {
        titulo: "Desarrollo web",
        bullets: [
            "Desarrollos a la medida",
        ],
        texto: "Todos nuestros desarrollos están creados con las mejores prácticas de diseño y programación.\n Asegurando rendimiento, eficiencia, escalabilidad, y usabilidad",
        action: "Cotiza tu proyecto",
    },
    
   ]);

    const list_proyects_design = ref([
        {
            titulo: "Investigación y comprensión del usuario",
            description: "Comprendemos a fondo al usuario objetivo. Realizamos entrevistas y benchmark del mercado para brindar la mejor experiencia.",
        },
        {
            titulo: "Arquitectura de información y wireframes",
            description: "El diseño bien cimentado. Aseguramos estructura escalable y funcional de producto, validando diseño antes de implementación.",  
        },
        {
            titulo: "Diseño de interfaz de usuario",
            description: "Nuestras interfaces se centran en tomar con el mismo nivel de prioridades los objetivos de negocio y la experiencia de usuario final.",
        },
        {
            titulo: "Responsividad",
            description: "Cuidamos la forma de interactuar desde cualquier dispositivo. Así, el usuario final podrá navegar desde cualquier lugar o situación.",
        }
        
    ]);

    const list_proyects_apps = ref([
        {
            titulo: "Últimas tecnologías",
            description: "Los sistemas operativos tienen constantes actualizaciones. Utilizando las últimas versiones de los lenguajes, aseguramos el funcionamiento óptimo.",
        },
        {
            titulo: "Arquitectura escalable",
            description: "Sabemos que las aplicaciones necesitan estar en constante actualización. La planeación de la arquitectura está preparada para cambios continuos.",  
        },
        {
            titulo: "Diseñamos UI/UX",
            description: "Cuando un usuario tiene la sensación de navegar una aplicación móvil con gestos de interaciones de calidad, aumenta el tiempo de uso de la misma.",
        },
        
    ]);

    const list_proyects_web = ref([
        {
            titulo: "Sistemas funcionales y escalables",
            description: "Gracias a nuestras prácticas de programación, documentación, y versionamiento, aseguramos trazabilidad y escalabilidad ¡Sin dependecias del creador!",
        },
        {
            titulo: "Desarrollos seguros y confiables",
            description: "LA seguridad es nuestra prioridad. Utilizamos las técnicas de encriptación y protección de datos más avanzadas.\nGarantizando datos seguros y protegidos",  
        },
        {
            titulo: "Desarrollo de API",
            description: "Nos conectamos a los sistemas que ya utilizas, Ya sea integrando servicios existentes, o la creación de estos para asegurar el funcionamiento integral de la pataforma",
        },
        {
            titulo: "Completamente a la medida",
            description: "Creamos plataformas completamente perzonalizadas para satisfacer las necesidades especificas de tu negocio",
        },
        
    ]);

    const card_soluciones = ref([
        {
        titulo: "Diseño UX/UI",
        description: "Interfaz y experiencia de usuario que logra los objetivos",
        action: "Conoce más",
        section: "ux"
        },
        {
        titulo: "Aplicacines móviles",
        description: "Aplicaciones poderosas listas para usar en cualquier dispositivo móvil",
        action: "Conoce más",
        section: "apps"
        },
        {
        titulo: "Desarrollo web",
        description: "Aplicaciones web que simplifican los procesos diarios, y mejora la experiencia de sus clientes personalizadas",
        action: "Conoce más",
        section: "webs"
        },
        {
        titulo: "Tecnologías",
        description: "Trabajamos con las ultimas versiones de las tecnologias más utilizadas",
        action: "Conoce más",
        section: "tecnologi"
        }
    ])

    const card_tecno = ref([
        {
        titulo: "Backend",
        description: "",
        arrayTecno:['Magento', 'Node', 'Python', 'Java'],
        action: "Conoce más"
        },
        {
        titulo: "Frontend",
        description: "",
        arrayTecno:['Angular','React','Vue.js', 'Next.js'],
        action: "Conoce más"
        },
        {
        titulo: "Aplicaciones",
        description: "",
        arrayTecno:['Android' ,'iOS','Ionic', 'React native'],
        action: "Conoce más"
        },
        {
        titulo: "Base de datos",
        description: "",
        arrayTecno:['Relacionada (MySQL, PostgreSQL, Oracle)','Base documentada (NoSQL)'],
        action: "Conoce más"
        },
        {
        titulo: "Cloud",
        description: "",
        arrayTecno:['AWS','Google Cloud'],
        action: "Conoce más"
        },
        {
        titulo: "DevOps",
        description: "",
        arrayTecno:['Kubernetes','Docker'],
        action: "Conoce más"
        }
    ])

    const icons = ref([
      '/img/logos/aws.png',
      '/img/logos/kotlin.png',
      '/img/logos/vue.png',
      '/img/logos/css.png',
      '/img/logos/bootstrap.png',
      '/img/logos/html5.png',
    ])

    

function isVisible(elm: any) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

const animationScroll = () => {
    window.addEventListener('scroll', (e) => {
        document.querySelectorAll(".paused").forEach(elm => {
            if (isVisible(elm)) // que sean visibles...
                elm.classList.remove("paused"); // les quitamos la clase paused
        })
    })

}

    onMounted(async () => {

        const { windowSize } = useMediaQuery("(min-width: 767px)");
        device.value = windowSize.value;
        watch(() => windowSize.value, (value) => {
        device.value = value;
        });

       console.log("mounted", window.scroll);
       animationScroll();
       console.log("mounted", servic)
       on_Mounted.value = true;
    });
    useHead({
   title: 'Servicios',    
  })
</script>
<style lang="scss" >
@import "@/assets/scss/Services";
</style>