<template>
  <div
    class="field"
    :data-Type="data"
  >
    <div
      class="label"
      :data-Type="data"
    >
      <label class="label__text">{{ label }}</label>
    </div>

    <div
      class="input input__box"
      :data-Type="data"
    >

      <VField
        v-slot="{ field, meta, errors }"
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
        <textarea
          v-bind="field"
          rows="10"
          class="input__input"
          :class="{
            'is-success': meta.valid && meta.touched,
            'is-danger': !meta.valid && meta.touched,
          }"
          :placeholder="placeholder"
          :type="type"
        />
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
})
</script>
<style lang="scss" scoped>
@import "@/assets/scss/Input.scss";

</style>
