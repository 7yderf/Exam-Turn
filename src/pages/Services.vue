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
                <button>
                    Descubre más
                </button>
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
                    @show="showsection"
                />
                </div>
            </div>
        </article>
        <article class="services__paragraphs paused" ref="ux" >
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
        <article class="services__paragraphs services__paragraphs--orange paused" ref="apps">
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
        <article class="services__paragraphs paused" ref="webs">
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
        <article class="services__tecnologias" ref="tecnologi">
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
        <article class="services__contact">
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
        texto: "La clave para desarrollar una aplicación exitosa es combinar la funcionalidad que exigen los usuarios con un diseño y una experiencia intuitivos que la hagan lo más simple posible de usar.",
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
            titulo: "Arquitectura de información y wireframes",
            description: "La creación de un diseño y una interfaz fáciles de usar comienza aquí.",
        },
        {
            titulo: "Diseño de interfaz de usuario",
            description: "Construimos interfaces gráficas de usuario exquisitamente receptivas, animaciones y medios integrados.",  
        },
        {
            titulo: "Desarrollo de UI / UX móviles",
            description: "Como parte de nuestros servicios de desarrollo de aplicaciones móviles de extremo a extremo.",
        },
        {
            titulo: "Programación de Front-End",
            description: "Las impresionantes interfaces de aplicaciones cobran vida gracias a nuestros desarrolladores front-end.",
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
        description: "Relacionada (MySQL, PostgreSQL, Oracle) Base documentada (NoSQL)",
        arrayTecno:[],
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

    const showsection = (section: any) => {
    
    switch (section) {
            case 'ux':
                console.log('🚀 ~ file: Services.vue:290 ~ showsection ~ section:', section)
            ux.value?.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
                break;
            case 'apps':
            apps.value?.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
                break;
            case 'webs':
            webs.value?.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
                break;
            case 'tecnologi':
            tecnologi.value?.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
                break;
            default:
                break;
        }
       
    }
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