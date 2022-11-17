<template>
  <footer class="foot">
    <div class="container-xxl">
      <div class="col-12 mx-auto">
        <div class="foot__content">
          <div class="foot__box foot__GV-Logotipo">
            <img
              src="@/assets/images/GV_Logotipo-Bco.png"
              style="max-width: 220px"
              class="img-fluid mx-auto mb-2"
              alt="toyota-white"
            />
            <div class="d-flex col-lg-6 col-4 mx-auto my-2"></div>
          </div>

          <div class="foot__box">
            <h2 class="foot__tit">Compra venta</h2>

            <p>
              <router-link to="/catalogo" class="foot__text">
                Compra un auto
              </router-link>
            </p>

            <p>
              <router-link to="/vende" class="foot__text">
                Vende tu auto
              </router-link>
            </p>
          </div>

          <div class="foot__box">
            <h2 class="foot__tit">Sucursales</h2>
            <p>
              <router-link to="/agencias" class="foot__text">
                Agencias
              </router-link>
            </p>
          </div>

          <div class="foot__box">
            <h2 class="foot__tit">Legal</h2>
            <a href="https://www.grupovanguardia.com/aviso-de-privacidad" target="_blank"><p class="foot__text">Aviso de Privacidad</p></a>
            <p class="foot__text">Términos y condiciones</p>
          </div>
          <div class="foot__box">
            <h2 class="foot__tit">Contacto</h2>
            <div class="foot__contact-box">
              <a href="https://www.facebook.com/grupovanguardiamx" target="_blank">
                <img
                src="@/assets/images/icons/icon-facebook.svg"
                alt=""
                class="foot__contact-img"
              />
              </a>
              <a href="https://www.instagram.com/grupovanguardiamx/" target="_blank">
                <img
                src="@/assets/images/icons/icon-instagram.svg"
                alt=""
                class="foot__contact-img"
              />
              </a>
              <a href="https://www.linkedin.com/company/grupovanguardia/?originalSubdomain=mx" target="_blank">
                <img
                src="@/assets/images/icons/icon-linkedin.svg"
                alt=""
                class="foot__contact-img"
              />
              </a>
              
            </div>
          </div>
        </div>
      </div>
      <hr class="text-light" />
      <div class="col-lg-12 mx-auto">
        <div class="row">
          <span class="col-lg-3 mx-auto text-gray text-center"
            >© 2022 Todos los derechos reservados</span
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/Mixins";
.foot {
  padding: 3em 2em;
  color: #f7f7f7;
  background-color: black;
  margin-top: auto;

  &__content {
    @include content(1200px);
    @include flex(space-between, false, baseline);
    flex-wrap: wrap;
    padding-bottom: 16px;
  }
  &__tit {
    @include text(2rem, 400, 2.6rem);
    padding-bottom: 16px;
  }
  &__text {
    @include text(1.4rem, 300, 2.4rem);
  }
  &__contact-box {
    @include flex(space-between, 8px, baseline);
  }
}
p {
  margin: 0;
  a {
    color: white;
  }
}
.foot {
  @include for-size(desktop) {
    &__GV-Logotipo {
      width: 100%;
      margin: auto;
      text-align: center;
      margin-bottom: 16px;
    }
  }
  @include for-size(tablet-portrait) {
    &__box {
      width: 50%;
      margin-bottom: 16px;
    }
    &__GV-Logotipo {
      width: 100%;
    }
  }
  @include for-size(phone-xbig) {
    &__box {
      width: 100%;
      margin-bottom: 16px;
    }
  }
}
</style>
