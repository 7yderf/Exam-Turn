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
      <p>{{ description }}</p>
    </div>
    <global-background-src
      :img-src="img"
    />
    <h6>{{ title }}</h6>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/Mixins";
.v-card{
  //@include border;
  @include flex(flex-start, 10px, flex-end);
  position: relative;
  padding: 16px;
  border-radius: 12px;
  overflow: hidden;
  transition: 0.5s;
  width: 250px;
  height: 350px;
  box-shadow: 3px 16px 110px 0px rgba(0, 0, 0, 0.17);
  h6{
    color: var(--text-invert);
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
background-image: linear-gradient(180deg, rgba(89, 131, 252, 0) 0%, rgba(41, 53, 86, 0.26) 19%, rgba(41, 53, 86, 1) 100%);
    transition: 0.5s;
    z-index: 0;
    p{
      color: white;
      opacity: 0;
      transition: 0.5s;
    }
  }
  &:hover{
    h6{
      transition: .5s;
      opacity: 0;
    }
    .v-card__hover-description{
      transform: translateY(0%);
      p{
        opacity: 1;
      }
    }
  }
}

</style>
