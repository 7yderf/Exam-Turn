<script lang="ts" setup>

defineProps<{
 icon?: string,
 imgSrc?: string,
 text?: String,
 title?: String,
 styles?: { [key: string]: string}
 from?: string
  link?: { to: string, text: string, target?: string}
}>()

</script>
<template>
  <div
    :data-title="!!title && !styles?.flexDirection"
    class="icon-text"
    :data-from="from"
    :style="{
      '--align-items': styles?.alignItems || 'center',
      '--justify-content': styles?.justifyContent || 'center',
      '--flex-direction': styles?.flexDirection || 'row',
      '--gap': styles?.gap || '10px',
      '--textDirection': styles?.textDirection || 'left',
    }"
  >
    <img
      v-if="imgSrc"
      :src="imgSrc"
      alt="icon"
      class="icon-img"
    />
    <icon
      v-if="icon"
      :name="icon"
    />
    <div
      class="icon-text__box"
      :data-type-color="styles?.textTypeColor || false"
    >
      <h6 v-if="title">
        {{ title }}
      </h6>
      <p v-if="text">
        {{ text }}
      </p>
      <nuxt-link
        v-if="link"
        :to="link.to"
        :target="link.target || ''"
      >
        {{ link.text }}
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" setup>
@import "@/assets/scss/Mixins";
.icon-text{
//configuración inicial *NO BORRAR*
@include flex(var(--justify-content), var(--gap), var(--align-items));
  flex-direction: var(--flex-direction);
  &[data-title="true"]{
   align-items: flex-start;
  }
  .icon{
    width: 40px;
    min-width: 40px;
    height: 40px;
    color: #82d8d1;
  }
  &__box{
    h6,p, a{
      text-align: var(--textDirection);
      color: var(--text-color);
    }
    &[data-type-color="binary"]{
      h6,p, a{
        color: var(--text-invert);
      }
    }
    &[data-type-color="custom"]{
      h6,p, a{
        color: var(--text-custom);
      }
    }
  }
  // custom *dependera de la variavle from*
  &[data-from="home"]{
    gap: 24px;
    img{
      width: 50px;
      height: 50px;
    }
    h6{
      @include text(2.4rem, 700, 3rem, left);
    }
  }
}
.home{
  &__contact-item{
    img{
      width: 60px;
      height: 60px;
    }
  }
  &__contact-box-list{
    @include flex(
      flex-start,
      16px,
      flex-start
    );
    flex-direction: column;
    margin-top: 40px;
    h6{
      @include text(2.4rem, 700, 3rem, left);
    }
  }
}
.about{
  &__vision-item{
    h6{
      @include text(2rem, 700, 2.4rem, left);
    }
    p{
      @include text(1.6rem, 400, 2.4rem, left);
    }
  }
  &__metrics-item{
    h6{
      @include text(3.6rem, 800, 4rem, center);
      margin-bottom: 8px;
    }

  }
}
.sellers{
  &__item{
    margin-bottom: 8px;
    h6{
      @include text(1.8rem, 600, 2rem, left);
    }
    p{
      @include text(1.6rem, 400, 2rem, left);
    }
  }
}
.services{
  &__item{
    h6{
      @include text(1.8rem, 600, 2.2rem, center);
      margin-bottom: 8px;
    }
    img{
      width: 70px;
      height: 70px;
    }
  }
}
</style>
