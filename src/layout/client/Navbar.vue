
<template>
  
    <nav
      class="w-100 mx-auto py-2 bg-custom px-0 back position-sticky navClient"
      :class="[scrollNow > 110 && 'white']"
    >
      <div class="nav-container mx-auto">
        <div class="row align-items-center justify-content-between navClient__contain">
          <div class="col-lg-2 col-md-3 col-6 px-lg-0 px-2 me-lg-auto py-1">
            <router-link :to="{ name: 'home' }">
              <img
                v-if="scrollNow < 110 && $route.path == '/home'"
                class="logo pt-3"
                src="@/assets/images/GV_Logotipo-Bco.png"
                alt=""
              />
              <img
                v-else
                class="logo"
                src="@/assets/images/GV_Logotipo-Bco.png"
                alt=""
              />
            </router-link>
          </div>
          <div
            class="col-lg-5 col-md-5 col-6 text-end mt-lg-0 px-lg-0 px-2 py-1 transition-2"
          >
            <div class="d-flex align-items-center justify-content-end">
              <router-link to="/catalogo" class="me-3 d-none d-lg-block">
                <span class="navClient__text">Compra un vehículo</span>
              </router-link>
              <router-link to="/vender-auto" class="transition-2  fs-base ms-5 d-none d-lg-block">
                <span class="navClient__text">Vende tu vehículo</span>
              </router-link>
              <a
                class="btn d-block d-lg-none"
                data-bs-toggle="modal"
                href="#exampleModal"
                role="button"
                aria-controls="offcanvasExample"
              >
              <img src="@/assets/images/icons/iconsax/menu.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- Modal -->
    <div
      class="modal fade left navClient__modal"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
          <div class="modal-header px-5 py-4">
            <h5 class="w-175px" id="exampleModalLabel">
              <router-link :to="{ name: 'home' }">
                <img src="media/logos/brandsolana.svg" alt="" />
              </router-link>
            </h5>
            <div
              id="kt_modal_add_customer_close"
              data-bs-dismiss="modal"
              class="btn btn-icon btn-sm btn-active-icon-primary"
            >
               <i class="isax-close-circle text-white fs-2 me-2"></i>
            </div>
          </div>
          <div class="modal-body px-5 py-4">
            <div class="d-flex flex-column text-start">
              <router-link to="/catalogo" class="my-2">
                <span
                  class="text-white fs-base navClient__text"
                  type="button"
                  data-bs-dismiss="modal"
                >
                  <i class="isax-car text-white fs-base me-1"></i>
                  Compra un vehículo</span
                >
              </router-link>
              <router-link to="/vender-auto" class="my-2">
                <span
                  class="text-white fs-base navClient__text"
                  type="button"
                  data-bs-dismiss="modal"
                >
                  <i class="isax-card text-white fs-base me-1"></i>
                  Vende tu vehículo</span
                >
              </router-link>
              <!--begin::Accordion-->
              <div class="accordion" id="sobre_nosotros">
                <div class="accordion-item border-0 py-3 pe-5">
                  <h2 class="accordion-header" id="sobre_nosotros_header_1">
                    <p
                      class="fs-base fw-normal mb-0 d-flex justify-content-between"
                      data-bs-toggle="collapse"
                      data-bs-target="#sobre_nosotros_body_1"
                      aria-expanded="true"
                      aria-controls="sobre_nosotros_body_1"
                    >
                      <span>Sobre nosotros</span>
                      <i class="fas fa-angle-down text-white fs-base"></i>
                    </p>
                  </h2>
                  <div
                    id="sobre_nosotros_body_1"
                    class="accordion-collapse collapse"
                    aria-labelledby="sobre_nosotros_header_1"
                    data-bs-parent="#sobre_nosotros"
                  >
                    <div class="accordion-body px-4 py-3">
                      <p type="button" data-bs-dismiss="modal">
                        Servicios
                      </p>
                      <p type="button" data-bs-dismiss="modal">
                        Términos y condiciones
                      </p>
                      <p type="button" data-bs-dismiss="modal">
                        Políticas
                      </p>
                      <p type="button" data-bs-dismiss="modal">
                        Aviso de privacidad
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item border-0 py-3 pe-5">
                  <h2 class="accordion-header" id="servicios_header_1">
                    <p
                      class="fs-base fw-normal mb-0 d-flex justify-content-between"
                      data-bs-toggle="collapse"
                      data-bs-target="#servicios_body_1"
                      aria-expanded="true"
                      aria-controls="servicios_body_1"
                    >
                      <span>Servicios</span>
                      <i class="fas fa-angle-down text-white fs-base"></i>
                    </p>
                  </h2>
                  <div
                    id="servicios_body_1"
                    class="accordion-collapse collapse fw-normal"
                    aria-labelledby="servicios_header_1"
                    data-bs-parent="#servicios"
                  >
                    <div class="accordion-body px-4 py-3">
                      <p type="button" data-bs-dismiss="modal">
                        Sucursales
                      </p>
                      <p type="button" data-bs-dismiss="modal">
                        Centro de ayuda
                      </p>
                      <p type="button" data-bs-dismiss="modal">
                        Preguntas frecuentes
                      </p>
                      <p type="button" data-bs-dismiss="modal">
                        Políticas
                      </p>
                      <p type="button" data-bs-dismiss="modal">
                        Aclaraciones
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!--end::Accordion-->
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const isActive = ref(true);
    const scrollNow = ref(0);
    const resized = ref(false);
    const windowWidth = ref(window.innerWidth);
    const openNav = () => {
      isActive.value = !isActive.value;
    };
    const getResized = () => {
      windowWidth.value = window.innerWidth;
      if (windowWidth.value < 980) {
        (resized.value = true), (isActive.value = false);
      } else {
        resized.value = false;
        isActive.value = true;
      }
    };
    const onScroll = (e) => {
      scrollNow.value = window.top.scrollY;
      console.log(scrollNow.value)
    };
    onMounted(() => {
      window.addEventListener("scroll", onScroll);
      getResized();
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", onScroll);
    });

    return {
      resized,
      isActive,
      openNav,
      scrollNow,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/Mixins";
.nav-container{
  @include content(1200px);
  @include flex();

}
.navClient{
  @include flex(flex-start);
 height: 96px;
  
  &__text{
    @include text(1.6rem, 600, 2.4rem);
    color: #FFF;
  }
  @media screen and (max-width:1400px) {
    &__contain{
      padding: 0 24px;
    }
  }
}
.logo {
  max-width: 80%;
}

.transition-2 {
  transition: 0.2s ease-in-out;
}
.bg-custom {
  top: 0px;
  z-index: 2;
  @media screen and (max-width: 500px) {
    position: relative;
  }
}
.back {
  transition: 0.3s ease-in-out;
  background: #020202 !important;
}

.transparent {
  transition: 0.3s ease-in-out;
  background-color: #020202;
  position: fixed;
}
.modal.fade:not(.in).left .modal-dialog {
  margin: 0 !important;
}
.modal.left.fade .modal-dialog {
  right: -50%;
  -webkit-transition: opacity 0.3s linear, right 0.3s ease-out;
  -moz-transition: opacity 0.3s linear, right 0.3s ease-out;
  -o-transition: opacity 0.3s linear, right 0.3s ease-out;
  transition: opacity 0.3s linear, right 0.3s ease-out;
}
.modal.left.fade .modal-content {
  min-height: 100vh;
}
.modal.left.fade.show .modal-dialog {
  right: 0;
  -webkit-transition: opacity 0.3s linear, right 0.3s ease-out;
  -moz-transition: opacity 0.3s linear, right 0.3s ease-out;
  -o-transition: opacity 0.3s linear, right 0.3s ease-out;
  transition: opacity 0.3s linear, right 0.3s ease-out;
}
</style>
