<template>
  <div class="cardMethodologies">
    <h4>{{title}}</h4>
    <p>{{description}}</p>
    <!-- <div class="cardMethodologies__box">
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
      action: string,
        
  }>();
</script>
<style lang="scss" scoped>
@import "@/assets/scss/Mixins";

.cardMethodologies {
  @include flex(flex-start, false, stretch);
  border-left: 1px solid var(--primary-color);
  width: 100%;
  flex-direction: column;
  padding: 16px;

  h4 {
    @include text(2.4rem, 400, 3.2rem, left);
    width: 100%;
    margin-bottom: 24px
  }
  p {
     @include text(1.6rem, 400, 2.8rem, left);
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
    
  @include for-size(tablet-portrait) {
    padding: 8px;
    h4{
      margin-bottom: 8px;
    }
  }

  
}
</style>