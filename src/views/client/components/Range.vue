<template>
  <div slider id="slider-distance" >
    <div ref="range" >
      <div inverse-left style="width: 70%"></div>
      <div inverse-right style="width: 70%"></div>
      <div range style="left: 0%; right: 0%"></div>
      <span thumb style="left: 0%"></span>
      <span thumb style="left: 100%"></span>
      <div sign style="left: 0%">
        <span id="value">{{type =='price'? `$${formatPrice(valMin)}`  :  `${formatPrice(valMin)}kms` }}</span>
      </div>
      <div sign style="left: 100%">
        <span id="value">{{ type == 'price' ? `$${formatPrice(valMax)}` : `${formatPrice(valMax)}kms` }}</span>
      </div>
    </div>
    <input ref="inputL" type="range" :value="valMin" :max="valMax" :min="valMin" step="1" @input="oninputleft" @change="filterRange"  />

    <input ref="inputR" type="range" :value="valMax" :data-max="valMax" :max="valMax" :min="valMin" step="1"  @input="oninputRigth" @change="filterRange" />
  </div>
</template>
<script>
import { ref, onMounted } from 'vue'
export default {
  name: "Range",
  props: {
    valMin: null,
    valMax: null,
    type: null
  },
  setup(props, { emit }) {
    const isRender = ref(false);
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
    
    const oninputleft = () => {

      const inputMin = inputL.value
      
      inputMin.value = Math.min(
        inputMin.value,
        inputR.value.value - 1
      );
      const children = range.value.childNodes;
      children[0].style.width = ((inputMin.value - props.valMin) / ((props.valMax - props.valMin) / 100)) + "%";
      children[2].style.left = ((inputMin.value - props.valMin) / ((props.valMax - props.valMin) / 100)) + "%";
      children[3].style.left = ((inputMin.value - props.valMin) / ((props.valMax - props.valMin) / 100)) + "%";
      // children[10].style.left = ((inputMin.value - props.valMin) / ((props.valMax - props.valMin) / 100)) + "%";
      children[5].childNodes[0].innerHTML = formatPrice(inputMin.value);

      return rangeMin.value = parseInt(inputMin.value)
    };
    const oninputRigth = () => {
      const inputMax = inputR.value
      
      inputMax.value = Math.max(
        inputMax.value,
        inputL.value.value - (-1)
      );
      const children = range.value.childNodes;
      children[1].style.width=(100 - ((inputMax.value - props.valMin) / ((props.valMax - props.valMin) / 100))) + '%';
      children[2].style.right=(100 - ((inputMax.value - props.valMin) / ((props.valMax - props.valMin) / 100))) + '%';
      children[4].style.left=((inputMax.value - props.valMin) / ((props.valMax - props.valMin) / 100)) + '%';
      // children[12].style.left=((inputMax.value - props.valMin) / ((props.valMax - props.valMin) / 100)) + '%';
      children[6].childNodes[0].innerHTML= formatPrice(inputMax.value);

      return rangeMax.value = parseInt(inputMax.value) + 1
    };
    const filterRange = () => {
      emit('searchRange', rangeMin.value, rangeMax.value, props.type)
    }

    return {
      isRender,
      rangeMin,
      rangeMax,
      formatPrice,
      oninputleft,
      oninputRigth,
      filterRange,
      range,
      inputL,
      inputR
    };
  },
  emits:['searchRange']
  
};
</script>

<style scoped lang="scss">

[slider] {
  width: 100%;
  position: relative;
  height: 5px;
  margin: 0px 0 15px 0px;
  padding-bottom: 25px;
}

[slider] > div {
  position: absolute;
  left: 13px;
  right: 15px;
  height: 5px;
}
[slider] > div > [inverse-left] {
  position: absolute;
  left: 0;
  height: 5px;
  border-radius: 10px;
  background-color: #ccc;
  margin: 0 7px;
}

[slider] > div > [inverse-right] {
  position: absolute;
  right: 0;
  height: 5px;
  border-radius: 10px;
  background-color: #ccc;
  margin: 0 7px;
}

