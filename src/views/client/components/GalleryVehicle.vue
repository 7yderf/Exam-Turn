<template>
  <div class="col-12 mx-auto overflow-visible slide-gallery">
    <swiper :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }" :loop="true" :spaceBetween="10" :navigation="true" :thumbs="{ swiper: thumbsSwiper }" :modules="modules"
      class="mySwiper2">
      <swiper-slide v-for="image in gallery" :key="image" >
        <img :src="image" />
      </swiper-slide>
      
    </swiper>
    <swiper @swiper="setThumbsSwiper" :loop="true" :spaceBetween="20" :slidesPerView="7" :freeMode="true"
      :watchSlidesProgress="true" :modules="modules" class="mySwiper">
      <swiper-slide v-for="image in gallery" :key="image" >
        <img :src="image" />
      </swiper-slide>
      
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import "swiper/css/bundle"
import { Swiper, SwiperSlide } from "swiper/vue";
import { Thumbs, Navigation, Autoplay, FreeMode } from "swiper";
// Import Swiper styles
import { onMounted, ref } from 'vue';

export default {
  name: "GalleryVehicle",
  props: {
    gallery: Array,
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup(props) {

    const thumbsSwiper = ref(null);

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };
    return {
      modules: [FreeMode, Navigation, Thumbs, Autoplay],
      thumbsSwiper,
      setThumbsSwiper,
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
  background: #fff;

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

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 400px;
  width: 100%;
}

.mySwiper {
  height: 20%;
  box-sizing: border-box;
  padding: 20px 0;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.mySwiper{
  .swiper-wrapper{
    .swiper-slide{
      width: 100%;
      height: 100%;
      opacity: 1;
      border-radius: 5px;
      img{
        border-radius: 5px;
      }
    }
  }
}


</style>