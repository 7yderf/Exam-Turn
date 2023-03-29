<template>
  <footer class="footer">
    <img src="/turn.svg" alt="" class="footer__turn">
    <div class="footer__box-contact">
      <div class="footer__contact">
        <img src="" alt="">
      </div>
      <div class="footer__contact">
        <img src="" alt="">
      </div>
      <div class="footer__contact">
        <img src="" alt="">
      </div>
    </div>
    <div class="footer__legal-box">
      <a href="" class="footer__legal-link">
        Términos y condiciones
      </a>
      <a href="" class="footer__legal-link">
        Aviso de privacidad
      </a>
    </div>
    <p class="footer__copyright">
      © 2023 Copyright Turnmyapp
    </p>
  </footer>
  
</template>
<script lang="ts" setup>
 
</script>
<style lang="scss" scoped>
@import "@/assets/scss/Mixins";

.footer {
 @include flex;
 flex-direction: column;
 width: 100%;
 background:#1A1A1A;
 padding: 64px 0 40px;
 &__legal-box{
  @include flex(center, 16px, center);
  padding: 24px 0;
  border-bottom: 1px solid #717171;
  width: 100%;
 }
 &__legal-link{
  @include text(1.4rem, 400, 2.4rem, left);
  color: #fff;
  text-decoration: none;
 }
 &__copyright{
  @include text(1.4rem, 400, 2.4rem, left);
  color: #fff;
  text-decoration: none;
  padding: 24px 0;
  width: 100%;
  text-align: center;
 }
}
</style>