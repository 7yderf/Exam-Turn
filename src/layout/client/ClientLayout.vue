<!-- eslint-disable vue/no-reserved-component-names -->
<template>
  
  <Navbar />
  <div class="container-fluid p-0 layout">
    <router-view />
  </div>
  <Footer />
</template>

<script lang="ts">
import { defineAsyncComponent, nextTick, watch } from "vue";
import HtmlClass from "@/core/services/LayoutService";
import { Actions } from "@/store/enums/StoreEnums";
import { onMounted } from "vue";
import { reinitializeComponents } from "@/core/plugins/keenthemes";
import { useStore } from 'vuex';

import {
  toolbarDisplay,
  loaderEnabled,
  contentWidthFluid,
  loaderLogo,
  asideEnabled,
  subheaderDisplay,
  themeLightLogo,
  themeDarkLogo,
} from "@/core/helpers/config";
import { useRoute } from 'vue-router';
import { MenuComponent } from '@/assets/ts/components';
import { removeModalBackdrop } from '@/core/helpers/dom';
import "@/assets/styles/components/Layout.scss"
export default {
  components: {
    Navbar: defineAsyncComponent(
      () => import("./Navbar.vue")
    ),
    // eslint-disable-next-line vue/no-reserved-component-names
    Footer: defineAsyncComponent(
      () => import("./Footer.vue")
    ),
    
  },
  setup() {
    // show page loading
    const store = useStore();
    const route = useRoute();
    store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");
    // initialize html element classes
    HtmlClass.init();
    onMounted(() => {
      //check if current user is authenticated

      nextTick(() => {
        reinitializeComponents();
      });
      // Simulate the delay page loading
      setTimeout(() => {
        // Remove page loader after some time
        store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading");
      }, 500);
    });
    watch(
      () => route.path,
      () => {
        MenuComponent.hideDropdowns(undefined);

        removeModalBackdrop();
        nextTick(() => {
          reinitializeComponents();
        });
      }
    );
  
    return {
      toolbarDisplay,
      loaderEnabled,
      contentWidthFluid,
      loaderLogo,
      asideEnabled,
      subheaderDisplay,
      themeLightLogo,
      themeDarkLogo,
    };
  },
};
</script>

<style lang="scss">

</style>
