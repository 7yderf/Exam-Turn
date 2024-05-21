<!-- eslint-disable vuejs-accessibility/mouse-events-have-key-events -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div
    class="field"
    :data-Type="data"
  >
    <div
      class="bullet position-relative"
      :data-Type="data"
      @mouseover="showTooltip"
      @mouseout="hideTooltip"
    >
      <div
        class="bullet__list"
      >
        <p
          v-if="dataSelected.length === 0 || from === 'home'"
          class="bullet__placeholder"
        >
          Selecione una o más propiedades
        </p>
        <Teleport
          v-if="mounted"
          :disabled="from !== 'home'"
          to="#isHome"
        >
          <div
            v-for="status, i in dataSelected"
            :key="i"
            class="bullet__item"
          >
            <span class="bullet__text">
              {{ status }}
            </span>
            <Icon
              :name="'simple-line-icons:close'"
              class="bullet__icon"
              @click="deleteStatus(status)"
            />
          </div>
        </Teleport>

      </div>
      <span
        class="input__check--select click"
        tabindex="0"
        @click="showclick"
        @keydown="handleKeyDown"
      >
        <img
          src="/icon/arrow-down.svg"
          alt=""
        >
      </span>
    </div>

    <div
      v-if="tooltipVisible"
      id="tooltip"
      ref="tooltip0"
      class="search__resultSerch search__resultSerch--into-check"
      :data-Show="opcionSerch"
      @mouseover="showTooltip"
      @mouseout="hideTooltip"
    >
      <div
        id="checksAgency"
        class="checks"
        :data-Type="data"
      >
        <label
          v-for="status, i in values[name]"
          v-show="dataSelected.indexOf(status.name) === -1"
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
    vueModel: {
      type: [Array, Object],
      default: () => [],
    },
    reset: {
      type: Boolean,
      default: false,
    },
    from: {
      type: String,
      default: '',
    },
  },
  emits: ['select'],

  setup(props, { emit }) {
    const dataSelected = ref([])
    const opcionSerch = ref(false)
    const mounted = ref(false)

    // Tooltip
    const tooltipVisible = ref(false)
    const tooltip0 = ref(null)
    const showTooltip = () => {
      tooltipVisible.value = true
    }
    const hideTooltip = event => {
      // Verificar si el cursor está fuera del botón del tooltip
      if (tooltip0.value && !tooltip0.value.contains(event.relatedTarget)) {
        tooltipVisible.value = false
      }
    }

    const showSearch = async () => {
      opcionSerch.value = true
    }

    // Función para manejar la interacción con los elementos label dentro de checksAgency
    const handleLabelInteraction = (status, callback) => {
      const checksAgency = document?.getElementById('checksAgency')
      checksAgency?.querySelectorAll('label').forEach(e => {
        if (!status) {
          callback(e) // Llamar al callback con el elemento encontrado
        } else if (e.innerText.trim() === status) {
          callback(e) // Llamar al callback con el elemento encontrado
        }
      })
    }

    // Método para filtrar por estado
    const filterForStatus = async () => {
      handleLabelInteraction('', e => {
        if (e.querySelector('input').checked === true) {
          const status = e.innerText.trim()
          if (!dataSelected.value.includes(status)) {
            dataSelected.value.push(status)
          }
        }
      })

      console.log('🚀 ~ filterForStatus ~ dataSelected.value:', dataSelected.value)
      emit('select', dataSelected.value, props.name)
    }

    // Método para eliminar un estado
    const deleteStatus = async status => {
      dataSelected.value = dataSelected.value.filter(item => item !== status)
      console.log('🚀 ~ deleteStatus ~ status:', status)

      handleLabelInteraction(status, e => {
        console.log('🚀 ~ deleteStatus ~ status:', status)
        e.querySelector('input').checked = false
      })
      emit('select', dataSelected.value, props.name)
    }

    const showclick = () => {
      opcionSerch.value = !opcionSerch.value
    }

    const values = computed(() => ({
      [props.name]: props.selectInfo,
    }))

    onMounted(async () => {
      console.log('🚀 ~ values ~ props.vueModel.length:', props.vueModel)
      dataSelected.value = props.vueModel
      setTimeout(() => {
        mounted.value = true
      }, 200)
    })

    watch(() => props.reset, value => {
      console.log('🚀 ~ file: SelectedFormAnio.vue:137 ~ watch ~ value:', value)
      dataSelected.value = []
    })

    return {
      dataSelected,
      opcionSerch,
      showSearch,
      showclick,
      filterForStatus,
      values,
      deleteStatus,
      tooltipVisible,
      showTooltip,
      hideTooltip,
      tooltip0,
      mounted,
    }
  },
}

</script>
<style lang="scss" scoped>
@import "@/assets/scss/Input.scss";

.bullet{
    border: 1px solid #dedede;
    display: flex;
    flex-grow: 1;
    border-radius: 4px;
    padding: 8px;
  &__list{
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    gap: 5px;
  }
  &__item{
    background: var(--text-color);
    border-radius: 4px;
    color: white;
    font-size: 12px;
    padding: 0px 8px;
    height: fit-content;
  }
  &__icon{
    cursor: pointer;
    margin-inline: 4px;
    width: 14px;
  }
  &__placeholder{
    align-self: center;
    @include text(1.3rem, 300, 2.4rem);
    color:var(--text-color);
    margin-left: 16px;
  }
}
.checks{
  display:  flex;
  flex-direction: column;
}

  //input
  .field{
    margin-bottom: 0px;
    position: relative;
    min-height: 50px;
    &.home{
      width: 300px;
    }
  }
  .input{
    &__box{
      margin-bottom: 0px;
      height: 40px;
    }
    &__check{
      &--select{
        width: 20px;
        min-width: 20px;
        img{
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }
 .search{
  &__content-search {
    position: relative;
    width: 100%;
    input{
      width: 100%;
      height: 40px;
      background: #151317;
      border-radius: 5px;
      padding: 20px;
    }
  }
  &__content-search {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  &__icon-search {
    position: absolute;
    right: 15px;
    z-index: 2;
    cursor: pointer;
    &:hover {
      transform: scale(1.05);
      transition: 0.3s;
    }
  }
  &__resultSerch {
    background: #e5f0eb47;
    backdrop-filter: blur(60px);
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    position: absolute;
    width: 100%;
    top: 100%;
    display: none;
    max-height: 250px;
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-color: #ff5b2011 #f3f3f300;
    scrollbar-width: thin;
    &::-webkit-scrollbar-thumb {
      background: #565656;
      border-radius: 4px;
    }

    &::-webkit-scrollbar{
      width: 5px;
    }

    &::-webkit-scrollbar-thumb:active {
      background-color: #565656;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #565656;
    }

     /* Estilos track de scroll */
    &::-webkit-scrollbar-track {
      background: #f3f3f300;
      border-radius: 4px;
    }

    &::-webkit-scrollbar-track:hover,
    &::-webkit-scrollbar-track:active {
      background: #00000000;
    }
    &[data-Show="true"] {
      display: flex;
      z-index: 2;
    }
  }
  &__resultSerch-list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 8px;

    cursor: pointer;
    &:hover {
      background: #b4c1bb54;
      backdrop-filter: blur(40px);
      font-weight: 400;
    }
  }
///////

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
    width: 100%;
    cursor: pointer;
    //&:hover {
    //  background: #ececec;
    //}
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
 #tooltip {
  border-radius: 5px;
  box-shadow: 0px 0px 5px #999;
}

</style>
