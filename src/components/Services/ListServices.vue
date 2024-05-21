<template>
  <div class="list">
    <div
      v-for="(service, index) in listServices"
      :key="index"
      class="list__content-box"
    >
      <h2 class="list__tit">
        {{ service.titulo }}
      </h2>
      <div class="list__content-text">
        <p class="list__text">
          {{ service.description }}
        </p>
      </div>
    </div>
  </div>

</template>
<script lang="ts" setup>
import { defineProps } from 'vue'

const active = ref(1)

const props = defineProps<{

      listServices: Array<{
        titulo: string,
        description: string,
      }>,

  }>()

</script>
<style lang="scss" scoped>
@import "@/assets/scss/Mixins";
.list{
  @include flex(flex-start, 32px, inherit);
  flex-direction: column;
  &__content-box{
    @include flex(flex-start, false, inherit);
    flex-direction: column;
    border-left: 1px solid var(--primary-color)!important;
    padding-left: 24px;
    padding:0px 16px;
  }
  &__tit{
    @include text(2.4rem, 400, 3.2rem, left);
    color: white;
  }
  &__content-text{
    @include text(1.6rem, 400, 2.8rem, left);
    color: white;
  }
}
</style>
