<template>
  <!--begin::Menu-->
  <div
    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary py-2 fw-bold fs-5 w-275px"
    data-kt-menu="true"
        style="background-color: #393840 !important;"
  >
    <div class="menu-item px-10">
      <a @click="signOut()" class="menu-link menuLogout fs-base text-white">
        <inline-svg 
        style="-webkit-transform:rotate(180deg);
        -moz-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        -o-transform: rotate(180deg);
        transform: rotate(180deg);"
          src="media/icons/iconsax/logout.svg"
        />
        &nbsp;&nbsp;&nbsp;Cerrar Sesión 
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { Actions } from "@/store/enums/StoreEnums";
import store from "@/store";

export default defineComponent({
  name: "kt-user-menu",
  components: {},
  setup() {
    const router = useRouter();
    const store = useStore();

    const countries = {
      en: {
        flag: "media/flags/united-states.svg",
        name: "English",
      },
      es: {
        flag: "media/flags/spain.svg",
        name: "Spanish",
      },
      de: {
        flag: "media/flags/germany.svg",
        name: "German",
      },
      ja: {
        flag: "media/flags/japan.svg",
        name: "Japanese",
      },
      fr: {
        flag: "media/flags/france.svg",
        name: "French",
      },
    };

    const signOut = () => {
      store
        .dispatch(Actions.LOGOUT)
        .then(() => router.push({ name: "sign-in" }));
    };

    const setLang = (lang) => {
      localStorage.setItem("lang", lang);
    };

    const currentLanguage = (lang) => {
      return 
    };

    // const currentLangugeLocale = computed(() => {
    //   return countries[i18n.locale.value];
    // });

    return {
      signOut,
      setLang,
      currentLanguage,
      countries,
      currentUser: computed(() => store.getters.currentUser),
    };
  },
});
</script>
<style scoped>
.menuLogout:hover {
  /* background-color: #2B3137 !important; */
  background-color: #393840 !important;
}
</style>