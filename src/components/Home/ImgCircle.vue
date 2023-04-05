<template>
  <div class="circle">
    
    <!-- <img src="/circle_1.png" alt="" class="circle__back-1"> -->
    <img src="/circle_2.png" alt="" class="circle__back-2">
    <div class="circle__title">
      <h2>
      Sprint
      </h2>
      <p>1 a 4 semanas</p>
      <img src="/point.png" alt="">
      <p>Actualización diaria</p>
    </div>
    <div class="circle__body">
      <div class="circle__box circle__box--w">
        <button class="circle__btn--top-sm">Retrospectiva</button>
      </div>
      <div class="circle__box circle__box--wMax">
        <button class="circle__btn--top">Revisar</button>
      </div>
      <div class="circle__box circle__box--w">
        <button class="circle__btn--top-sm circle__btn--top-sm-left">Implementar</button>
      </div>
      <div class="circle__box circle__box--w">
        <!-- <button class="circle__btn--botton-sm">Testeamos</button> -->
      </div>
      <div class="circle__box circle__box--wMax">
        <button class="circle__btn--bottom">Planear</button>
      </div>
      <div class="circle__box circle__box--w">
        <!-- <button class="circle__btn--botton-sm">Diseñamos</button> -->
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
  width: 450px;
  height: 450px;
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
    padding: 32px;

    //z-index: -1;
  }
  &__title{
    h2{
      @include text(3.2rem, 00, 3.2rem, center);
      margin-bottom: 16px;
    }
    @include flex;
    flex-direction: column;
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
      @include text(1.2rem, 400, 2rem, center);
      border-radius: 30px;
      letter-spacing: 1.2px;
    }
  }
  &__btn{
    &--top{
      align-self: flex-start;
      margin-top: 20px;
    };
    &--bottom{
      align-self: flex-end;
      margin-bottom: 20px; 
    };
    &--botton-sm{
      margin-bottom: 50px; 
    }
    &--top-sm{
      align-self: flex-end;
      margin-bottom: -20px;
      margin-right: auto;
    }
    &--top-sm-left{
      margin-right: inherit;
      margin-left: auto;
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
  @include for-size(desktop-mid-big) {
    width: 350px;
    height: 350px;
  }
  @include for-size(desktop-mid) {
    margin: auto;
  }
  @include for-size(desktop) {
    width: 320px;
    height: 320px;
    &__box{
      &--wMax{width:  40%};
      &--w{width: 30%};
      button{
        @include text(1.3rem, 400, 2.2rem, center);
      }
    }
  }
  @include for-size(phone-xbig){
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