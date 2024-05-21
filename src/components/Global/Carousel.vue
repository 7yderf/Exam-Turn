<template>
  <div class="col-12 mx-auto overflow-visible carousel">
    <swiper
      class="no-seleccionable cards-agency"
      style="cursor: grab"
      :navigation="true"
      :loop="true"
      :speed="700"
      :slides-per-view="'auto'"
      :space-between="30"
      :breakpoints="{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        641: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 30,
        },

      }"
      :modules="modules"
    >
      <swiper-slide
        v-for="(card, index) in arrayCards"
        :key="index"
        :data-card="card"
        class="px-1"
      >
        <global-sellers-card
          v-if="type === 'sellers'"
          :img="card.img"
          :title="card.title"
          :description="card.description"
        />
        <global-services-card
          v-if="type === 'services'"
          :img="card.img"
          :title="card.title"
          :description="card.description"
        />

      </swiper-slide>

    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import 'swiper/css/bundle'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Thumbs, Navigation, Autoplay } from 'swiper'
// Import Swiper styles

export default {
  components: {
    Swiper,
    SwiperSlide,

  },
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
    type: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const infoServices = ref(useContentServices())
    const arrayCards = computed(() => {
      if (props.cards.length > 0) {
        return props.cards
      }
      return infoServices.value
    })
    return {
      modules: [Navigation, Thumbs, Autoplay],
      infoServices,
      arrayCards,
    }
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/Mixins";

$icon-arrow: url("/icon-arrow.svg");

  .carousel {
    .swiper.cards-agency {
      padding-bottom: 102px;

      &>.swiper-wrapper {
        .swiper-slide {
          height: auto;
          display: flex;
          @media screen and (max-width: 640px) {
            max-width: 300px;
          }
        }
      }

      &>.swiper-button-next,
      &>.swiper-button-prev {
        border: 1px solid white;
        top: initial;
        bottom: 0px;
        width: 40px;
        height: 40px;
        border-radius: 5px;
        background: var(--secondary-color);
        /* @media screen and (max-width: 640px) {
            display: none;
        }*/

      }

      &>.swiper-button-disabled {
        border-color: white;
        border-radius: 5px;
        background: white;
        opacity: 1;

        &::after {
          filter: invert(1) !important;
        }
      }

      &>.swiper-button-prev {
        left: initial;
        right: calc(50% + 25px);

        &::after {
          content: "";
          @include background-img($icon-arrow);
          background-size: contain;
          transform: rotate(180deg);
          width: 15px;
          height: 15px;
          filter: invert(0);
        }
      }

      &>.swiper-button-next {
        left: initial;
        right: calc(50% - 25px);
        &::after {
          content: "";
          @include background-img($icon-arrow);
          background-size: contain;
          width: 15px;
          height: 15px;
          filter: invert(0);
        }
      }
    }

  }

</style>
