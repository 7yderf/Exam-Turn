<template>
    <main class="main-section">
        <div class="canvas-cursor" ref="cursor">

        </div>
        <div class="section-one">
                <div class=" container m-auto row align-items-center justify-content-center">
                    <div class="col-12 col-md-7 mt-2 text-white">
                        <div class="t-middle turn-m-t-50">
                            <h1 class="home__h1 l-h-80">
                                Crea, construye y consigue tu nueva app.
                            </h1>
                            
                            <p class="home__subtitle mt-5">Más <span class="text-primary">6 años</span> de experiencia.</p>
                        </div>
                        
                        <div class="turn-p-t-20 d-flex gap-2">
                            <button class="home__button-solid">
                                Cotiza tu desarrollo
                            </button>
                            
                            <button class="home__button-outline">
                                Conoce más
                            </button>
                        </div>
                    </div>
    
                    <div class="col-12 col-md-5 p-0 turn-m-t-67 d-flex align-items-center justify-content-center">
                        <!-- <div class="float-left backlight"></div> -->
                        <img src="../assets/images/iphone-glow.png" alt="iphone" class="backlights img__default"/>
                    </div>
                </div>
                
                <!-- <div class="row">
                    <div class="col-12 turn-m-t-180 text-white home__title home__title--center">
                        <p class="turn-f-s-25">
                            Descubre más<br>
                            <img src="../assets/icons/isax/bold/arrow-down.svg" alt="user" class="turn-icon-invert"/>
                        </p>                        
                    </div>
                </div> -->
        </div>

        <div class="section-two turn-m-t-80">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-6 mt-2 text-white home__content-image">
                        <div class="p-2">
                            <button class="home__button-solid home__button-solid--radius">
                                Cotiza tu desarrollo
                            </button>
                        </div>
                        <div class="p-2">
                            <p class="home__title l-h-72">
                                Tus aliados en aplicaciones moviles.
                            </p>
                        </div>
                        <div class="d-none d-lg-flex p-2 home__image-box">
                            <img class="home__image-traslade img__default img__max-h" :data-show="card_active == 1" src="/pixel.png" alt="pixel" />
                            <img class="home__image-traslade img__default img__max-h" :data-show="card_active == 2" src="/app-web.png" alt="pixel" />
                            <img class="home__image-traslade img__default img__max-h" :data-show="card_active == 3" src="/portfolio.png" alt="pixel" />
                        </div>
                        <div class="row d-lg-none">
                          <GlobalHomeCarousel :cards="app_mobile" :type="'apps'" />
                        </div>
                        
                    </div>
    
                    <div class="col-12 col-md-6 d-none d-lg-flex">
                        <div class="row">
                            
                                <GlobalHomeCardApps @click="show(index +1)" v-for="(app, index) in app_mobile" :key="index"
                                    :img_device="app.img_device"
                                    :image_top="app.icon_tecno"
                                    :title="app.title_tecno"
                                    :description="app.text_tecno"
                                    :subtitle="app.sub_title_tecno"
                                    :logos="app.tecnologias"
                                    :cardActive="card_active"
                                    :id="index + 1"
                                />
                        
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section-three turn-m-t-80">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-6 mt-2 text-white ">
                        <div class="p-2">
                            <button class="home__button-solid home__button-solid--radius">
                                Desarrollo web
                            </button>
                        </div>
                        <div class="p-2">
                            <p class="home__title l-h-72">
                                Y en desarrollo web
                            </p>
                        </div>
                        
                        <div class="col-md-12">
                            <GlobalHomeCardApps v-for="(app, index) in app_web" :key="index"
                                    :img_device="app.img_device"
                                    :image_top="app.icon_tecno"
                                    :title="app.title_tecno"
                                    :description="app.text_tecno"
                                    :subtitle="app.sub_title_tecno"
                                    :logos="app.tecnologias"
                                    :cardActive="0"
                                    :id="0"
                                />
                        </div>
                    </div>
    
                    <div class="col-12 col-lg-6 home__three-img d-none d-lg-flex">
                        <div class="turn-m-t-100">
                            <img src="/app-web.png" alt="app-web" class="img__default"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="section-four turn-m-t-120 mb-5">
            <div class="container-fluid">
                <div class="row gap-3">
                    
                        <h4 class="home__text home__text--strong my-5">Algunos de nuestros colaboradores</h4>

                        <GlobalHomeBrands
                          :brands="brands"
                          :type="'right'"
                        />
                        <GlobalHomeBrands
                          :brands="brands"
                          :type="'left'"
                        />
                        
                    
                </div>
            </div>
        </div>

        <div class="section-five">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2 class="home__title home__title--center">Te presentamos algunos de nuestros casos de estudio</h2>
                        
                        <div class="row mt-5 d-none d-lg-flex">
                            <GlobalHomeSlider
                              :appTecnologics="app_tecnologics"
                            />
                        </div>
                        <div class="row mt-5 d-lg-none">
                          <GlobalHomeCarousel 
                            :cards="app_tecnologics" 
                            :type="'tecno'" 
                          />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="section-six">
            <div class="container">
                <div class="row d-flex align-items-center justify-content-center">
                    <div class="col-12 col-md-4 text-white">
                        <div class="">
                            <img src="../assets/logos/label-a.png" alt="label-a" class=""/>
                            
                            <h2 class="home__title">Trabajamos de manera ágil.</h2>
                            
                            <p class="home__text">Conoce sobre nuestro forma de trabajo en el marco Scrum.</p>
                        </div>
                    </div>
    
                    <div class="col-12 col-md-8 p-0 turn-m-t-67 d-flex align-items-center justify-content-center">
                        <GlobalHomeImgCircle />
                    </div>
                </div>
            </div>
        </div>

        <div class="section-seven turn-m-t-120 turn-m-b-160">
            <div class="container">
                <div class="row d-flex align-items-center justify-content-center">
                    <div class="col-12 col-md-10 col-lg-8 col-xl-6 text-white">
                        <div class="">
                            <h2 class="">
                                Contáctanos
                            </h2>
                            
                            <h4 class="">Estamos encantados de oir tu proyecto.</h4>
                        </div>
                        
                        <div class="p-2">
                            <GlobalContact />
                        </div>
                    </div>
    
                </div>
            </div>
        </div>

    </main>
