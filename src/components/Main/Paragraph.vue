<script lang="ts" setup>

type objecTitle = {
  h1?: string
  h2?: string
  h3?: string
  h4?: string
  h5?: string
  h6?: string
}

type txts = Array<string>

type txtWithIcon = {
  title?: string
  text?: string
  icon?: string
  imgSrc?: string
}

defineProps<{
  styles?: { [key: string]: string}
  title?: objecTitle
  text?: txts
  widthIcon?: Array<txtWithIcon>
  from?: string
  isTitle?: boolean
}>()

</script>
<template>
  <div
    class="paragraph"
    :data-from="from"
    :style="{
      '--title-direction': styles?.titleDirection || 'left',
      '--text-direction': styles?.textDirection || 'left',
      '--icon-flex-direction': styles?.iconFlexDirection || 'row',
      '--icon-align-items': styles?.iconAlignItems || 'center',
      '--align-items': styles?.alignItem || 'center',
      '--gap': styles?.gap || '10px',
    }"
  >
    <div
      v-if="title"
      class="paragraph__title"
      :data-is-title="isTitle"
      :data-type-color="styles?.tilteTypeColor || false"
    >
      <h1 v-if="title?.h1">
        {{ title?.h1 }}
      </h1>
      <h2 v-if="title?.h2">
        {{ title?.h2 }}
      </h2>
      <h3 v-if="title?.h3">
        {{ title?.h3 }}
      </h3>
      <h4 v-if="title?.h4">
        {{ title?.h4 }}
      </h4>
      <h5 v-if="title?.h5">
        {{ title?.h5 }}
      </h5>
      <h6 v-if="title?.h6">
        {{ title?.h6 }}
      </h6>
    </div>
    <div
      v-if="text"
      class="paragraph__text"
      :data-type-color="styles?.textTypeColor || false"
    >
      <p
        v-for="(txt, index) in text"
        :key="index"
      >
        {{ txt }}
      </p>
    </div>
    <div
      v-if="widthIcon"
      class="paragraph__text-icon"
    >
      <global-icon-text
        v-for="(txt, index) in widthIcon"
        :key="index"
        :title="txt?.title"
        :text="txt?.text"
        :icon="txt?.icon"
        :img-src="txt?.imgSrc"
        :from="from"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/mixins.scss";
.paragraph{
  @include flex(center, var(--gap), var(--align-items));
  flex-direction: column;
  &__title{
    &[data-is-title="true"]{
      &::after{
        content: '';
        width: 100%;
        height: 4px;
        max-width: 150px;
        background-color: var(--primary-color);
        margin: 16px auto;
        display: block;
      }
    }
    h1, h2, h3, h4, h5, h6{
     text-align: var(--title-direction);
     color: var(--text-color);

    }
    &[data-type-color="binary"]{
      h1, h2, h3, h4, h5, h6{
        color: var(--text-invert);
      }
    }
    &[data-type-color="custom"]{
      h1, h2, h3, h4, h5, h6{
        color: var(--text-custom);
      }
    }
  }
  &__text{
    p{
      text-align: var(--text-direction);
      color: var(--text-color);
    }
    &[data-type-color="binary"]{
      p{
        color: var(--text-invert);
      }
    }
    &[data-type-color="custom"]{
      p{
        color: var(--text-custom);
      }
    }
  }
  &__text-icon{
    @include flex(center, 10px);
    flex-direction: var(--icon-flex-direction);
    align-items: var(--icon-align-items);
    gap: 10px;
    padding: 8px 16px;
  }
}

.paragraph {
  $root: &;

  &[data-from="home"] {
    #{$root}__text-icon {
      gap: 24px;
    }
  }
}

.about {
  &__about {
    min-height: 400px;
  }
}
.sellers {
  &__title{
    h6{
      @include text(1.8rem, 600, 2.4rem, left);
    }
  }
}
.footer{
  &__item{
    p{
      @include text(1.4rem, 200, 1.8rem, left);
      margin-bottom: 4px;
      &:last-child{
        margin-bottom: 0px;
      }
    }
  }
}
</style>
