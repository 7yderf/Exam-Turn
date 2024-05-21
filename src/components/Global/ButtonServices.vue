<script lang="ts" setup>

defineProps<{
 whatsapp: string;
 textBoton: string;
 message: string;
}>()

</script>
<template>
  <div
    class="contact-whatsapp"
  >
    <NuxtLink
      :to="whatsapp"
      class="contact-whatsapp__button"
      target="_blank"
    >
      <global-space-blur
        class="contact-whatsapp__button-blur"
        :description="textBoton"
        box-shadow="true"
        background="rgba(255, 255, 255, 0.10)"
        blur="60px"
      />
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/Mixins";

.contact-whatsapp{
  &__button{
    color: var(--text-invert);

  }
  &__button-blur{
    padding: 8px 16px;
  }
  @include for-size(tablet-portrait) {
    &__button-blur{
      padding: 6px 10px 6px;
    }
  }
}

</style>
