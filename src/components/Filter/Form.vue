<!-- eslint-disable camelcase -->
<!-- eslint-disable eqeqeq -->
<script setup>
import { useForm } from 'vee-validate'
import * as yup from 'yup'

const props = defineProps({
  ubication: {
    type: String,
    default: 'Home',
  },
})

const {
  useCountry, useState, useLoc, useType,
} = useLocation()
const { type } = await useType()
const typeList = type.value.objects || []
const statesList = ref([])
const division = ref([])
const location = ref([])
const reset = ref(false)
const form = ref(null)
const typesOperations = ref([
  { name: 'Venta', id: '1' },
  { name: 'Alquiler', id: '2' },
  { name: 'Renta temporal', id: '3' },
])
const prices = ref([
  {
    name: 'Menos de $1,000,000', id: '1', price_from: 0, price_to: 1000000,
  },
  {
    name: '$1,000,000 - $2,000,000', id: '2', price_from: 1000000, price_to: 2000000,
  },
  {
    name: '$2,000,000 - $5,000,000', id: '3', price_from: 2000000, price_to: 5000000,
  },
  {
    name: '$5,000,000 - $10,000,000', id: '4', price_from: 5000000, price_to: 10000000,
  },
  {
    name: '$10,000,000 - $20,000,000', id: '5', price_from: 10000000, price_to: 20000000,
  },
  {
    name: 'Más de $20,000,000 ', id: '6', price_from: 20000000, price_to: 100000000,
  },
])

const setParams = useSetFilters()
const formValues = ref({
  country: '',
  state: '',
  location: '',
  type: '',
  operation: '',
  prices: '',
})

const schema = markRaw(
  yup.object().shape({}),
)

const onSubmit = async values => {
  let data = {}
  if (values.country !== '') data = { current_localization_id: statesList.value.find(item => item.name === values.country).id, current_localization_type: 'state' }
  if (values.state !== '') data = { current_localization_id: division.value.find(item => item.name === values.state).id, current_localization_type: 'division' }
  if (values.location !== '') data = { current_localization_id: location.value.find(item => item.name === values.location).id, current_localization_type: 'division' }
  if (values.type !== '') data = { ...data, property_types: typeList.find(item => item.name === values.type).id }
  if (values.operation !== '') data = { ...data, operation_types: typesOperations.value.find(item => item.name === values.operation).id }
  if (values.prices !== '') data = { ...data, price_from: prices.value.find(item => item.name === values.prices).price_from, price_to: prices.value.find(item => item.name === values.prices).price_to }
  if (props.ubication === 'home') {
    console.log('🚀 ~ file: Form.vue:73 ~ onSubmit ~ props.ubication:', props.ubication)
    useRouter().push({
      path: '/property',
      query: {
        ...{ ...data, offset: 0 },
      },
    })
  } else {
    useRouter().replace({
      query: {
        ...{ ...data, offset: 0 },
      },
    })
  }
}

const ubicationSelect = async (value, name) => {
  if (name === 'country') {
    if (value.id) {
      const { state } = await useState(value.id)
      division.value = state.value.divisions || []
      location.value = []
    } else {
      division.value = []
      location.value = []
    }
    console.log('🚀 ~ file: Form.vue:88 ~ ubicationSelect ~ division.value:', division.value)
  } else if (name === 'state') {
    if (value.id) {
      const { loc } = await useLoc(value.id)
      location.value = loc.value.divisions || []
    } else {
      location.value = []
    }
    console.log('🚀 ~ file: Form.vue:101 ~ ubicationSelect ~ location.value:', location.value)
  }
}

