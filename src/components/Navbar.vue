<template>
  <Teleport v-if="on_Mounted" :disabled="device" to="#transport-follow">
    <div class="nav-menu__hero-nav">
      <div class="container">
        <div class="nav-menu__box-phone">
          <a href="">
            <icon name="ri:phone-fill" class="nav-menu__icon" />
          </a>
          <p>Cotizar: 332 124 324 123</p>
        </div>
        <div class="nav-menu__box-follow">
          <a href="https://www.instagram.com/optimumequipo" target="_blank">
            <icon name="ri:instagram-fill" class="nav-menu__icon" />
          </a>
          <a href="https://es-la.facebook.com/people/Optimum-Equipo/100093244458686" target="_blank">
            <icon name="ri:facebook-circle-fill" class="nav-menu__icon" />
          </a>
          <a href="https://youtube.com/@optimumequipo" target="_blank">
            <icon name="ri:youtube-fill" class="nav-menu__icon" />
          </a>
        </div>

      </div>
    </div>
  </Teleport>

  <nav class="navbar navbar-expand-md nav-menu nav-menu__mobile-content">
    <div :class="device ? 'container' : 'container-fluid '" :data-toggle="toggler">
      <a class="navbar-brand" href="#">
        <img src="../assets/images/optimum_logo.png" alt="turn" class="logo-header" />
      </a>

      <button class="navbar-toggler nav-menu__toggler ml-0 txt" type="button" data-bs-toggle="collapse" aria-expanded="false"
        aria-label="Toggle navigation" @click="() => (toggler = !toggler)">
        <icon name="pajamas:hamburger" class="nav-menu__icon ms-0 " />
      </button>

      <button class="navbar-toggler nav-menu__toggler nav-menu__mobile" :data-active="toggler" type="button"
        data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation"
        @click="() => (toggler = !toggler)">
        <icon name="ri:close-circle-fill" class="nav-menu__icon" />
      </button>

      <div class="collapse navbar-collapse nav-menu__collapse d-flex align-items-center justify-content-strech"
        :class="toggler ? 'nav-menu__mobile-content' : ''" id="navbarNav" :data-active="toggler">
        <ul class="navbar-nav d-flex  flex-grow-1"
          :class="toggler ? 'nav-menu__mobile-content--box container' : 'justify-content-around'">
          <p class="nav-menu__title" :data-active="device">Menu</p>
          <li class="nav-item" @click="() => changePage()">
            <NuxtLink class="nav-link" :data-active="toggler" to="/"> Inicio </NuxtLink>
          </li>
          <li class="nav-item">
            <NavSelect :dataActive="toggler" />
            <div id="transport"></div>
          </li>
          <li class="nav-item" @click="() => changePage()">
            <NuxtLink class="nav-link" :data-active="toggler" to="/circuits"> Circuito </NuxtLink>
          </li>
          <li class="nav-item" @click="() => changePage()">
            <NuxtLink class="nav-link" :data-active="toggler" to=""> Contacto </NuxtLink>
          </li>
        </ul>
        <div id="transport-follow"></div>
      </div>
      <div class="nav-menu__box-icon">
        <icon name="ri:search-2-line" class="nav-menu__icon" />
        <icon name="ri:shopping-cart-2-fill" class="nav-menu__icon" />
      </div>
    </div>
  </nav>
  <Teleport v-if="on_Mounted" :disabled="device" to="#transport">
    <NavProducts />
  </Teleport>
</template>
<script lang="ts" setup>
const toggler = useToggler();
const device = ref<boolean>(true);
const path = ref<string>("/Home");
const route = useRoute();
const on_Mounted = ref<boolean>(false);

path.value = route.path === "/" ? "/Home" : route.path;

const changePage = () => {
  toggler.value = false;
};

watch(
  () => route.path,
  (value) => {
    path.value = value === "/" ? "/Home" : value;
    console.log("path", value);
  }
);

watch(
  () => toggler.value,
  (value) => {
    if (value) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }
);

onMounted(async () => {
  const { windowSize } = useMediaQuery("(min-width: 769px)");
  device.value = windowSize.value;
  watch(
    () => windowSize.value,
    (value) => {
      device.value = value;
      value && (toggler.value = false);
    }
  );
  on_Mounted.value = true;
});
</script>
<style lang="scss" scoped>
@import "@/assets/scss/Mixins";

.logo-header {
  transition: 0.5s;
}

