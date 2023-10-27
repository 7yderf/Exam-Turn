<template>
  <section
    ref="servic"
    class="markets"
  >
    <div class="finance__background">
      <article class="finance__hero container">
        <div class="finance__hero-img">
          <MarketsImgCircleApp
            :img_top="'/circle_4.png'"
            :image_bottom="'/icon-go.png'"
            :type="'services'"
          />
        </div>
        <div class="finance__hero-tit">
          <h2 style="color:white">
            Finance
          </h2>

        </div>
      </article>
    </div>
    <div class="markets__hero-back js">
      <article class="container markets__hero">
        <div class="markets__hero-content">
          <h1 style="color:#212529">Finance</h1>
          <div class="markets__hero-img markets__hero-img">
            <img
              src="../assets/images/beyond-black.png"
              alt=""
              style="filter: none;"
            >
          </div>
          <div class="markets__hero-img markets__hero-img--logo">
            <img
              src="../assets/images/icon-go.png"
              alt=""
              style="filter: none;"
            >
          </div>
        </div>
        <div class="markets__hero-content markets__hero-content--bottom">

          <h3 style="color:#212529">{{ $t('finance-tit-hero') }}</h3>

        </div>
        <div class="markets__hero-content markets__hero-content--bottom pt-5">
          <p style="color:#212529">{{ $t('finance-text-hero-1') }}
          </p>
        </div>
      </article>
    </div>

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
@import "@/assets/scss/Mixins";
@import "@/assets/scss/Markets.scss";
.finance{
  &__background{
    @include background-img(url('/finance-patron.jpg'));
  }
  &__hero{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 56px;
  }
  
}
</style>
