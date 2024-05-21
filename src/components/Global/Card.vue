<script lang="ts" setup>

defineProps<{
 img: string,
  title: string,
  description: string,
}>()

</script>
<template>
  <div class="v-card">
    <div class="v-card__hover-description">
      <main-paragraph
        class="v-card__description-text"
        :text="[description]"
        :styles="{ textTypeColor: 'binary' }"
      />
    </div>
    <global-background-src
      :img-src="img"
    />
    <main-paragraph
      class="v-card__title"
      :title="{ h6: title }"
      :styles="{ tilteTypeColor: 'binary' }"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/Mixins";
.v-card{
  //@include border;
  $root: &;
  @include flex(flex-start, 10px, flex-end);
  position: relative;
  padding: 16px;
  border-radius: 12px;
  overflow: hidden;
  transition: 0.5s;
  width: 250px;
  height: 350px;
  box-shadow: 3px 16px 110px 0px rgba(0, 0, 0, 0.17);
  &__title{
    transition: 0.5s;
    z-index: 1;
  }
  &__hover-description{
    @include flex(flex-start, 10px, flex-end);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 16px;
    transform: translateY(60%);
    background-color: rgba(89, 131, 252, 0);
background-image: linear-gradient(180deg, rgba(89, 131, 252, 0) 0%, rgba(41, 56, 49, 0.43) 33%, rgba(41, 56, 49, 1) 100%);
    transition: 0.5s;
    z-index: 0;
    #{$root}__description-text{
      color: white;
      opacity: 0;
      transition: 0.5s;
    }
  }
  &:hover{
    #{$root}__title{
      transition: .5s;
      opacity: 0;
    }
    .v-card__hover-description{
      transform: translateY(0%);
      #{$root}__description-text{
        opacity: 1;
      }
    }
  }
}

</style>
