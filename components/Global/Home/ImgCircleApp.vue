<template>
  <div class="circle__canvas">
    <div class="circle">
    
      <img src="/circle_4.png" alt="" class="circle__back-1">
      <img src="/circle_2.png" alt="" class="circle__back-2">
      <div class="circle__body">
        <div class="circle__box circle__box--w">
          <button class="circle__btn--top-sm">Sitios web</button>
        </div>
        <div class="circle__box circle__box--wMax">
          <button class="circle__btn--top">Apps</button>
        </div>
        <div class="circle__box circle__box--w">
          <button class="circle__btn--top-sm">UI/UX</button>
        </div>
        <div class="circle__box circle__box--w">
          <button class="circle__btn--botton-sm">Devops</button>
        </div>
        <div class="circle__box circle__box--w">
          <button class="circle__btn--botton-sm">Análisis</button>
        </div>
      </div>
      <button class="circle__btn-app circle__btn-app--css">
        <img src="/img/logos/css.png" alt="">
      </button>
      <button class="circle__btn-app circle__btn-app--boostrap">
        <img src="/img/logos/bootstrap.png" alt="">
      </button>
      <button class="circle__btn-app circle__btn-app--kotlin">
        <img src="/img/logos/kotlin.png" alt="">
      </button>
      <button class="circle__btn-app circle__btn-app--html5">
        <img src="/img/logos/html5.png" alt="">
      </button>
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
  &__canvas{
    @include flex(center, false, center);
    position: relative;
    height: 500px;
  }
  @include flex(center, false, stretch);
  position: relative;
  width: 380px;
  height: 380px;
  &__back-1{
    position: absolute;
    width: 100%;
    height: 100%;
  }
   &__back-2{
    position: absolute;
    border-radius: 50%;
    animation: identifier 10s ease-in-out infinite;
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
      white-space: nowrap;
      @include button(btn-agile);
      @include text(1.5rem, 500, 2.8rem, center);
      border-radius: 30px;
      letter-spacing: 1.2px;
    }
  }
  &__btn{
    &--top{
      align-self: flex-start;
      margin-top: 10px;
    };
    &--bottom{
      align-self: flex-end;
      margin-bottom: 20px; 
    };
    &--botton-sm{
      margin-top: 10px; 
    }
    &--top-sm{
      margin-top: 60px;
    }
  }
  
  &__btn-app{
    @include button(btn-agile);
    align-self: center;
    position: absolute;
    height: 60px;
    width: 60px;
    min-height: 60px;
    min-width: 60px;
    border-radius: 50%;
    img{
      width: 55px;
      height: auto;
    }
    &--css{ top: 10px; left: -20%;}
    &--boostrap{top: -10%; right:  -10%;}
    &--kotlin{bottom: 10px; left: -18%;}
    &--html5{bottom: 10px; right:  -32%;}
  }
}
.circle{
  @include for-size(desktop) {
    width: 300px;
    height: 300px;

    &__box{
      &--wMax{width:  40%};
      &--w{width: 30%};
      button{
        @include text(1.3rem, 400, 2.2rem, center);
      }
    }
  }
  @include for-size(phone-xbig){
    width: 250px;
    height: 250px;
    &__box{
      &--wMax{width:  33%};
      &--w{width: 33%};
      button{
        @include text(1.3rem, 400, 2.2rem, center);
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
    &__btn-app{
      &--css{ top: -30px; left: -20%;}
      &--boostrap{top: -10%; right:  -10%;}
      &--kotlin{bottom: -30px; left: -18%;}
      &--html5{bottom: -30px; right:  -15%;}
    }
  }
}

@keyframes identifier {
  0% {
    width: 120%;
    height: 120%;
    transform: rotate(0deg);
    filter: blur(20px);
  background: rgba(252, 111, 16, 0.3);
  -webkit-filter: blur(60px);
  -moz-filter: blur(60px);
  }
  50% {
    width: 95%;
    height: 95%;
    transform: rotate(-360deg);
    filter: blur(10px);
  background: rgba(248, 36, 12, 0.25);
  -webkit-filter: blur(40px);
  -moz-filter: blur(40px);
  }
  100% {
    width: 120%;
    height: 120%;
    transform: rotate(0deg);
    filter: blur(20px);
  background: rgba(252, 111, 16, 0.3);
  -webkit-filter: blur(60px);
  -moz-filter: blur(60px);
  }
  
}
</style>