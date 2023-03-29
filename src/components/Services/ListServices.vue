<template>
  <div class="list"
  :class="'list--' + type"
  >
    <div class="list__content-box"
    :class="'list__content-box--' + type"
    v-for="(service, index) in listServices"
    :key="index"
    >
      <h2 class="list__tit">{{service.titulo}}</h2>
      <div class="list__content-text">
        <p class="list__text">{{service.description}}</p>
      </div>
    </div>
  </div>
  
</template>
<script lang="ts" setup>
  import { defineProps } from "vue";

  const active = ref(1);

 const props = defineProps<{
      
      listServices: Array<{
        titulo: string,
        description: string,
      }>,
      type?: string,
      
  }>();
  
</script>
<style lang="scss" scoped>
@import "@/assets/scss/Mixins";
.list{
  width: 100%;
  @include flex(flex-start, 32px, inherit);
  flex-direction: column;
  &--home{
    flex-wrap: wrap;
    width: 100%;
    flex-direction: row
  }
  &__content-box{
    @include flex(flex-start, false, inherit);
    flex-direction: column;
    border-left: 1px solid var(--primary-color)!important;
    padding-left: 24px;
    padding:0px 16px;
    &--home{
      width: 48%;
    }
  }
  &__tit{
    @include text(2.4rem, 400, 3.2rem, left);
    
  }
  &__content-text{
    @include text(1.6rem, 400, 2.8rem, left);
    
  }
}
</style>