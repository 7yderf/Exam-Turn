<template>
  <a :href="`#${section}`" class="soluciones" >
    <h4>{{title}}</h4>
    <p>{{description}}</p>
    <div class="soluciones__box">
      <p>{{action}}</p>
      <img src="/arrow_black.png" alt="">
    </div>
  </a>
  
</template>
<script lang="ts" setup>
import { defineProps } from "vue";


  const props = defineProps<{
        
      title: string,
      description: string,
      action: string,
      section: string,
        
  }>();
</script>
<style lang="scss" scoped>
@import "@/assets/scss/Mixins";

.soluciones {
  @include border(black);
  @include flex(flex-start, false, center);
  width: 100%;
  flex-direction: column;
  border-radius: 10px;
  padding: 16px;
  color: black;
  h4 {
    @include text(2.4rem, 400, 3.2rem, left);
    width: 100%;
  }
  p {
     @include text(1.4rem, 400, 2.4rem, left);
     width: 100%;

  }
  &__box {
    width: 100%;
    @include flex(flex-start, false, center);
    flex-wrap: nowrap;

    p {
      @include text(1.4rem, 500, 2.4rem, left);
      margin-bottom: 0;
      width: max-content;
      margin-right: 8px;
    }
  }
    
  
}
</style>