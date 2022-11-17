<template>
  <div class="bg-auth">
    <div class="formulario">
      <img :src="VGLogo" alt="" class="logo" />
      <!--begin::Form-->
      <Form
        class="form"
        @submit="onSubmitForgotPassword"
        id="kt_login_password_reset_form"
        :validation-schema="forgotPassword"
      >
        <h1 class="form-title">Nueva contraseña</h1>

        <!--end::Input group-->
        <!--begin::Input group-->
        <div class="form-input-group">
          <label class="form-label mb-3">Contraseña</label>
          <div class="input--icon--toggle">
            <Field
              class="auth-form-input input--icon"
              :type="type1"
              @input="checkTerms"
              name="password"
            />
            <IconPassword :prop_classes="['input-icon--icon']" />
            <div class="input-icon--toggle--div">
              <!--begin::Svg Icon | path: icons/duotune/finance/fin002.svg-->
              <span
                @click="toggleType(1)"
                role="button"
                class="svg-icon svg-icon-1hx pointer text-white"
              >
                {{ type1 == "password" ? "Mostrar" : "Ocultar" }}
              </span>
              <!--end::Svg Icon-->
            </div>
          </div>

          <div class="mt-2">
            <ErrorMessage name="password" class="form-error" />
          </div>
        </div>
        <!--end::Input group-->
        <!--begin::Input group-->
        <div class="form-input-group">
          <label class="form-label mb-3">Confirmar contraseña</label>
          <div class="input--icon--toggle">
            <Field
              class="auth-form-input input--icon"
              :type="type2"
              name="password_confirm"
            />
            <IconPassword :prop_classes="['input-icon--icon']" />
            <div class="input-icon--toggle--div">
              <!--begin::Svg Icon | path: icons/duotune/finance/fin002.svg-->
              <span
                @click="toggleType(2)"
                role="button"
                class="svg-icon svg-icon-1hx pointer text-white"
              >
                {{ type2 == "password" ? "Mostrar" : "Ocultar" }}
              </span>
              <!--end::Svg Icon-->
            </div>
          </div>

          <div class="mt-2">
            <ErrorMessage name="password_confirm" class="form-error" />
          </div>
        </div>
        <div class="messages">
          <div class="message" :class="checks.min && 'message-active'">
            <p class="message-value">{{ characters }}</p>
            <p class="message-label">Carácteres</p>
          </div>
          <div class="message" :class="checks.mayus && 'message-active'">
            <p class="message-value">AA</p>
            <p class="message-label">Mayúscula</p>
          </div>
          <div class="message" :class="checks.minus && 'message-active'">
            <p class="message-value">aa</p>
            <p class="message-label">Minúscula</p>
          </div>
          <div class="message" :class="checks.number && 'message-active'">
            <p class="message-value">1</p>
            <p class="message-label">Número</p>
          </div>
          <div class="message" :class="checks.special && 'message-active'">
            <p class="message-value">@</p>
            <p class="message-label">Símbolo</p>
          </div>
        </div>
        <!--end::Input group-->

        <!--begin::Actions-->

        <button
          type="submit"
          ref="submitButton"
          id="kt_password_reset_submit"
          class="button-submit"
        >
          <span class="indicator-label fs-base fw-bold" v-if="!enviando">
            Establecer contraseña
          </span>
          <span class="indicator-progress fs-base fw-bold" v-if="enviando">
            Espera por favor...
            <span
              class="spinner-border spinner-border-sm align-middle ms-2"
            ></span>
          </span>
        </button>

        <!--end::Actions-->
      </Form>
      <!--end::Form-->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import { useStore } from "vuex";
import * as Yup from "yup";
import { Actions } from "@/store/enums/StoreEnums";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import ApiService from "../../../../core/services/ApiService";
import VGLogo from "@/assets/images/GV_Logotipo-Bco.png";
import IconPassword from "@/views/crafted/components/IconPasswordOutline.vue";