</template>

<script lang="ts" setup>
    import { ref, onMounted } from "vue";
    const card_active = ref(1);
    const cursor = ref<any | HTMLElement>(null);

    const app_mobile = ref<any>([
        {   
            img_device: "/pixel.png",
            icon_tecno: "/img/logos/android-white.png",
            title_tecno: "Aplicaciones Android",
            text_tecno: "Aplicación diseñada para ejecutarse en un dispositivo móvil, que puede ser un teléfono inteligente o una tableta",
            sub_title_tecno: "TECNOLOGÍAS",
            tecnologias: ["/img/logos/kotlin.png", "/img/logos/android.png"],
        },
        {   
            img_device: "/app-web.png",
            icon_tecno: "/img/logos/apple-white.png",
            title_tecno: "Aplicaciones iOS",
            text_tecno: "Aplicación diseñada para ejecutarse en un dispositivo móvil, que puede ser un teléfono inteligente o una tableta",
            sub_title_tecno: "TECNOLOGÍAS",
            tecnologias: ["/img/logos/swift.png", "/img/logos/xcode.png"],
        },
        {
            img_device: "/portfolio.png",
            icon_tecno: "/img/logos/mobile-white.png",
            title_tecno: "Aplicaciones hibridas",
            text_tecno: "Aplicaciones que pueden emplearse en cualquier sistema operativo, así como equipo o marca.",
            sub_title_tecno: "TECNOLOGÍAS",
            tecnologias: ["/img/logos/flutter.png", "/img/logos/reactjs.png"],
        }
    ]);

    const app_web = ref<any>([
        {
            img_device: "/app-web.png",
            icon_tecno: "/img/logos/monitor-white.png",
            title_tecno: "Aplicaciones web",
            text_tecno: "Creamos y mantenemos sitios web que sean funcionales en internet, a través de diferentes lenguajes de programación.",
            sub_title_tecno: "TECNOLOGÍAS",
            tecnologias: ["/img/logos/html5.png", "/img/logos/css.png", "/img/logos/bootstrap.png"],
        },
    ]);
    
    const app_tecnologics = ref<any>([
        {
            image_left: "/portfolio.png",
            bullet: "/img/logos/icon_pera.png",
            title_tecno: "Pera logistics",
            icon_title: "/img/logos/arrow-up-left.png",
            text_tecno: "Lorem ipsum dolor sit amet consectetur. Quis molestie ultrices posuere imperdiet feugiat quisque dui sit. Sit tempor eget placerat nibh ut mattis libero bibendum vivamus.",
            sub_title_tecno: "TECNOLOGÍAS",
            tecnologias: ["/img/logos/html5.png", "/img/logos/css.png", "/img/logos/reactjs.png"],
        },
        {
            image_left: "/portfolio.png",
            bullet: "/img/logos/icon_pera.png",
            title_tecno: "Pera logistics",
            icon_title: "/img/logos/arrow-up-left.png",
            text_tecno: "Lorem ipsum dolor sit amet consectetur. Quis molestie ultrices posuere imperdiet feugiat quisque dui sit. Sit tempor eget placerat nibh ut mattis libero bibendum vivamus.",
            sub_title_tecno: "TECNOLOGÍAS",
            tecnologias: ["/img/logos/html5.png", "/img/logos/css.png", "/img/logos/reactjs.png"],
        },
        {
            image_left: "/portfolio.png",
            bullet: "/img/logos/icon_pera.png",
            title_tecno: "Pera logistics",
            icon_title: "/img/logos/arrow-up-left.png",
            text_tecno: "Lorem ipsum dolor sit amet consectetur. Quis molestie ultrices posuere imperdiet feugiat quisque dui sit. Sit tempor eget placerat nibh ut mattis libero bibendum vivamus.",
            sub_title_tecno: "TECNOLOGÍAS",
            tecnologias: ["/img/logos/html5.png", "/img/logos/css.png", "/img/logos/reactjs.png"],
        }
    ]);

    const brands = ref<any>([
        "/img/logos/Amazon.png",
        "/img/logos/GMC.png",
        "/img/logos/Ticketmaster.png",
        "/img/logos/Soriana.png",
        "/img/logos/Walmart.png",
        "/img/logos/Amazon.png",
        "/img/logos/GMC.png",
        "/img/logos/Ticketmaster.png",
        "/img/logos/Soriana.png",
        "/img/logos/Walmart.png",
    ])

    const show = (index: any) => {
        card_active.value = index;
    };

    // setInterval(() => {
    //     if (card_active.value == 3) {
    //         card_active.value = 1;
    //     } else {
    //         card_active.value++;
    //     }
    // }, 5000);

    onMounted(async () => {
      console.log("mounted", cursor.value);
      window.addEventListener("mousemove", (e: any) => {
        console.log('🚀 ~ file: index.vue:316 ~ cursor.value?.addEventListener ~ e:', e)
        cursor.value.style.top = (e.pageY - 60) + "px";
        cursor.value.style.left = (e.pageX - 5)+ "px";
        // cursor.value.style.background = `radial-gradient(circle at ${x}px ${y - 50}px, rgba(217, 77, 37, 0.5) 0%, transparent 100px)`;
      });
    });
    
</script>