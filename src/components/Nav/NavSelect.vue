<script lang="ts" setup>
 const windowSize = useSizeResponsive();
 const toggler = useToggler();
 const useToggle = useShowMenu();
 
const props = defineProps({
  dataActive: {
    type: Boolean,
    default: false,
  },
});


const changePage = () => {
  toggler.value = false;
};

const showButton = () => {
  useToggle.value = !useToggle.value;
};

</script>

<template>
  <div class="nav-opcion" :data-active="dataActive">
    <NuxtLink class="nav-link" :data-active="dataActive" to="/products" @click="() => changePage()" > Productos </NuxtLink>
    <icon name="ri:arrow-down-s-line" class="icon" @click="()=>showButton()" :data-active="dataActive" :data-show="useToggle"/>
  </div>
 
</template>
<style lang="scss" scoped>
@import "@/assets/scss/Mixins";
$color-text: var(--text-invert);
.nav-link {
  color: var(--text-invert);
  text-transform: uppercase!important;
  &[data-active="true"] {
    color: var(--text-color);
    font-weight: 600;
  }
}
.nav-opcion{
  @include flex;
  &[data-active="true"] {
    justify-content: space-between;
  }
  a{
    margin: 0;
    font-weight: 500;
    color: $color-text;
    margin-right: 1rem;
  }
  .icon{
    transition: .2s;
  }
  .icon[data-active="true"]{
    color: var(--text-color);
  }
  .icon[data-show="true"]{
    transform: rotate(180deg);

  }
}

</style>