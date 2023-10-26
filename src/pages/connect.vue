<template>
  <section
    ref="servic"
    class="connect"
  >
    <div class="connect__hero-back">
      <article class="connect__broker">
        <article class="container connect__hero">
          <div class="connect__hero-content">
            <h1>Connect</h1>
            <div class="connect__hero-img connect__hero-img">
              <img
                src="../assets/images/beyond-black.png"
                alt=""
              >
            </div>
            <div class="connect__hero-img connect__hero-img--logo">
              <img
                src="../assets/images/icon-go.png"
                alt=""
              >
            </div>
          </div>
        </article>
        <div class="connect__whoAre container">
          <div class="connect__whoAre-box">
            <div class="connect__whoAre-blur" />
            <div class="connect__whoAre-content">
              <h4>Pensando en ayudar a nuestra comunidad a mantenerse conectada con sus productos, hemos desarrollado un grupo de soluciones financieras.</h4>
              <p>La tarjeta de débito cripto que le permite llevar sus activos digitales donde quiera para compras en tiendas o en línea.<br />
              </p><h5>Una tarjeta para todo lo que necesite</h5>
            </div>
          </div>
        </div>
      </article>
    </div>
    <article class="connect__card-debit container paused">
      <div class="connect__card-img">
        <img
          src="../assets/images/cardcoin-scaled-1-768x533.png"
          alt="card"
        >
      </div>
      <button
        type="button" 
        class="connect__card-button">
        Solicita tu tarjeta
      </button>
    </article>
    <article class="connect__cards-icons container">
      <div class="connect__box-cards">
        <icon name="ri:bit-coin-fill" class="connect__cards-icon" />
        <h5>Pague sus compras en línea</h5>
        <p>Utilice su Cryptocard para pagar cualquiera de sus compras en línea.</p>
      </div>
      <div class="connect__box-cards">
        <icon name="ri:bank-card-fill" class="connect__cards-icon" />
        <h5>Retirar efectivo</h5>
        <p>Ve a cualquier cajero automático y convierte tus activos digitales en efectivo en tu moneda local.</p>
      </div>
      <div class="connect__box-cards">
        <icon name="ri:money-dollar-circle-fill" class="connect__cards-icon" />
        <h5>¿Limites?</h5>
        <p>Límites de acceso que se adaptan a sus necesidades. Pague donde y cuando quiera.</p>
      </div>
      <div class="connect__box-cards">
        <icon name="ri:shield-check-fill" class="connect__cards-icon" />
        <h5>Control y seguridad</h5>
        <p>¿No encuentras tu tarjeta? páusala desde tu cuenta para que nadie pueda utilizarla. ¿La has encontrado? Actívala de nuevo y sigue disfrutando de tus bienes.</p>
      </div>
    </article>
    <article class="paused connect__broker">
      <div class="connect__whoAre container connect__whoAre--wrap">
        <img
          src="../assets/images/intercambio-01.png"
          class="connect__whoAre-img"
          alt=""
        >
        <div class="connect__whoAre-box">
          <div class="connect__whoAre-blur" />
          <div class="connect__whoAre-content">
            <h3>Intercambio Cripto-Fiat/Fiat-Cripto.</h3>
            <p>Al abrir una cuenta en GoBeyond, podrás cambiar tu Cripto a FIAT y tu dinero de FIAT a Cripto; también podrás intercambiar entre los diferentes tipos de divisas. <br/> Además, puedes intercambiar cripto por cualquier otro cripto.</p>
          </div>
        </div>
      </div>
    </article>
    <div class="connect__box-city paused">

      <div class="glitch glitch--style-1 nft">
        <div class="glitch__img" />
        <div class="glitch__img" />
        <div class="glitch__img" />
        <div class="glitch__img" />
        <div class="glitch__img" />
      </div>

      <div class="connect__box-city-content" />
      <p>
        EXPLORA NUESTROS NFT
      </p>
    </div>
    <article class="paused connect__broker">
      <div class="connect__whoAre container connect__whoAre--wrap">

        <div class="connect__whoAre-box">
          <div class="connect__whoAre-blur" />
          <div class="connect__whoAre-content">
            <h3>Gestione todas sus divisas en cualquier lugar del mundo</h3>
            <p>Si busca la mejor oferta para convertir divisas, pagar facturas internacionales o recibir dinero del extranjero, puede hacerlo todo cómodamente con una cuenta Gobeyond.</p>
          </div>
        </div>
        <img
          src="../assets/images/trading-2.png"
          class="connect__whoAre-img"
          alt=""
        >
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>

// eslint-disable-next-line import/no-extraneous-dependencies
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
const list = ref<any>(tm('markets-list-academy'))
const servic = ref(null)

watch(() => t('lang'), value => {
  list.value = tm('markets-list-academy')
})

function isVisible(elm: any) {
  const rect = elm.getBoundingClientRect()
  const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight)
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0)
}

const animationScroll = () => {
  window.addEventListener('scroll', e => {
    document.querySelectorAll('.paused').forEach(elm => {
      if (isVisible(elm)) // que sean visibles...
      { elm.classList.remove('paused') } // les quitamos la clase paused
    })
  })
}

onMounted(async () => {
  animationScroll()
})

</script>
<style lang="scss" scoped>
@import "@/assets/scss/connect.scss";
@import "@/assets/scss/demo3.scss";
</style>
