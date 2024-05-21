<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div
    class="field"
    :data-Type="data"
  >

    <div
      id="checksAgency"
      class="input input__box"
      :data-Type="data"
    >
      <label
        v-for="status, i in searchInputService"
        :key="i"
        class="label__text search__list-status"
      >
        {{ status.name }}
        <Field
          v-slot="{ field, meta, errors }"
          :name="name"
        >
          <input
            v-bind="field"
            id="cbox1"
            class="search__list-input"
            data-font-black="true"
            :class="{
              'is-success': meta.valid && meta.touched,
              'is-danger': !meta.valid && meta.touched,
            }"
            :placeholder="placeholder"
            :type="type"
            autocomplete="off"
            :value="status.identificador"
            @click="filterForStatus()"
          />
          <span class="search__img-input" />
          <p
            v-if="!meta.valid && meta.touched"
            class="input__text-danger"
          >
            {{ errors[0] }}
          </p>
        </Field>
      </label>
    </div>
  </div>
</template>

<script>
import { Field } from 'vee-validate'

export default {
  name: 'SelectedCheckAgency',
  components: {
    Field,
  },
  props: {

    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    data: {
      type: String,
      default: '',
    },
    selectInfo: {
      type: [Array, Object],
      default: () => [],
    },
    reset: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { emit }) {
    const searchGlobal = ref('')
    // const searchInput = ref([])
    const searchInputService = ref([])
    const opcionSerch = ref(false)
    // const mod = ref(false)
    const agencias = ref([])
    const selectedAgency = ref(null)

    const showSearch = async () => {
      // opcionSerch.value = true;
    }
    const handelSerch = () => {
      setTimeout(() => {
        // opcionSerch.value = false;
      }, 500)
    }

    const filterForStatus = async () => {
      selectedAgency.value = []

      const checksAgency = document.getElementById('checksAgency')
      checksAgency.querySelectorAll('label').forEach((e, index) => {
        if (e.querySelector('input').checked === true) {
          selectedAgency.value.push({
            [`agency[${index}]`]: e.querySelector('input').value,
          })
        }
      })
      emit('submit', selectedAgency.value)
    }

    const serchParams = value => {
      console.log(value)
      searchGlobal.value = value.name === 'Seleccionar agencia' ? '' : value.name
      // opcionSerch.value = false;
      // emit("cityValue", value.value);
    }

    const debounceInput = async () => {
      // buscar texto del input en el array de agencias
      // eslint-disable-next-line vue/max-len
      searchInputService.value = agencias.value.filter(item => item.name.toLowerCase().includes(searchGlobal.value.toLowerCase()))
    }

    const propertyTypes = [
      'Edificio',
      'Bodega comercial',
      'Local comercial',
      'Nave industrial',
      'Villa',
      'Rancho',
      'Quinta',
      'Casa en condominio',
      'Casa con uso de suelo',
      'Huerta',
      'Terreno comercial',
      'Local en centro comercial',
      'Bodega industrial',
      'Departamento',
      'Casa',
      'Terreno',
      'Oficina',
      'Local',
      'Otro',
      'Terreno industrial',
    ]

    const showclick = () => {
      // opcionSerch.value = !opcionSerch.value;
      debounceInput()
    }

    const getAgencies = async () => {
      agencias.value = [
        {
          name: 'Agencia 1',
          identificador: '1',
        },
        {
          name: 'Agencia 2',
          identificador: '2',
        },
        {
          name: 'Agencia 3',
          identificador: '3',
        },
      ]
      searchInputService.value = agencias.value
    }

    onMounted(async () => {
      await getAgencies()
    })

    watch(() => props.reset, value => {
      console.log('🚀 ~ file: SelectedFormAnio.vue:137 ~ watch ~ value:', value)
      searchGlobal.value = ''
    })

    return {
      searchGlobal,
      searchInputService,
      opcionSerch,
      showSearch,
      handelSerch,
      serchParams,
      debounceInput,
      showclick,
      filterForStatus,
      propertyTypes,
    }
  },
}

</script>
<style lang="scss" scoped>
@import "@/assets/scss/Input.scss";
  //input
  .field{
    margin-bottom: 0px;
  }
  .input__box{
    margin-bottom: 0px;
    height: 40px;
  }
 .search{
  &__list-data{
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  &__list-status {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    align-items: stretch;
    flex-direction: column;
    padding-left: 28px;
    font-weight: 500;
    height: 35px;
    background: #fff;
    cursor: pointer;
    &:hover {
      background: #ececec;
    }
  }

  &__resultSerch--into-check{
    padding: 0px;
    overflow-y: auto;
  }

  &__list-input {
    display: none;
  }

  &__list-input[type="checkbox"]~&__img-input::before {
    background-color: #c4c4c497;

  }

  &__list-input[type="checkbox"]:checked~&__img-input::before {
    background-color: #9a9a9a;
  }

  &__img-input {
    display: inline;
    padding-left: 4px;
  }

  &__img-input::before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    top: 9px;
    background-color: #ffffff;
    border-radius: 3px;
    left: 8px;
  }
 }

</style>
