<template>
  <div class="col-12 mx-auto overflow-visible slide-gallery">
    <swiper class="no-seleccionable cards-agency" style="cursor: grab"
      :navigation="false" 
      :loop="true"
      :speed=700
      :slidesPerView="'auto'" 
      :spaceBetween="30" 
      :breakpoints="{
        '640': {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        '641': {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        '1024': {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        '1280': {
          slidesPerView:  4,
          spaceBetween:  30,
        },
        
       
      }" :modules="modules">
      <swiper-slide class="px-1" v-for="(card, index) in cards" 
      :key="index">
        
        <HomeCardslide
          v-if="type === 'tecno'"
          :sale="card?.Sale"
          :type="card.Type"
          :legend="card.Legend"
          :name="card.Name"
          :qty="card.Qty" 
          :brand="card.brand?.Name"
          :model="card.Model"
          :code="card.Code"
          :priceMax="card.Price"
          :priceSale="card?.PriceSale"
          :isQuote="card?.IsQuote"
          :images="card.images"
          :isGird="true" 
          :index="index" 
          :id="card.IdProduct"
          :tag="card?.Tag"
        />
      </swiper-slide>

    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import "swiper/css/bundle"
import { Swiper, SwiperSlide } from "swiper/vue";
import { Thumbs, Navigation, Autoplay } from "swiper";
// Import Swiper styles
import { onMounted, ref } from 'vue';


export default {
  components: {
    Swiper,
    SwiperSlide,
    
},
  props: {
    cards: Array,
    type: String,
    legend: String
  },
  setup(props) {
    return {
      modules: [Navigation, Thumbs, Autoplay],
    };
  },
};
</script>

<style lang="scss" >
@import "@/assets/scss/Mixins";

$icon-arrow: url("/icon-arrow.svg");


  .slide-gallery {
    .swiper.cards-agency {
      padding-bottom: 40px;
    

      &>.swiper-wrapper {
        .swiper-slide {
          height: auto;
          display: flex;
          @media screen and (max-width: 640px) {
            max-width: 300px;
          }
        }
      }

      &>.swiper-button-next,
      &>.swiper-button-prev {
        border: 1px solid white;
        top: initial;
        bottom: 0px;
        width: 40px;
        height: 40px;
        border-radius: 5px;
        background: var(--secondary-color);
        /* @media screen and (max-width: 640px) {
            display: none;
        }*/

      }

      &>.swiper-button-disabled {
        border-color: white;
        border-radius: 5px;
        background: white;
        opacity: 1;

        &::after {
          filter: invert(1) !important;
        }
      }

      &>.swiper-button-prev {
        left: initial;
        right: calc(50% + 25px);

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
        left: initial;
        right: calc(50% - 25px);
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


</style>