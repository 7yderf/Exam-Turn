import { FormVSelectInput } from '~~/.nuxt/components';
<template>
  <div class="form">
    <VForm
      class="form__container"
      :validation-schema="schema"
      :initial-values="formValues"
      @submit="onSubmit"
    >
      <div class="form__box form__box--mobile">
        <FormVSelectInput
          type="text"
          name="agency"
          label="Agencia"
          placeholder="Selecionar agencia"
          icon=""
          :select-info="[]"
          :reset="reset"
          disabled="true"
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
import { useForm } from 'vee-validate'
import * as yup from 'yup'


const { handleSubmit } = useForm()
const config = useRuntimeConfig()
const formValues = ref({})
const reset = ref(false)

const schema = markRaw(
  yup.object().shape({}),
)

const onSubmit = async (values, { resetForm }) => {}

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
