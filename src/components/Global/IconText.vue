<script lang="ts" setup>

defineProps<{
 icon: string,
 text: String
}>()

</script>
<template>
  <div class="icon-text">
    <icon :name="icon" />
    <p>{{ text }}</p>
  </div>
</template>

<style lang="scss" setup>
@import "@/assets/scss/Mixins";
.icon-text{
  @include flex;
  //@include border;
  //height: 50px;
  .icon{
    width: 40px;
    height: 40px;
    color: #82d8d1;
  }
}
</style>
