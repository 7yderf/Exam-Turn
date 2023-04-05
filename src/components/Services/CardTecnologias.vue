<template>
  <div class="tecnologias">
    <h4 :class="section">{{title}}</h4>
    <p>{{description}}</p>
    
      <ul class="tecnologias__list">
        <li v-for="tecnologia, index in arrayTecno" :key="index">
          <p>{{tecnologia}}</p>
        </li>
      </ul>
    
    <!-- <div class="tecnologias__box">
      <p>{{action}}</p>
      <img src="/arrow_black.png" alt="">
    </div> -->
  </div>
  
</template>
<script lang="ts" setup>
 import { defineProps } from "vue";

  const props = defineProps<{
        
      title: string,
      description: string,
      arrayTecno: string[],
      action: string,
      section?: string,
        
  }>();
</script>
<style lang="scss" scoped>
@import "@/assets/scss/Mixins";

.tecnologias {
  @include border(var(--primary-color));
  @include flex(flex-start, false, center);
  width: 100%;
  flex-direction: column;
  border-radius: 10px;
  padding: 16px;

  h4 {
    @include text(2.4rem, 400, 3.2rem, left);
    width: 100%;
    color: (var(--primary-color))
  }


  .about{
    color: #FFF
  }
  p {
     @include text(1.6rem, 200, 2.4rem, left);
     width: 100%;

  }
  &__list {
    width: 100%;
    @include flex(flex-start, false, center);
    flex-direction: column;

    li{
      width: 100%;
    }

    p {
      @include text(1.4rem, 500, 2.4rem, left);
      margin-bottom: 0;
      margin-right: 8px;
    }
  }
    
  
}
</style>