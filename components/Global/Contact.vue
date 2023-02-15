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
      <div class="form__box">
        <GlobalFormVTextInput
          type="text"
          name="first_name"
          label="Nombre"
          placeholder="Su nombre por favor"
          icon="/icon/profile-circle.svg"
          data='first_name'
        />
      </div>
      <div class="form__box">
        <GlobalFormVTextInput
          type="text"
          name="company"
          label="Empresa"
          placeholder="Cuéntanos a que empresa perteneces"
          icon="/icon/building.svg"
        />
      </div>
      <div class="form__box">
        <GlobalFormVTextInput
          type="mail"
          name="email"
          label="Correo electrónico"
          placeholder="Correo electrónico"
          icon="/icon/sms.svg"
        />
        <GlobalFormVTextInput
          type="text"
          name="telephone"
          label="Teléfono"
          placeholder="33 33 33 33 33"
          icon="/icon/call.svg"
        />
      </div>
      <h3 class="form__text">
        Información de tu proyecto
      </h3>
      <div class="form__box">
        <GlobalFormVSelectInput
          type="text"
          name="budget"
          label="Presupuesto de tu proyecto"
          placeholder="Cuéntanos sobre tus posibilidades"
          icon="/icon/call.svg"
        />
      </div> 
      <div class="form__box">
        <GlobalFormVTextAreaInput
          type="text"
          name="details"
          label="Cuéntanos más sobre tu proyecto"
          placeholder="Dinos si ya tienes alguna idea"
          icon="/icon/building.svg"
        />
      </div>                            
      <div class="form__submit" type="submit">
        <button class="form__submit-btn">
            Quiero que me contacten
        </button>
      </div>                                                       
    </VForm>      
  </div>
</template>

<script setup>
    import { ref, onMounted } from "vue";
    import axios from "axios";
    import { configure } from "vee-validate";
    // import { object, string, ref as yupRef } from "yup";
    import * as yup from "yup";
import { value } from "dom7";

    const formValues = ref({
      email: "",
      first_name: "",
      company: "",
      telephone: "",
      budget: "",
      details: "",
    });
    
    const schema = markRaw(
      yup.object().shape({
        first_name: yup.string().required("El dato es obligatorio"),
        company: yup.string().required("El dato es obligatorio"),
        email: yup
          .string()
          .email("Porfavor ingrese un formato valido"),
        telephone: yup.string()
          .min(10, "Minimo 10 caracteres")
          .max(10, "Maximo 10 caracteres")
          .matches(/^[0-9]+$/, "Solo se aceptan numeros")
          .required("El dato es obligatorio"),
        budget: yup.string().required("El dato es obligatorio"),
      })
    );

    const onSubmit = async (values) => {
        console.log("valid ");

       
        console.log(values);
        alert(JSON.stringify(values));
        return false;

        // submitButton.value!.disabled = true;
        // submitButton.value?.setAttribute("data-kt-indicator", "on");
        
        // try {
        //     let url = "https://jsonplaceholder.typicode.com/todos/1";
            
        //     const { data } = await axios.get(url);
        //     console.log(data);

        //     data_object.value = data;

        // } catch (error) {
        //     console.log(error);
        // }
    };

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
</style>