[slider] > div > [range] {
  position: absolute;
  left: 0;
  height: 5px;
  border-radius: 14px;
  background-color:  #FF5C20;
}

[slider] > div > [thumb] {
  position: absolute;
  top: -7px;
  z-index: 2;
  height: 20px;
  width: 20px;
  text-align: left;
  margin-left: -11px;
  cursor: pointer;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
  background-color: #fff;
  border-radius: 50%;
  outline: none;
}

[slider] > input[type="range"] {
  position: absolute;
  pointer-events: none;
  -webkit-appearance: none;
  z-index: 3;
  height: 14px;
  top: -2px;
  width: 100%;
  opacity: 0;
}

div[slider] > input[type="range"]:focus::-webkit-slider-runnable-track {
  background: transparent;
  border: transparent;
}

div[slider] > input[type="range"]:focus {
  outline: none;
}

div[slider] > input[type="range"]::-webkit-slider-thumb {
  pointer-events: all;
  width: 28px;
  height: 28px;
  border-radius: 0px;
  border: 0 none;
  background:  #FF5C20;
  -webkit-appearance: none;
}

div[slider] > input[type="range"]::-ms-fill-lower {
  background: transparent;
  border: 0 none;
}

div[slider] > input[type="range"]::-ms-fill-upper {
  background: transparent;
  border: 0 none;
}

div[slider] > input[type="range"]::-ms-tooltip {
  display: none;
}

[slider] > div > [sign] {
  opacity: .7;
  position: absolute;
  margin-left: -29px;
  top: 15px;
  z-index: 3;
  // background-color: #DCFBEA;
  color: #fff;
  width: 52px;
  height: 26px;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  text-align: center;
}

[slider] > div > [sign]:after {
  position: absolute;
  content: "";
  left: 13px;
  border-radius: 16px;
  top: 19px;
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  border-top-width: 16px;
  border-top-style: solid;
  // border-top-color: #DCFBEA;
}

[slider] > div > [sign] > span {
  font-size: 12px;
  color: black;
  font-weight: bold;
  line-height: 28px;
}

[slider]:hover > div > [sign] {
  opacity: 1;
}
// style firefox

input[type="range"] {
  box-sizing: border-box;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  width: 100%;
  overflow: hidden;
  height: 40px;
  margin: 0;
  padding: 0 2px;
  /* Add some L/R padding to ensure box shadow of handle is shown */
  border: 0;
  border-radius: 1px;
  outline: none;
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background: none;
}
input[type="range"]:active,
input[type="range"]:focus {
  outline: none;
}
input[type="range"]::-moz-focus-outer {
  border: 0;
}
input[type="range"]::-webkit-slider-thumb {
  height: 28px;
  width: 28px;
  border-radius: 28px;
  background-color: #fff;
  position: relative;
  margin: 5px 0;
  /* Add some margin to ensure box shadow is shown */
  cursor: pointer;
  -webkit-appearance: none;
          appearance: none;
  pointer-events: all;
  box-shadow: 0 1px 4px 0.5px rgba(0, 0, 0, 0.25);
  border: 0;
  outline: none;
}
input[type="range"]::-webkit-slider-thumb::before,
input[type="range"]::-webkit-slider-thumb::after {
  content: " ";
  display: block;
  position: absolute;
  top: 13px;
  width: 2000px;
  height: 2px;
}
input[type="range"]::-moz-range-thumb {
  height: 28px;
  width: 28px;
  border-radius: 28px;
  background-color: #fff;
  position: relative;
  margin: 5px 0;
  /* Add some margin to ensure box shadow is shown */
  cursor: pointer;
  -moz-appearance: none;
       appearance: none;
  pointer-events: all;
  box-shadow: 0 1px 4px 0.5px rgba(0, 0, 0, 0.25);
  border: 0;
  outline: none;
}

// .slider-distance {
//   position: relative;
//   height: 150px;
//   width: 400px;
//   overflow-x: hidden;
//   overflow-y: visible;
//   display: flex;
//   align-items: center;
// }

</style>
