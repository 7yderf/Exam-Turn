<template>

  <footer class="footer">
    <div class="footer__hero container">
      <div class="footer__box-logo">
        <p>Siguenos en la red</p>
        <div class="footer__box-contact">
          <a
            href="https://es-la.facebook.com/people/Optimum-Equipo/100093244458686"
            target="_blank"
            class="footer__contact"
          >
            <Icon
              class="footer__icon"
              name="ic:baseline-facebook"
            />
          </a>
          <a
            href="https://www.instagram.com/optimumequipo"
            target="_blank"
            class="footer__contact"
          >
            <Icon
              class="footer__icon"
              name="ri:instagram-fill"
            />
          </a>
          <a
            href="https://youtube.com/@optimumequipo"
            target="_blank"
            class="footer__contact"
          >

            <Icon
              class="footer__icon"
              name="ri:youtube-fill"
            />
          </a>
        </div>
      </div>

      <div class="footer__legal-box">
        <h5>Información</h5>
        <NuxtLink
          class="footer__legal-link"
          :to="'/legales/aviso-privacidad'"
        >
          Actividades
        </NuxtLink>
        <NuxtLink
          class="footer__legal-link"
          :to="'/legales/politicas-garantias'"
        >
          Valores
        </NuxtLink>
        <NuxtLink
          class="footer__legal-link"
          :to="'/legales/terminos-condiciones'"
        >
          Servicios
        </NuxtLink>
        <NuxtLink
          class="footer__legal-link"
          :to="'/legales/terminos-condiciones'"
        >
          contacto
        </NuxtLink>

      </div>
      <div class="footer__legal-box">
        <img
          src="../assets/images/beyond.png"
          alt=""
          class="footer__turn"
        >

      </div>
    </div>
    <p class="footer__copyright container">
      © 2023 Copyright Exsin Equipo.
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
 background:#293831;
 padding: 64px 0 40px;

 &__turn{
  width: 100%;
  max-width: 200px;
 }

 &__hero{
  @include flex(space-between, 16px, flex-start);
  padding: 0 16px;
 }
 &__box-logo{
  @include flex(center, 16px, flex-start);
  flex-direction: column;
  max-width: 200px;
  flex-grow: 1;
  p{
    color: var(--text-invert);
  }

 }
 &__legal-box{
  @include flex(center, 8px, flex-start);
  flex-direction: column;
  min-width: 300px;

 p,h5{
  color:var(--text-invert);
 }
 &:nth-child(2){
  min-width: 250px;
  gap: 20px;
}
 }
 &__legal-link{
  @include text(1.4rem, 400, 2.4rem, left);
  color: #fff;
  text-decoration: none;
 }
 &__copyright{
  @include text(1.4rem, 400, 2.4rem, left);
  border-top: 1px solid #fff;
  color: #fff;
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
  color: white;
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
  &__turn{
    padding: 16px 0;
   }
 }
}
</style>
