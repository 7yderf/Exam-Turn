<template>
  <div class="bg-auth">
    <div class="formulario">
      <img :src="VGLogo" alt="" class="logo" />
      <!--begin::Form-->
      <Form_
        class="form"
        @submit="onSubmitForgotPassword"
        id="kt_login_password_reset_form"
        :validation-schema="forgotPassword"
      >
        <h1 class="form-title">Restablecer contraseña</h1>
        <h2 class="form-subtitle">Ingresa tus datos para continuar</h2>
        <!--begin::Input group-->
        <div class="form-input-group">
          <label class="form-label mb-3">Correo electrónico</label>
          <div class="input-icon">
            <!--begin::Input-->
            <Field
              class="auth-form-input input--icon"
              type="email"
              name="email"
              autocomplete="off"
              placeholder="ejemplo@correo.com"
            />
            <IconMail :prop_classes="['input-icon--icon']" />
          </div>
          <div class="mt-2">
            <ErrorMessage name="email" class="form-error" />
          </div>
        </div>
        <!--end::Input group-->

        <button
          type="submit"
          ref="submitButton"
          id="kt_password_reset_submit"
          class="button-submit"
        >
          <span v-if="!enviando"> Reestablecer contraseña </span>
          <span class="indicator-progress fs-base fw-bold" v-if="enviando">
            Espera por favor...
            <span
              class="spinner-border spinner-border-sm align-middle ms-2"
            ></span>
          </span>
        </button>
      </Form_>
      <!--end::Form-->

      <!-- <router-link to="/sign-in" class="link-primary fs-sm mt-5 text-white">
        Regresar al inicio
      </router-link> -->
      <!--end::Wrapper-->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ErrorMessage, Field, Form as Form_ } from "vee-validate";
import { useStore } from "vuex";
import * as Yup from "yup";
import { Actions } from "@/store/enums/StoreEnums";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import { useRouter } from "vue-router";
import "sweetalert2/src/sweetalert2.scss";
import VGLogo from "@/assets/images/GV_Logotipo-Bco.png";
import IconMail from "@/views/crafted/components/IconMailOutline.vue";
export default defineComponent({
  name: "password-reset",
  components: {
    Field,
    Form_,
    ErrorMessage,
    IconMail,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const enviando = ref(false);
    const submitButton = ref<HTMLButtonElement | null>(null);

    //Create form validation object
    const forgotPassword = Yup.object().shape({
      email: Yup.string()
        .email("Ingrese un correo electrónico válido")
        .required("El correo electrónico es obligatorio")
        .label("Email"),
    });

    //Form submit function
    const onSubmitForgotPassword = (values) => {
      // eslint-disable-next-line
      submitButton.value!.disabled = true;
      // Activate loading indicator
      submitButton.value?.setAttribute("data-kt-indicator", "on");
      enviando.value = true;
      // Send login request
      store
        .dispatch(Actions.FORGOT_PASSWORD, values)
        .then(() => {
          Swal.fire({
            title: "¡Correo enviado!",
            text: "Hemos enviado un correo con las instrucciones",
            icon: "success",
          });
          setTimeout(() => {
            router.push("/sign-in");
          }, 2000);
        })
        .catch(() => {
          console.log("jeje");
          // const [error] = Object.values(store.getters.getErrors);
          console.log(store.getters.getErrors);
          Swal.fire({
            title: "¡Ups!",
            html: store.getters.getErrors,
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Intentar de nuevo",
            customClass: {
              confirmButton: "btn fw-bold btn-light-danger",
            },
          });
        });

      submitButton.value?.removeAttribute("data-kt-indicator");
      // eslint-disable-next-line
      submitButton.value!.disabled = false;
      enviando.value = false;
    };

    return {
      onSubmitForgotPassword,
      forgotPassword,
      submitButton,
      VGLogo,
    };
  },
});
</script>
<style lang="scss" scoped>
.title {
  font-size: 2.2em;
  @media screen and (max-width: 980px) {
    font-size: 1.5em;
  }
}

$bg: url("@/assets/images/back-auth.jpg");
input::placeholder {
  color: #808080;
  font-size: 1.4rem;
}
.bg-auth {
  display: flex;

  background: $bg;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
.auth-label-contra {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.formulario {
  display: flex;
  width: 25%;
  gap: 3rem;
  flex-direction: column;
  background: #000;
  padding: 5rem 6.5rem;
  border: 1px solid #5e5e5e;
  border-radius: 10px;
  @media screen and (max-width: 1660px) {
    width: 30%;
  }
  @media screen and (max-width: 1400px) {
    width: 35%;
  }
  @media screen and (max-width: 1200px) {
    width: 60%;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 100%;
  }
}
.logo {
  width: 70%;
}
.form-title {
  color: white;
  font-size: 2.4rem;
  font-weight: 400;
}
.form-subtitle {
  color: white;
  font-size: 1.6rem;
  font-weight: 400;
}
.form-label {
  font-size: 1.2rem;
  font-weight: 300;
  color: white;
}
.form-error {
  color: red;
}
.auth-form-input {
  width: 100%;
  padding: 1.4rem 2rem;

  outline: none;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  font-size: 1.4rem;
  color: #d9d9d9;
}
.auth-form-input:focus {
  border: 1px solid white;
  color: white;
}
.input-icon {
  position: relative;
}
.input-icon--icon {
  position: absolute;

  height: 100%;
  left: 15px;
  top: 0px;
  fill: #808080;
}
.input--icon {
  padding-left: 40px;
}
.form-label-reset:hover {
  color: white;
  font-weight: 600;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.button-submit {
  background: #000;
  color: white;
  border: 1px solid white;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: 500;
}

/* checkbox-rect */
.checkbox-rect input[type="checkbox"] {
  display: none;
}
.checkbox-rect input[type="checkbox"] + label {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 20px;
  font: 14px/20px "Open Sans", Arial, sans-serif;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
.checkbox-rect input[type="checkbox"]:hover + label:hover {
  color: white;
}
.checkbox-rect input[type="checkbox"]:hover + label:before {
  background: #000;
  box-shadow: inset 0px 0px 0px 2px #f7f2f2;
}
.checkbox-rect input[type="checkbox"] + label:last-child {
  margin-bottom: 0;
}
.checkbox-rect input[type="checkbox"] + label:before {
  content: "";
  display: block;
  width: 1.4em;
  height: 1.4em;
  border: 1px solid #343a3f;
  border-radius: 0.2em;
  position: absolute;
  left: 0;
  top: 0;
  -webkit-transition: all 0.2s, background 0.2s ease-in-out;
  transition: all 0.2s, background 0.2s ease-in-out;
  background: black;
}
.checkbox-rect input[type="checkbox"]:checked + label:before {
  width: 1.3em;
  height: 1.3em;
  border-radius: 0.2em;
  border: 4px solid #fff;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  background: #000;
  box-shadow: 0 0 0 1px #000;
}
</style>
