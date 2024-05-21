<script lang="ts" setup>

defineProps<{
 img: string,
  title: string,
  description: string,
}>()

const from = 'services'

</script>
<template>

  <div class="v-card">
    <global-icon-text
      :class="`${from}__item`"
      :title="title"
      :text="description"
      :img-src="img"
      :styles="{
        flexDirection: 'column',
        textDirection: 'center',
        gap: '20px',
        alignItems: 'center',
        justifyContent: 'center',
      }"
    />

  </div>

</template>

<style lang="scss" scoped>
@import "@/assets/scss/Mixins";

.v-card{
  //@include border;
  $root: &;
  @include flex(center, 10px, flex-start);
  background: white;
  position: relative;
  padding: 16px;
  border-radius: 12px;
  overflow: hidden;
  transition: 0.5s;
  width: 250px;
  height: 350px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.17);
  &:hover::after{
    content: '';
    width: 100%;
    height: 10px;
    position: absolute;
    background: var(--primary-color);
    top: 0;
    left: 0;
   }

}

</style>
