<script lang="ts" setup>
const props = defineProps<{
    bullet: string,
    version?: string
}>();

</script>
<template>
  <button  class="bullets" :data-type="version ? version : bullet" >{{ bullet }}</button>
  
</template>
<style lang="scss" scoped>
@import "@/assets/scss/Mixins";
.bullets {
  @include button(bullet);
  @include text(1.2rem, 200);
  flex: wrap;
  width: max-content;
  background: transparent;
  padding: 4px 12px;
  border-radius: 24px;
  height: auto;
  &[data-type="Nuevo"] {
    background-color: var(--green-color);
  }
  &[data-type="Seminuevo"] {
    background-color: var(--red-color);
  }
  &[data-type="text"] {
    color: var(--text-color);
    padding-left: 0px;
    font-size: 1.4rem;
  }
}
</style>