<template>
  <client-only>
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
        type="mail"
        name="email"
        label="Correo electrónico"
        placeholder="Correo electrónico"
        icon="/icon/sms.svg"
        />
        
        <div class="form__box">
          <FormVTextInput
            type="text"
            name="password"
            label="Contraseña"
            placeholder="Contraseña"
            icon="/icon/building.svg"
          />
        </div>
      </div>
                  
      <div class="form__submit" type="submit">
        <button class="form__submit-btn">
            Quiero que me contacten
        </button>
      </div>                                                       
    </VForm>      
  </div>
  </client-only>
  
</template>

<script setup>
    import { ref, onMounted } from "vue";
    import { useReCaptcha } from 'vue-recaptcha-v3';
    import { useForm } from 'vee-validate';
    // import { object, string, ref as yupRef } from "yup";
    import * as yup from "yup";
    import useAuth from "@/composables/useAuth";
    
    
    const { login } = useAuth();
  
    const { handleSubmit } = useForm();
    const swal = inject("$swal");
    // const config = useRuntimeConfig();
    const formValues = ref({
      email: "",
      password: "",
      name: "",
    });

    
    
    const schema = markRaw(
      yup.object().shape({
        password: yup.string().required("El dato es obligatorio"),
        email: yup
          .string()
          .required("El dato es obligatorio")
          .email("Porfavor ingrese un formato valido"),
        
      })
    );

    const onSubmit = async (values, { resetForm }) => {

    const { data, error } = await login(values);

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
      navigateTo('/admin');
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

    definePageMeta({
    middleware: 'is-logged-in',
    });

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