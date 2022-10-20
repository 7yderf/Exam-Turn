<template>
  <div class="col-12 position-relative gallery-big">
    <div v-if="status == 'Apartado' && loop" class="fw-bold position-absolute bg-white text-black rounded-pill p-2 apartado" style="z-index: 4">{{status}} </div>
    <!-- Main Swiper -> pass thumbs swiper instance -->
    <swiper
      :loop="loop"
      :modules="[...modules]"
      :navigation="true"
      :breakpoints="swiperOptions.breakpoints"
      :spaceBetween="10"
      :centeredSlides="true"
      :initialSlide="1"
      @slideChange="onSlideChange"
      :style="{
        '--swiper-navigation-color': '#000',
        '--swiper-navigation-size': '15px',
      }"
    >
      <SwiperSlide v-for="(image, index) in images" :key="index">
        <div class="containerImgGallery" >
          <img :src="image.path" class="img-card swiper-lazy" alt="" />
        </div>
      </SwiperSlide>
    </swiper>
    <div class="badge-gallery" style="z-index: 1">
      {{ (loop || images.length > 1 || currentSlide == 0) ? (currentSlide + 1) :  (currentSlide)}} - {{ images.length}}
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import { Thumbs, Navigation } from "swiper";
import  "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    images: Array,
    status: String,
    loop: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const currentSlide = ref(1);
    const urlApi = ref(process.env.VUE_APP_API_URL + '/');
    const onSlideChange = (e) => {
      currentSlide.value = e.activeIndex % props.images.length;
    };
    const swiperOptions = ref({
      breakpoints: {
        2000: {
          slidesPerView: 3.5,
          spaceBetween: 20
        },
        1403: {
          slidesPerView: 2.5,
          spaceBetween: 20
        },
        1023: {
          slidesPerView: 1.5,
          spaceBetween: 20
        },
        700: {
          slidesPerView: 1,
          spaceBetween: 20,
          navigation: false
        },
        100: {
          slidesPerView: 1,
          spaceBetween: 15
        },
      }
    })
    return {
      modules: [Navigation, Thumbs],
      onSlideChange,
      currentSlide,
      swiperOptions,
      urlApi
    };
  },
};
</script>
<style lang="scss" >
.badge-gallery {
  position: absolute;
  bottom: 15%;
  background-color: rgba(77, 77, 77, 0.66);
  color: white;
  padding: 1em 1.5em;
  left: 47%;
  border-radius: 6px;
}
.gallery-big .swiper-button-next {
  // background-image: url('/media/icons/iconsax/arrow-right-solid.svg');
  background-repeat: no-repeat;
  background-size: 50% auto;
  background-position: center;
}

.gallery-big .swiper-button-next::after {
  display: none;
}

.gallery-big .swiper-button-prev {
  //background-image: url('/media/icons/iconsax/arrow-left-solid.svg');
  background-repeat: no-repeat;
  background-size: 50% auto;
  background-position: center;
}

.gallery-big .swiper-button-prev::after {
  display: none;
}
.gallery-big .swiper-button-next,
.gallery-big .swiper-button-prev {
  background-color: #fff;
  box-shadow: 10px 1px 84px -8px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 1px 84px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 1px 84px -8px rgba(0, 0, 0, 0.75);
  padding: 1.5em;
  @media screen and (max-width: 992px) {
    display: none;
  }
}
.gallery-big .swiper-button-next {
  right: 18%;
  border-radius: 5px;
  @media screen and (max-width: 500px) {
    right: 5%;
  }
}
.gallery-big .swiper-button-prev {
  left: 18%;
  border-radius: 5px;
  @media screen and (max-width: 500px) {
    left: 5%;
  }
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
.containerImgGallery {
  position: relative;
  height: 550px;
  @media screen and (max-width: 500px) {
    height: 300px;
  }
}
.apartado{
  top: 3%;
  left: 33%;
  @media screen and (max-width: 500px) {
    left: auto;
    right: 10%;
    top: 7%;
  }
  @media screen and (max-width: 991px) and (min-width: 501px) {
    left: auto;
    right: 10%;
    top: 7%;
  }
  @media screen and (max-width: 1200px) and (min-width: 992px) {
    left: 19%;
  }
  @media screen and (min-width: 2000px) {
    left: 37%;
  }
}
</style>
