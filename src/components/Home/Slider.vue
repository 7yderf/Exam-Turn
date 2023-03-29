<template>
  <swiper
    :pagination="pagination"
    :modules="modules"
    :speed=1500
    :navigation="true"
    :loop="true"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    class="mySwiper"
  >
    <swiper-slide
      v-for="(app, index) in appTecnologics" 
      :key="index"
    >
      <HomeCardslide
        :image_left="app.image_left"
        :bullet="app.bullet"
        :title="app.title_tecno"
        :icon_title="app.icon_title"
        :description="app.text_tecno"
        :subtitle="app.sub_title_tecno"
        :logos="app.tecnologias"
      />
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
    appTecnologics: Array,
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
<style lang="scss" scoped>
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
  -webkit-align-items: center;
  align-items: center;
}

/*.swiper-slide img {
 display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  @media screen and (max-width: 768px) {
    height: 60vh;
    object-fit: cover;
  }
}*/

.swiper-pagination-bullet {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color: #000;
  opacity: 1;
  background: rgba(0, 0, 0, 0.2);
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
