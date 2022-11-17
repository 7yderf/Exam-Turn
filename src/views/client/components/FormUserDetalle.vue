<template>


  <Form_  @submit="onSubmit" :validation-schema="schema" :initial-values="formValues[active]"
    class="formUser__form" ref="formm">
    <div class="formUser__inputs-content formUser__inputs-content--column">
      
      <div class="formUser__inputs">
        <label for="url" class="label">Url del banner</label>
        <Field as="input" name="url"  class="input input--white"
          placeholder="https://www.facebook.co..." />
        <div class="formUser__inputs-radio formUser__inputs-radio--checkbox">
          <Field name="blank" type="checkbox" value="1" />
          <span class="banner__radio-label">Abrir en otra pestaña</span>
        </div>
      </div>
     
      <div class="formUser__inputs">

        <label for="temporized" class="label">Temporalidad del banner</label>

        <Field name="temporized" class="input input--white" v-slot="{ field }">
          <Datepicker v-bind="field" v-model="date" :enableTimePicker="false" range>
          </Datepicker>
        </Field>
        
      </div>
    </div>


    <div class="formUser__send">
      <button class="formUser__send-btn" v-if="formValues[active]?.id">Actualizar</button>
      <button class="formUser__send-btn" v-else>Guardar Cambios</button>

    </div>

  </Form_>

</template>
<script>
import { ref, onMounted, markRaw, watch } from 'vue';
import { Form as Form_, Field, useResetForm, useForm } from "vee-validate";
import ApiService from "@/core/services/ApiService";
import * as yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import "sweetalert2/src/sweetalert2.scss";
import "@/assets/styles/views/Banners.scss";
import "@/assets/styles/components/Input.scss";
export default {
  name: "drop",
  components: {
    Form_,
    Field,
  },
  props: {

    formValues: Object,
    active: String,
    file: {type: File, default: String},

  },
  setup(props, { emit }) {


    
    const formm = ref(null);
    const date = ref();
   

    const schema = markRaw(
      yup.object().shape({
      })
    );

    
    watch(
      () => props.active,
      (val) => {
        console.log("🚀 ~ file: FormUser.vue ~ line 134 ~ setup ~ val", val)
    
        formm.value.resetForm();
      },
    );
    





    const onSubmit = (values) => {
    
      console.log(props.formValues[props.active]?.id);
      let id = '';
      if(props.formValues[props.active]?.id){
        id = props.formValues[props.active]?.id;
      }
      const formData = new FormData();

      if (props.file) {
        formData.append("file", props.file)
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Debes seleccionar un archivo",
        });
        return;
      }

      formData.append("type_of_banner", values.type_of_banner);
      formData.append("type", values.type);
      formData.append("url", values.url);
      formData.append("blank", values.blank);
      formData.append("title", values.title);
      formData.append("description", values.description);
      formData.append("temporized_ini", values.temporized ? values.temporized[0].toISOString().split('T')[0] + ' 00:00:00' : '');
      formData.append("temporized_end", values.temporized ? values.temporized[1].toISOString().split('T')[0]  + ' 00:00:00' : '');
      formData.append("default", values.temporized ? 0 : 1);
      formData.append("mobil", values.mobil);
      
      
     
        ApiService.post(`/api/banners/detail/${id}`, formData, true)
          .then((res) => {
            console.log(res);
            console.log(values);
            emit("update", res.data);
            Swal.fire({
              icon: "success",
              title: "¡Gracias!",
              text: "Guardado con exito",
            });
          })
          .catch((err) => {
            console.log("🚀 ~ file: ConfigView.vue ~ line 167 ~ onSubmit ~ err", err)
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Algo salió mal, intenta de nuevo",
            });
          });
      


    }


    return {
      schema,
      onSubmit,
      formm,
      date,
    };
  },
  emits: ['update'],

};
</script>

<style scoped lang="scss">
@import "@/assets/styles/Mixins";
@import "@/assets/styles/components/Input.scss";
$icon-arrow: url("@/assets/images/icons/arrow-select.svg");
.formUser{
  &__form {
    @include flex(flex-start, 16px, stretch);
    flex-direction: column;
    flex-wrap: wrap;
  }
  &__inputs-content {
    @include flex(flex-start, 2.5rem, stretch);

    width: 100%;
    &--column {
      flex-direction: column;
      .banners__inputs {
        width: 100%;
      }
    }
    &--wrap {
      flex-wrap: wrap;
      .banners__inputs {
        width: calc(50% - 16px);
      }
    }
  }

  &__inputs {
    @include flex(flex-start, 0px, stretch);
    flex-direction: column;
    &--radio {
      flex-direction: row;
      flex-wrap: wrap;
    }
    label {
      width: 100%;
    }

    .dp__input {
      height: 50px;
      @include text(1.6rem, 400, 2.4rem);
      color: #9a9a9a;

      &::placeholder {
        @include text(1.6rem, 400, 2.4rem);
        color: #9a9a9a;
      }
    }

    .input {
      &__select {
        border: 1px solid #d9d9d9;
        border-radius: 5px;
        color: var(--text-color);
        background-image: $icon-arrow;
        background-repeat: no-repeat;
        background-position: calc(100% - 20px), center;
        -moz-appearance: none;
        -webkit-appearance: none;
        -ms-appearance: none;
        -o-appearance: none;
        appearance: none;
      }
    }
  }
  &__form-text {
    @include text(1.6rem, 00, 2.4rem, left);
    margin-top: 8px;
  }
  &__inputs-radio {
    @include flex(flex-start, 4px, center);
    @include text(1.6rem, 00, 2.4rem, center);
    &--child {
      margin-right: 20px;
    }
    &--checkbox {
      margin-top: 8px;
    }
  }
  &__send {
    @include content(1200px, 0);
    @include flex;

    background-color: white;
    align-items: center;
    justify-items: center;
    align-content: center;
  }
  &__send-btn {
    @include button(solid, 100%);
  }
}

</style>
