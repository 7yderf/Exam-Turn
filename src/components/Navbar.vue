<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<template>
  <nav
    :data-nav-show="isRezise && hideNav"
    class="navbar navbar-expand-md nav-menu nav-menu__mobile-content"
  >
    <div
      :class="isRezise ? 'container' : 'container-fluid '"
      :data-toggle="toggler"
    >
      <NuxtLink
        class="nav-link navbar-brand"
        :data-active="toggler"
        to="/"
      >
        <img
          src="../assets/images/beyond.png"
          alt="turn"
          class="logo-header"
        />
      </NuxtLink>

      <button
        class="navbar-toggler nav-menu__toggler ml-0 txt"
        type="button"
        data-bs-toggle="collapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="() => (toggler = !toggler)"
      >
        <icon
          name="pajamas:hamburger"
          class="nav-menu__icon ms-0 "
        />
      </button>

      <button
        class="navbar-toggler nav-menu__toggler nav-menu__mobile"
        :data-active="toggler"
        type="button"
        data-bs-toggle="collapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="() => (toggler = !toggler)"
      >
        <icon
          name="ri:close-circle-fill"
          class="nav-menu__icon"
        />
      </button>

      <div
        id="navbarNav"
        class="collapse navbar-collapse nav-menu__collapse d-flex align-items-center justify-content-strech"
        :class="toggler ? 'nav-menu__mobile-content' : ''"
        :data-active="toggler"
      >
        <ul
          class="navbar-nav d-flex  flex-grow-1 gap-4"
          :class="toggler ? 'nav-menu__mobile-content--box container' : 'justify-content-center'"
        >
          <p
            v-if="mounted"
            class="nav-menu__title"
            :data-active="isRezise"
          >
            Menu
          </p>
          <li
            class="nav-item"
            @click="() => changePage()"
          >
            <NuxtLink
              class="nav-link"
              :data-active="toggler"
              to="/"
            >
              Inicio
            </NuxtLink>
          </li>
          <li
            class="nav-item"
            @click="() => changePage()"
          >
            <NuxtLink
              class="nav-link"
              :data-active="toggler"
              to="/markets"
            >
              Markets
            </NuxtLink>
          </li>
          <li
            class="nav-item"
            @click="() => changePage()"
          >
            <NuxtLink
              class="nav-link"
              :data-active="toggler"
              to="/knowledge"
            >
              Knowledge
            </NuxtLink>
          </li>
          <li
            class="nav-item"
            @click="() => changePage()"
          >
            <NuxtLink
              class="nav-link"
              :data-active="toggler"
              to="/finance"
            >
              Finance
            </NuxtLink>
          </li>
          <li
            class="nav-item"
            @click="() => changePage()"
          >
            <NuxtLink
              class="nav-link"
              :data-active="toggler"
              to="/connect"
            >
              Connect
            </NuxtLink>
          </li>
          <!--
          <li
            class="nav-item"
            @click="() => changePage()"
          >
            <NuxtLink
              class="nav-link"
              :data-active="toggler"
              to=""
            >
              Contacto
            </NuxtLink>
          </li> -->
        </ul>
        <div id="transport-follow" />
      </div>
      <div class="nav-menu__box-icon">

        <form class="lang">
          <select
            id="locale-select"
            v-model="$i18n.locale"
          >
            <option value="en">
              en
            </option>
            <option value="es">
              es
            </option>
          </select>
        </form>

        <!-- <icon
          name="ri:shopping-cart-2-fill"
          class="nav-menu__icon"
        /> -->
        <NuxtLink
          class="nav-menu__sign"
          :data-active="toggler"
          to="https://test.gobytec.com/login"
          target="_blank"
        >
          Sing in
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
<script lang="ts" setup>
const toggler = useToggler()
const useToggle = useShowMenu()
const isRezise = useSizeResponsive()
const mounted = ref<boolean>(false)
const hideNav = ref<boolean>(false)

const changePage = () => {
  toggler.value = false
  useToggle.value = false
}

watch(
  () => toggler.value,
  value => {
    if (value) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  },
)

const scrollNavBottomHide = () => {
  let prevScrollPos = window.pageYOffset // Almacena la posición de desplazamiento anterior

  // Agrega un controlador de eventos de desplazamiento al objeto window
  window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset // Obtiene la posición de desplazamiento actual
    // const navHeight = nav?.getBoundingClientRect().height
    const scrollHeight = window.pageYOffset
    if (scrollHeight > 116) {
      if (currentScrollPos > prevScrollPos) {
        // El usuario se está desplazando hacia abajo
        hideNav.value = true
        console.log('Desplazándose hacia abajo')
      } else if (currentScrollPos < prevScrollPos) {
        hideNav.value = false
        // El usuario se está desplazando hacia arriba
        console.log('Desplazándose hacia arriba')
      }
    } else {
      hideNav.value = false
    }

    // Actualiza la posición de desplazamiento anterior
    prevScrollPos = currentScrollPos
  })
}

onMounted(async () => {
  scrollNavBottomHide()
  const { windowSize } = useMediaQuery('(min-width: 769px)')
  isRezise.value = windowSize.value
  watch(
    () => windowSize.value,
    value => {
      isRezise.value = value
      value && (toggler.value = false)
    },
  )
  mounted.value = true
})
</script>
<style lang="scss" scoped>
@import "@/assets/scss/Mixins";
.lang{
  select{
    border: none;
    background: transparent;
    color: var(--text-invert);
    font-weight: 600;
    font-size: 1.6rem;
    &:focus{
      outline: none;
    }
  }
  option{
    background: var(--primary-darker);
    color: var(--text-invert);
  }
}

.logo-header {
  transition: 0.5s;
  max-width: 200px;
}

.nav-menu {
  position: sticky;
  top: 0px;
  z-index: 5;
  background: var(--primary-darker);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.11);
  transition: 0.5s;
  &[data-nav-show="true"]{
    transition: 0.5s;
    transform: translateY(-70px);
  }
  @media screen and (max-width: 768px) {
    top: 0;
  }
  &__sign{
    @include border(#1357f4);
    color: var(--text-invert);
    font-size: 1.2rem;
    padding: 4px 16px;
    border-radius: 16px;
    background: #031e5d;
    &:hover{
      background: #083397;
    }
  }
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
    position: sticky;
    top: 0;
    padding: 12px 0;
    background: var(--primary-darker);
  transition: 0.5s;
  z-index: 5;
  &[data-nav-show="true"] {
    transition: 0.5s;
    transform: translateY(-100%);
  }
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
          background-image: url("../assets/images/beyond.png");
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
