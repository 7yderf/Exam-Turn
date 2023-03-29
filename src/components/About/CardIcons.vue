

<template>
  <div class="cardIdeology">

      <img 
      :src="img" alt="" class="cardIdeology__img">
      <p class="cardIdeology__text">
          {{ description }}
      </p>
      
  </div>
  
</template>
<script lang="ts" setup>
  import { defineProps } from "vue";

  const active = ref(1);

 const props = defineProps<{
      img?: string,
      description: string,
      id?: number,
      type?: string,
  }>();


  
</script>
<style lang="scss" scoped>
@import "@/assets/scss/Mixins";
  .cardIdeology{
    $root: &;
    @include border(var(--primary-color));
    width: calc(50% - 16px);
    @include flex(center, false, stretch);
    border-radius: 24px;
    flex-direction: column;
    padding: 16px;
    &__img{
         width: 50px;
          height: 50px;
          object-fit: contain
      }
     
    &__text{
      @include text(2.4rem, 400, 3.2rem, left);
      align-self: flex-start;
    }
  }
  .cardIdeology{
    $root: &;
    @include for-size(tablet-small) {
      width: 100%;
    
  }
  
  }
</style>
