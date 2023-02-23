<template>
    <section class=" container services" ref="servic" >
        <article class="services__hero">
            <div class="services__hero-tit">
                <h1>
                    Nuesros servicios
                </h1>
                <p>
                    Conoce en qué te podemos ayudar
                </p>
                <button>
                    Descubre más
                </button>

            </div>
            <div class="services__hero-img">
                <GlobalHomeImgCircleApp />
            </div>
        </article>
        <article class="services__paragraphs paused">
            <div class="services__paragraph-1">
                <GlobalServicesParagraph
                :titulo="types_proyects[0].titulo"
                :bullets="types_proyects[0].bullets"
                :texto="types_proyects[0].texto"
                :action="types_proyects[0].action"
                />
            </div>
            <div class="services__list-1">
                <GlobalServicesListServices
                :listServices="list_proyects_design"
                />
            </div>
        </article>
        <article class="services__paragraphs paused">
            <div class="services__paragraph-1">
                <GlobalServicesParagraph
                :titulo="types_proyects[1].titulo"
                :bullets="types_proyects[1].bullets"
                :texto="types_proyects[1].texto"
                :action="types_proyects[1].action"
                />
            </div>
            <div class="services__list-1">
                <GlobalServicesListServices
                :listServices="list_proyects_apps"
                />
            </div>
        </article>
        <article class="services__paragraphs paused">
            <div class="services__paragraph-1">
                <GlobalServicesParagraph
                :titulo="types_proyects[2].titulo"
                :bullets="types_proyects[2].bullets"
                :texto="types_proyects[2].texto"
                :action="types_proyects[2].action"
                />
            </div>
            <div class="services__list-1">
                <GlobalServicesListServices
                :listServices="list_proyects_web"
                />
            </div>
        </article>
        <article class="services__contact">
            <h2>Contactános</h2>
            <p>Estamos encantados de oir tu proyecto</p>

            <GlobalContact />

        </article>

    </section>
</template>

<script lang="ts" setup>
    import { ref, onMounted } from "vue";
    import axios from "axios";
    
    const servic = ref(null);
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
        titulo: "Desarrollo de Apps",
        bullets: [
            "Aplicaciones nativos",
            "Aplicaciones nativos",
        ],
        texto: "Confiamos en nuestra experiencia tecnológica en varias industrias para ofrecer aplicaciones web, móviles, de escritorio e híbridas altamente escalables, flexibles e interoperables.",
        action: "Cotiza tu proyecto",
    },
    {
        titulo: "Desarrollo web",
        bullets: [
            "Desarrollos a la medida",
        ],
        texto: "Servicios de desarrollo de software personalizado. Contamos con desarrolladores expertos, y con vasta experiencia en industrias específicas.",
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
            titulo: "Mantenimiento de aplicaciones",
            description: "Diseñados para garantizar la escalabilidad, el rendimiento y la sostenibilidad de la aplicación",
        },
        {
            titulo: "Integraciones de API",
            description: "Creamos API personalizadas para todas las clases de aplicaciones, agregando funcionalidades a sus sistemas.",  
        },
        {
            titulo: "Diseñamos UI/UX",
            description: "aplicaciones receptivas y escalables que transforman las experiencias de los clientes a través de múltiples canales.",
        },
        
    ]);

    const list_proyects_web = ref([
        {
            titulo: "Desarrollo web personalizado",
            description: "Nuestras soluciones facilitan los flujos de trabajo, aumentan los ingresos y optimizan las operaciones comerciales",
        },
        {
            titulo: "Implementación y despliegue",
            description: "Diseñamos un plan de implementación y despliegue de software a profundidad.",  
        },
        {
            titulo: "Desarrollo de API",
            description: "Desarrollamos APIs confiables que permiten integraciones flexibles y personalización de productos de software.",
        },
        {
            titulo: "Integración de sistemas",
            description: "Nuestros equipo de integración de software adoptan nuevas tecnologías y procesos para superar posibles desafíos.",
        },
        
    ]);

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
       console.log("mounted", window.scroll);
       animationScroll();
       console.log("mounted", servic)
    });

</script>
<style lang="scss" scoped>
@import "@/assets/scss/Services";
</style>