<template>
  <div class="col-12 position-relative">
    <!-- Main Swiper -> pass thumbs swiper instance -->
    <swiper class="gallery-card" :autoHeight="true" :loop="true" :modules="[...modules]" :navigation="true" :pagination="{
      clickable: true,
    }" :style="{
  '--swiper-navigation-color': '#fff',
  '--swiper-navigation-size': '15px',
}">
      <SwiperSlide v-for="image, index in images" :key="index">
        <div class="img-container">
          <img :src="image" class="img-card swiper-lazy rounded-top" alt="" />
        </div>
      </SwiperSlide>
    </swiper>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import { Pagination, Navigation } from "swiper";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/vue";

export default {
  name: 'GalleryCard',
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    images: Array
  },
  setup(props) {

    const urlApi = ref(process.env.VUE_APP_API_URL + '/');
    return {
      modules: [Pagination, Navigation],
      urlApi
    };
  },
};
</script>
<style lang="scss" >
.gallery-card .swiper-button-next,
.gallery-card .swiper-button-prev {
  border-radius: 0!important;
  border: none!important;
  width: 30px!important;
  opacity: 0;
  &:after{
    font-family: swiper-icons!important;
    font-size: var(--swiper-navigation-size)!important;
    text-transform: none!important;
    letter-spacing: 0!important;
    font-variant: initial!important;
    line-height: 1!important;
    background-image: none!important;
  }

}
.gallery-card .swiper-button-next{
  &:after{content: 'next'!important};
}
.gallery-card .swiper-button-prev{
 
  &:after{
    transform: rotate(0deg)!important;
    content: 'prev'!important
  };
}
.gallery-card{
  &:hover {
    .swiper-button-next, .swiper-button-prev {
      background-color: #272a31 !important;
      padding: 2em 1em !important;
      height: 100%!important;
      top: 7px!important;
      opacity: 0.4;
    }
}
}


.gallery-card .swiper-button-next {
  right: 0% !important;
}

.gallery-card .swiper-button-prev {
  left: 0% !important;
}

.swiper-pagination-bullet {
  background: white;
}

.sub-gallery {
  // max-width: 60%; 
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 8%;
}

.img-card {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
}

.img-container {
  position: relative;
  height: 200px;
  

  @media screen and (max-width: 500px) {
    height: 200px;
  }
}
</style>
