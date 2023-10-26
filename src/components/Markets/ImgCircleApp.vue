<template>
  <div
    class="circle__canvas"
    :class="type == 'services' ? '' : 'a_bout'"
  >
    <div class="circle">

      <img
        :src="img_top"
        alt=""
        class="circle__back-1"
      >
      <img
        :src="image_bottom"
        alt=""
        class="circle__back-2"
      >
      <!-- <img
        :src="image_bottom"
        alt=""
        class="circle__back-2"
      > -->
      <!-- <div
        v-if="type == 'services' "
        class="circle__body"
      >
        <div class="circle__box circle__box--w">
          <button
            type="button"
            class="circle__btn--top-sm"
          >
            Sitios web
          </button>
        </div>
        <div class="circle__box circle__box--wMax">
          <button
            type="button"
            class="circle__btn--top"
          >
            Apps
          </button>
        </div>
        <div class="circle__box circle__box--w">
          <button
            type="button"
            class="circle__btn--top-sm"
          >
            UI/UX
          </button>
        </div>
        <div class="circle__box circle__box--w">
          <button
            type="button"
            class="circle__btn--botton-sm"
          >
            Devops
          </button>
        </div>
        <div class="circle__box circle__box--w">
          <button
            type="button"
            class="circle__btn--botton-sm"
          >
            Análisis
          </button>
        </div>
      </div> -->
      <button
        v-if="type == 'services' "
        type="button"
        class="circle__btn-app circle__btn-app--css"
      >
        <!-- <img
          src="/img/logos/css.png"
          alt=""
        > -->
      </button>
      <button
        v-if="type == 'services' "
        type="button"
        class="circle__btn-app circle__btn-app--boostrap"
      >
        <!-- <img
          src="/img/logos/bootstrap.png"
          alt=""
        > -->
      </button>
      <button
        v-if="type == 'services' "
        type="button"
        class="circle__btn-app circle__btn-app--kotlin"
      >
        <!-- <img
          src="/img/logos/kotlin.png"
          alt=""
        > -->
      </button>
      <button
        v-if="type == 'services' "
        type="button"
        class="circle__btn-app circle__btn-app--html5"
      >
        <!-- <img
          src="/img/logos/html5.png"
          alt=""
        > -->
      </button>
    </div>
  </div>

</template>
<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps<{

    img_top: string,
    image_bottom: string,
    type: string,

}>()

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
    box-shadow: 1.18553px 1.42263px 3.14815px 0px rgba(0, 0, 0, 0.02), 5.21632px 6.25958px 6.51852px 0px rgba(0, 0, 0, 0.03), 12.80369px 15.36443px 13px 0px rgba(0, 0, 0, 0.04), 40px -4px 46.85185px 0px rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    background: #002a4980;
  &__back-1{
    position: absolute;
    width: 100%;
    height: 100%;
    filter: contrast(0);
    opacity: 0.6;
    mix-blend-mode: multiply;
  }
   &__back-2{
    position: absolute;
    animation: identifier 20s ease-in-out infinite;
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
    mix-blend-mode: multiply;
    box-shadow: 1.18553px 1.42263px 3.14815px 0px rgba(0, 0, 0, 0.02), 5.21632px 6.25958px 6.51852px 0px rgba(0, 0, 0, 0.03), 12.80369px 15.36443px 13px 0px rgba(0, 0, 0, 0.04), 40px -4px 46.85185px 0px rgba(0, 0, 0, 0.05);
    background: #450e937d;
    border: none;
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

.a_bout {
  .circle__back-2{
    z-index: -1;
  }
}
.a_bout{
  @include for-size(tablet-portrait) {
    &.circle__canvas{
      height: auto;
      margin-top: 50px;
    }
  }
}
@keyframes identifier {
  0% {
    width: 50%;
    height:auto;
    transform: rotate(0deg);

  }
  50% {
    width: 35%;
    height:auto;
    transform: rotate(-360deg);
    
  }
  100% {
    width: 50%;
    height:auto;
    transform: rotate(0deg);
    
  }

}
</style>
