

<template>
    <div class="cardAbout"
    :class="type == 'strategy' ? 'cardAbout--strategy' : 'cardAbout--our'"
    >

        <img 
        :src="img" alt="" class="cardAbout__img">
        <h3 class="cardAbout__title">
          {{ title  }}
        </h3>
        <p class="cardAbout__text">
            {{ description }}
        </p>
        
    </div>
    
</template>
<script lang="ts" setup>
    import { defineProps } from "vue";

    const active = ref(1);

   const props = defineProps<{
        img?: string,
        title: string,
        description: string,
        id: number,
        type: string,
    }>();


    
</script>
<style lang="scss" scoped>
@import "@/assets/scss/Mixins";
    .cardAbout{
      $root: &;
      @include border(var(--primary-color));
      width: 100%;
        @include flex;
        border-radius: 24px;
        flex-direction: column;
        padding: 16px;
        &__img{
            width: 100%;
            height: 100%;
            border-radius: 30px;
        }
        &__title{
          @include text(6.4rem, 400, 8rem, left);
          align-self: flex-start;
          margin-bottom: 2.4rem;
        }
        &__text{
          @include text(2.4rem, 400, 3.2rem, left);
          align-self: flex-start;
        }
       &--strategy{
        img{
          display: none;
        }
       }
       &--our{
        #{$root}__title{
          @include text(2.4rem, 400, 3.2rem, left);
          margin-bottom: 0px;
          margin-top: 16px;
        }
        #{$root}__text{
          @include text(1.8rem, 400, 2.8rem, left);
        }
       }
    
    }
  .cardAbout{
    $root: &;
    @include for-size(tablet-small) {
      &--strategy{
        #{$root}__title{
          font-size: 5.4rem;
          margin-bottom: 16px;
          line-height: 6rem;
       }
    } 
  } 
}
</style>
