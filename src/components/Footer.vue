<template>
  <footer class="footer">
    <img src="/turn.svg" alt="" class="footer__turn">
    <div class="footer__box-contact">
      <a href="https://www.facebook.com/turnappmx/" target="_blank" class="footer__contact">
        <Icon class="footer__icon" name="ic:baseline-facebook"  />
      </a>
      <a href="https://www.instagram.com/turnappmx/" target="_blank" class="footer__contact">
        <Icon class="footer__icon" name="ri:instagram-fill"  />
      </a>
      <a href="https://www.linkedin.com/company/turnmyapp" target="_blank" class="footer__contact">
        
        <Icon class="footer__icon" name="mdi:linkedin"  />
      </a>
    </div>
    <div class="footer__legal-box">
      <NuxtLink  class="footer__legal-link" to="./Privacynotice">
        Términos y condiciones
      </NuxtLink>
     
      <NuxtLink  class="footer__legal-link" to="./Privacynotice">
        Aviso de privacidad
      </NuxtLink>
      
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
 &__box-contact{
  @include flex(space-between, 16px, center);
  width: 200px;
  margin-top: 24px;
  
 }
 &__icon{
  color: white;
  font-size: 24px;
 }
}
</style>