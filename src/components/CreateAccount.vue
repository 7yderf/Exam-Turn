<template>
  <div class="form">
    <VForm class="form__container" 
    :validation-schema="schema" 
    :initial-values="formValues" 
    @submit="onSubmit"
  >
      <h3 class="form__text">
        Datos de contacto
      </h3>
      <div class="form__box form__box--mobile">
        <FormVTextInput
        type="text"
        name="name"
        label="Nombre"
        placeholder="Nombre"
        icon="/icon/sms.svg"
        />
        
        
        <FormVTextInput
        type="text"
        name="rfc"
        label="rfc"
        placeholder="rfc"
        icon="/icon/building.svg"
        />

        <FormVTextInput
        type="mail"
        name="email"
        label="Correo electrónico"
        placeholder="Correo electrónico"
        icon="/icon/sms.svg"
        />

        <FormVTextInput
        type="password"
        name="password"
        label="Contraseña"
        placeholder="Contraseña"
        icon="/icon/building.svg"
        />

        <FormVTextInput
        type="text"
        name="tipe_account"
        label="Tipo de cuenta"
        placeholder="Tipo de cuenta"
        icon="/icon/building.svg"
        />
        
      </div>
                  
      <div class="form__submit" type="submit">
        <button class="form__submit-btn">
            crear cuenta nueva
        </button>
      </div>                                                       
    </VForm>      
  </div>
</template>

<script setup>
    import { ref, onMounted } from "vue";
    import { useReCaptcha } from 'vue-recaptcha-v3';
    import { useForm } from 'vee-validate';
    // import { object, string, ref as yupRef } from "yup";
    import * as yup from "yup";
    import useNewAccount from "@/composables/useAccount";
    
    
    const {  newAcoount } = useNewAccount();
  
    const { handleSubmit } = useForm();
    const swal = inject("$swal");
    // const config = useRuntimeConfig();
    const formValues = ref({
      'name' : '',
      'rfc' : '',
      'email' : '',
      'password' : '',
      'tipe_account' : '',
    });

    
    
    const schema = markRaw(
      yup.object().shape({
        name: yup.string().required("El dato es obligatorio"),
        rfc: yup.string().required("El dato es obligatorio"),
        password: yup.string().required("El dato es obligatorio"),
        email: yup
          .string()
          .required("El dato es obligatorio")
          .email("Porfavor ingrese un formato valido"),
        'tipe_account': yup.string().required("El dato es obligatorio"),
      }),

    );

    const onSubmit = async (values, { resetForm }) => {
    console.log("🚀 ~ file: CreateAccount.vue:103 ~ onSubmit ~ values:", values)

    const { data, error } = await newAcoount(values);

    console.log(data);

    if (data.value) {
      resetForm();
      swal.fire({
        icon: "success",
        title: "¡Gracias!",
        text: "Nos pondremos en contacto contigo a la brevedad",
        timer: 2000,
        confirmButtonText: "Listo",
        // showConfirmButton: false,
        confirmButtonColor: "green",
      });
    }

    if (error.value) {
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo salió mal, intenta de nuevo",
        timer: 2000,
        confirmButtonText: "Entiendo",
        // showConfirmButton: false,
        confirmButtonColor: "red",
      })
    }
  }

    const onInvalidSubmit = async (values) => {
        console.log("invalid ");        
        console.log(values);
        return false;
    };


    onMounted(async () => {
       
    });

</script>
<style lang="scss" scoped>
@import "@/assets/scss/Mixins";
.form{
  &__box{
    @include flex(space-between, 16px, center);
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