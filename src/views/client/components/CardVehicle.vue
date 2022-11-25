<template>
  <template v-if="!!vehicle">
    <router-link
      :to="{ name: 'car-detail', params: { id: vehicle.slug } }"
      v-if="typeCard == 'cards'"
      class="rounded p-0 col-12 position-relative"
    >
      <div class="cards-cart__container-img position-relative">
        <div
          v-if="vehicle.status == 'Apartado'"
          class="
            position-absolute
            shadow-md
            bg-white
            text-black
            rounded-pill
            p-2
            mt-3
            ms-4
          "
          style="z-index: 4"
        >
          {{ vehicle.status }}
        </div>
        <GalleryCard :images="vehicle.images" />
      </div>
      <div class="col-12 cards-cart__box-text">
        <!-- {{vehicle}} -->
        <p class="cards-cart__title">
          {{ vehicle.brand + " " + vehicle.model }}
        </p>
        <p class="cards-cart__data">
          {{ vehicle.year }} - {{ kmFormat(vehicle.kms) + " km" }} -
          {{ vehicle.state }}
        </p>
        <p class="cards-cart__price">${{ formatPrice(vehicle.price) }}</p>
      </div>
    </router-link>
    
  </template>
</template>

<script lang="ts">
import GalleryCard from "./GalleryCard.vue";
import { kmFormat } from "@/helpers/globalFuntions";
export default {
  name: "card",
  components: {
    GalleryCard,
  },
  props: {
    vehicle: Object,
    typeCard: {
      type: String,
      default: "cards",
    },
  },
  setup(props) {
    const formatPrice = (value) => {
      const val = (value / 1).toFixed(2);
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    return {
      formatPrice,
      kmFormat,
    };
  },
};
</script>

<style lang="scss" >
@import "@/assets/styles/Mixins";
.cards-cart {
  $root: &;
  margin: auto;
  gap: 30px calc((100% - (275px * 3)) / 2);
  &__card {
    @include border(#ababab, 3px);
    display: flex;
    max-width: 275px;
    padding: 0;
    @include for-size(phone-xbig) {
      max-width: inherit;
    }
  }
  &__box-text {
    padding: 16px 17px;
    background: white;
  }
  &__title {
    @include text(1.6rem, 400, 2.4rem);
    color: var(--text-color);
    margin-bottom: 8px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  &__data {
    @include text(1.4rem, 400, 1.8rem);
    color: #2e2e2e;
    margin-bottom: 8px;
  }
  &__price {
    @include text(2.4rem, 400, 2.8rem);
    color: var(--text-color);
  }
  &__container-img {
    @include load();
    position: relative;
    height: 200px;
   // @media screen and (max-width: 500px) {
     // height: auto;
    //}
  }
  
  &__loading{
    @include flex(flex-start);
    flex-direction: column;
    height: 300px;
    border-color: #e7e7e7;
    display: none;
  }
  
  &__loading-img{
    @include load();
    width: 100%;
    height: 180px;
  }
  &__loading-title{
    @include load();
    width: calc(100% - 16px);
    height: 25px;
    margin: 16px 8px ;
  }
  &__loading-price{
    @include load();
    width: calc(100% - 16px);
    height: 35px;
    margin: 0px 8px ;
  }
  &__banners{
    width: 275px;
    height: 350px;
    position: relative;
    @include for-size(phone-xbig) {
      max-width: inherit;
      width: 100%;
    }
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__href{
    width: 100%;
    height: 100%;
    position: absolute;
   left: 0;
  }
}

.page-loading-vehicle{
  .cards-cart__loading{
    @include flex(flex-start);
  }
}

.img-card {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
}

a,
a:hover {
  color: white;
}
</style>
