<template>
  <div class="paragraph">
    <h2 class="paragraph__tit">
      {{ titulo }}
    </h2>
    <!-- <div class="paragraph__content-box">
      <button
        type="button"
        v-for="(bullet, index) in bullets"
        :key="index"
        class="paragraph__bullets"
      >{{ bullet }}</button>
    </div>
    <div class="paragraph__box-text">
      <p class="paragraph__text">
        {{ texto }}
      </p>
    </div>
    <button
      type="button"
      class="paragraph__action">
      {{ action }}
    </button> -->
    <img
      class="paragraph__img"
      :src="image"
      alt=""
    >
  </div>

</template>
<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps<{
    titulo: string,
    bullets: string[],
    texto: string,
    action: string
    image: string
  }>()

</script>
<style lang="scss" scoped>
@import "@/assets/scss/Mixins";
.paragraph{
  @include flex;
  flex-direction: column;
  padding: 24px;
  padding-left: 32px;
  border-left: 1px solid var(--primary-color) ;
  h2{
    @include text(5.6rem, 400, 7.2rem, center);
  }
  &__content-box{
    @include flex(flex-start, 16px, inherit);
  }
  &__bullets{
    @include button(bullet);
    padding: 8px 16px;
    border-radius: 12px;
    height: auto
  }
  &__box-text{
    p{
      @include text(1.8rem, 400, 3.2rem left);

    }
  }
  &__action{
    @include button;
  }
  &__img{
    max-width: 400px;
  }
}

.paragraph{
  @include for-size(desktop-mid) {
    h2{
      font-size: 4rem;
      line-height: 6rem;
    }
  }
  @include for-size(tablet-portrait) {
    padding: 0px;
    border-left: none;
    margin-bottom: 32px;
    &__action{
      max-width: inherit;
    }
  }
  @include for-size(phone-xbig) {

      h2{
        @include text(4.5rem, 400, 5.5rem, left);
      }
  }
}
</style>
