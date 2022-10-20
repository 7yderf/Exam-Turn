<template>
  <!--begin::Aside-->
  <div
    id="kt_aside"
    class="aside aside-hoverable bg-gray"
    :class="[
      asideTheme === 'light' && 'aside-light',
      asideTheme === 'dark' && 'aside-dark',
    ]"
    data-kt-drawer="true"
    data-kt-drawer-name="aside"
    data-kt-drawer-activate="{default: true, lg: false}"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'200px', '300px': '250px'}"
    data-kt-drawer-direction="start"
    data-kt-drawer-toggle="#kt_aside_mobile_toggle"
  >
    <!--begin::Brand-->
    <div
      class="aside-logo flex-column-auto"
      id="kt_aside_logo"
      style="background-color: #191f26"
    >
      <!--begin::Logo-->
      <a href="#" v-if="asideTheme === 'dark'">
        <img alt="Logo" :src="darkLogo" class="w-100 logo" />
      </a>
      <a href="#" v-if="asideTheme === 'light'">
        <img alt="Logo" :src="lightLogo" class="w-100 logo" />
      </a>
      <!--end::Logo-->

      <!--begin::Aside toggler-->
      <!--end::Aside toggler-->
    </div>
    <!--end::Brand-->

    <!--begin::Aside menu-->
    <div class="aside-menu flex-column-fluid">
      <KTMenu></KTMenu>
    </div>
    <!--end::Aside menu-->
  </div>
  <!--end::Aside-->
</template>
<script lang="ts">
import { defineComponent } from "vue";
import KTMenu from "@/layout/aside/Menu.vue";
import { asideTheme } from "@/core/helpers/config";

export default defineComponent({
  name: "KTAside",
  components: {
    KTMenu,
  },
  props: {
    lightLogo: String,
    darkLogo: String,
  },
  setup() {

    return {
      asideTheme
    };
  },
});
</script>
