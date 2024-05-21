<!-- eslint-disable vue/max-len -->
<!-- eslint-disable vue/no-template-target-blank -->
<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<template>

  <footer class="footer">

    <div class="footer__box-contact">
      <a
        href=""
        target="_blank"
        class="footer__contact"
      >
        <Icon
          class="footer__icon"
          name="ic:baseline-facebook"
        />
      </a>
      <a
        href=""
        target="_blank"
        class="footer__contact"
      >
        <Icon
          class="footer__icon"
          name="ri:instagram-fill"
        />
      </a>
      <a
        href=""
        target="_blank"
        class="footer__contact"
      >

        <Icon
          class="footer__icon"
          name="ri:twitter-x-fill"
        />
      </a>
      <a
        href=""
        target="_blank"
        class="footer__contact"
      >

        <Icon
          class="footer__icon"
          name="ri:tiktok-fill"
        />
      </a>
      <a
        href=""
        target="_blank"
        class="footer__contact"
      >

        <Icon
          class="footer__icon"
          name="ri:linkedin-box-fill"
        />
      </a>
      <a
        href=""
        target="_blank"
        class="footer__contact"
      >

        <Icon
          class="footer__icon"
          name="ri:youtube-fill"
        />
      </a>
    </div>

  </footer>

</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
@import "@/assets/scss/Mixins";

.footer {
 @include flex;
 position: relative;
 &:before{
  content: '';
  position: absolute;
  top: 0;
  width:16%;
  height: 100%;
  background: var(--primary-color);
  z-index: -1;
  right: 0;
 }

 &__hero{
  @include flex(space-between, 16px, flex-start);
  padding: 0 16px;
 }
 &__box-contact{
  @include flex(flex-start, 8px, center);
  width: 100%;
 }
 &__icon{
  color: #4464AD;
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
 }
 &__follow{
  @include flex(center, 8px, center);
  width: auto!important;
  background: transparent!important;
  padding: 0!important;
  gap: 16px;
  &:before{
    display: none;
   }
  .footer__icon{
    color: var(--text-invert);
    font-size: 24px;
  }
}

}

</style>
