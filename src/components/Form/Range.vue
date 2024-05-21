<!-- eslint-disable vue/require-default-prop -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<script>
export default {
  name: 'Range',
  props: {
    valMin: null,
    valMax: null,
    valInitMax: null,
    valInitMin: null,
    type: null,
  },
  emits: ['searchRange', 'valorMinimo', 'valorMaximo'],

  setup(props, { emit }) {
    const value = ref([Math.trunc(props.valMin), Math.trunc(props.valMax)])

    const formatPrice = val => {
      const exp = /(\d)(?=(\d{3})+(?!\d))/g
      const rep = '$1,'
      return typeof val === 'number' ? val.toString().replace(exp, rep) : val.replace(exp, rep)
    }

    const rangeMin = ref(formatPrice(props.valMin))
    const rangeMax = ref(formatPrice(props.valMax))
    const range = ref(null)
    const inputL = ref(null)
    const inputR = ref(null)
    const error = ref(null)
    const orderMin = ref(1)
    const orderMax = ref(2)

    watch(
      () => props.valMin,
      val => {
        value.value = [val, props.valMax]
        rangeMin.value = val
      },
    )
    watch(
      () => props.valMax,
      val => {
        value.value = [props.valMin, val]
        rangeMax.value = val
      },
    )

    watch(
      () => rangeMin.value,
      val => {
        const parsedVal = parseNumber(val)
        if (parsedVal > parseNumber(rangeMax.value)) {
          orderMin.value = 2
        }
        orderMin.value = 1
        value.value[0] = parsedVal
        rangeMin.value = formatPrice(parsedVal)
      },
    )
    watch(
      () => rangeMax.value,
      val => {
        const parsedVal = parseNumber(val)
        if (parsedVal < parseNumber(rangeMin.value)) {
          orderMax.value = 1
        }
        orderMax.value = 2
        value.value[1] = parsedVal
        rangeMax.value = formatPrice(parsedVal)
      },
    )

    const oninput = () => {
      // validar que el precio minimo y precio maximo no tengan letras con match
      const regex = /[a-zA-Z]/g
      if (regex.test(rangeMin.value) || regex.test(rangeMax.value)) {
        error.value = 'Solo se permiten números'
        console.log('🚀 ~ file: Range.vue:121 ~ oninput ~ error.value:', error.value)
        return
      }
      error.value = null
      rangeMin.value = parseInt(value.value[0], 10)
      rangeMax.value = parseInt(value.value[1], 10)
      console.log('🚀 ~ file: Range.vue:131 ~ oninput ~ value.value[1]:', value.value[1])

      emit('searchRange', parseNumber(rangeMin.value), parseNumber(rangeMax.value), props.type)
    }

    const filterRange = () => {
      emit('searchRange', rangeMin.value, rangeMax.value, props.type)
    }

    return {

      rangeMin,
      rangeMax,
      formatPrice,
      oninput,
      filterRange,
      range,
      inputL,
      inputR,
      value,
      error,
      orderMin,
      orderMax,
    }
  },

}
</script>

<template>
  <div
    id="slider-distance"
    slider
  >

    <div class="slider-demo-block">
      <el-slider
        v-model="value"
        range
        :step="50"
        :min="valInitMin"
        :max="valInitMax"
        @input="oninput"
        @change="filterRange"
      />
    </div>
    <!-- inputs text para controlar el rango de manera externa -->
    <div class="slider-inputs">
      <div
        class="slider-inputs__item slider-inputs__item--min"
        :style="'order: ' + orderMin"
      >
        <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
        <input
          ref="inputL"
          v-model="rangeMin"
          :data-error="error"
          type="text"
          @change="oninput"
          @input="oninput"
          @keyup.enter="oninput"
          @blur="oninput"
          disabled
        />
      </div>
      <div
        class="slider-inputs__item slider-inputs__item--min"
        :style="'order: ' + orderMax"
      >
        <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
        <input
          ref="inputR"
          v-model="rangeMax"
          :data-error="error"
          type="text"
          @change="oninput"
          @input="oninput"
          @keyup.enter="oninput"
          @blur="oninput"
          disabled
        />
      </div>
      <span
        v-if="error"
        class="message-error">
        {{ error }}
      </span>
    </div>
  </div></template>

<style lang="scss">

[slider] {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  position: relative;
  margin: 15px 0 10px 0px;
  padding: 0px 10px 0px;
}
.slider-demo-block{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.slider-inputs{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10px;
  input{
    width: 100%;
    max-width: 120px;
    height: 30px;
    border: 1px solid #ebebeb;
    border-radius: 5px;
    padding: 0 10px;
    font-size: 14px;
    color: #333333;
    text-align: center;
    padding-top: 5px;
    &:focus{
      outline: none;
    }
    &[data-error]{
      border: 1px solid red;
    }
  }
}
.el-popper.is-dark{
display: none!important;
}

.message-error{
  color: red;
  font-size: 12px;
  margin-top: 5px;
  text-align: center;
  margin-bottom: 16px;
  width: 100%;
}

.el-slider__bar{
  background: var(--primary-color)!important;
  background-color: var(--primary-color)!important;
  height: 10px!important;
}
.el-slider__runway{
  height: 10px!important;
}

.el-slider__button{
  border: solid 2px var(--primary-color)!important;
  background-color: var(--primary-color)!important;
  height: 16px!important;
  border-radius: 0px!important;
  width: 4px!important;
}
.el-slider__button-wrapper{
  top: -13px!important;
}

</style>
