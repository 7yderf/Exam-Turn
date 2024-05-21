<script lang="ts" setup>

defineProps<{
  imgSrc?: string
  icon?: string
  title?: string
  text?: string
}>()

</script>
<template>
  <div class="box card-values">
    <img
      v-if="imgSrc"
      :src="imgSrc"
      alt=""
    />
    <icon
      v-if="icon"
      :name="icon"
    />
    <h4 v-if="title">
      {{ title }}
    </h4>
    <p v-if="text">
      {{ text }}
    </p>
  </div>

</template>

<style lang="scss" scoped>
@import "@/assets/scss/Mixins";
.card-values{
  background: #02AFA2;
  @include flex(flex-start, 16px, flex-start);
  @include shadow;
  flex-direction: column;
  padding: 16px;
  width: 200px;
  height: 200px;
  border-radius: 8px!important;
  flex-grow: initial;

  img{
    width: 70px;
    height: 70px;
    object-fit: contain;
    margin-bottom: 16px;
  }
  p{
    @include text(2rem, 500, 2.4rem);
    color: white;
    letter-spacing: .8px;
  }
  @include for-size(tablet-portrait) {
    flex-direction: row;
    width: 100%;
    height: auto;
    align-items: center;
    img{
      width: 50px;
      height: 50px;
      margin-bottom: 0;
    }
  }
}

</style>
