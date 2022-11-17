<template>
  <main class="venta">
    <HelloWorld />

    <article>
      <FormWizard
        @submit="onSubmit"
        :validation-schema="schema"
        :initial-values="formValues"
        v-slot="{ errors, currentStep, previous, hasPrevious }"
      >
        <div v-if="hasPrevious && !submited" class="steps__back">
          <div class="steps__back-text">
            <button class="steps__btn-back" @click="previous">
              <img :src="IconReturn" alt="" />
              {{ "Volver" }}
            </button>
          </div>
        </div>
        <div class="venta__contact">
          <div class="steps">
            <div :class="currentStep >= 0 ? ['step', 'active'] : ['step']">
              <IconCar :prop_active="currentStep >= 0" />

              <p>Tu vehículo</p>
            </div>
            <div
              class="step"
              :class="currentStep >= 1 ? ['step', 'active'] : ['step']"
            >
              <IconUser :prop_active="currentStep >= 1" />
              <p>Tus datos</p>
            </div>
            <div
              class="step"
              :class="currentStep === 2 ? ['step', 'active'] : ['step']"
            >
              <IconDolar :prop_active="currentStep >= 3" />
              <p>Valuación</p>
            </div>
          </div>

          <div class="venta__contact-form">
            <p class="venta__contact-title">Vende tu vehículo</p>

            <div v-if="!submited">
              <FormStep
                class="venta__inputs-content venta__inputs-content--column"
              >
                <p class="venta__contact-sub">
                  Ingresa los datos de tu vehículo para recibir una oferta
                </p>
                <div class="venta__inputs">
                  <label
                    for="year"
                    class="label"
                    :data-require="Boolean(errors.year)"
                    >Año</label
                  >
                  <Field
                    v-slot="{ value }"
                    name="year"
                    as="select"
                    :data-require="Boolean(errors.year)"
                    v-model="valueYears"
                    class="input input__select"
                  >
                    <option value="" disabled>Seleciona el año</option>
                    <option
                      v-for="year in years"
                      :key="year"
                      :value="year"
                      :selected="year === value"
                    >
                      {{ year }}
                    </option>
                  </Field>
                  <ErrorMessage name="year" class="input__error"></ErrorMessage>
                </div>
                <div class="venta__inputs">
                  <label
                    for="brand"
                    class="label"
                    :data-require="Boolean(errors.brand)"
                    >Marca</label
                  >
                  <Field
                    v-slot="{ value }"
                    name="brand"
                    as="select"
                    :data-require="Boolean(errors.brand)"
                    v-model="valueBrands"
                    class="input input__select"
                    :disabled="Boolean(!valueYears)"
                  >
                    <option value="" disabled>Seleciona una marca</option>
                    <option
                      v-for="brand in brands"
                      :key="brand.id"
                      :value="brand.id"
                      :selected="brand[value] && value.includes(brand.name)"
                    >
                      {{ brand.name }}
                    </option>
                  </Field>
                  <ErrorMessage
                    name="brand"
                    class="input__error"
                  ></ErrorMessage>
                </div>
                <div class="venta__inputs">
                  <label
                    for="model"
                    class="label"
                    :data-require="Boolean(errors.model)"
                    >Modelo</label
                  >
                  <Field
                    v-slot="{ value }"
                    name="model"
                    as="select"
                    :data-require="Boolean(errors.model)"
                    v-model="valueModels"
                    class="input input__select"
                    :disabled="Boolean(!valueBrands)"
                  >
                    <option value="" disabled>Seleciona un modelo</option>
                    <option
                      v-for="model in models"
                      :key="model.id"
                      :value="model.id"
                      :selected="model[value] && value.includes(model.name)"
                    >
                      {{ model.name }}
                    </option>
                  </Field>
                  <ErrorMessage
                    name="model"
                    class="input__error"
                  ></ErrorMessage>
                </div>
                <!-- TODO: Implemetnación de Versiones -->
                <div class="venta__inputs">
                  <label
                    for="version"
                    class="label"
                    :data-require="Boolean(errors.model)"
                    >Versión</label
                  >
                  <Field
                    v-slot="{ value }"
                    name="version"
                    as="select"
                    :data-require="Boolean(errors.model)"
                    v-model="valueModels"
                    class="input input__select"
                    :disabled="Boolean(!valueBrands)"
                  >
                    <option value="" disabled>Seleciona un modelo</option>
                    <option
                      v-for="model in models"
                      :key="model.id"
                      :value="model.id"
                      :selected="model[value] && value.includes(model.name)"
                    >
                      {{ model.name }}
                    </option>
                  </Field>
                  <ErrorMessage
                    name="model"
                    class="input__error"
                  ></ErrorMessage>
                </div>

                <div class="venta__inputs">
                  <label
                    for="kms"
                    class="label"
                    :data-require="Boolean(errors.kms)"
                    >Kilometráje</label
                  >
                  <Field
                    as="input"
                    name="kms"
                    class="input input--white"
                    :data-error="Boolean(errors.kms)"
                    placeholder="50,000 km"
                  />
                  <ErrorMessage name="kms" class="input__error"></ErrorMessage>
                </div>
              </FormStep>

              <FormStep
                class="venta__inputs-content venta__inputs-content--column"
              >
                <p class="venta__contact-sub">
                  Ingresa tus datos personales para recibir una oferta
                </p>
                <div class="d-flex gap-5">
                  <div class="venta__inputs">
                    <label
                      for="name"
                      class="label"
                      :data-require="Boolean(errors.name)"
                      >Nombre</label
                    >
                    <Field
                      as="input"
                      name="name"
                      class="input input--white"
                      :data-error="Boolean(errors.name)"
                      placeholder="Juan"
                    />
                    <ErrorMessage
                      name="name"
                      class="input__error"
                    ></ErrorMessage>
                  </div>
                  <div class="venta__inputs">
                    <label
                      for="lastname"
                      class="label"
                      :data-require="Boolean(errors.lastname)"
                      >Apellido</label
                    >
                    <Field
                      as="input"
                      name="lastname"
                      class="input input--white"
                      :data-error="Boolean(errors.lastname)"
                      placeholder="Pérez"
                    />
                    <ErrorMessage
                      name="lastname"
                      class="input__error"
                    ></ErrorMessage>
                  </div>
                </div>
                <div class="venta__inputs">
                  <label
                    for="email"
                    class="label"
                    :data-require="Boolean(errors.email)"
                    >Mail</label
                  >
                  <div class="input-icon">
                    <Field
                      as="input"
                      name="email"
                      class="input input--white input--icon"
                      :data-error="Boolean(errors.email)"
                      placeholder="ejemplo@correo.com"
                    />
                    <IconMail :prop_classes="['input-icon--icon']" />
                  </div>
                  <ErrorMessage
                    name="email"
                    class="input__error"
                  ></ErrorMessage>
                </div>
                <div class="venta__inputs">
                  <label
                    for="whatsapp"
                    class="label"
                    :data-require="Boolean(errors.whatsapp)"
                    >Whatassap</label
                  >
                  <div class="input-icon">
                    <Field
                      as="input"
                      name="whatsapp"
                      class="input input--white input--icon"
                      :data-error="Boolean(errors.whatsapp)"
                      placeholder="33 33 33 33 33 33"
                    />
                    <IconPhone :prop_classes="['input-icon--icon']" />
                  </div>
                  <ErrorMessage
                    name="whatsapp"
                    class="input__error"
                  ></ErrorMessage>
                </div>
                <div class="input__check">
                  <Field
                    as="input"
                    type="checkbox"
                    name="notificaciones"
                    class="form-check-input"
                    :data-error="Boolean(errors.notificaciones)"
                  />

                  <label for="notificaciones"
                    >Recibir notificaciones vía WhatsApp</label
                  >
                </div>
              </FormStep>
            </div>
            <div v-else>
              <p class="venta__contact-sub">Ingresar código</p>
              <p class="venta__code-text">
                Te envíamos un código a tu teléfono.
              </p>
              <span class="venta__code-text__bold"
                >El código vence en: 2:25 minutos</span
              >
              <div class="code">
                <input
                  type="text"
                  maxlength="1"
                  class="input-code"
                  v-model="code[0]"
                />
                <input
                  type="text"
                  maxlength="1"
                  class="input-code"
                  v-model="code[1]"
                />
                <input
                  type="text"
                  maxlength="1"
                  class="input-code"
                  v-model="code[2]"
                />
                <input
                  type="text"
                  maxlength="1"
                  class="input-code"
                  v-model="code[3]"
                />
                <input
                  type="text"
                  maxlength="1"
                  class="input-code"
                  v-model="code[4]"
                />
              </div>
              <button href="#" class="reenviar-codigo">
                Enviar nuevo código
              </button>
              <button
                class="venta__contact-send-btn code-send-btn"
                @click="sendCode"
              >
                Verificar código
              </button>
            </div>
          </div>
        </div>
      </FormWizard>
    </article>
  </main>
