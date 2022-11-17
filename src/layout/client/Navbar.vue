<template>
  <nav
    class="w-100 mx-auto py-2 bg-custom px-0 back position-sticky navClient"
    :class="[scrollNow > 110 && 'white']"
  >
    <div class="nav-container mx-auto">
      <div
        class="row align-items-center justify-content-between navClient__contain"
      >
        <div
          class="col-lg-1 col-md-1 col-1 px-lg-0 px-2 me-lg-auto py-1 flex-icon-logo"
        >
          <a
            class="btn d-block"
            data-bs-toggle="modal"
            href="#exampleModal"
            role="button"
            aria-controls="offcanvasExample"
          >
            <img src="@/assets/images/icons/iconsax/menu.svg" />
          </a>
        </div>
        <div class="col-lg-2 col-md-3 col-6 px-lg-0 px-2 me-lg-auto py-1">
          <router-link :to="{ name: 'home' }">
            <img
              v-if="scrollNow < 110 && $route.path == '/home'"
              class="logo"
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
          class="col-lg-9 col-md-5 col-6 text-end mt-lg-0 px-lg-0 px-2 py-1 transition-2"
        >
          <div class="d-flex align-items-center justify-content-end">
            <Search
              class="d-none d-lg-flex flex-grow-1 mx-5"
              v-if="
                showSearch ||
                (scrollNow >= windowWidth / 4.51 && $route.path == '/home')
              "
            />

            <router-link to="/catalogo" class="me-3 d-none d-lg-block">
              <span class="navClient__text">Compra un vehículo</span>
            </router-link>
            <router-link
              to="/beneficios"
              class="transition-2 fs-base ms-5 d-none d-lg-block"
            >
              <span class="navClient__text">Vende tu vehículo</span>
            </router-link>
            <a
              class="btn navClient__hamburguer"
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
              <img
                src="@/assets/images/GV_Logotipo-Bco.png"
                alt=""
                class="navClient__modal-logo"
              />
            </router-link>
          </h5>
          <div
            id="kt_modal_add_customer_close"
            data-bs-dismiss="modal"
            class="btn btn-icon btn-sm btn-active-icon-primary"
          >
            <img :src="Close" alt="" />
          </div>
        </div>
        <div class="navClient__search">
          <Search @closeModal="() => closeModal()"></Search>
        </div>
        <div class="modal-body px-5">
          <div class="d-flex flex-column text navClient__gap">
            <router-link to="/beneficios" class="my-2 order-md-2">
              <span
                class="text-white fs-base navClient__text-submenu"
                type="button"
                data-bs-dismiss="modal"
              >
                <i class="isax-car text-white fs-base me-1"></i>
                Vende tu vehículo</span
              >
            </router-link>
            <router-link to="/catalogo" class="my-2 order-md-1">
              <span
                class="text-white fs-base navClient__text-submenu"
                type="button"
                data-bs-dismiss="modal"
              >
                <i class="isax-card text-white fs-base me-1"></i>
                Comprar un vehículo</span
              >
            </router-link>
            <router-link to="/agencias" class="my-2 order-md-3">
              <span
                class="text-white fs-base navClient__text-submenu"
                type="button"
                data-bs-dismiss="modal"
              >
                <i class="isax-card text-white fs-base me-1"></i>
                Agencias</span
              >
            </router-link>
            <div class="d-flex flex-column order-md-5 gap-5 my-2">
              <div>
                <span class="text-white fs-base navClient__text">
                  <i class="isax-card text-white fs-base me-1"></i>
                  Contacto</span
                >
              </div>

              <div class="navClient__redes my-2">
                <a
                  href="https://www.facebook.com/grupovanguardiamx"
                  target="_blank"
                >
                  <img
                    src="@/assets/images/icons/icon-facebook.svg"
                    alt=""
                    class="foot__contact-img"
                  />
                </a>
                <a
                  href="https://www.instagram.com/grupovanguardiamx/"
                  target="_blank"
                >
                  <img
                    src="@/assets/images/icons/icon-instagram.svg"
                    alt=""
                    class="foot__contact-img"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/grupovanguardia/?originalSubdomain=mx"
                  target="_blank"
                >
                  <img
                    src="@/assets/images/icons/icon-linkedin.svg"
                    alt=""
                    class="foot__contact-img"
                  />
                </a>
              </div>
            </div>
            <a
              href="https://www.grupovanguardia.com/"
              class="my-2 order-md-4"
              target="_blank"
            >
              <span
                class="text-white fs-base navClient__text-submenu"
                type="button"
                data-bs-dismiss="modal"
              >
                <i class="isax-card text-white fs-base me-1"></i>
                Ir a nuestro sitio corporativo</span
              >
            </a>
            <!--begin::Accordion-->

            <!--end::Accordion-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, watch, reactive, computed } from "vue";
