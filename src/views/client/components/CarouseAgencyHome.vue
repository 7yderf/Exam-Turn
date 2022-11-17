<template>
  <div class="col-12 mx-auto overflow-visible slide-gallery">
    <swiper class="no-seleccionable cards-agency" style="cursor: grab"
      :navigation="true" 
      :slidesPerView="'auto'" 
      :spaceBetween="30" 
      :breakpoints="{
        '640': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '768': {
          slidesPerView: 2,
          spaceBetween: 40,
        },
       
      }" :modules="modules">
      <swiper-slide class="px-1" v-for="card in cards" :key="card">
        <CardHomeAgency :card="card" />
      </swiper-slide>

    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import "swiper/css/bundle"
import { Swiper, SwiperSlide } from "swiper/vue";
import CardHomeAgency from '@/views/client/components/CardHomeAgency.vue';
import { Thumbs, Navigation, Autoplay } from "swiper";
// Import Swiper styles
import { onMounted, ref } from 'vue';
import { object } from 'yup/lib/locale';

export default {
  components: {
    Swiper,
    SwiperSlide,
    CardHomeAgency
  },
  props: {
    cards: object,
    typeCards: String
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

.slide {
  .slide-gallery {
    .swiper.cards-agency {
    

      &>.swiper-wrapper {
        .swiper-slide {
          height: auto;

          @media screen and (max-width: 640px) {
            max-width: 300px;
          }
        }
      }

      &>.swiper-button-next,
      &>.swiper-button-prev {
        @include border(var(--secondary-color));
        top: initial;
        bottom: 25px;
        width: 40px;
        height: 40px;
        border-radius: 5px;
        background: var(--secondary-color);
        @media screen and (max-width: 640px) {

          
            display: none;
          
        }

      }

      &>.swiper-button-disabled {
        border-color: var(--primary-color);
        border-radius: 5px;
        background: var(--text-contrast-color);
        opacity: 1;

        &::after {
          filter: invert(1) !important;
        }
      }

      &>.swiper-button-prev {
        left: initial;
        right: 60px;

        &::after {
          content: "";
          @include background-img($icon-arrow);
          background-size: contain;
          transform: rotate(180deg);
          width: 15px;
          height: 15px;
          filter: invert(0);
        }
      }

      &>.swiper-button-next {
        &::after {
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

}
</style>