onMounted(async () => {
  const { countryList } = await useCountry()
  const { states } = countryList.value || []
  statesList.value = states
  console.log('🚀 ~ file: Form.vue:140 ~ onMounted ~ states:', statesList.value)

  if (JSON.stringify(useRoute().query) !== '{}') {
    const {
      current_localization_id, current_localization_type, property_types, operation_types,
    } = useRoute().query
    let defaultState = ''
    let defaultDivision = ''
    console.log('🚀 ~ file: Form.vue:142 ~ onMounted ~ current_localization_id:', current_localization_id)
    // eslint-disable-next-line camelcase
    if (current_localization_type === 'state') {
      const { state } = await useState(current_localization_id)
      division.value = state.value.divisions || []
      location.value = []
      // eslint-disable-next-line camelcase
    } else if (current_localization_type === 'division') {
      const { loc } = await useLoc(current_localization_id)
      location.value = loc.value.divisions || []
      const { state } = await useState(statesList.value?.find(item => item.name == (loc.value.full_location.split('|')[1].trim()))?.id)
      division.value = state.value.divisions || []
      defaultState = loc.value.full_location.split('|')[1].trim()
      if (loc.value.full_location.split('|').length > 2) {
        const { loc: _loc } = await useLoc(division.value?.find(item => item.name == (loc.value.full_location.split('|')[2].trim()))?.id)
        location.value = _loc.value.divisions || []
        defaultDivision = loc.value.full_location.split('|')[2].trim()
      }
    }
    formValues.value = {
      country: statesList.value?.find(item => item.id == current_localization_id)?.name || defaultState,
      state: division.value?.find(item => item.id == current_localization_id)?.name || defaultDivision,
      location: location.value?.find(item => item.id == current_localization_id)?.name || '',
      type: typeList?.find(item => item.id == property_types)?.name || '',
      operation: typesOperations.value?.find(item => item.id == operation_types)?.name || '',
      prices: prices.value?.find(item => item.price_from <= useRoute().query.price_from && item.price_to >= useRoute().query.price_to)?.name || '',
    }
    console.log('🚀 ~ file: Form.vue:43 ~ countryList:', statesList.value)
  }
})

watch(
  () => setParams.value,
  val => {
    console.log('🚀 ~ file: Form.vue:149 ~ val:', val)
    reset.value = !reset.value
    form.value?.resetForm()
    useRouter().replace({
      query: {
        ...{ },
      },
    })
  },
)

</script>
<template>
  <div
    class="form"
    :data-ubication="ubication"
  >
    <VForm
      ref="form"
      class="form__container"
      :validation-schema="schema"
      :initial-values="formValues"
      @submit="onSubmit"
    >
      <div class="form__box form__box--mobile">
        <FormVSelectInput
          type="text"
          name="country"
          label="Estado"
          placeholder="Selecione una opción"
          icon=""
          :select-info="statesList"
          :reset="reset"
          :disabled="false"
          @select="ubicationSelect"
        />
        <FormVSelectInput
          v-if="ubication !== 'home'"
          type="text"
          name="state"
          label="Municipio"
          placeholder="Selecione una opción"
          icon=""
          :select-info="division"
          :reset="reset"
          :disabled="division.length === 0"
          @select="ubicationSelect"
        />
        <FormVSelectInput
          v-if="ubication !== 'home'"
          type="text"
          name="location"
          label="Colonia"
          placeholder="Selecione una opción"
          icon=""
          :select-info="location"
          :reset="reset"
          :disabled="location.length === 0"
          @select="ubicationSelect"
        />
        <FormVSelectInput
          v-if="ubication !== 'home'"
          type="text"
          name="type"
          label="Tipo de propiedad"
          placeholder="Selecione una opción"
          icon=""
          :select-info="typeList"
          :reset="reset"
          :disabled="false"
          @select="ubicationSelect"
        />
        <FormVSelectInput
          type="text"
          name="operation"
          label="Tipo de operación"
          placeholder="Selecione una opción"
          icon=""
          :select-info="typesOperations"
          :reset="reset"
          :disabled="false"
          @select="ubicationSelect"
        />
        <FormVSelectInput
          type="text"
          name="prices"
          label="Rango de precio"
          placeholder="Selecione una opción"
          icon=""
          :select-info="prices"
          :reset="reset"
          :disabled="false"
          @select="ubicationSelect"
        />
      </div>
      <div
        class="form__submit"
        type="submit"
      >
        <button
          type="submit"
          class="form__submit-btn"
          :data-ubication="ubication"
        >
          Buscar
        </button>
      </div>
    </VForm>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/Mixins";
.form{
  $root: &;
  &[data-ubication="home"]{
    #{$root}__box{
      flex-direction: row;
    }
  }
  &__box{
    @include flex(space-between, 16px, stretch);
    flex-direction: column;
    width: 100%;
    padding: 16px 8px 0;
  }
  &__submit{
    width: 100%;
    margin-bottom: 48px;
  }
  &__submit-btn{
    @include button;
    max-width: inherit;
    width: 100%;
    max-width: 150px;
    margin-left: auto;
    padding: 16px 32px;
    border-radius: 32px 0 0 32px;
    &[data-ubication="home"]{
      border-radius: 32px;
      margin: auto;
      max-width: 300px;
    }
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
