<template>
  <ul class="pagination">
    <!-- Enlace Anterior -->
    <li :class="{ 'pagination__page-item': true, }">
      <button @click="sendInfo(useApiLink(prevLink))" 
        class="pagination__page-link" 
        :disabled="!canGoBack"
        :data-active="canGoBack"
      >
        <icon name="ri:arrow-left-s-fill" class="pagination__icon" /> 
      </button>
    </li>

    <!-- Enlaces de índices -->
    <li
      v-for="(link, index) in visibleLinks"
      :key="index"
      :class="{ 'pagination__page-item': true, active: link.active }"
    >
      <button @click="sendInfo(useApiLink(link.url))" class="pagination__page-link">
        <span class="pagination__text">{{ link.label }}</span>
      </button>
    </li>

    <!-- Enlace Siguiente -->
    <li :class="{ 'pagination__page-item': true, }">
      <button 
        @click="(sendInfo(useApiLink(nextLink)))" 
        class="pagination__page-link" 
        :disabled="!canGoNext"
        :data-active="canGoNext"
        >
        <icon name="ri:arrow-right-s-fill" class="pagination__icon" />
      </button>
    </li>
    
  </ul>
</template>

<script setup>

const emit = defineEmits()

const sendInfo = (link) => {
  emit('linkPagination', link)
}

const props = defineProps({
  links: {
    type: Array,
    required: true,
  },
  current: Number
});


const canGoBack = computed(() => props.current >= 2);
const canGoNext = computed(() => props.current < (props.links?.length -3));



const prevLink = computed(() => {
  if (canGoBack.value) {
    return props.links[props.current - 1].url;
  }
  return '#';
});

const nextLink = computed(() => {
  if (canGoNext.value) {
    return props.links[props.current + 1].url;
  }
  return '#';
});

const visibleLinks = computed(() => {
  // Obtén los tres enlaces de índice más cercanos a la página actual
  const startIndex = Math.max(1, props.current - 1);

  const endIndex = Math.min(startIndex + 3, (props.links.length-1));
  return props.links.slice(startIndex, endIndex);
});
</script>


<style lang="scss" scoped>
@import "@/assets/scss/Mixins";
.pagination {
  $root: &;
 @include flex(flex-end);
  list-style: none;
  padding: 0;

  &__page-item {
    margin: 0 5px;
  }
  &__icon{
    color: var(--text-color);
    margin: 0;
    width: 18px;
    height: 24px;
    
  }
&__text{
      @include flex;
        margin: 0;
        width: 14px;
        height: 24px;

    }
  
  &__page-link {
    @include button(outline);
    border-radius: 2px;
    border: 1px solid var(--neutral-100, #D9D9D9);
    background: var(--neutral-0, #FFF);
    padding: 4px 8px;
    gap: 0px;
    margin: auto;
    flex-grow: 1;
    height: 100%;
    &[data-active="true"]{
      background: var(--primary-darker);
      #{$root}__icon{
        color: var(--text-invert)!important;
      }
    }
  }

  &__page-link[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .active {
    #{$root}__page-link {
    background: var(--text-color);
    #{$root}__text,
    #{$root}__icon{
      color: var(--text-invert)!important;
    }
  }
}
  
}

</style>