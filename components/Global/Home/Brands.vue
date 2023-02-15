<template>
  <div class="col-12 mx-auto overflow-visible slide-gallery">
    <swiper class="no-seleccionable cards-agency" style="cursor: grab"
      :navigation="false" 
      :speed=1700
      :slidesPerView="'2'" 
      :spaceBetween="10" 
      :loop="true"
      :autoplay="{
        delay: 10,
        reverseDirection: type === 'right',
        disableOnInteraction: false,
      }"
      :breakpoints="{
        '640': {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        '768': {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        '1024': {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        '1200': {
          slidesPerView: 6,
          spaceBetween: 10,
        },
        '2100': {
          slidesPerView: 7,
          spaceBetween: 10,
        },
       
      }" :modules="modules">
      <swiper-slide class="px-1" v-for="(brand, index) in brands" 
        :key="index">
        <img :src="brand" alt="" class="logos">
        
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
    brands: Array,
    type: String
  },
  setup(props) {
    return {
      modules: [Navigation, Thumbs, Autoplay],
    };
  },
};
</script>
<style lang="scss" scoped>
.logos{
  width: 15vw;
  max-width: 300px;
  min-width: 200px;
  object-fit: contain;
  @media screen and (max-width: 400px) {
    width: 150px;
    max-width: inherit;
    min-width: inherit;
    
  }
}
</style>


