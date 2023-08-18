<template>
  <swiper :pagination="pagination" :modules="modules" :speed=1500 :navigation="true" :loop="true" class="slider-images">
    <swiper-slide class="px-1" v-for="(image, index) in images" :key="index">
      <img :src="image.link" alt="" class="logos">

    </swiper-slide>
  </swiper>
</template>
<script>
import { onMounted, ref } from "vue";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/vue";
//   import imgBanner from "/portfolio.png";

export default {
  name: "Slide",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    images: Array,
  },
  setup() {
    return {
      pagination: {
        clickable: true,
        //   renderBullet: function (index, className) {
        //     return '<span class="' + className + '">' + (index + 1) + "</span>";
        //   },
      },
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>
<style lang="scss" >
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: flex-start;
  align-items: flex-start;
}

.home__five-img>.swiper.slider-images>.swiper-wrapper .swiper-slide {
  height: 300px !important;
  max-height: 300px !important;
  display: flex;
}

.slider-images>.swiper-button-next,
.slider-images>.swiper-button-prev {

  &::after {
    font-size: 2rem;
    color: #fff;
  }

  @media screen and (min-width: 768px) {
      display: none;
  }
}

.slider-images img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /*@media screen and (max-width: 768px) {
    height: 60vh;
    object-fit: cover;
  }*/
}

.swiper-pagination-bullet {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color: #000;
  opacity: 1;
  background: rgba(0, 0, 0, 0.2);
  display: none;// bullets
}

.swiper-pagination-bullet-active {
  color: #fff;
  background: #007aff;
}

.swipper_relative {
  position: relative;
}

.slide_carrusel_sub {
  display: flex;
  gap: 1rem;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  bottom: 3rem;
  left: 0;
  right: 0;
  color: white;
  padding: 1rem;
}

.slide_carrusel_sub {
  display: flex;
  gap: 1rem;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  left: 0;
  right: 0;
  color: white;
  padding: 1rem;

  @media screen and (min-width: 768px) {
    bottom: 1rem;
  }

  @media screen and (min-width: 1064px) {
    bottom: 2rem;
  }

  @media screen and (min-width: 1280px) {
    bottom: 6rem;
  }
}

.slide_carrusel_title {
  font-weight: 300;
  font-size: 3rem;
}

.slide_carrusel_description {
  font-weight: 300;
  font-size: 2rem;
}
</style>
