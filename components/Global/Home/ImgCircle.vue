<template>
  <div class="circle">
    
    <img src="/circle_1.png" alt="" class="circle__back-1">
    <img src="/circle_2.png" alt="" class="circle__back-2">
    <div class="circle__title"><h2>
      Agile
    </h2></div>
    <div class="circle__body">
      <div class="circle__box circle__box--w">
        <button class="circle__btn--top-sm">Iteramos</button>
      </div>
      <div class="circle__box circle__box--wMax">
        <button class="circle__btn--top">Planeamos y planificamos</button>
      </div>
      <div class="circle__box circle__box--w">
        <button class="circle__btn--top-sm">Ideamos</button>
      </div>
      <div class="circle__box circle__box--w">
        <button class="circle__btn--botton-sm">Testeamos</button>
      </div>
      <div class="circle__box circle__box--wMax">
        <button class="circle__btn--bottom">Desarrollamos</button>
      </div>
      <div class="circle__box circle__box--w">
        <button class="circle__btn--botton-sm">Diseñamos</button>
      </div>
    </div>
  </div>
  
</template>
<script lang="ts" setup>
import { defineProps } from "vue";

//  const props = defineProps<{
      
//       listServices: Array<{
//         titulo: string,
//         description: string,
//       }>,
      
//   }>();
  
</script>
<style lang="scss" scoped>
@import "@/assets/scss/Mixins";
.circle{
  $root: &;
  @include flex(center, false, stretch);
  position: relative;
  width: 600px;
  height: 600px;
  &__back-1{
    position: absolute;
    width: 100%;
    height: 100%;
    //z-index: -1;
  }
  &__back-2{
    position: absolute;
    width: 100%;
    height: 100%;
    animation: identifier 24s linear infinite;

    //z-index: -1;
  }
  &__title{
    position: absolute;
    align-self: center;
    margin: auto;
  }
  &__body{
    @include flex(center, false, stretch);
    position: relative;
    width: 100%;
    flex-grow: 1;
    flex-wrap: wrap;
  }
  &__box{

    @include flex;
    flex-grow: 1;
    &--wMax{width:  42%};
    &--w{width: 24%};
    button{
      @include button(btn-agile);
      @include text(1.5rem, 500, 2.8rem, center);
      border-radius: 30px;
      letter-spacing: 1.2px;
    }
  }
  &__btn{
    &--top{
      align-self: flex-start;
      margin-top: 50px;
    };
    &--bottom{
      align-self: flex-end;
      margin-bottom: 50px; 
    };
    &--botton-sm{
      margin-bottom: 50px; 
    }
    &--top-sm{
      margin-top: 50px;
    }
  }
  
  @keyframes identifier {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
    
  }
}
.circle{
  @include for-size(desktop) {
    width: 450px;
    height: 450px;
    &__box{
      &--wMax{width:  40%};
      &--w{width: 30%};
      button{
        @include text(1.3rem, 400, 2.2rem, center);
      }
    }
  }
  @include for-size(phone-xbig){
    width: 300px;
    height: 300px;
    &__box{
      &--wMax{width:  33%};
      &--w{width: 33%};
      button{
        @include text(1.3rem, 400, 2.2rem, center);
      }
    }
    &__title{
      h2{
        @include text(3.4rem, 600, 4rem, center);
      }
    }
    button{
      height: auto;
      white-space: nowrap;
    }
    &__btn{
      &--top{
        align-self: flex-start;
        margin-top: inherit;
      };
      &--bottom{
        align-self: flex-end;
        margin-bottom: inherit; 
      };
      &--botton-sm{
        margin-bottom: inherit; 
      }
      &--top-sm{
        margin-top: inherit;
      }
    }
  }
}
</style>