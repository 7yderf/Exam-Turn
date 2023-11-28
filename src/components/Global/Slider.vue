<template>
  <swiper
    :pagination="pagination"
    :modules="modules"
    :speed="1500"
    :navigation="true"
    :loop="true"
    class="slider-images"
  >
    <swiper-slide
      v-for="({ thumb } = image, index) in images"
      :key="index"
    >
      <div
        class="image__box"
      >
        <img
          :src="thumb"
          alt=""
          class="logos"
        >
      </div>

    </swiper-slide>
  </swiper>
</template>
<script>
import { Pagination, Autoplay, Navigation } from 'swiper'
import 'swiper/css/bundle'
import { Swiper, SwiperSlide } from 'swiper/vue'
//   import imgBanner from "/portfolio.png";

export default {
  name: 'Slide',
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    images: {
      type: Array,
      default: () => [],
    },
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
    }
  },
}
</script>
<style lang="scss">
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

.slide>.swiper.slider-images>.swiper-wrapper .swiper-slide {
  height: 250px !important;
  max-height: 250px !important;
  display: flex;
}

.image__box{
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
}

.slider-images>.swiper-button-next,
.slider-images>.swiper-button-prev {

  &::after {
    font-size: 10px;
    font-weight: 700;
    color: #191818;
    border: 1px solid #2723234d;
    padding: 14px 8px;
    border-radius: 12px;
  }

  @media screen and (max-width: 768px) {
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
  width: 10px;
  height: 10px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color: #000;
  opacity: 1;
  background: rgba(0, 0, 0, 0.044);
  //display: none;// bullets
  @media screen and (max-width: 768px) {
    display: none;
  }
}

.swiper-pagination-bullet-active {
  color: #fff;
  background: rgba(0, 0, 0, 0.126);
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
