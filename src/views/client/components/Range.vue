<template>
  <div slider id="slider-distance" >
    
    

    <div class="slider-demo-block">
      <el-slider v-model="value" range :step="1000" :min="valInitMin" :max="valInitMax" @input="oninput" @change="filterRange" />
    </div>

    
  </div>
</template>
<script>
import { ref, onMounted, watch } from 'vue'
export default {
  name: "Range",
  props: {
    valMin: null,
    valMax: null,
    valInitMax: null,
    valInitMin: null,
    type: null
  },
  setup(props, { emit }) {

    const value = ref([ Math.trunc(props.valMin),  Math.trunc(props.valMax)])
    
    const rangeMin = ref(null);
    const rangeMax = ref(null);
    const range = ref(null);
    const inputL = ref(null);
    const inputR = ref(null);
    

    const formatPrice = (value) => {
      const formatter = new Intl.NumberFormat("en-US", {
      
      currency: "USD",
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    });
    return formatter.format(value)
    };

    watch(
      () => props.valMin,
      (val) => {
        console.log("🚀 ~ file: Catalogo.vue ~ line 382 ~ setup ~ val", val)
        value.value[0] = val;
        emit("valorMinimo", parseInt(val), props.type);

      }
    );
    watch(
      () => props.valMax,
      (val) => {
        console.log("🚀 ~ file: Catalogo.vue ~ line 382 ~ setup ~ val", val)
        value.value[1] = val;
        emit("valorMaximo", parseInt(val), props.type);
      }
    );
    
    const oninput = () => {

      
      rangeMin.value = parseInt(value.value[0]);
      rangeMax.value = parseInt(value.value[1]);
      range.value = value.value[1] - value.value[0];

      emit("valorMinimo", parseInt(value.value[0]), props.type);
      emit("valorMaximo", parseInt(value.value[1]), props.type);

    };
    
    const filterRange = () => {
      console.log("🚀 ~ file: Range.vue ~ line 106 ~ filterRange ~ rangeMin.value", rangeMin.value)
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
      value
      
    };
  },
  emits:['searchRange', 'valorMinimo', 'valorMaximo'],
  
};
</script>

<style lang="scss">

[slider] {
  width: 100%;
  position: relative;
  height: 5px;
  margin: 15px 0 10px 0px;
  padding-bottom: 25px;
}

[slider] > div {
  position: absolute;
  left: 13px;
  right: 15px;
  height: 5px;
}

.el-popper.is-dark{
display: none!important;  
}

.el-slider__bar{
  background: #ff5c20!important;
  background-color: #ff5c20!important;
}

.el-slider__button{
  border: solid 2px #ff5c20!important;
}


</style>
