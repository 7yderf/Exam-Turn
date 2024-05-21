<!-- eslint-disable vuejs-accessibility/mouse-events-have-key-events -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div
    class="field position-relative"
    :data-Type="data"
  >
    <div
      class="label"
      :data-Type="data"
      data-font-black="true"
    >
      <label class="label__text">{{ label }}</label>
    </div>

    <div
      class="input input__box position-relative"
      :data-Type="data"
      data-font-black="true"
      @mouseover="showTooltip"
      @mouseout="hideTooltip"
    >
      <VField
        v-slot="{ field, meta, errors }"
        v-model="searchGlobal"
        :name="name"
      >
        <span class="input__bullet">
          <!-- <i class="input__bullet-icon" :class="leftIcon"></i> -->
          <img
            v-if="icon !== ''"
            class="input__bullet-icon"
            :src="icon"
            alt=""
          >
        </span>
        <input
          v-bind="field"
          id="input_search_enter"
          class="input__input input__input--select"
          data-font-black="true"
          :class="{
            'is-success': meta.valid && meta.touched,
            'is-danger': !meta.valid && meta.touched,
          }"
          :placeholder="placeholder"
          :type="type"
          autocomplete="off"
          :data-search="true"
          readonly
          :disabled="disabled"
          @focus="showSearch"
          @blur="handelSerch"
          @click="debounceInput"
        />
        <span
          class="input__check--select click"

          :data-check="meta.valid && meta.touched"
          @click="showclick"
        >
          <img
            src="/icon/arrow-down.svg"
            alt=""
          >
        </span>

        <p
          v-if="!meta.valid && meta.touched"
          class="input__text-danger"
        >
          {{ errors[0] }}
        </p>
      </VField>
    </div>
    <div
      v-if="tooltipVisible"
      id="tooltip"
      ref="tooltip"
      class="search__resultSerch"
      :data-Show="opcionSerch"
      @mouseover="showTooltip"
      @mouseout="hideTooltip"
    >
      <div
        v-for="item, index in [{ name: 'Tipo de operación', id: '' }, ...values[name]]"
        :key="index"
        class="search__resultSerch-list"
        @click="serchParams(item)"
      >
        {{ `${item.name}` }}
      </div>
    </div>

  </div>
</template>

<script setup>
const props = defineProps({
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
    type: Array,
    default: () => [],
  },
  reset: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  from: {
    type: String,
    default: '',
  },
})
const emits = defineEmits(['select'])
const searchGlobal = ref('')
const datosIniciales = ref([])
const opcionSerch = ref(false)

// Tooltip
const tooltipVisible = ref(false)
const tooltip = ref(null)
// const tooltipX = ref(0)
// const tooltipY = ref(0)

const showTooltip = () => {
  tooltipVisible.value = true
}

const hideTooltip = event => {
  // Verificar si el cursor está fuera del botón del tooltip
  if (tooltip.value && !tooltip.value.contains(event.relatedTarget)) {
    tooltipVisible.value = false
  }
}
// ocupar en el padre del tooltip para hacer que el tootilp siga el cursor
// @mousemove="(e) => updateTooltipPosition(e)"

// Ocupar en el tooltip
// :style="{ left: tooltipX + 'px', top: tooltipY + 'px' }"

// const updateTooltipPosition = event => {
//   tooltipX.value = event.layerX
//   tooltipY.value = event.layerY
//   console.log('🚀 ~ updateTooltipPosition ~ tooltipY.value = event.layerY:', tooltipY.value = event.layerY)
// }

const values = computed(() => ({
  [props.name]: datosIniciales.value,
}))

const showSearch = async () => {
  opcionSerch.value = true
}
const handelSerch = () => {
  setTimeout(() => {
    opcionSerch.value = false
  }, 200)
}

const serchParams = value => {
  searchGlobal.value = value.name === 'Tipo de operación' ? '' : value.name
  opcionSerch.value = false
  emits('select', value, props.name)
}

const debounceInput = async () => {
  datosIniciales.value = props.selectInfo
}

const showclick = () => {
  opcionSerch.value = !opcionSerch.value
  debounceInput()
}

watch(() => props.reset, () => {
  searchGlobal.value = ''
})
watch(() => props.selectInfo, () => {
  datosIniciales.value = props.selectInfo
  if (props.selectInfo.length === 0) {
    searchGlobal.value = ''
  }
})

</script>
<style lang="scss" scoped>
@import "@/assets/scss/Input.scss";

.field{
  &.home{
    gap: 0;
    margin-bottom: 0;
    max-width: 300px;
    label{
      display: none;
    }
    .search{
      &__resultSerch{
        top: 50px;
      }
    }
  }
}

.input{
  &__box{
    margin-bottom: 0;
  }
}

.click{
  cursor: pointer;
}

label{
    font-size: 1.6rem;
    font-weight: 600;
    letter-spacing: 1.1px;
  }
.search {
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
    top: 73px;
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
}

#tooltip {
  border-radius: 5px;
  box-shadow: 0px 0px 5px #999;
}

</style>
