<script lang="ts" setup>
type dataWidth = {
  maxWidhtleft?: string
  maxWidhtRight?: string
  sizeCard?: string
  cards?: number
  gap?: string | number
}

defineProps<{
  styles?: dataWidth
}>()
</script>
<template>
  <section
    class="container flex-box__contact-section"
    :style="`gap: ${styles?.gap}`"
  >
    <div
      class="box flex-box__contact-left"
      :style="{
        '--max-width-left': styles?.maxWidhtleft,
      }"
    >
      <slot name="left" />
    </div>
    <div
      class="box flex-box__contact-right"
      :style="{
        '--max-width-rigth': styles?.maxWidhtRight,
      }"
    >
      <slot name="rigth" />
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/Mixins";

.flex-box{
  &__contact-section{
    @include flex(center,false,stretch);
    // max-height: 650px;
    padding: 32px;
  }

  &__contact-left{
    position: relative;
    max-width: var(--max-width-left);
  }
  &__contact-right{
    max-width: var(--max-width-rigth);
    position:relative;
  }

  @include for-size('tablet-landscape'){
    &__contact-section{
      flex-direction: column;
    }
  }
}

.about{
  &__vision {
    min-height: 500px;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.1);
  }
  @include for-size('tablet-landscape'){
    &__about{
      .flex-box__contact-left{
        min-height: 250px;
        max-width: inherit;
      }
    }
    &__vision{
      .flex-box__contact-right{
        min-height: 250px;
        max-width: inherit;
      }
    }
  }
}

.home{
  @include for-size('tablet-landscape'){
    &__contact{
      .flex-box__contact-right{
        margin: auto;
        margin-top: 16px;
      }
    }
  }
}

</style>
