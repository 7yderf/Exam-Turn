import { Form, Field, ErrorMessage } from 'vee-validate';
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
const options = {
  reverseButtons: true,
  confirmButtonText: "confirmText",
  cancelButtonText: "cancelText",
  confirmButtonColor: "#84bd00",
}
const $swal = {
  install: (Vue: any, options: any) => {
      Vue.provide("$swal", Swal.mixin(options));
  },
}

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component("VForm", Form);
    nuxtApp.vueApp.component("VField", Field);
    nuxtApp.vueApp.component("VErrorMessage", ErrorMessage);
    nuxtApp.vueApp.use($swal, options);

  });
  