<!-- eslint-disable no-tabs -->
<template>
  <section
    ref="servic"
    class="services"
  >
    <div class="services__home-back js">
      <article
        class=" container services__hero segmenter "
        style="background-image: url(_nuxt/assets/images/backHome.png)"
      />
      <article class=" container services__hero trigger-headline trigger-headline--hidden">
        <div class="services__hero-tit">
          <span><p>{{ $t('home-hero-title') }}</p></span>
          <span class="services__hero_tit-top">
            <span>{{ $t('home-hero-title-2') }}</span> {{ $t('home-hero-title-2-span') }}
          </span>
          <span class="services__hero_tit-top services__hero_tit-top--rigth">
            {{ $t('home-hero-title-3') }}<span> {{ $t('home-hero-title-3-span') }}</span>
          </span>

        </div>
        <span class="services__hero-img">
          <img
            src="../assets//images/Ellipse.png"
            class="elipse"
            alt=""
          />
          <img
            src="../assets/images/liner_back.png"
            class="services__hero-img-back"
            alt=""
          />
          <img
            src="../assets/images/icon-go.png"
            class="services__hero-img-icon"
            alt=""
          />
        </span>
      </article>
      <div class="container services__hero-bottom">
        <p>{{ $t('home-hero-subtitle') }}<span>{{ $t('home-hero-subtitle-span-1') }}</span> {{ $t('home-hero-subtitle-span-2') }}</p>
      </div>
    </div>
    <div class="services__box-city paused">

      <div class="glitch glitch--style-1">
        <div class="glitch__img" />
        <div class="glitch__img" />
        <div class="glitch__img" />
        <div class="glitch__img" />
        <div class="glitch__img" />
      </div>

      <div class="services__box-city-content" />
      <p>
        {{ $t('home-hero-subtitle-2') }}
      </p>
    </div>
    <article class="container paused">
      <div class="services__whoAre">
        <div class="services__whoAre-box">
          <div class="services__whoAre-blur" />
          <div class="services__whoAre-content">
            <h3>{{ $t('home-about-title') }}</h3>
            <p>{{ $t('home-about-text') }}</p>
          </div>
        </div>
        <img
          src="../assets/images/woman-enjoy.png"
          class="services__whoAre-img"
          alt=""
        >
      </div>
    </article>
    <article class="container services__products-card paused">
      <div class="services__card services__card--left services__paragraph-1">

        <img
          src="../assets//images/knowl-web.png"
          alt=""
          class="services__card-img"
        >

        <div class="services__card-txt">
          <h3>Knowledge</h3>
          <p>{{ $t('knowledge-text') }}</p>
          <button
            type="button"
            class="services__card-btn-read services__card-btn-read--radius"
          >
            {{ $t('read-more') }}
            <icon :name="'ri:arrow-right-fill'" />
          </button>
        </div>
      </div>
      <div class="services__card services__card--rigth services__paragraph-1">

        <img
          src="../assets//images/finnace_web.png"
          alt=""
          class="services__card-img"
        >

        <div class="services__card-txt">
          <h3>Finance</h3>
          <p>{{ $t('finance-text') }}</p>
          <button
            type="button"
            class="services__card-btn-read services__card-btn-read--radius"
          >
            {{ $t('read-more') }}
            <icon :name="'ri:arrow-right-fill'" />
          </button>
        </div>
      </div>
      <div class="services__card services__card--left services__paragraph-1">

        <img
          src="../assets//images/knw_web.png"
          alt=""
          class="services__card-img"
        >

        <div class="services__card-txt">
          <h3>Connect</h3>
          <p>{{ $t('connect-text') }}</p>
          <button
            type="button"
            class="services__card-btn-read services__card-btn-read--radius"
          >
            {{ $t('read-more') }}
            <icon :name="'ri:arrow-right-fill'" />
          </button>
        </div>
      </div>
      <div class="services__card services__card--rigth services__paragraph-1">

        <img
          src="../assets//images/markets_web.png"
          alt=""
          class="services__card-img"
        >

        <div class="services__card-txt">
          <h3>Markets</h3>
          <p>{{ $t('markets-text') }}</p>
          <button
            type="button"
            class="services__card-btn-read services__card-btn-read--radius"
          >
            {{ $t('read-more') }}
            <icon :name="'ri:arrow-right-fill'" />
          </button>
        </div>
      </div>
    </article>
    <article class="container services__partners">
      <h2>{{ $t('parners-title') }}</h2>

      <div class="services__partners-img">
        <img
          src="../assets/images/partners/axi.png"
          alt=""
        >
        <img
          src="../assets/images/partners/bingx.png"
          alt=""
        >
        <img
          src="../assets/images/partners/bitget.png"
          alt=""
        >
        <img
          src="../assets/images/partners/okx.png"
          alt=""
        >
        <img
          src="../assets/images/partners/part1.png"
          alt=""
        >
      </div>

    </article>
    <article class="container paused">
      <div class="services__process">
        <div class="services__process-box">
          <div class="services__process-blur" />
          <div class="services__process-content">
            <h3>{{ $t('success-story-title') }}</h3>
            <p>{{ $t('success-story-text') }}</p>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>

const servic = ref(null)

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
  const headline = document.querySelector('.trigger-headline')

  const segmenter = new Segmenter(document.querySelector('.segmenter'), {
    pieces: 9,
    positions: [
      {
        top: 30, left: 5, width: 40, height: 80,
      },
      {
        top: 50, left: 25, width: 30, height: 30,
      },
      {
        top: 5, left: 75, width: 40, height: 20,
      },
      {
        top: 30, left: 45, width: 40, height: 20,
      },
      {
        top: 45, left: 15, width: 50, height: 40,
      },
      {
        top: 10, left: 40, width: 10, height: 20,
      },
      {
        top: 20, left: 50, width: 30, height: 70,
      },
      {
        top: 0, left: 10, width: 50, height: 60,
      },
      {
        top: 70, left: 40, width: 30, height: 30,
      },
    ],
    animation: {
      duration: 2000,
      easing: 'easeInOutCubic',
      delay: 0,
      opacity: 1,
      translateZ: 85,
      translateX: { min: -20, max: 20 },
      translateY: { min: -20, max: 20 },
    },
    parallax: true,
    parallaxMovement: { min: -10, max: -5 },
    onReady() {
      setTimeout(() => {
        segmenter.animate()
        headline.classList.remove('trigger-headline--hidden')
      }, 200)
    },
  })
})
useHead({
  link: [
    { rel: 'stylesheet', href: '_nuxt/assets/css/component.css' },
    { rel: 'stylesheet', href: '_nuxt/assets/css/demo.css' },
    { rel: 'stylesheet', href: '_nuxt/assets/css/normalize.css' },
  ],
  script: [
    {
      async: true,
      src: '_nuxt/assets/js/anime.min.js',
      body: true,
    },
    {
      async: true,
      src: '_nuxt/assets/js/imagesloaded.pkgd.min.js',
      body: true,
    },
    {
      async: true,
      src: '_nuxt/assets/js/main.js',
      body: true,
    },
  ],
  noscript: [
    {},
  ],
})
</script>
<style lang="scss" scoped>
@import "@/assets/scss/Services";
@import "@/assets/scss/demo3.scss";
</style>