</template>

<script>
/* eslint-disable no-undef */
import { onMounted, ref, watch, markRaw } from "vue";
import { useRoute, useRouter } from "vue-router";

import ApiService from "@/core/services/ApiService";

import { Form as Form_, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";
import HelloWorld from "@/components/HelloWorld.vue";
import Whatassap from "@/assets/images/icons/icon-btn_what.svg";
import Mail from "@/assets/images/icons/icon-btn_mail.svg";
import IconCar from "@/views/client/components/IconCar.vue";
import IconUser from "@/views/client/components/IconUser.vue";
import IconDolar from "@/views/client/components/IconDolar.vue";
import IconReturn from "@/assets/images/icons/icon-return.svg";
import IconPhone from "@/views/client/components/IconPhone.vue";
import IconMail from "@/views/client/components/IconMail.vue";
import "@/assets/styles/views/Venta.scss";
import "@/assets/styles/components/Input.scss";

import FormWizard from "./components/FormWizard.vue";
import FormStep from "./components/FormStep.vue";
export default {
  name: "Venta",
  components: {
    Form_,
    Field,
    HelloWorld,
    FormWizard,
    FormStep,
    ErrorMessage,
    IconCar,
    IconUser,
    IconDolar,
    IconPhone,
    IconMail,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const brands = ref([]);
    const years = ref([]);
    const models = ref([]);
    const valueYears = ref("");
    const valueBrands = ref("");
    const valueModels = ref("");
    const version = ref([]);
    const kms = ref(0);
    const notificaciones = ref(false);
    const submited = ref(false);
    const code = ref(["", "", "", "", ""]);
    const formValues = ref({
      email: "",
      name: "",
      lastname: "",
      whatsapp: "",
      brand: "",
      year: "",
      model: "",
      version: "",
      kms: "",
      notificaciones: false,
    });

    const priceFormat = (value) => {
      const val = (value / 1).toFixed(2);
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const kmFormat = (value) => {
      const val = value / 1;
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    const schema = [
      markRaw(
        yup.object().shape({
          brand: yup.string().required("El dato es obligatorio"),
          year: yup.string().required("El dato es obligatorio"),
          model: yup.string().required("El dato es obligatorio"),
          kms: yup
            .string()
            .min(1, "diez")
            .matches(/^[0-9]+$/, "Solo se aceptan numeros")
            .required("El dato es obligatorio"),
        })
      ),
      markRaw(
        yup.object().shape({
          name: yup.string().required("El dato es obligatorio"),
          lastname: yup.string().required("El dato es obligatorio"),
          email: yup
            .string()
            .required("El dato es obligatorio")
            .email("Por favor ingrese un formato valido"),
          whatsapp: yup
            .string()
            .min(10, "diez")
            .matches(/^[0-9]+$/, "Solo se aceptan numeros")
            .required("El dato es obligatorio"),
        })
      ),
    ];
    /* const schema = markRaw(
      yup.object().shape({
        name: yup.string().required("El dato es obligatorio"),
        lastname: yup.string().required("El dato es obligatorio"),
        email: yup
          .string()
          .required("El dato es obligatorio")
          .email("Porfavor ingrese un formato valido"),
        whatassap: yup
          .string()
          .min(10, "diez")
          .matches(/^[0-9]+$/, "Solo se aceptan numeros")
          .required("El dato es obligatorio"),
        brand: yup.string().required("El dato es obligatorio"),
        year: yup.string().required("El dato es obligatorio"),
        model: yup.string().required("El dato es obligatorio"),
      })
    ); */

    const onSubmit = (values) => {
      submited.value = true;
      alert(JSON.stringify(values));
    };

    const sendCode = (e) => {
      e.preventDefault();

      alert(JSON.stringify(code.value));
    };
    watch(
      () => valueYears.value,
      async () => {
        await getbrand(valueYears.value);
        valueBrands.value = "";
      }
    );
    watch(
      () => valueBrands.value,
      async () => {
        await getmodel(valueBrands.value);
        valueModels.value = "";
      }
    );

    onMounted(async () => {
      store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-load");
      await getyears();
      await getbrand();
      await getmodel();
      store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-load");
    });

    const getyears = async () => {
      try {
        const { data } = await ApiService.get("api/vehicles/years");
        console.log(
          "🚀 ~ file: Vende.vue ~ line 168 ~ getyears ~  data ",
          data
        );

        years.value = data.data.map((y) => y.name);
      } catch (error) {
        console.log(error);
      }
    };

    const getbrand = async (params = "") => {
      let url = "";
      if (params) {
        url = `?year=${params}`;
      }
      try {
        const { data } = await ApiService.get(`api/vehicles/brands${url}`);
        console.log(
          "🚀 ~ file: DetalleVehiculo.vue ~ line 71 ~ getDetail ~ data",
          data
        );
        brands.value = data.data;
      } catch (error) {
        console.log(error);
      }
    };

    const getmodel = async (params = "") => {
      let url = "";
      if (params) {
        url = `?brand=${params}`;
      }
      try {
        const { data } = await ApiService.get(`api/vehicles/models${url}`);
        console.log("🚀 ~ file: Vende.vue ~ line 197 ~ getmodel ~ data", data);

        models.value = data.data;
      } catch (error) {
        console.log(error);
      }
    };

    return {
      priceFormat,
      kmFormat,
      Whatassap,
      Mail,
      schema,
      onSubmit,
      formValues,
      brands,
      years,
      models,
      valueYears,
      valueBrands,
      valueModels,
      IconReturn,
      submited,
      sendCode,
      code,
    };
  },
};
</script>
<style lang="scss" scoped></style>
