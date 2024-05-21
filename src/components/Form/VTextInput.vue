<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div
    class="field"
    :data-Type="data"
  >
    <div
      class="label"
      :data-Type="data"
      :data-font-black="isFontBlack"
    >
      <label class="label__text">{{ label }}</label>
    </div>

    <div
      class="input input__box"
      :data-Type="data"
      :data-font-black="isFontBlack"
    >

      <VField
        v-slot="{ field, meta, errors }"
        :name="name"
      >
        <span class="input__bullet">
          <!-- <i class="input__bullet-icon" :class="leftIcon"></i> -->
          <img
            class="input__bullet-icon"
            :src="icon"
            alt=""
          >
        </span>
        <input
          v-bind="field"
          class="input__input"
          :data-font-black="isFontBlack"
          :class="{
            'is-success': meta.valid && meta.touched,
            'is-danger': !meta.valid && meta.touched,
          }"
          :placeholder="placeholder"
          :type="type"
        />
        <span
          v-if="meta.valid && meta.touched"
          class="input__check-success"
        >
          <img
            src="/icon/tick-circle.svg"
            alt=""
          >
        </span>
        <span
          v-else-if="!meta.valid && meta.touched"
          class="input__check-danger"
        >
          <!-- <i class="fas fa-x"></i> -->
          <img
            src="/icon/close-circle.svg"
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

  </div>
</template>

<script setup>
defineProps({
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
  isFontBlack: {
    type: Boolean,
    default: false,
  },
})
</script>
<style lang="scss" scoped>
@import "@/assets/scss/Input.scss";

</style>
