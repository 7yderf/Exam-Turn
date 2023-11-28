<template>
  <div class="form">
    <VForm
      class="form__container"
      :validation-schema="schema"
      :initial-values="formValues"
      @submit="onSubmit"
    >
      <div class="form__box form__box--mobile">
        <FormVTextInput
          type="text"
          name="first_name"
          label=""
          placeholder="Nombre"
          icon="/icon/profile-circle.svg"
          data="first_name"
        />
        <FormVTextInput
          type="text"
          name="last_name"
          label=""
          placeholder="Apellido"
          icon="/icon/profile-circle.svg"
          data="last_name"
        />
      </div>
      <div class="form__box form__box--mobile">
        <FormVTextInput
          type="mail"
          name="email"
          label=""
          placeholder="Email"
          icon="/icon/sms.svg"
        />
      </div>
      <div class="form__box form__box--mobile">
        <FormVTextInput
          type="text"
          name="telephone"
          label=""
          placeholder="+52 MX"
          icon="/icon/call.svg"
        />
      </div>
      <div
        class="form__submit"
        type="submit"
      >
        <button
          type="submit"
          class="form__submit-btn"
        >
          Enviar
        </button>
      </div>
    </VForm>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useReCaptcha } from 'vue-recaptcha-v3'
// import axios from "axios";
import { useForm } from 'vee-validate'
// import { object, string, ref as yupRef } from "yup";
import * as yup from 'yup'

const { handleSubmit } = useForm()
const swal = inject('$swal')
const config = useRuntimeConfig()
const formValues = ref({
  email: '',
  first_name: '',
  last_name: '',
  company: '',
  telephone: '',
  budget: '',
  details: '',
})

// initialize a instance
const recaptchaInstance = useReCaptcha()

const recaptcha = async () => {
  // optional you can await for the reCaptcha load
  await recaptchaInstance?.recaptchaLoaded()

  // get the token, a custom action could be added as argument to the method
  const token = await recaptchaInstance?.executeRecaptcha('lead_Contact')

  return token
}

const schema = markRaw(
  yup.object().shape({
    first_name: yup.string().required('El dato es obligatorio'),
    last_name: yup.string().required('El dato es obligatorio'),
    company: yup.string().required('El dato es obligatorio'),
    email: yup
      .string()
      .required('El dato es obligatorio')
      .email('Porfavor ingrese un formato valido'),
    telephone: yup.string()
      .min(10, 'Minimo 10 caracteres')
      .max(10, 'Maximo 10 caracteres')
      .matches(/^[0-9]+$/, 'Solo se aceptan numeros')
      .required('El dato es obligatorio'),
    budget: yup.string().required('El dato es obligatorio'),
  }),
)

const onSubmit = async (values, { resetForm }) => {
  const token = await recaptcha()

  values.budget = values.budget.replace(/[^0-9]+/g, '')

  const { data, error } = await useLazyFetch(`${config.API_BASE_URL}api/lead`, {
    method: 'POST',
    body: JSON.stringify({ ...values, 'g-recaptcha-response': token }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (data.value) {
    resetForm()
    swal.fire({
      icon: 'success',
      title: '¡Gracias!',
      text: 'Nos pondremos en contacto contigo a la brevedad',
      timer: 2000,
      confirmButtonText: 'Listo',
      // showConfirmButton: false,
      confirmButtonColor: 'green',
    })
  }

  if (error.value) {
    swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Algo salió mal, intenta de nuevo',
      timer: 2000,
      confirmButtonText: 'Entiendo',
      // showConfirmButton: false,
      confirmButtonColor: 'red',
    })
  }
}

const onInvalidSubmit = async values => {
  console.log('invalid ')
  console.log(values)
  return false
}

onMounted(async () => {

})

</script>
<style lang="scss" scoped>
@import "@/assets/scss/Mixins";
.form{
  &__box{
    @include flex(space-between, 16px, center);
  }
  &__submit{
    width: 100%;
    padding-top: 32px;
  }
  &__submit-btn{
    @include button;
    max-width: inherit;
    width: 100%;
    max-width: 150px;
    margin-left: auto;
    padding: 16px 32px;
    border-radius: 32px 0 0 32px;
  }
  &__text{
    @include text(2.4rem, 400, 2.8rem, left);
    margin: 16px 0 32px;
  }
}

@media screen and (max-width: 768px) {
  .form{
    &__box{
      &--mobile{
        flex-direction: column ;
        gap: 0;
        .field{
          width: 100%;

        }
      }
    }
  }
}

</style>
