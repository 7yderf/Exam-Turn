<template>
  <div class="input-group">
    <button class="btn btn-outline-secondary" @click="decrement">
        <icon name="ep:minus" class="icon-input-number-minus" />
    </button>
    <input
      type="number"
      class="form-control"
      v-model.number="value"
      :min="min"
      :max="max"
      readonly
    />
    <button class="btn btn-outline-secondary" @click="increment">
        <icon name="ep:plus" class="icon-input-number-plus" />
    </button>
  </div>
</template>
  
  <script setup>
import { ref, defineProps } from "vue";

const { modelValue, min, max } = defineProps(["modelValue", "min", "max"]);
const value = ref(modelValue);

const increment = () => {
  if (max === undefined || value.value < max) {
    value.value++;
  }
};

const decrement = () => {
  if (min === undefined || value.value > min) {
    value.value--;
  }
};

// Actualizar el valor cuando cambia modelValue
if (modelValue !== undefined) {
  value.value = modelValue;
}
</script>
    
<style scoped>
.input-group{
  max-width: 100px;
  height: 32px;
}
/* Oculta los botones de incremento y decremento en inputs de tipo number */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield; /* Firefox */
}

.btn-outline-secondary {
    border-color: #D9D9D9;
    width: 30px;
}
.btn-outline-secondary:hover {
    background-color: #fff;
    border-color: #D9D9D9;
}
.icon-input-number-plus {
    color: #3A71A5;
    width: 1.4rem;
    height: 1.4rem;
    margin: 0;
}
.icon-input-number-minus {
    color: #b3b3b3;
    width: 1.4rem;
    height: 1.4rem;
    margin: 0;
}
.form-control{
text-align: center;
font-size: 1.4rem;
}
</style>
  