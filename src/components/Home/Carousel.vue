<template>
  <div class="col-12 mx-auto overflow-visible slide-gallery">
    <swiper class="no-seleccionable cards-agency" style="cursor: grab"
      :navigation="true" 
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
          slidesPerView: type === 'tecno' ? 3 : 4,
          spaceBetween: type === 'tecno' ? 70 : 30,
        },
        
       
      }" :modules="modules">
      <swiper-slide class="px-1" v-for="(card, index) in cards" 
      :key="index">
        <HomeCardApps 
          v-if="type === 'apps'"
          :key="index" 
          :img_device="card.img_device"
          :image_top="card.icon_tecno"
          :title="card.title_tecno" 
          :description="card.text_tecno" 
          :subtitle="card.sub_title_tecno" 
          :logos="card.tecnologias"
          :cardActive="0" 
          :id="index + 1" 
        />
        <HomeCardslide
          v-if="type === 'tecno'"
          :image_left="card.image_left"
          :bullet="card.bullet"
          :title="card.title_tecno"
          :icon_title="card.icon_title"
          :description="card.text_tecno"
          :subtitle="card.sub_title_tecno"
          :bullets="card.bullets"
        />
        <AboutCardAbout
          v-if="type === 'about'"
          :key="index"
          :img="card.img"
          :title="card.title"
          :description="card.description"
          :type="'our'"
          :id="index"
        />
        <ServicesCardSoluciones
          v-if="type === 'soluciones'"
          :key="index"
          :title="card.titulo"
          :description="card.description"
          :action="card.action"
        />
        <MethodologiesCardMethodologies
          v-if="type === 'methodologies'"
          :key="index"
          :title="card.titulo"
          :description="card.description"
          :action="card.action"
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
    type: String
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
      padding-bottom: 102px;
    

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