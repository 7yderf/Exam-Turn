<template>
  <div class="form">
    <VForm
      class="form__container"
      :validation-schema="schema"
      :initial-values="formValues"
      @submit="onSubmit"
    >
      <h3 class="form__text">
        {{ $t("contact") }}
      </h3>
      <div class="form__box">
        <FormVTextInput
          type="text"
          name="name"
          :label="$t('name')"
          :placeholder="$t('placeholder-name')"
          icon="/icon/profile-circle.svg"
          data="name"
        />
        <FormVTextInput
          type="text"
          name="middle_name"
          :label="$t('middle')"
          :placeholder="$t('placeholder-middle')"
          icon="/icon/profile-circle.svg"
          data="middle_name"
        />
      </div>
      <div class="form__box">
        <FormVTextInput
          type="text"
          name="last_name"
          :label="$t('last-name')"
          :placeholder="$t('placeholder-last-name')"
          icon="/icon/profile-circle.svg"
          data="last_name"
        />

        <FormVTextInput
          type="text"
          name="telephone"
          :label="$t('tel')"
          :placeholder="$t('placeholder-tel')"
          icon="/icon/call.svg"
        />

      </div>
      <div class="form__box">
        <FormVTextInput
          type="mail"
          name="email"
          :label="$t('email')"
          :placeholder="$t('placeholder-email')"
          icon="/icon/sms.svg"
        />

      </div>
      <h3 class="form__text">
        {{ $t("direction") }}
      </h3>
      <div class="form__box">

        <FormVTextInput
          type="text"
          name="address_line_1"
          :label="$t('direction-1')"
          :placeholder="$t('placeholder-direction-1')"
          icon="/icon/building.svg"
        />
        <FormVTextInput
          type="text"
          name="address_line_2"
          :label="$t('direction-2')"
          :placeholder="$t('placeholder-direction-2')"
          icon="/icon/building.svg"
          data="address_line_2"
        />
      </div>
      <div class="form__box">
        <FormVTextInput
          type="text"
          name="city"
          :label="$t('ciudad')"
          :placeholder="$t('placeholder-ciudad')"
          icon="/icon/building.svg"
        />
        <FormVTextInput
          type="text"
          name="state"
          :label="$t('estado')"
          :placeholder="$t('placeholder-estado')"
          icon="/icon/building.svg"
        />
        <FormVTextInput
          type="text"
          name="country"
          :label="$t('pais')"
          :placeholder="$t('placeholder-pais')"
          icon="/icon/building.svg"
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
          {{ $t("send-solicitud") }}
        </button>
      </div>
    </VForm>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

import { useForm } from 'vee-validate'
// import { object, string, ref as yupRef } from "yup";
import * as yup from 'yup'

const { t, tm } = useI18n()
const { handleSubmit } = useForm()
const swal = inject('$swal')
const config = useRuntimeConfig()
const formValues = ref({
  name: '',
  middle_name: '',
  last_name: '',
  telephone: '',
  email: '',
  address_line_1: '',
  address_line_2: '',
  city: '',
  state: '',
  country: '',
})

const schema = markRaw(
  yup.object().shape({
    name: yup.string().required('Required'),
    middle_name: yup.string(),
    last_name: yup.string().required('Required'),
    telephone: yup.string()
      .min(10, 'Minimo 10 caracteres')
      .max(14, 'Maximo 14 caracteres')
      .matches(/^[0-9]+$/, 'Solo se aceptan numeros')
      .required('Required'),
    email: yup
      .string()
      .email('Porfavor ingrese un formato valido')
      .required('Required'),
    address_line_1: yup.string().required('Required'),
    address_line_2: yup.string(),
    city: yup.string().required('Required'),
    state: yup.string().required('Required'),
    country: yup.string().required('Required'),
  }),
)

const onSubmit = async (values, { resetForm }) => {
  const { data, error } = await useLazyFetch('https://test.api.gobytec.com/contact', {
    method: 'POST',
    body: JSON.stringify(values),
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
  width: 100%;
  &__box{
    @include flex(space-between, 16px, center);
    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: stretch;
    }
  }
  &__submit{
    width: 100%;
  }
  &__submit-btn{
    @include button;
    max-width: inherit;
    width: 100%;
  }
  &__text{
    @include text(2.4rem, 400, 2.8rem, left);
    margin: 16px 0 32px;
  }
}
</style>
