<script lang="ts" setup>
type backgroundSrc = {
  imgSrc?: string
  blur?: boolean
  position?: string
}

type txtContent = {
  title?: string
  description?: string
}

type action = {
  text?: string
  to?: string
  type?: string
}

type btnActions = Array<action>

defineProps<{
  backSrc?: backgroundSrc,
  textContent?: txtContent,
  actions?: btnActions,
  from?: string
  styles?: { [key: string]: string}
}>()

</script>
<template>
  <article
    class="w-100 banner__hero position-relative"
    :data-from="from"
    :style="{ '--height': styles?.height || '500px' }"
  >
    <global-background-src
      :img-src="backSrc?.imgSrc"
      :blur="backSrc?.blur"
      :position="backSrc?.position"
    />
    <section class="banner__hero-section">
      <main-paragraph
        :styles="{ titleDirection: 'center', tilteTypeColor: 'binary', textTypeColor: 'binary' }"
        :title="{ h3: textContent?.title, h5: textContent?.description }"
        :from="from"
      />
      <div
        v-if="actions"
        class="banner__hero-actions container box"
      >
        <NuxtLink
          v-for="(btn, index) in actions"
          :key="index"
          type="button"
          class="banner__hero-action"
          :data-type="btn?.type"
          :to="btn?.to"
        >
          {{ btn?.text }}
        </NuxtLink>
      </div>
    </section>
  </article>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/mixins.scss";
.banner{

  &__hero{
    height: var(--height);
  }
  &__hero-section{
    @include flex(center, 10px);
    flex-direction: column;
    color: var(--text-invert);
    h4{
      text-align: center;
    }
    p{
      font-size: 2.4rem;
      text-align: center;
      line-height: 3.6rem;
    }
  }
  &__hero-actions{
    @include flex(center, 32px);
    flex-grow: initial;
  }
  &__hero-action{
    &[data-type="initial"]{
      @include button(solid, 8px);
    }
    &[data-type="outline"]{
      @include button(outline, 8px);
    }
    padding: 10px 24px 8px!important;
  }

  }

</style>
