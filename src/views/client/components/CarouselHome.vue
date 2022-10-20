<template>
  <div class="col-12 mx-auto overflow-visible slide-gallery">
    <swiper v-if="cardContent.length > 0" class="no-seleccionable cards-gallery" style="cursor: grab" 
      :navigation="true"
      
      :slidesPerView="1" 
      :spaceBetween="10" 
      :breakpoints="{
      '640': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      '1024': {
        slidesPerView: type == 'agency'? 4 : 3,
        spaceBetween: 30,
      }}" 
      :modules="modules"
    >
      <swiper-slide 
      v-for="card in cardContent"
      class="px-1"  
      :key="card" 
      >
        <CardHome v-if="type == 'security'" :card="card" />
        <CardClienHome v-if="type == 'client'" :card="card" />
        <CardAgency v-if="type == 'agency'" :card="card" :active="active" />
      </swiper-slide>

    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import "swiper/css/bundle"
import { Swiper, SwiperSlide } from "swiper/vue";
import CardHome from '@/views/client/components/CardHome.vue';
import CardClienHome from '@/views/client/components/CardClienHome.vue';
import CardAgency from '@/views/client/components/CardAgency.vue';
import { Thumbs, Navigation, Autoplay } from "swiper";
// Import Swiper styles
import { onMounted, ref } from 'vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
    CardHome,
    CardClienHome, 
    CardAgency
  },
  props: {
    cardContent: Array,
    type: String,
    active: Array
  },
  setup(props) {
    return {
      modules: [Navigation, Thumbs, Autoplay],
    };
  },
};
</script>

<style lang="scss" >
@import "@/assets/styles/Mixins";
$icon-arrow: url("@/assets/images/icons/icon-arrow.svg");
.slide{
  .slide-gallery{
    &>.swiper{
      padding-bottom: 60px;
      .swiper-wrapper{
        .swiper-slide{
          height: auto;
          margin-bottom: 25px;
        }
      }
    }
    .swiper-button-next, .swiper-button-prev{
      @include border(var(--secondary-color));
      top: initial;
      bottom: 25px;
      width: 40px;
      height: 40px;
      border-radius: 5px;
      background: var(--secondary-color);

    }
    .swiper-button-disabled{
      border-color: var(--primary-color);
      border-radius: 5px;
      background: var( --text-contrast-color);
      opacity: 1;
      &::after{
        filter: invert(1)!important;
      }
    }
    .swiper-button-prev{
      left: initial;
      right: 60px;
      &::after{
        content: "";
        @include background-img($icon-arrow);
        background-size: contain;
        transform: rotate(180deg);
        width:15px;
        height: 15px;
        filter: invert(0);
      }
    }
    .swiper-button-next{
      &::after{
        content: "";
        @include background-img($icon-arrow);
        background-size: contain;
        width: 15px;
        height: 15px;
        filter: invert(0);
      }
    }
  }
  
}

</style>