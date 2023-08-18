

<template>
  <div class="row buyCard">
      <div class="buyCard__imx-box g-0">
          <img :src="images" alt="portfolio" class="img__default" />
      </div>
      <div class="buyCard__text-content">
          <div class="buyCard__data">
            <div class="buyCard__box-hero">
              <CardBullet :bullet="type" :version="'text'"/>
              <h5 class="buyCard__title">
                  {{ name }}
              </h5>
          </div>
          <div class="buyCard__info">
              <span class="buyCard__info-text">{{ description }}</span>
              
          </div>
          
          </div>
          <div class="buyCard__cart">
            <icon :name="icon" class="buyCard__icon" />
          </div>
      </div>
  </div>
</template>
<script lang="ts" setup>

import { defineProps } from "vue";

const props = defineProps<{
  
  type: string;
  name: string;
  description: string;
  images: string;
  icon: string;
}>();



</script>
<style lang="scss" scoped>
@import "@/assets/scss/Mixins";

.buyCard {
  background: white;
  width: 100%;
  margin: auto;
  flex-direction: column;
  border: 1px solid #1a1a1a31;
  border-radius: 5px;
  /* Note: backdrop-filter has minimal browser support */
  margin: 0;
  padding: 0;
  padding-bottom: 16px;
  gap: 16px;


  &__text-content {
      display: flex;
      
  }
  &__data {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
  }
  &__cart{
    @include flex(center, false, flex-start);
    
  }
  &__icon{
    color: #1A1A1A;
    width: 30px;
    height: 30px;
    margin: 0;
    border: 1px solid #1a1a1a31;
    border-radius: 50%;
    padding: 5px;
  }

  &__box-hero {
      @include flex(center, 8px, flex-start);
     flex-direction: column;
      @include for-size(tablet-portrait) {
          min-height: 50px;
      }
  }

  &__title {
    font-weight: 700;  
  }

  &__info{
    @include flex(flex-start, 8px);
  }
  &__info-text{
    font-size: 12px;
  }

}


</style>
