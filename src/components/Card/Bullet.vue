<script lang="ts" setup>
const type = ref<string>('');
const props = defineProps<{
    bullet: string,
    version?: string
}>();
const types = [
    'Usado',
    'Remanufacturado',
]
type.value = (types.includes(props.bullet) ? 'Seminuevo' : props.bullet)  ; 
watch(() => props.bullet, (value) => {
    type.value = (types.includes(value) ? 'Seminuevo' : value)  ; 
})

</script>
<template>
  <button  class="bullets" :data-type="version ? version : bullet" >{{ type }}</button>
  
</template>
<style lang="scss" scoped>
@import "@/assets/scss/Mixins";
.bullets {
  @include button(bullet);
  @include text(1.2rem, 200);
  pointer-events:none;
  flex: wrap;
  width: max-content;
  background: transparent;
  padding: 4px 12px;
  border-radius: 24px;
  height: auto;
  &[data-type="Nuevo"] {
    background-color: var(--green-color);
  }
  &[data-type="Usado"] {
    background-color: var(--red-color);
  }
  &[data-type="Remanufacturado"] {
    background-color: var(--red-color);
  }
  &[data-type="Temporalmente Agotado"] {
    z-index: 3;
    right: 6px;
    top: 6px;
    background-color: #D9D9D9;
    color: #000;
  }
  &[data-type="Preventa"] {
    z-index: 3;
    right: 6px;
    top: 6px;
    background-color: #2D679F;
  }
  &[data-type="text"] {
    color: var(--text-color);
    padding-left: 0px;
    font-size: 1.4rem;
  }

  

}
</style>