<template>
  <form @submit="onSubmit">
    <slot
      :errors="errors"
      :currentStep="currentStepIdx"
      :previous="goToPrev"
      :hasPrevious="hasPrevious"
    />
    <div>
      <!-- <button v-if="hasPrevious" type="button" @click="goToPrev">
        Previous
      </button> -->
      <div class="venta__contact-send" v-if="!submited" :data-show="props.ultimateCurrentStep">
        <button type="submit" class="venta__contact-send-btn">
          {{ isLastStep ? "Recibir valuación" : "Continuar" }}
        </button>
      </div>
    </div>

    <!-- <pre>{{ values }}</pre> -->
  </form>
</template>

<script setup lang="ts">
import { components } from "@/assets/ts";
import { useForm } from "vee-validate";
import { ref, computed, provide, watch } from "vue";
import { boolean } from "yup/lib/locale";

const props = defineProps({
  validationSchema: {
    type: Array,
    required: true,
  },
  sendCode: {
    type: Boolean
  },
  ultimateCurrentStep: {
    type: Boolean,
    default: false
  },
});

const emit = defineEmits(["submit"]);
const currentStepIdx = ref(0);
const submited = ref(false);
// Injects the starting step, child <form-steps> will use this to generate their ids
const stepCounter = ref(0);
provide("STEP_COUNTER", stepCounter);

// Inject the live ref of the current index to child components
// will be used to toggle each form-step visibility
provide("CURRENT_STEP_INDEX", currentStepIdx);

// if this is the last step
const isLastStep = computed(() => {
  return currentStepIdx.value === stepCounter.value - 1;
});

watch( 
  () => props.sendCode,
  (val) => {
    console.log("🚀 ~ file: FormWizard.vue ~ line 59 ~ val", val)
    submited.value = val;
    console.log("🚀 ~ file: FormWizard.vue ~ line 61 ~ submited.value", submited.value)
  }
);
watch( 
  () => props.ultimateCurrentStep,
  (val) => {
   if (val) {
    currentStepIdx.value++;
   }
  }
)

// If the `previous` button should appear
const hasPrevious = computed(() => {
  return currentStepIdx.value > 0;
});

// extracts the indivdual step schema
const currentSchema = computed(() => {
  return props.validationSchema[currentStepIdx.value];
});

const { values, handleSubmit, errors } = useForm({
  // vee-validate will be aware of computed schema changes
  validationSchema: currentSchema,
  // turn this on so each step values won't get removed when you move back or to the next step
  keepValuesOnUnmount: true,
});

// We are using the "submit" handler to progress to next steps
// and to submit the form if its the last step
const onSubmit = handleSubmit((values) => {
  console.log("🚀 ~ file: FormWizard.vue ~ line 71 ~ onSubmit ~ values", values)
  if (!isLastStep.value) {
    currentStepIdx.value++;

    return;
  }


  // Let the parent know the form was filled across all steps
  
  emit("submit", values);
});

function goToPrev() {
  if (currentStepIdx.value === 0) {
    return;
  }

  currentStepIdx.value--;
}
</script>
