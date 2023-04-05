<template>
  <div class="button-contact">
    <a href="https://web.whatsapp.com/send?phone=3334944317" target="_blank" class="button-contact__button">
      <img src="/icon/whatsapp.svg" alt="">
    </a>
  </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
@import "@/assets/scss/Mixins";
.button-contact{
  @include flex;
  position:fixed;
  width: 45px;
  height: 45px;
  right: 0;
  bottom: 20%;
  z-index: 100;
  button{
    @include flex;
    img{
      width: 40px;
      height: 40px;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

  } 
}

</style>