.nav-menu {
  position: sticky;
  top: 0;
  z-index: 5;
  background: var(--primary-darker);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.11);
  .nav-link {
    color: var(--text-invert);
    text-transform: uppercase !important;

    &[data-active="true"] {
      color: var(--text-color);
      font-weight: 600;
    }
  }

  &__title {
    display: none;
    &[data-active="false"] {
      display: block;
      font-size: 32px;
      font-weight: 500;
      ;
      text-transform: uppercase;
    }
  }

  &__hero-nav {
    padding: 12px 0;
    background: var(--primary-darker);
    .container {
      @include flex(flex-end);
    }

    p {
      color: var(--text-invert);
      margin-right: 16px;
      margin-bottom: -2px;
      font-weight: 600;
    }

  }

  &__box-phone {
    @include flex;
  }

  &__box-follow {
    @include flex;
  }

  &__mobile-content {
    padding: 16px 8px;
    transition: 0.5s;

    &--box {
      gap: 32px;
      align-self: flex-start;
      margin-top: 110px;

      .nav-link {
        padding: 16px 0;
        color: var(--text-invert);
        text-transform: uppercase;
      }
    }
  }

  &__brand-mobile {
    display: none;
  }

  &__collapse {
    position: relative;

    &[data-active="false"] {
      display: flex;
    }

    &[data-active="true"] {
      display: flex;
    }
  }

  &__mobile {
    z-index: 5;
    order: 4 !important;
    transition: .3s;
    position: absolute;
    right: 34px;
    top: 42px;

    &[data-active="false"] {
      transition: .3s;
      display: none;
    }

    .icon {
      color: #1A1A1A;
    }
  }

  &__toggler {
    transition: 0.5s;
    padding: 0;
    border: none;


    &:focus {
      outline: none;
      box-shadow: none !important;
    }
  }

  &__icon {
    width: 24px;
    height: 24px;
    transition: 0.5s;
    margin: 0 8px;
    color: var(--text-invert);
  }
  .txt{
    &::after{
      content: "Menu";
      margin-left: 0px;
      font-size: 1.6rem;
      color: var(--text-invert);
      font-weight: 100;
    }
  }

  &__mobile-contact {
    z-index: 5;

    animation-delay: 0.5s;
    transition: 0.5s;
    transform: translateX(0) !important;
    opacity: 1 !important;
  }

  &__box-icon {
    display: flex;
  }

}

.router-link-active {
  position: relative;
  color: var(--text-invert);
  font-weight: 600;

}

@media screen and (max-width: 768px) {

  .navbar-brand {
    order: 1;
    margin: 0;
  }

  .nav-menu {
    min-height: 50px;
    .navbar-collapse {
      display: none;
    }

    &__collapse {
      position: fixed;
      background: #ffffff;
      flex-direction: column;
      width: 100%;
      height: 100vh;
      overflow: auto;
      top: 0;
      left: 0;
      z-index: 2;
      &[data-active="false"] {
        display: flex;
        transform: translateX(110%);
        animation: cubic-bezier(0.95, 0.05, 0.795, 0.035);
        transition: 0.3s;
        opacity: 0;
      }
      &[data-active="true"] {
        display: flex;

        animation: cubic-bezier(0.075, 0.82, 0.165, 1);
        transition: 0.5s;
        opacity: 1;
        &::before {
          content: "";
          position: absolute;
          width: 150px;
          height: 60px;
          background-image: url("../assets/images/optimum_logo.png");
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          filter: invert(1);
          top: 26px;
          left: 24px;
          transition: 0.5s;
        }
      }
    }

    .container-fluid {
      &[data-toggle="true"] {
        &::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100vh;
          background: #616161;
          opacity: 0.5;
          z-index: -1;
          top: 0;
          bottom: 0;
          left: 0;
          transition: 0.5s;
        }
      }
    }

    &__brand-mobile {
      @include flex;
      width: 100%;
    }

    .btn-primary {
      margin-left: auto;
      margin-right: 16px;
    }

    &__toggler {
      order: 0;
      animation: cubic-bezier(0.075, 0.82, 0.165, 1);
      transition: 0.5s;

    }

    &__box-icon {
      order: 3;
    }

    &__hero-nav {
      background: white;

      .container {
        @include flex;
        flex-direction: column;

        p {
          color: var(--text-color);
        }

      }
    }

    &__box-phone {
      .icon {
        color: var(--text-color);
      }
    }

    &__box-follow {
      margin-top: 24px;

      .icon {
        width: 40px;
        height: 40px;
        padding: 10px;
        background: var(--text-color);
        border-radius: 50%;
      }
    }
  }
}

@media screen and (max-width: 635px) {}</style>
