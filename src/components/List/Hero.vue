<script lang="ts" setup>
const emit:any = defineEmits()
const grid = ref<boolean>(true);

const toggleViews = (isGrid: boolean) => {
  console.log("🚀 ~ file: Hero.vue:6 ~ toggleViews ~ isGrid:", isGrid)
  emit('view', isGrid)
  grid.value = isGrid;
}

const props = defineProps({
  total: {
    type: Number,
    default: 1,
  },
  title: {
    type: String
  },
});

onMounted(async () => {
  const { windowSize } = useMediaQuery("(min-width: 769px)");
  // grid.value = windowSize.value;
  watch(
    () => windowSize.value,
    (value) => {
      console.log("🚀 ~ file: Hero.vue:26 ~ onMounted ~ value:", value);
      
      

      if(grid.value == false){
        console.log("🚀 ~ file: Hero.vue:29 ~ onMounted ~ grid.value:", grid.value);
        toggleViews(true)
      };
    }
  );
});

</script>
<template>

  <div class="market__top">
        <div class="market__title-content">
          <HomeTitles :title="title" />
          <p class="market__title-total">({{ total }})</p>
        </div>
        <div class="market__filter-box">
          <button class="market__btn-filter">
            <icon name="ri:equalizer-fill" class="market__btn-icon" />
            <span class="market__filter-text market__btn-filter--txt-filter">Filtrar y ordenar</span>
          </button>
          <button class="market__btn-filter market__btn-filter--grid" :data-view="grid" @click="(toggleViews(true))">
            <icon name="ri:layout-grid-fill" class="market__btn-icon" />
          </button>
          <button class="market__btn-filter market__btn-filter--grid" :data-view="!grid" @click="(toggleViews(false))">
            <icon name="ri:menu-fill" class="market__btn-icon" />
          </button>
          
        </div>
      </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/Mixins";
.market{
  $root: &;
  &__top{
    @include flex(space-between);
    padding-bottom: 16px;
    border-bottom: 1px solid var(--neutral-100, #D9D9D9);
  }
  &__title-content{
    @include flex(center, 8px, baseline);
  }
  &__filter-box{
    @include flex(center, 8px);
  }
  &__filter-text{
    margin-left: 6px;
    text-transform: uppercase
  }
  &__btn-icon{
    color: var(--text-color);
    margin: 0;
    width: 15px;
    
  }
  &__btn-filter{
    @include button(outline);
    border-radius: 2px;
    border: 1px solid var(--neutral-100, #D9D9D9);
    background: var(--neutral-0, #FFF);
    padding: 4px 8px;
    gap: 0px;
    margin: auto;
    flex-grow: 1;
    &[data-view="true"]{
      background: var(--text-color);
      #{$root}__btn-icon{
        color: var(--text-invert)!important;
      }
    }
   
  }

  @include for-size(tablet-portrait) {
     &__btn-filter{
      &--grid{
        display: none;
      }
      &--txt-filter{
        display: none;
      }
     }
  }
 

  
  
}
</style>