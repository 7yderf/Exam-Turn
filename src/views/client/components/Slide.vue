<template>
  <swiper :pagination="pagination" :modules="modules" :autoplay="{
    delay: 200000,
    disableOnInteraction: false,
  }" class="mySwiper">
    <swiper-slide v-for="(image, index) in Object.keys(desktop).filter(image => desktop[image].where === 'slider')"
      :key="index" :data-desktop="windowSize">
      <img  :src="desktop[image].banner" alt="" class="slide__carrusel" />
      <div v-if="desktop[image].type == 'Video'" class="slide__play-video">

        <!-- <iframe class="slide__iframe" :src="desktop[image].url.replace('watch?v=', 'embed/')"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe> -->
        <div class="slide__box-play">
          <a 
          :href="`#video${desktop[image].id}`"
          data-bs-toggle="modal"
          role="button"
         aria-controls="offcanvasExample"
         class="slide__banner-play"
          >
          <img :src="Play" alt="" class="slide__play" />
          </a>
        </div>
      </div>

      <div class="slide_carrusel_sub">
        <span class="slide_carrusel_title">{{ desktop[image].title }}</span>
        <span class="slide_carrusel_description">{{ desktop[image].description }}</span>
      </div>
      <a v-if="desktop[image].url != 'null' && desktop[image].type == 'Image'" :href="desktop[image].url" :target="desktop[image].blank ? '_blank' : ''" class="slide__link"></a>
    </swiper-slide>
    <swiper-slide v-for="(image, index) in Object.keys(mobile).filter(image => mobile[image].where === 'slider')"
      :key="index" :data-mobile="!windowSize">
      <img  :src="mobile[image].banner" alt="" class="slide__carrusel" />
      <div v-if="mobile[image].type == 'Video'" class="slide__play-video">

        <!-- <iframe class="slide__iframe" :src="mobile[image].url.replace('watch?v=', 'embed/')"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe> -->
        <div class="slide__box-play">
           <a 
           :href="`#video${mobile[image].id}`"
           data-bs-toggle="modal"
           role="button"
          aria-controls="offcanvasExample"
          class="slide__banner-play"
           >
            <img :src="Play" alt="" class="slide__play" />
           </a>
        </div>
      </div>

      <div class="slide_carrusel_sub">
        <span class="slide_carrusel_title">{{ mobile[image].title }}</span>
        <span class="slide_carrusel_description">{{ mobile[image].description }}</span>
      </div>
      <a v-if="mobile[image].url != 'null' && mobile[image].type == 'Image'" :href="mobile[image].url" :target="mobile[image].blank ? '_blank' : ''" class="slide__link"></a>
    </swiper-slide>
  </swiper>

  <!-- modal-video -->
  <!-- Button trigger modal -->


<!-- Modal -->
<div v-for="(image, index) in Object.keys(desktop).filter(image => desktop[image].type === 'Video')" :key="index" class="modal fade banner-video" :id="`video${desktop[image].id}`" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="videoLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
       
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <iframe class="slide__iframe-banner" :src="desktop[image].url.replace('watch?v=', 'embed/')"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
      
    </div>
  </div>
</div>
<div v-for="(image, index) in Object.keys(mobile).filter(image => mobile[image].type === 'Video')" :key="index" class="modal fade banner-video" :id="`video${mobile[image].id}`" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="videoLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
       
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <iframe class="slide__iframe-banner" :src="mobile[image].url.replace('watch?v=', 'embed/')"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
      
    </div>
  </div>
</div>
</template>
<script>
import { onMounted, ref } from "vue";
import { Pagination, Autoplay } from "swiper";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/vue";
import imgBanner from "@/assets/images/banerHero.png";
import Play from "@/assets/images/icons/icon-play.png";

export default {
  name: "Slide",
  components: {
    Swiper,
    SwiperSlide,

  },
  props: {
    desktop: Object,
    mobile: Object,
    windowSize: Boolean
  },
  setup() {
    return {
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
      modules: [Autoplay, Pagination],
      imgBanner,
      Play,
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
  height: 33vw;
  @media screen and (max-width: 768px) {
    height: 450px;
  }
    

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
  display: none;

  &[data-desktop="true"] {
    display: flex;
  }

  &[data-mobile="true"] {
    display: flex;
  }
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    height: 60vh;
    object-fit: cover;
  }
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

.slide__play-video {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 33vw;
  position: absolute;
  top: 0;

  @media screen and (max-width: 768px) {
    height: 60vh;
    object-fit: cover;
  }

  .slide__box-play {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 0.39);
  }

  .slide__banner-play,
  img.slide__play {
    position: absolute;
    width: 80px;
    height: 80px;
    object-fit: contain;
    z-index: 1;

  }
}
.banner-video{
  .modal-body{
    padding: 0;
  }
  .modal-content{
    background-color: transparent;
  }
  .modal-header{
    button{
      filter: invert(1);
    }
  }
}
.slide__iframe-banner{
  position: relative;
  width: 100%;
  height: 33vw;
  @media screen and (max-width: 768px) {
    height: 30vh;
  }
}
.slide_carrusel_description {
  font-weight: 300;
  font-size: 2rem;
}

.slide__iframe {
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
}
.slide__link{
  width: 100%;
  height: 100%;
  position: absolute;
 
}
</style>
