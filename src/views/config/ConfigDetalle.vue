<template>

  <main class="banners">
    <HelloWorld />

    <div class="banners__go">
      <router-link to="/dashboard" class="banners__go-back">
        <img :src="GoBack" alt="" />
        <span>Página de inicio</span>
      </router-link>
    </div>

    <article class="banners__body">
      <div class="banners__aside order-aside">
        <div class="banners__subtitle">Ver</div>
        <button
          class="banners__btn-device"
          :class="[device === 'desktop' ? 'active' : '']"
          @click="deviceActive('desktop')"
        >
          <IconDesktop :prop_class="['banner_button_icon']" />

          <span> Escritorio </span>
        </button>
        <button
          class="banners__btn-device"
          :class="[device === 'mobile' ? 'active' : '']"
          @click="deviceActive('mobile')"
        >
          <IconMobile :prop_class="['banner_button_icon']" />
          <span> Móvil </span>
        </button>
      </div>

      <BannersConfigDetalle v-if="device === 'desktop'" />
      <BannersConfigDetalleMobile v-else />
      
    </article>
  </main>
</template>


<script>
/* eslint-disable no-undef */
import { onMounted, ref, watch, markRaw, defineComponent, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

import ApiService from "@/core/services/ApiService";



import BannersConfigDetalle from "@/views/client/components/dasboard/BannersConfigDetalle.vue";
import BannersConfigDetalleMobile from "@/views/client/components/dasboard/BannersConfigDetalleMobile.vue";
import IconDesktop from "@/views/client/components/IconDesktop.vue";
import IconMobile from "@/views/client/components/IconMobile.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import GoBack from  "@/assets/images/icons/icon-go-back.svg"
import "@/assets/styles/views/Banners.scss";
import "@/assets/styles/components/Input.scss";

export default {
  name: "dashboard-detalle",
  components: {
    BannersConfigDetalle,
    BannersConfigDetalleMobile,
    HelloWorld,
    IconDesktop,
    IconMobile
  },
  setup() {
    const device = ref("desktop");

    const deviceActive = (val) => {
      device.value = val;
    };

    return {
      deviceActive,
      device,
      GoBack
    };
  },
};
</script>
<style lang="scss" scoped>
.desktop {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 2rem;
  width: 100%;
  justify-items: center;
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
}

.mobile {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  padding: 2rem;
  width: 100%;
  justify-items: center;
}


</style>
