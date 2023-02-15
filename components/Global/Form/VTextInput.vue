<template>
  <div class="field" :data-Type="data">
    <div class="label" :data-Type="data">
      <label class="label__text" >{{ label }}</label>
    </div>

      <div class="input input__box" :data-Type="data">
        
          <VField :name="name" v-slot="{ field, meta, errors  }">
            <span class="input__bullet">
              <!-- <i class="input__bullet-icon" :class="leftIcon"></i> -->
              <img class="input__bullet-icon" :src="icon" alt="">
            </span>
            <input
              v-bind="field"
              class="input__input"
              :class="{
                'is-success': meta.valid && meta.touched,
                'is-danger': !meta.valid && meta.touched,
              }"
              :placeholder="placeholder"
              :type="type"
            />
            <span
              class="input__check-success"
              v-if="meta.valid && meta.touched"
            >
              <img src="@/assets/icons/isax/linear/tick-circle.svg" alt="">
            </span>
            <span
            class="input__check-danger"
            v-else-if="!meta.valid && meta.touched"
            >
            <!-- <i class="fas fa-x"></i> -->
            <img src="@/assets/icons/isax/linear/close-circle.svg" alt="">
          </span>
            <p class="input__text-danger" v-if="!meta.valid && meta.touched">
              {{ errors[0] }}
            </p>
          </VField>
       
      </div>

  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "text",
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
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
  data: {
    type: String,
    default: "",
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/scss/Input.scss";

</style>
