<template>
  <!--begin::Modal - New Card-->
  <div
    class="modal fade"
    ref="newCardModalRef"
    id="kt_modal_new_card"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header px-5 py-4">
          <div class="w-100 mx-lg-15 d-flex justify-content-between align-items-center">
            <h2 class="fs-2 fw-bold">Contactar al vendedor</h2>
            <!--end::Modal title-->

            <!--begin::Close-->
            <div
              class="btn btn-sm btn-icon btn-active-color-primary"
              data-bs-dismiss="modal"
            >
             <i class="isax-close-circle fs-2x text-white"></i>
            </div>
          </div>
          <!--begin::Modal title-->
          <!--end::Close-->
        </div>
        <!--end::Modal header-->

        <!--begin::Modal body-->
        <div class="modal-body scroll-y mx-5 mx-xl-15 mb-7">
          <p class="mb-4">Ayúdanos con tus datos para contactar por medio de correo electrónico</p>
          <!--begin::Form-->
          <Form
            id="kt_modal_new_card_form"
            class="form mx-3"
            ref='formContact'
            novalidate="novalidate"
            autocomplete="off"
            @submit="submit"
            :validation-schema="validationSchema"
          >
            <!--begin::Input group-->
            <div class="row">
                <div class="col-lg-6">
                  <div class="d-flex flex-column mb-7 fv-row">
                    <!--begin::Label-->
                    <label
                      class="d-flex align-items-center fw-bold form-label mb-2"
                    >
                      <span class="required">Nombre</span>
                    </label>
                    <!--end::Label-->
                    <div class="position-relative">
                      <Field
                        type="text"
                        autocomplete="off"
                        class="form-control form-control-solid border-1 border-secondary ps-10 fs-base"
                        placeholder="Luis Daniel"
                        name="name"
                        v-model="contactData.name"
                      />
                      <!--end::Input-->
                      <div class="position-absolute translate-middle-y top-50 start-0 ms-3">
                        <!--begin::Svg Icon | path: icons/duotune/finance/fin002.svg-->
                        <span role="button" class="svg-icon svg-icon-1hx pointer">
                          <inline-svg src="media/icons/iconsax/user.svg" />
                        </span>
                        <!--end::Svg Icon-->
                      </div>
                    </div>
                    <div class="fv-plugins-message-container">
                      <div class="fv-help-block">
                        <ErrorMessage name="name" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="d-flex flex-column mb-7 fv-row">
                    <!--begin::Label-->
                    <label
                      class="d-flex align-items-center fw-bold form-label mb-2"
                    >
                      <span class="required">Apellidos</span>
                    </label>
                    <!--end::Label-->

                    <Field
                      type="text"
                      autocomplete="off"
                      class="form-control form-control-solid border-1 border-secondary ps-5 fs-base"
                      placeholder="Anaya Diaz"
                      name="last_name"
                      v-model="contactData.last_name"
                    />
                    <div class="fv-plugins-message-container">
                      <div class="fv-help-block">
                        <ErrorMessage name="last_name" />
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row">
              <!--begin::Label-->
              <label class="required fw-bold form-label mb-2"
                >Correo electrónico</label
              >
              <!--end::Label-->

              <div class="position-relative">
                <Field
                  type="text"
                  autocomplete="off"
                  class="form-control form-control-solid border-1 border-secondary ps-10 fs-base"
                  placeholder="example@mail.com"
                  name="email"
                  v-model="contactData.email"
                />
                <!--end::Input-->
                <div class="position-absolute translate-middle-y top-50 start-0 ms-3">
                  <!--begin::Svg Icon | path: icons/duotune/finance/fin002.svg-->
                  <span role="button" class="svg-icon svg-icon-1hx pointer">
                    <inline-svg src="media/icons/iconsax/Correo.svg" />
                  </span>
                  <!--end::Svg Icon-->
                </div>
              </div>
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="email" />
                </div>
              </div>
            </div>
            <!--end::Input group-->
            <!--begin::Input group-->
            <div class="d-flex flex-column mb-7 fv-row">
              <!--begin::Label-->
              <label class="required fw-bold form-label mb-2"
                >Teléfono</label
              >
              <!--end::Label-->

              <div class="position-relative">
                <Field
                  type="text"
                  autocomplete="off"
                  class="form-control form-control-solid border-1 border-secondary ps-10 fs-base"
                  placeholder="333-333-3331"
                  name="phone"
                  v-model="contactData.phone"
                  v-maska="{
                      mask: 'Z##-###-####',
                      tokens: { Z: { pattern: /[1-9]/ } }
                    }"
                />
                <!--end::Input-->
                <div class="position-absolute translate-middle-y top-50 start-0 ms-3">
                  <!--begin::Svg Icon | path: icons/duotune/finance/fin002.svg-->
                  <span role="button" class="svg-icon svg-icon-1hx pointer">
                    <inline-svg src="media/icons/iconsax/call.svg" />
                  </span>
                  <!--end::Svg Icon-->
                </div>
              </div>
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="phone" />
                </div>
              </div>
            </div>
            <!--end::Input group-->


            <!--begin::Actions-->
            <div class="text-center pt-5">
              <button type="reset" ref="resetBtn" class="d-none">jeje</button>
              <button
                ref="submitButtonRef"
                type="submit"
                id="kt_modal_new_card_submit"
                class="btn btn-primary w-100"
              >
                <span class="indicator-label fs-base"> Contactar al vendedor </span>
                <span class="indicator-progress">
                  Enviando...
                  <span
                    class="spinner-border spinner-border-sm align-middle ms-2"
                  ></span>
                </span>
              </button>
            </div>
            <!--end::Actions-->
          </Form>
          <!--end::Form-->
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
  <!--end::Modal - New Card-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { hideModal } from "@/core/helpers/dom";