import { useRoute } from "vue-router";
import Close from "@/assets/images/icons/icon-close.svg";
import Search from "@/views/client/components/Search.vue";

export default {
  components: {
    Search,
  },
  setup() {
    const route = useRoute();
    const routeName = ref(route.name);
    const isActive = ref(true);
    const scrollNow = ref(0);
    const resized = ref(false);
    const windowWidth = ref(window.innerWidth);
    //Rutas donde se oculta el componente Search
    const routeHiddenSearch = ["catalogo", "home"];

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
      windowWidth.value = window.innerWidth;
      scrollNow.value = window.top.scrollY;
    };

    onMounted(() => {
      window.addEventListener("scroll", onScroll);
      getResized();
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", onScroll);
    });
    //Watch que obtiene el nombre de la ruta actual
    watch(
      () => route.name,
      (name, prevName) => (routeName.value = name)
    );
    //Verificar que no estemos en una ruta donde se oculta el search, regresa un boolean para renderizar o no el componente con un v-if
    const showSearch = computed(
      () => !routeHiddenSearch.includes(routeName.value)
    );
    return {
      resized,
      isActive,
      openNav,
      scrollNow,
      Close,
      routeName,
      showSearch,
      windowWidth,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/Mixins";
.nav-container {
  @include content(1200px);
  @include flex();
  @media screen and (max-width: 1276px) {
    padding-right: 60px;
  }
}
.navClient {
  @include flex(flex-start);
  height: 96px;
  &__gap {
    gap: 20px;
    @media screen and (min-width: 768px) {
      gap: 60px !important;
    }
  }
  &__search {
    display: none;
    @media screen and (min-width: 768px) {
      display: block;
      padding: 40px 40px 10px 40px;
      z-index: 5;
    }
  }
  &__modal {
    .modal-content {
      background: var(--primary-color);
    }
    .modal-body {
      @include flex(center, 16px, flex-start);
      width: 100%;
      padding-top: 100px;
    }
    .text {
      @include text(2rem, 500, 2.6rem, center);
      gap: 16px;
    }
  }
  &__modal-logo {
    width: 180px;
  }

  &__text {
    color: #fff;

    @include text(1.6rem, 500, 2.4rem);
  }
  &__text-submenu {
    color: #fff;
    @media screen and (min-width: 768px) {
      @include text(4rem, 500, 2.4rem);
    }
    @include text(1.6rem, 500, 2.4rem);
  }
  &__redes {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: center;
    justify-content: center;
    gap: 3rem;
  }
  &__hamburguer {
    display: none;
    position: absolute;
    right: 20px;
    top: 2.85rem;
  }
  @media screen and (max-width: 990px) {
    &__hamburguer {
      display: block;
      position: absolute;
      right: 20px;
      top: 3.1rem;
    }
  }
  @media screen and (max-width: 900px) {
    &__hamburguer {
      display: block;
      position: absolute;
      right: 20px;
      top: 3.7rem;
    }
  }

  @media screen and (max-width: 1400px) {
    &__contain {
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
  z-index: 5;
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

.flex-icon-logo {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;

  justify-items: center;
  justify-content: center;
  @media screen and (max-width: 990px) {
    display: none;
    position: absolute;
    right: 20px;
    top: 3.1rem;
  }
}
</style>
