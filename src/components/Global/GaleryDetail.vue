<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="col-12 mx-auto overflow-visible slide-gallery">
    <swiper
      :loop="false"
      :space-between="16"
      :slides-per-view="8"
      :free-mode="true"
      :watch-slides-progress="true"
      :modules="modules"
      :direction="'horizontal'"
      class="mySwiper"
      :watch-slides-visibility="true"
      :watch-overflow="true"
      :breakpoints="{
        480: {
          direction: 'vertical',
          slidesPerView: 8,
        },
      }"
      @swiper="setThumbsSwiper"
    >
      <swiper-slide
        v-for="({ thumb } = image, index) in images"
        :key="index"
      >
        <img
          :src="thumb"
          alt=""
          class="logos"
        >
      </swiper-slide>
    </swiper>
    <swiper
      :loop="true"
      :space-between="10"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="modules"
      class="mySwiper2"
    >
      <swiper-slide
        v-for="({ thumb } = image, index) in images"
        :key="index"
      >
        <img
          :src="thumb"
          alt=""
          class="logos"
          @click="openLightGallery(index)"
        >
      </swiper-slide>
    </swiper>
    <div
      ref="lightgallery"
      class="lightgallery-vue"
    />
  </div>

</template>
<script>
// Import Swiper Vue.js components

import 'swiper/css/bundle'
import { Swiper, SwiperSlide } from 'swiper/vue'
import {
  Thumbs, Navigation, Autoplay, FreeMode,
} from 'swiper'

// Import Swiper styles
import Lightgallery from 'lightgallery'
import lgThumbnail from 'lightgallery/plugins/thumbnail/lg-thumbnail.umd'

export default {
  name: 'GalleryVehicle',
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

  setup(props) {
    const lightgallery = ref(null)
    const initLigthGallery = ref(null)
    const plugins = [lgThumbnail]


    const thumbsSwiper = ref(null)

    const setThumbsSwiper = swiper => {
      thumbsSwiper.value = swiper
    }

    const openLightGallery = index => {
      initLigthGallery.value.openGallery(index)
    }

    const onBeforeSlide = detail => {
      console.log(detail)
    }

    onMounted(() => {
      // Obtener una referencia al contenedor de LightGallery
      console.log('🚀 ~ file: GaleryDetail.vue:119 ~ dynamicEl:props.images.photos?.map ~ props.images.photos:', props.images)

      initLigthGallery.value = Lightgallery(lightgallery.value, {
        plugins,
        speed: 500,
        download: false,
        counter: false,
        dynamic: true,
        thumbHeight: '60',
        thumbWidth: 60,
        dynamicEl: props.images?.map((image, index) => ({
          src: image.original,
          thumb: props.images[index].original,
        })),
        mobileSettings: {
          showCloseIcon: true,
        },
        // ... other settings
      })
      console.log('🚀 ~ file: GaleryDetail.vue:116 ~ onMounted ~ initlig:', initLigthGallery)
    })
    return {
      modules: [FreeMode, Navigation, Thumbs, Autoplay],
      thumbsSwiper,
      setThumbsSwiper,
      onBeforeSlide,
      lightgallery,
      openLightGallery,
    }
  },
}
</script>

<style lang="scss">
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.1.0-beta.1/css/lightgallery.css');
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.1.0-beta.1/css/lg-zoom.css');

body {
  margin: 0;
}
.gallery-item {
margin: 5px
}

.lg-backdrop {

  background-color: rgba(37, 37, 37, 0.566);
  //background: linear-gradient(to bottom, rgba(225, 225, 225, 0.95) 0%, rgba(236, 236, 236, 0.85) 66%, rgba(255,255,255,0.70) 100%);
}

.lg-content, .lg-toolbar{
  width: 100%;
  max-width: 1400px;
  margin: auto;
  left: 0;
  right: 0;
  @media screen and (max-width: 1400px) {
    max-width: 1200px;
  }
  @media screen and (max-width: 1200px) {
    max-width: 1000px;
  }
  @media screen and (max-width: 992px) {
    max-width: 800px;
  }
}

.lg-toolbar .lg-icon{
  background: white;
  border-radius: 50%;
  font-weight: 700;
  width: 25px;
  height: 25px;
  line-height: 0;
  font-size: 16px;
  margin-right: 20px;
    margin-top: 20px;
}

.lg-outer .lg-thumb-outer{
  background-color: transparent;
}
.lg-prev, .lg-next{
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;

}

.lg-prev:after {
  content: '\2039';
  margin-bottom: 8px;
}

.lg-next:before {
  content: '\203A';
  margin-bottom: 8px;
}

.lg-toolbar .lg-icon:hover {
  color: #464646;
}

.lg-next:hover:not(.disabled), .lg-prev:hover:not(.disabled) {
  color: #464646;
}

.lg-outer .lg-thumb-item.active, .lg-outer .lg-thumb-item:hover {
  border-color:#0b1a28;
}

.image__box {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  align-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
}

.slide-gallery{
  display: flex;
    height: 100%;
    align-items: stretch;
    height: 500px;

    .swiper {
      height: 100%;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      &:hover.mySwiper2>.swiper-button-next {

        transform: translateX(0px);
        transition: .3s;

        }
      &:hover.mySwiper2>.swiper-button-prev {

        transform: translateX(0px);
        transition: .3s;

        }
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

    .swiper-slide img.contain {
      object-fit: contain;
    }

    .swiper-slide {
      background-size: cover;
      background-position: center;
    }

    .mySwiper2 {
      height: 100%;
      flex-grow: 1;
      border-radius: 5px;
      border: 1px solid #E6E6E6;
      &>.swiper-button-next {
        transform: translateX(100px);
        transition: .3s;
        &::after {
          font-size: 10px;
          font-weight: 700;
          color: #191818;
          border: 1px solid #2723234d;
          padding: 14px 8px;
          border-radius: 12px;
          background: #ffffffd2;
        }

        @media screen and (max-width: 768px) {
          display: none;
        }

      }
      &>.swiper-button-prev {

        transform: translateX(-100px);
        transition: .3s;
        &::after {
          font-size: 10px;
          font-weight: 700;
          color: #191818;
          border: 1px solid #2723234d;
          padding: 14px 8px;
          border-radius: 12px;
          background: #ffffffd2;
        }

        @media screen and (max-width: 768px) {
          display: none;
        }

      }

    }

    .mySwiper {
      flex-grow: 1;
      box-sizing: border-box;
      height: initial!important;
      width: 120px;
    }

    .mySwiper .swiper-slide-thumb-active {
      opacity: 1;
    }

    .mySwiper {
      .swiper-wrapper {
        .swiper-slide {
          width: 50px;
          margin:  0 auto;
          opacity: 1;
          border-radius: 5px;
          transition: all 0.3s ease-in-out;
          &:hover {
            border: 1px solid #3d3d3d;
            transition: all 0.3s ease-in;
          }
        @media screen and (max-width: 480px) {
          margin:  initial;
        }
        }
      }
    }

    @media screen and (max-width: 480px) {
     flex-direction: column-reverse;
     height: 380px;
     .mySwiper{
      width: 100%;
     }
     .mySwiper2 {
      height: 85%;
      }
    }
}

</style>
