<template>
  <div
    class="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed"
    :style="{
      backgroundImage: 'url(' + getIllustrationsPath('bglogin.png') + ')',
      backgroundSize: 'cover',
    }"
  >
    <!--begin::Content-->
    <div class="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
      <!--begin::Logo-->

      <a href="#" class="mb-12" v-if="showNavbar">
        <img alt="Logo" src="media/logos/brandsolana.svg" class="h-45px" />
      </a>
      <!--end::Logo-->

      <router-view></router-view>
    </div>
    <!--end::Content-->
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  ref,
  watch,
} from "vue";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";
import { getIllustrationsPath } from "@/core/helpers/assets";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "auth",
  components: {},
  setup() {
    const store = useStore();
    const route = useRoute();
    const routeName = ref<any>(route.name);
    const routeHiddenNavbar = ["sign-in", "forgot-password", "reset-password"];
    onMounted(() => {
      store.dispatch(Actions.ADD_BODY_CLASSNAME, "bg-body");
    });

    onUnmounted(() => {
      store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "bg-body");
    });
    watch(
      () => route.name,
      (name, prevName) => (routeName.value = name)
    );
    //Verificar que no estemos en una ruta donde se oculta el search, regresa un boolean para renderizar o no el componente con un v-if
    const showNavbar = computed(
      () => !routeHiddenNavbar.includes(routeName?.value ?? "")
    );
    return {
      getIllustrationsPath,
      routeName,
      showNavbar,
    };
  },
});
</script>
