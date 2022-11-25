<template>
  <main class="venta">
    <HelloWorld />

    <article>
      <FormWizard @submit="onSubmit" :validation-schema="schema" :initial-values="formValues" :sendCode="submited" :ultimateCurrentStep="ultimateCurrentStep" v-slot="{ errors, currentStep, previous, hasPrevious }">
        <div v-if="hasPrevious && !submited && !ultimateCurrentStep" class="steps__back">
          <div class="steps__back-text">
            <button class="steps__btn-back" @click="previous">
              <img :src="IconReturn" alt="" />
              {{ "Volver" }}
            </button>
          </div>
        </div>
        <div v-if="submited && !ultimateCurrentStep" class="steps__back">
          <div class="steps__back-text">
            <button class="steps__btn-back" @click="returnSubmited">
              <img :src="IconReturn" alt="" />
              {{ "Volver" }}
            </button>
          </div>
        </div>
        <div v-if="ultimateCurrentStep" class="steps__back">
          <div class="steps__back-text">
            <button class="steps__btn-back" @click="refresh">
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
            <div class="step" :class="currentStep >= 1 ? ['step', 'active'] : ['step']">
              <IconUser :prop_active="currentStep >= 1" />
              <p>Tus datos</p>
            </div>
            <div class="step" :class="currentStep === 2 ? ['step', 'active'] : ['step']">
              <IconDolar :prop_active="currentStep === 2" />
              <p>Valuación</p>
            </div>
          </div>

          <div class="venta__contact-form">
            <p class="venta__contact-title">Vende tu vehículo</p>

            <div v-show="!submited && !valuation">
              <FormStep class="venta__inputs-content venta__inputs-content--column">
                <p class="venta__contact-sub">
                  Ingresa los datos de tu vehículo para recibir una oferta
                </p>
                <div class="venta__inputs">
                  <label for="year" class="label" :data-require="Boolean(errors.year)">Año</label>
                  <Field v-slot="{ value }" name="year" as="select" :data-require="Boolean(errors.year)"
                    v-model="valueYears" class="input input__select">
                    <option value="" disabled>Seleciona el año</option>
                    <option v-for="year in years" :key="year" :value="year" :selected="year === value">
                      {{ year }}
                    </option>
                  </Field>
                  <ErrorMessage name="year" class="input__error"></ErrorMessage>
                </div>
                <div class="venta__inputs">
                  <label for="brand" class="label" :data-require="Boolean(errors.brand)">Marca</label>
                  <Field v-slot="{ value }" name="brand" as="select" :data-require="Boolean(errors.brand)"
                    v-model="valueBrands" class="input input__select" :disabled="Boolean(!valueYears)">
                    <option value="" disabled>Seleciona una marca</option>
                    <option v-for="brand in brands" :key="brand.Clave" :value="brand.Clave"
                      :selected="brand[value] && value.includes(brand.Nombre)">
                      {{ brand.Nombre }}
                    </option>
                  </Field>
                  <ErrorMessage name="brand" class="input__error"></ErrorMessage>
                </div>
                <div class="venta__inputs">
                  <label for="model" class="label" :data-require="Boolean(errors.model)">Modelo</label>
                  <Field v-slot="{ value }" name="model" as="select" :data-require="Boolean(errors.model)"
                    v-model="valueModels" class="input input__select" :disabled="Boolean(!valueBrands)">
                    <option value="" disabled>Seleciona un modelo</option>
                    <option v-for="model in models" :key="model.Clave" :value="model.Clave"
                      :selected="model[value] && value.includes(model.Nombre)">
                      {{ model.Nombre }}
                    </option>
                  </Field>
                  <ErrorMessage name="model" class="input__error"></ErrorMessage>
                </div>
                <!-- TODO: Implemetnación de Versiones -->
                <div class="venta__inputs">
                  <label for="version" class="label" :data-require="Boolean(errors.model)">Versión</label>
                  <Field v-slot="{ value }" name="version" as="select" :data-require="Boolean(errors.version)"
                    v-model="valueVersions" class="input input__select" :disabled="Boolean(!valueBrands)">
                    <option value="" disabled>Seleciona una version</option>
                    <option v-for="version in versions" :key="version.Clave" :value="version.Clave"
                      :selected="version[value] && value.includes(version.Nombre)">
                      {{ version.Nombre }}
                    </option>
                  </Field>
                  <ErrorMessage name="version" class="input__error"></ErrorMessage>
                </div>

                <div class="venta__inputs">
                  <label for="kms" class="label" :data-require="Boolean(errors.kms)">Kilometráje</label>
                  <Field as="input" name="kms" class="input input--white" :data-error="Boolean(errors.kms)" v-model="valueKms"
                    placeholder="50,000 km" />
                  <ErrorMessage name="kms" class="input__error"></ErrorMessage>
                </div>
              </FormStep>

              <FormStep class="venta__inputs-content venta__inputs-content--column">
                <p class="venta__contact-sub">
                  Ingresa tus datos personales para recibir una oferta
                </p>
                <div class="d-flex gap-5">
                  <div class="venta__inputs">
                    <label for="name" class="label" :data-require="Boolean(errors.name)">Nombre</label>
                    <Field as="input" name="name" class="input input--white" :data-error="Boolean(errors.name)"
                      placeholder="Juan" />
                    <ErrorMessage name="name" class="input__error"></ErrorMessage>
                  </div>
                  <div class="venta__inputs">
                    <label for="lastname" class="label" :data-require="Boolean(errors.lastname)">Apellido</label>
                    <Field as="input" name="lastname" class="input input--white" :data-error="Boolean(errors.lastname)"
                      placeholder="Pérez" />
                    <ErrorMessage name="lastname" class="input__error"></ErrorMessage>
                  </div>
                </div>
                <div class="venta__inputs">
                  <label for="email" class="label" :data-require="Boolean(errors.email)">Mail</label>
                  <div class="input-icon">
                    <Field as="input" name="email" class="input input--white input--icon"
                      :data-error="Boolean(errors.email)" placeholder="ejemplo@correo.com" />
                    <IconMail :prop_classes="['input-icon--icon']" />
                  </div>
                  <ErrorMessage name="email" class="input__error"></ErrorMessage>
                </div>
                <div class="venta__inputs">
                  <label for="whatsapp" class="label" :data-require="Boolean(errors.whatsapp)">Whatassap</label>
                  <div class="input-icon">
                    <Field as="input" name="whatsapp" class="input input--white input--icon" v-model="valueWhatsapp"
                      :data-error="Boolean(errors.whatsapp)" placeholder="33 33 33 33 33" />
                    <IconPhone :prop_classes="['input-icon--icon']" />
                  </div>
                  <ErrorMessage name="whatsapp" class="input__error"></ErrorMessage>
                </div>
                <div class="input__check" :style="'visibility: hidden;'">
                  <Field as="input" type="checkbox" value="Si" name="notificaciones" class="form-check-input" v-model="notificaciones"
                    :data-error="Boolean(errors.notificaciones)" />

                  <label for="notificaciones">Recibir notificaciones vía WhatsApp</label>
                </div>
              </FormStep>
            </div>
            <div v-show="submited && !valuation">
              <p class="venta__contact-sub">Ingresar código</p>
              <p class="venta__code-text">
                Te envíamos un código a tu teléfono.
              </p>
              <!-- <span class="venta__code-text__bold">El código vence en: 2:25 minutos</span> -->
              <div class="code">
                <input type="text" maxlength="1" class="input-code" v-model="code[0]"  ref="number_1"/>
                <input type="text" maxlength="1" class="input-code" v-model="code[1]" ref="number_2"/>
                <input type="text" maxlength="1" class="input-code" v-model="code[2]" ref="number_3"/>
                <input type="text" maxlength="1" class="input-code" v-model="code[3]" ref="number_4"/>
                <input type="text" maxlength="1" class="input-code" v-model="code[4]" ref="number_5"/>
              </div>
              <button href="#" class="reenviar-codigo" v-if="NewCode" @click="sendNewCode">
                Enviar nuevo código
              </button>
              <button class="venta__contact-send-btn code-send-btn" @click="sendCode">
                Verificar código
              </button>
            </div>
            <div v-if="valuation" class="venta__inputs-content venta__inputs-content--column">
              <p class="venta__contact-sub venta__contact-sub--valuation">
                Recibe una valuación
              </p>
            
              <div class="venta__box-valuation">
                <p class="venta__valuation-brand">{{`${dataVehicle?.vehicle.brand} ${dataVehicle?.vehicle.model} ${dataVehicle?.vehicle.year}`}}</p>
                <div class="venta__valuation-info">
                  <p class="venta__valuation-info-title">Valuación recibida</p>
                  <img :src="Valuation" alt="" class="venta__valuatin-icon">
                  <p class="venta__valuation-info-sub">Te podemos ofrecer</p>
                  <p class="venta__valuation-info-price">{{`${dataVehicle?.vehicle.price}`}}</p>
                  <p class="venta__valuation-info-subtext">Recibimos tu información para darle seguimiento a tu vehículo</p>
                </div>
                <a :href="`#`" target="_blank" class="venta__btnWhat ">
                  <img :src="Whatassap" alt="" class="venta__agency-btnImg" />
                  <p class="venta__btnText">
                    Contactar <span>por WhatsApp</span>
                  </p>
                </a>
                <button class="venta__valuation-return-home">Volver al inicio</button>
              </div>
              
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

