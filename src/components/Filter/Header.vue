<script lang="ts" setup>

const closeDrawer = useCloseDrawer()
const setParams = useSetFilters()
// const router = useRouter()
const closeFilterParams = () => {
  closeDrawer.value = !closeDrawer.value
}
const setFilterParams = () => {
  setParams.value = !setParams.value
}
</script>
<template>
  <section class="drawer offcanvas-header">
    <header class="drawer__header">
      <h5>Buscar propiedades</h5>
      <button
        type="button"
        class="drawer__btn-filter"
        @click="setFilterParams"
      >
        <icon
          name="tdesign:clear-formatting"
          class="drawer__btn-icon"
        />
        <span class="drawer__filter-text drawer__btn-filter--txt-filter">Limpiar</span>
      </button>
    </header>
    <button
      type="button"
      class="btn-close text-reset"
      data-bs-dismiss="offcanvas"
      aria-label="Close"
      @click="closeFilterParams"
    />
  </section>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/Mixins";
.drawer{
  $root: &;
  flex-grow: 0;
  padding-top: 24px;
  padding-bottom: 24px;
  border: 5px solid #d7d7d7;;
  border-top: none;
  border-left: none;
  border-right: none;
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 36px;

  &__header{
    @include flex(space-between, 16px, flex-end);
    h5{
      font-size: 2.2rem
    }
  }
  &__btn-filter{
    @include button(outline);
    border-radius: 2px;
    border: 1px solid var(--neutral-100, #D9D9D9);
    background: var(--neutral-0, #FFF);
    color: var(--text-color);
    padding: 4px 8px;
    gap: 0px;
    margin: auto;
    flex-grow: 1;
    &:hover{
      background: #293831;
    }
  }
  &__btn-icon{
    color: var(--text-color);
    margin: 0;
    width: 15px;

  }
  &__filter-text{
    margin-left: 6px;
    text-transform: uppercase
  }
  .btn-close{
    font-size: 13px;
    margin-right: 0;
    opacity: 1;
  }
}
</style>
