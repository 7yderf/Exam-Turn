<template>
  <div class="bg-auth">
    <!--begin::Wrapper-->
    <div class="formulario">
      <!--begin::Form-->
      <img :src="VGLogo" alt="" class="logo" />
      <Form_
        class="form"
        id="kt_login_signin_form"
        @submit="onSubmitLogin"
        :validation-schema="login"
      >
        <!--begin::Heading-->

        <!--begin::Title-->
        <h1 class="form-title">Iniciar Sesión</h1>

        <!--end::Title-->

        <!--begin::Heading-->

        <!--begin::Input group-->
        <div class="form-input-group">
          <!--begin::Label-->
          <label class="form-label mb-3">Correo electrónico <span class="required">*</span></label>
          <!--end::Label-->
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
          <!--end::Input-->
          <div class="mt-2">
            <ErrorMessage name="email" class="form-error" />
          </div>
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div class="form-input-group">
          <!--begin::Wrapper-->
          <div class="auth-label-contra">
            <!--begin::Label-->
            <label class="form-label mb-3">Contraseña <span class="required">*</span></label>
            <router-link
              to="/forgot-password"
              class="form-label form-label-reset"
            >
              ¿Olvidaste tu contraseña?
            </router-link>
            <!--end::Label-->
          </div>
          <!--end::Wrapper-->
          <div class="input-icon">
            <!--begin::Input-->
            <Field
              class="auth-form-input input--icon"
              :type="typePassword ? 'password' : 'text'"
              name="password"
              autocomplete="off"
              placeholder="&bull;&bull;&bull;&bull;&bull;&bull;"
            />
            <IconPassword :prop_classes="['input-icon--icon']" />
          </div>
          <div class="mt-2">
            <ErrorMessage name="password" class="form-error" />
          </div>
        </div>
        <!--end::Input group-->

        <div class="checkbox-rect">
          <Field
            type="checkbox"
            id="checkbox-rect1"
            :value="false"
            name="remember_me"
          />

          <label class="form-label" for="checkbox-rect1">Recuerdame</label>
        </div>

        <!--begin::Submit button-->
        <button
          type="submit"
          ref="submitButton"
          id="kt_sign_in_submit"
          class="button-submit"
        >
          <span v-if="!enviando"> Iniciar sesión </span>
          <span class="indicator-progress fs-base fw-bold" v-if="enviando">
            Please wait...
            <span
              class="spinner-border spinner-border-sm align-middle ms-2"
            ></span>
          </span>
        </button>
        <!--end::Submit button-->

        <!--end::Actions-->
      </Form_>
      <!--end::Form-->
    </div>

    <!--end::Wrapper-->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ErrorMessage, Field, Form as Form_ } from "vee-validate";
import { Actions } from "@/store/enums/StoreEnums";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import * as Yup from "yup";
import SolanaServices from "@/core/services/SolanaServices";
import axios from "axios";
import VGLogo from "@/assets/images/GV_Logotipo-Bco.png";
import IconMail from "@/views/crafted/components/IconMailOutline.vue";
import IconPassword from "@/views/crafted/components/IconPasswordOutline.vue";

export default defineComponent({
  name: "sign-in",
  components: {
    Field,
    Form_,
    ErrorMessage,
    IconMail,
    IconPassword,
  },
  setup() {
    const store = useStore();

    const router = useRouter();
    const typePassword = ref<boolean>(true);
    const agencies = ref<any>([]);
    const userRole = ref<any>();
    const submitButton = ref<HTMLButtonElement | null>(null);
    const enviando = ref(false);
    const error = ref("");
    /*  let cals = [];
    let calif = Object.values(calificaciones);
    calif.map(
      (cal) => !cals.some((locCal) => cal === locCal) && cals.push(cal)
    );
    const incidencias = cals.map((cal) => ({
      calificacion: cal,
      incidencias: Object.values(calif).filter((locCal) => locCal === cal)
        .length,
    })); */

    //Create form validation object
    const login = Yup.object().shape({
      email: Yup.string()
        .email("Ingrese un correo electrónico válido")
        .required("El correo electrónico es obligatorio")
        .label("Email"),
      password: Yup.string()
        .required("La contraseña es obligatoria")
        .label("Password"),
      remember_me: Yup.boolean(),
    });

    //Form submit function
    const onSubmitLogin = (values) => {
      // Clear existing errors
      store.dispatch(Actions.LOGOUT);

      if (submitButton.value) {
        // eslint-disable-next-line
        submitButton.value!.disabled = true;
        // Activate indicator
        submitButton.value.setAttribute("data-kt-indicator", "on");
      }
      enviando.value = true;
      console.log(values);
      store
        .dispatch(Actions.LOGIN, values)
        .then(async () => {
          console.log("🚀 ~ file: SignIn.vue ~ line 235 ~ .then ~ res");
          localStorage.setItem("email", values.email);
          router.push("/dashboard");
        })
        .catch((error) => {
          console.log("error", error);
          const errors = store.getters.getErrors;
          Swal.fire({
            text: errors,
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Intentar otra vez",
            customClass: {
              confirmButton: "btn fw-bold btn-light-danger",
            },
          });
        });

      //Deactivate indicator
      submitButton.value?.removeAttribute("data-kt-indicator");
      // eslint-disable-next-line
      submitButton.value!.disabled = false;
      enviando.value = false;
    };

    const changeType = () => {
      typePassword.value = !typePassword.value;
    };

    /*     onMounted(async () => {
      let userRolObj: any = await localStorage.getItem("userRole");
      userRole.value = JSON.parse(userRolObj);
      tipoRol.value = userRole.value.tipo.name;
    }); */

    return {
      onSubmitLogin,
      login,
      submitButton,
      typePassword,
      changeType,
      agencies,
      userRole,
      VGLogo,
      enviando,
    };
  },
});
</script>
<style lang="scss" scoped>
$bg: url("@/assets/images/back-auth.jpg");
$Check: url("@/assets/images/icons/icon-check.svg");
input::placeholder {
  color: #808080;
  font-size: 1.4rem;
}

.required{
  color: red;
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
  content: "";
  width: 1.4em;
  height: 1.4em;
  background-position: center 5px;
  background-image: $Check;
  background-repeat: no-repeat;
}
</style>