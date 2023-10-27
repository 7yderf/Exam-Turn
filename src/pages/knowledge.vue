<template>
  <section
    ref="servic"
    class="knowledge"
  >
    <div class="knowledge__hero-back">
      <article class="knowledge__broker">
        <article class="container knowledge__hero">
          <div class="knowledge__hero-content">
            <h1>Knowledge</h1>
            <div class="knowledge__hero-img knowledge__hero-img">
              <img
                src="../assets/images/beyond-black.png"
                alt=""
              >
            </div>
            <div class="knowledge__hero-img knowledge__hero-img--logo">
              <img
                src="../assets/images/icon-go.png"
                alt=""
              >
            </div>
          </div>
        </article>
        <div class="knowledge__whoAre container">
          <div class="knowledge__whoAre-box">
            <div class="knowledge__whoAre-blur" />
            <div class="knowledge__whoAre-content">
              <h3>{{ $t('Knowledge-tit-hero') }}</h3>
              <p>{{ $t('Knowledge-text-hero-1') }}
              </p><h5>{{ $t('Knowledge-text-hero-2') }}</h5>
            </div>
          </div>
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
@import "@/assets/scss/knowledge.scss";
</style>
