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
              <h4>{{ $t('connect-tit-hero') }}</h4>
              <p>{{ $t('connect-text-hero-1') }}<br />
              </p><h5>{{ $t('connect-text-hero-2') }}</h5>
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
        class="connect__card-button"
      >
        {{ $t('connect-buton-pay') }}
      </button>
    </article>
    <article class="connect__cards-icons container">
      <div class="connect__box-cards">
        <icon
          name="ri:bit-coin-fill"
          class="connect__cards-icon"
        />
        <h5>{{ $t('connect-card-tit-1') }}</h5>
        <p>{{ $t('connect-card-text-1') }}</p>
      </div>
      <div class="connect__box-cards">
        <icon
          name="ri:bank-card-fill"
          class="connect__cards-icon"
        />
        <h5>{{ $t('connect-card-tit-2') }}</h5>
        <p>{{ $t('connect-card-text-2') }}</p>
      </div>
      <div class="connect__box-cards">
        <icon
          name="ri:money-dollar-circle-fill"
          class="connect__cards-icon"
        />
        <h5>{{ $t('connect-card-tit-3') }}</h5>
        <p>{{ $t('connect-card-text-3') }}</p>
      </div>
      <div class="connect__box-cards">
        <icon
          name="ri:shield-check-fill"
          class="connect__cards-icon"
        />
        <h5>{{ $t('connect-card-tit-4') }}</h5>
        <p>{{ $t('connect-card-text-4') }}</p>
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
            <h3>{{ $t('connect-baner-tit-1') }}</h3>
            <p>{{ $t('connect-baner-text-1') }}</p>
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
        {{ $t('connect-nft') }}
      </p>
    </div>
    <article class="paused connect__broker">
      <div class="connect__whoAre container connect__whoAre--wrap">

        <div class="connect__whoAre-box">
          <div class="connect__whoAre-blur" />
          <div class="connect__whoAre-content">
            <h3> {{ $t('connect-baner-tit-2') }}</h3>
            <p>{{ $t('connect-baner-text-2') }}</p>
          </div>
        </div>
        <img
          src="../assets/images/trading-2.png"
          class="connect__whoAre-img"
          alt=""
        >
      </div>
    </article>
    <article class="paused connect__broker connect__broker--send">
      <article class="connect__send container">
        <img
          src="../assets/images/pensar-back.png"
          class="connect__whoAre-img"
          alt=""
        >
        <div class="connect__whoAre-box connect__whoAre-box--send">
          <div class="connect__whoAre-blur" />
          <Contact class="connect__form" />
        </div>
      </article>
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
