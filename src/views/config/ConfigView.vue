<template>

  <main class="dashboard">

    <article class="dashboard__body">

      <div class="dashboard__hero">
        <div class="dashboard__hero-title">Banners del sitio</div>
        <div class="dashboard__hero-subtitle">3 secciones</div>

      </div>

      <div class="dashboard__opcions-box">
        <button class="dashboard__opcion-btn">
          <router-link to="/dashboard-home" class="">
            <div class="dashboard__content-icon">
              <img :src="icons.detail" alt="" />
            </div>


            <div class="dashboard__text-opcions">
              <p class="dashboard__text">Página de inicio</p>
              <p class="dashboard__subText">4 banners</p>
            </div>
          </router-link>
        </button>
        <button class="dashboard__opcion-btn">
          <router-link to="/dashboard-market" class="">
            <div class="dashboard__content-icon">
              <img :src="icons.market" alt="" />
            </div>

            <div class="dashboard__text-opcions">
              <p class="dashboard__text"> Catálogo de vehículos</p>
              <p class="dashboard__subText">3 banners</p>
            </div>

          </router-link>
        </button>
        <button class="dashboard__opcion-btn">
          <router-link to="/dashboard-detalle" class="">
            <div class="dashboard__content-icon">
              <img :src="icons.home" alt="" />
            </div>

            <div class="dashboard__text-opcions">
              <p class="dashboard__text">Detalles de vehículos</p>
              <p class="dashboard__subText">1 banner</p>
            </div>
          </router-link>
        </button>

      </div>


    </article>
  </main>
</template>


<script>
/* eslint-disable no-undef */
import { onMounted, ref, watch, markRaw, defineComponent, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import ApiService from "@/core/services/ApiService";
import Market from "@/assets/images/icons/icon-admin-market.svg";
import Home from "@/assets/images/icons/icon-admin-cart.svg";
import Detail from "@/assets/images/icons/icon-admin-detail.svg";


export default {
  name: "dashboard",
  components: {



  },
  setup() {

    const icons = {
      market: Market,
      home: Home,
      detail: Detail
    }

    
    return {
      icons
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/Mixins";

.dashboard {
  @include content(100%, 0);
  @include flex;

  &__body {
    @include content(1200px, 0);
    flex-direction: column;
    @include flex;
  }

  &__hero{
    @include content(900px, 0);
    @include flex(flex-start, false, flex-start);
    flex-direction: column;
    width: 100%;
     padding: 32px 0;
    
  }

  &__hero-title{
    @include text(2.4rem, 400, 2.8rem);

  }
  &__hero-subtitle{
    @include text(1.6rem, 400, 2.4rem);
   
  }

  &__opcions-box {
    @include content(900px, 0);
    @include flex(space-between, 16px, center);
    flex-wrap: wrap;
  }

  &__opcion-btn {
    @include flex(flex-start, false);
    @include border;
    border-radius: 5px;
    flex-direction: column;
    width: 260px;
    height: 270px;
    a {
      @include flex;
      flex-direction: column;
      width: 100%;
      flex-grow: 1;
      color: var( --primary-color)
    }
  }
  &__content-icon{
    @include flex;
    height: 150px;
    width: 100%;
    background: var( --primary-color);
  }
  &__text-opcions{
    @include flex;
    flex-direction: column;
    flex-grow: 1;
  }
  &__text{
    @include text(2rem, 400, 2.6rem);
  }
  &__subText{
    @include text(1.4rem, 400, 1.6rem);
  }
}
</style>