export default defineComponent({
  name: "password-reset",
  components: {
    Field,
    Form,
    ErrorMessage,
    IconPassword,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const enviando = ref(false);
    const provisional = ref<string | any>("");
    const checks = ref({
      minus: false,
      mayus: false,
      special: false,
      number: false,
      min: false,
    });
    const characters = ref(8);
    const submitButton = ref<HTMLButtonElement | null>(null);
    const regex = ref<any>(
      /*  "^(?=.*[A-Z])(?=.*[_.@$!%*?&#])[A-Za-z\\d@$!%*?&_.#]+$" */
      "^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[_.@$!%*?&#])[A-Za-z\\d@$!%*?&_.#]+$"
    );
    //Create form validation object
    const forgotPassword = Yup.object().shape({
      password: Yup.string()
        .min(characters.value, "Logitud minima de 8 caracteres")
        .matches(regex.value, "Debe respetar el formato de contraseña")
        .required("La contraseña es necesaria")
        .label("Password"),
      password_confirm: Yup.lazy((value) => {
        return Yup.string()
          .when("password", (password, schema) => {
            return schema.test({
              test: (confirm_password) => confirm_password === password,
              message: "Las contraseñas deben coincidir",
            });
          })
          .label("Confirm Password");
      }),
    });
    let type1 = ref("password");
    let type2 = ref("password");

    const toggleType = (input) => {
      if (input === 1) {
        if (type1.value == "password") {
          type1.value = "text";
        } else {
          type1.value = "password";
        }
      } else if (input === 2) {
        if (type2.value == "password") {
          type2.value = "text";
        } else {
          type2.value = "password";
        }
      }
    };
    //Form submit function
    const onSubmitForgotPassword = (values) => {
      // eslint-disable-next-line
      submitButton.value!.disabled = true;
      // Activate loading indicator
      submitButton.value?.setAttribute("data-kt-indicator", "on");
      enviando.value = true;
      let parms = { ...values, token: route.params.token };
      console.log(parms);

      ApiService.post("api/auth/reset-password/" + route.params.token, parms)
        .then(() => {
          Swal.fire({
            text: "Se ha restablecido tu contraseña!",
            icon: "success",
            buttonsStyling: false,
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(() => {
            router.push("/sign-in");
          }, 2000);
        })
        .catch(({ response }) => {
          // Alert then login failed
          Swal.fire({
            title: "¡Ups!",
            html:
              typeof response.data.error === "object"
                ? Object.values(response.data.error)
                    .toString()
                    .replace(",", "</br>")
                : response.data.message,
            icon: "error",
            buttonsStyling: false,
            showConfirmButton: false,
            timer: 2000,
          });
        });

      submitButton.value?.removeAttribute("data-kt-indicator");
      // eslint-disable-next-line
      submitButton.value!.disabled = false;
      enviando.value = false;
    };
    const checkTerms = (val) => {
      checks.value = {
        minus: /[a-z]/.test(val.target.value),
        mayus: /[A-Z]/.test(val.target.value),
        special: /[_.@$!%*?&#]/.test(val.target.value),
        number: /\d/.test(val.target.value),
        min: val.target.value.length >= characters.value,
      };
      console.log(val.target.value, checks.value);
    };
    onMounted(() => {
      if (route.params.pwd) {
        provisional.value = route.params.pwd;
      }
    });

    return {
      onSubmitForgotPassword,
      forgotPassword,
      submitButton,
      checkTerms,
      checks,
      characters,
      toggleType,
      type1,
      type2,
      enviando,
      provisional,
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
  width: 30%;
  gap: 3rem;
  flex-direction: column;
  background: #000;
  padding: 5rem 6.5rem;
  border: 1px solid #5e5e5e;
  border-radius: 10px;
  @media screen and (max-width: 1660px) {
    width: 35%;
  }
  @media screen and (max-width: 1400px) {
    width: 40%;
  }
  @media screen and (max-width: 1200px) {
    width: 65%;
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

.input--icon--toggle {
  position: relative;
}
.input-icon--icon {
  position: absolute;

  height: 100%;
  left: 15px;
  top: 0px;
  fill: #808080;
}
.input-icon--toggle--div {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  right: 0px;
  top: 0px;
  padding: 0px 10px;
  font-size: 1.2rem;
}

.input--icon {
  padding-left: 40px;
  padding-right: 60px;
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

.messages {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  color: white;
  max-width: 100%;
}
.message {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 4px solid white;
}
.message-active {
  border-bottom: 4px solid green;
}
.message-label {
  font-size: 1.2rem;
  font-weight: 300;
  color: white;
}
.message-value {
  font-size: 2rem;
}
</style>
