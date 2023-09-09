<template>
  <swiper :pagination="pagination" :modules="modules" :speed=1500 :navigation="true" :loop="true" class="slider-images" v-if="typeproduct === 'circuito' && collage">
    <swiper-slide class="px-1" v-for="(image, index) in (arraySlicesImages)" :key="index" :data-grid="grid">
        <div class="image__box" :data-row="index">
           <img
          v-for="(img, i) in (index == 0 ? image : [image])"  
          :key="i" 
          :datatype="img.link"
          :src="img.link"
           alt="" class="logos" 
           :style="`width:calc(100% / ${image.length > 1 ? grigCircuits.width : ''}); height:calc(100% / ${image.length > 1 ? grigCircuits.height : ''})`">
        </div>
    </swiper-slide>
  </swiper>
  <swiper :pagination="pagination" :modules="modules" :speed=1500 :navigation="true" :loop="true" class="slider-images" v-if="typeproduct === 'circuito' && !collage">
    <swiper-slide class="px-1" v-for="(image, index) in images" :key="index" :data-grid="grid">
      <img :src="image.link" alt="" class="logos">
    </swiper-slide>
  </swiper>
  <swiper :pagination="pagination" :modules="modules" :speed=1500 :navigation="true" :loop="true" class="slider-images" v-if="typeproduct === 'producto'">
    <swiper-slide class="px-1" v-for="(image, index) in images" :key="index" :data-grid="grid">
      <img :src="image.link" alt="" class="logos">
    </swiper-slide>
  </swiper>
</template>
<script>
import { onMounted, ref, computed } from "vue";
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
    typeproduct: String,
    grid: {
      type: Boolean,
      default: true,
    }
  },

  

  setup(props) {
  const collage = ref(props.images?.length > 1 ? true : false)
  
  const cuantity_images = ref(props.images?.length);
 
  const arrayImagesCircuits = ref(props.images);

  const arraySlicesImages = ref([]);

  const arraySlices = () => {
    if (cuantity_images.value < 12) {
      return arrayImagesCircuits.value;
    } else {
      
      return arrayImagesCircuits.value.slice(0, 12);
    }
  };

  arraySlicesImages.value = [arraySlices(), ...props.images];
  
  const grigCircuits = computed(() => {
    if(arraySlicesImages.value?.length === 2){
      return  {
        width: 1,
        height: 1,
      }
    }
    if(arraySlicesImages.value?.length === 3){
      return  {
        width: 2,
        height: 1,
      }
    }
    if(arraySlicesImages.value?.length === 4 || arraySlicesImages.value?.length === 5){
      return  {
        width: 2,
        height: 2,
      }
    }
    if(arraySlicesImages.value?.length === 6 || arraySlicesImages.value?.length === 7){
      return  {
        width: 2,
        height: 3,
      }
    }
    if(arraySlicesImages.value?.length > 7 && arraySlicesImages.value?.length < 11){
      return  {
        width: 3,
        height: 3,
      }
    }
    if(arraySlicesImages.value?.length > 10){
      
     return   {
        width: 4,
        height: 3,
      }
    }
  });

    return {
      grigCircuits,
      collage,
      arrayImagesCircuits,
      arraySlicesImages,
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

  &:hover.slider-images>.swiper-button-next {

    
    transform: translateX(0px);
    transition: .3s;
      
    }
  &:hover.slider-images>.swiper-button-prev {

    transform: translateX(0px);
    transition: .3s;
      
    }
  

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

.home__five-img>.swiper.slider-images>.swiper-wrapper .swiper-slide[data-grid="false"] {
  height: 250px !important;
  max-height: 250px !important;
  display: flex;
}

.home__five-img>.swiper.slider-images>.swiper-wrapper .swiper-slide[data-grid="detail"] {
  height: 500px !important;
  max-height: 500px !important;
  display: flex;
  @media screen and (max-width: 1200px) {
    height: 300px !important;
    max-height: 300px !important;
  }
  @media screen and (max-width: 991px) {
    height: 400px !important;
    max-height: inherit!important;
  }
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

.slider-images>.swiper-button-next {
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
.slider-images>.swiper-button-prev {

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
