<template>
  <div class="container col-lg-8 col-md-12">
    <h4 class="accordion-title">{{ title }}</h4>
    <div class="accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item" v-for="(item, index) in items" :key="index">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="'#flush-collapse-item-' + index"
            aria-expanded="false"
            :aria-controls="'flush-collapse-item-' + index"
          >
            {{ item.title }}
          </button>
        </h2>
        <div
          :id="'flush-collapse-item-' + index"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample-accordionFlushExample"
        >
          <div class="accordion-body">
            {{ item.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from "vue";
const props = defineProps<{
  title: string;
  items: Array<{
    title: string;
    description: string;
  }>;
}>();
</script>
<style lang="scss" scoped>
@import "@/assets/scss/Mixins";
.accordion-item {
  background: var(--neutral-5, #F2F2F2);
}
.accordion-button {
  color: var(--neutral-900, #1a1a1a);
  @include text(2.4rem, 500, normal);
  letter-spacing: 0.312px;
  background: var(--neutral-5, #F2F2F2);
  padding: 16px 0px;
}
.accordion-body {
  color: var(--neutral-900, #1a1a1a);
  @include text(1.6rem, 400, normal);
  line-height: 2.4rem; 
  padding: 16px 0px;
}
.accordion-flush .accordion-item {
  border-bottom: 1px solid var(--neutral-500, #808080);
}
.accordion-button:focus {
    border-color: none;
    box-shadow: none;
}
.accordion-title {
  padding-bottom: 24px;
}
</style>