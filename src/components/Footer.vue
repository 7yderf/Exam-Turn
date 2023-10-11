<template>

  <footer class="footer container">
    <div class="footer__hero container">
      <div class="footer__box-logo">
        <img
          src="../assets/images/icon-logo.png"
          alt=""
          class="footer__turn"
        >
        <h4>MENTAL, EMOTIONAL AND FINANCIAL FREEDOM</h4>
      </div>

      <div class="footer__legal-box">
        <h5>Platform</h5>
        <NuxtLink
          class="footer__legal-link"
          :to="'#'"
        >
          Knowledge
        </NuxtLink>
        <NuxtLink
          class="footer__legal-link"
          :to="'#'"
        >
          Finance
        </NuxtLink>
        <NuxtLink
          class="footer__legal-link"
          :to="'#'"
        >
          Connect
        </NuxtLink>
        <NuxtLink
          class="footer__legal-link"
          :to="'#'"
        >
          Markets
        </NuxtLink>

      </div>
    </div>
  </footer>
  <div class="footer__copy-footer">
    <p class="footer__copyright container">
      © 2023 Gobeyond. All rights reserved.
    </p>
  </div>

</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
@import "@/assets/scss/Mixins";

.footer {
 @include flex;
 flex-direction: column;
 width: 100%;
 padding: 64px 0 40px;
 &__hero{
  @include flex(space-between, 16px, flex-end);
  padding: 0 16px;
 }
 &__box-logo{
  @include flex(center, 16px, flex-start);
  flex-direction: column;
  flex-grow: 1;
  max-width: 500px;
  h4{
    font-weight: 600;
  }

 }
 &__legal-box{
  @include flex(center, 20px, baseline);
  padding: 24px 0;
  min-width: 300px;

 }
 &__legal-link{
  @include text(1.4rem, 400, 2.4rem, left);
 
  text-decoration: none;
 }
 &__copy-footer{
  background:#0B1A28; 
 }
 &__copyright{
  @include text(1.4rem, 400, 2.4rem, left);
  border-top: 1px solid #fff;
  color: #fff;
  background:#0B1A28;
  text-decoration: none;
  padding: 24px 0;
  width: 100%;
  text-align: center;
 }
 &__box-contact{
  @include flex(flex-start, 8px, center);
  width: 200px;
 }
 &__icon{
  color: rgb(8, 2, 2);
  font-size: 24px;
 }
 @include for-size(tablet-landscape){
  &__hero{
    flex-wrap: wrap;
    gap: 4px;
  }
  &__box-logo{
    max-width: inherit;
    width: 100%;
  }
  &__legal-box{
    min-width: inherit;
    &:nth-child(2){
      min-width: 250px;
      gap: 16px;
    }
  }
 }
}
</style>