import * as Yup from "yup";
import ApiService from "@/core/services/ApiService";

interface contactData {
  name: string;
  last_name: string;
  email: string;
  phone: string;
}

export default defineComponent({
  name: "ContactModal",
  components: {
    ErrorMessage,
    Field,
    Form,
  },
  props:{
    idVehicle: Number
  },
  setup(props) {
    const submitButtonRef = ref<null | HTMLButtonElement>(null);
    const newCardModalRef = ref<null | HTMLElement>(null);
    const formContact = ref<any>(null);
    const resetBtn = ref<any>(null);

    const contactData = ref<contactData>({
      name: "",
      last_name: "",
      email: "",
      phone: "",
    });

    const validationSchema = Yup.object().shape({
      name: Yup.string().required('Nombre es obligatorio').label("Nombre"),
      last_name: Yup.string().required('Los apellidos son obligatorios').label("Apellidos"),
      email: Yup.string().required('El correo es obligatorio').email('Ingresa un email valido').label("Correo"),
      phone: Yup.string().required('El Teléfono es obligatorio').label("Teléfono")
    });

    const submit = async (values, {resetForm, setFieldError}) => {
      // if(resetBtn.value){
      //   resetBtn.value.click();
      //   hideModal(newCardModalRef.value);
      //   return;
      // }
      if (!submitButtonRef.value) {
        return;
      }


      //Disable button
      submitButtonRef.value.disabled = true;
      // Activate indicator
      submitButtonRef.value.setAttribute("data-kt-indicator", "on");
    try {
      const {data} = await ApiService.post('/api/contact/'+props.idVehicle, values);
      resetForm()
      if (submitButtonRef.value) {
        submitButtonRef.value.disabled = false;

        submitButtonRef.value?.removeAttribute("data-kt-indicator");
      }
      hideModal(newCardModalRef.value);
      Swal.fire({
        html: '<p class="fw-bold text-white">Gracias por enviarnos tu información</p><p>Nos pondremos en contacto contigo</p>',
        icon: "success",
        buttonsStyling: false,
        confirmButtonText: "Aceptar",
        customClass: {
          confirmButton: "btn btn-primary",
          content: "mt-0"
        },
      })
      return;
    } catch (error:any) {
      if (submitButtonRef.value) {
        submitButtonRef.value.disabled = false;

        submitButtonRef.value?.removeAttribute("data-kt-indicator");
      }
      Swal.fire({
        text: (error.response.data.message) ? error.response.data.message : 'Error al enviar la información',
        icon: "warning",
        buttonsStyling: false,
        confirmButtonText: "Aceptar",
        customClass: {
          confirmButton: "btn btn-primary",
        },
      })
    }

    };

    return {
      contactData,
      validationSchema,
      submit,
      submitButtonRef,
      newCardModalRef,
      formContact,
      resetBtn
    };
  },
});
</script>
