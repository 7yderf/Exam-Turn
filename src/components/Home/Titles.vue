<script lang="ts" setup>
import { defineProps } from 'vue'
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <div class="titles">
    <h4>{{title}}</h4>
    <span></span>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/Mixins";
.titles{
  @include flex;
  width: 100%;
  h4{
    text-transform: uppercase;
    color: #333333;
    margin-right: 8px;
    }
  span{
    @include flex;
    flex-grow: 1;
    background: #D9D9D9;
    height: 1px;
  }
  @include for-size(tablet-portrait) {
    width: auto;
    h4{
      //font-size: 3.2rem;
      width: auto;
    }
   span{
      display: none;
   } 
  }

}
</style>