import {  Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";
import HelloWorld from "@/components/HelloWorld.vue";
import Whatassap from "@/assets/images/icons/icon-btn_what.svg";
import Valuation from "@/assets/images/icons/icon-valuation.svg";
import Mail from "@/assets/images/icons/icon-btn_mail.svg";
import IconCar from "@/views/client/components/IconCar.vue";
import IconUser from "@/views/client/components/IconUser.vue";
import IconDolar from "@/views/client/components/IconDolar.vue";
import IconReturn from "@/assets/images/icons/icon-return.svg";
import IconPhone from "@/views/client/components/IconPhone.vue";
import IconMail from "@/views/client/components/IconMail.vue";
import "sweetalert2/src/sweetalert2.scss";
import "@/assets/styles/views/Venta.scss";
import "@/assets/styles/components/Input.scss";

import FormWizard from "./components/FormWizard.vue";
import FormStep from "./components/FormStep.vue";
export default {
  name: "Venta",
  components: {
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
    const brands = ref([{ Clave: 0, Nombre: "Seleccione una marca" }]);
    const years = ref([]);
    const models = ref([{Clave: 0, Nombre: "Seleccione un modelo"}]);
    const versions = ref([{Clave: 0, Nombre: "Seleccione una versión"}]);
    const valueYears = ref("");
    const valueBrands = ref("");
    const valueModels = ref("");
    const valueVersions = ref("");
    const valueKms = ref("");
    const kms = ref(0);
    const notificaciones = ref("Si");
    const dataVehicle = ref([])
    const submited = ref(false);
    const ultimateCurrentStep = ref(false);
    const valueWhatsapp = ref("");
    const code = ref(["", "", "", "", ""]);
    const valuation = ref(false);
    const NewCode = ref(false);
    const number_1 = ref(null);
    const number_2 = ref(null);
    const number_3 = ref(null);
    const number_4 = ref(null);
    const number_5 = ref(null);

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
      notificaciones: 'No',
    });

   
    const schema = [
      markRaw(
        yup.object().shape({
          brand: yup.string().required("El dato es obligatorio"),
          year: yup.string().required("El dato es obligatorio"),
          model: yup.string().required("El dato es obligatorio"),
          version: yup.string().required("El dato es obligatorio"),
          kms: yup
            .string()
            .matches(/\d+(,\d+)?$/, "Solo se aceptan numeros")
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
            .min(10, "El numero debe tener 10 digitos")
            .max(10, "El numero debe tener 10 digitos")
            .matches(/^[0-9]+$/, "Solo se aceptan numeros")
            .required("El dato es obligatorio"),
        })
      ),
    ];

    setTimeout(function () {
      NewCode.value = true;
    }, 60000);
  

    const formatPrice = (value) => {
      const exp = /(\d)(?=(\d{3})+(?!\d))/g;
      const rep = '$1,';
      return value.toString().replace(exp, rep);
    }

    watch(
      () => valueKms.value,
      (value) => {

        valueKms.value = formatPrice(value.replace(/,/g, ""));

      }
    )
    watch(
      () => code.value[0],
      (value) => {
        if (value) {
          number_2.value.focus();
        }
      }
    )
    watch(
      () => code.value[1],
      (value) => {
        if (value) {
          number_3.value.focus();
        }
      }
    )
    watch(
      () => code.value[2],
      (value) => {
        if (value) {
          number_4.value.focus();
        }
      }
    )
    watch(
      () => code.value[3],
      (value) => {
        if (value) {
          number_5.value.focus();
        }
      }
    )

    const onSubmit = (values) => {

      console.log("data values ", values);

      const data = {
        year: values.year,
        brand: brands.value.find((brand) => brand.Clave === values.brand)
          .Nombre,
        model: models.value.find((model) => model.Clave === values.model)
          .Nombre,
        trim: versions.value.find((version) => version.Clave === values.version)
          .Nombre,
        vehicle: values.version,
        mileage: values.kms.replace(/,/g, ""),
        name: values.name,
        surname: values.lastname,
        email: values.email,
        phone: values.whatsapp,
        phone_notification: "Si",
        phone_verified: "Si"
      }

      localStorage.data = JSON.stringify(data);

      const formData = new FormData();
      formData.append("phone", values.whatsapp);

      ApiService.post(`/api/valuation/phone-validated`, formData)
        .then((res) => {
          console.log(res);
          if (res.data.data.verified === true) {

            ApiService.post(`/api/vehicles/valuation-lead`, data)
              .then((res) => {
                console.log(res);
                console.log(res.data.data);
                if (res.data.code == 406) {
                  Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${res.data.message}`,
                  });
                } else {

                  dataVehicle.value = res.data?.data
                  valuation.value = true;
                  ultimateCurrentStep.value = true;
                }
              })
              .catch((err) => {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Algo salió mal, intenta de nuevo",
                });
              });
          } else {
            const formDataSend = new FormData();
            formDataSend.append("number", values.whatsapp);
            ApiService.post(`/api/valuation/send-code`, formDataSend)
              .then((res) => {

                submited.value = true;

              })
              .catch((err) => {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Algo salió mal, intenta de nuevo",
                });
              });
          }

        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            title: "¡Error!",
            text: "Ha ocurrido un error, por favor intenta más tarde",
            icon: "error",
            confirmButtonText: "Aceptar",
          });
        });
    };

    const sendCode = (e) => {
      e.preventDefault();

      const data = JSON.parse(localStorage.data);
      console.log("🚀 ~ file: Vende.vue ~ line 394 ~ .then ~ data", data)
      const formData = new FormData();
      formData.append("number", valueWhatsapp.value);
      formData.append("code", code.value.join(""));

      ApiService.post(`/api/valuation/verify-code`, formData)
        .then((res) => {
          console.log(`/api/valuation/verify-code`, res);

          ApiService.post(`/api/vehicles/valuation-lead`, data)
            .then((res) => {
              console.log(res);
              if (res.data.code == 406) {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: `${res.data.message}`,
                });

              } else {
                dataVehicle.value = res.data?.data
                valuation.value = true;
                ultimateCurrentStep.value = true;
              }
            })
            .catch((err) => {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Algo salió mal, intenta de nuevo",
              });
            });
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo salió mal, intenta de nuevo",
          });
        });
    };

    const sendNewCode = (e) => {
      const formDataSend = new FormData();
      formDataSend.append("number", valueWhatsapp.value);
      ApiService.post(`/api/valuation/send-code`, formDataSend)
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: "Código enviado",
            text: "Se ha enviado un nuevo código de verificación",
          });
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo salió mal, intenta de nuevo",
          });
        });
    };
    
    watch(
      () => valueYears.value,
      async (val) => {
        await getbrand(valueYears.value);
        valueBrands.value = "";
      }
    );
    watch(
      () => valueBrands.value,
      async () => {
        await getmodel(valueYears.value, valueBrands.value);
        valueModels.value = "";
      }
    );
    watch(
      () => valueModels.value,
      async () => {
        await getversion(valueYears.value, valueBrands.value, valueModels.value);
        valueVersions.value = "";
      }
    );

    onMounted(async () => {
      store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-load");
      await getyears();
      store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-load");
    });

    const getyears = async () => {
      try {
        const { data } = await ApiService.get("/api/vehicles/bb-years");
        console.log(
          "🚀 ~ file: Vende.vue ~ line 168 ~ getyears ~  data ",
          data
        );

        years.value = data.data.map((y) => y.Nombre);
      } catch (error) {
        console.log(error);
      }
    };

    const refresh = () => {
      window.location.reload();
    };

    const returnSubmited = () => {
      submited.value = false;
    };

    const getbrand = async (id_years) => {

      try {
        const { data } = await ApiService.get(`/api/vehicles/bb-brands/${id_years}`);
        console.log(
          "🚀 ~ file: DetalleVehiculo.vue ~ line 71 ~ getDetail ~ data",
          data
        );
        brands.value = data.data;
      } catch (error) {
        console.log(error);
      }
    };

    const getmodel = async (id_years, id_brand) => {

      try {
        const { data } = await ApiService.get(`api/vehicles/bb-models/${id_years}/${id_brand}`);
        console.log("🚀 ~ file: Vende.vue ~ line 197 ~ getmodel ~ data", data);

        models.value = data.data;
      } catch (error) {
        console.log(error);
      }
    };

    const getversion = async (id_years, id_brand, id_model) => {

      try {
        const { data } = await ApiService.get(`api/vehicles/bb-trims/${id_years}/${id_brand}/${id_model}`);
        console.log(
          "🚀 ~ file: Vende.vue ~ line 197 ~ getmodel ~ data",
          data
        );

        versions.value = data.data;
      } catch (error) {
        console.log(error);
      }
    };

    return {
      Whatassap,
      Mail,
      schema,
      onSubmit,
      formValues,
      brands,
      years,
      models,
      versions,
      valueYears,
      valueBrands,
      valueModels,
      valueVersions,
      IconReturn,
      notificaciones,
      submited,
      sendCode,
      code,
      valueWhatsapp,
      valueKms,
      ultimateCurrentStep,
      valuation,
      refresh,
      returnSubmited,
      dataVehicle,
      Valuation,
      sendNewCode,
      NewCode,
      number_1, 
      number_2,
      number_3,
      number_4,
      number_5
    };
  },
};
</script>
<style lang="scss" scoped>

</style>
