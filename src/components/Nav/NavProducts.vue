<script lang="ts" setup>
const useToggle = useShowMenu();
const toggler = useToggler();
const device = ref<boolean>(true);
const active = ref<string>("");

const showButton = (value: string) => {
  
  if (active.value == value) {
    active.value = "";
  } else {
    active.value = value;
  }
  
};

watch(
    () => toggler.value,
    (value) => {
      value && (active.value = "");
      
    }
  );

onMounted(async () => {
  const { windowSize } = useMediaQuery("(min-width: 768px)");
  device.value = windowSize.value;
  watch(
    () => windowSize.value,
    (value) => {
      device.value = value;
      value && (active.value = "");
    }
  );
});

</script>

<template>
  
  <nav class="products" :data-show="useToggle" >
    <div class="products__box-hero">
      <div class="container products__hero">
        <p>Todos</p>
        <p>Nuevos</p>      
        <p>seminuevos</p>
      </div>
    </div>
    <div class="container products__content">
      <div class="products__box">
        <div class="products__header-opcions" @click="!device && showButton('cardio')" >
          <h5>Cardio</h5>
          <icon name="ri:arrow-down-s-line" class="icon" :data-show="'cardio' == active" />
        </div>
        <div class="products__opcions" :active="'cardio' == active">
          <a href="#">lorem</a>
          <a href="#">lorem</a>
          <a href="#">lorem</a>
          <a href="#">lorem</a>
        </div>
      </div>
      <div class="products__box">
        <div class="products__header-opcions" @click="!device && showButton('fuerza')" >
          <h5>Fuerza</h5>
          <icon name="ri:arrow-down-s-line" class="icon" :data-show="'fuerza' == active" />
        </div>
        <div class="products__opcions" :active="'fuerza' == active" >
          <a href="#">lorem</a>
          <a href="#">lorem</a>
          <a href="#">lorem</a>
          <a href="#">lorem</a>
        </div>
      </div>
      <div class="products__box">
        <div class="products__header-opcions" @click="!device && showButton('peso')" >
          <h5>Peso</h5>
          <icon name="ri:arrow-down-s-line" class="icon" :data-show="'peso' == active" />
        </div>
        <div class="products__opcions" :active="'peso' == active" >
          <a href="#">lorem</a>
          <a href="#">lorem</a>
          <a href="#">lorem</a>
          <a href="#">lorem</a>
        </div>
      </div>
      <div class="products__box">
        <div class="products__header-opcions" @click="!device && showButton('accesorios')"  >
          <h5>Accesorios</h5>
          <icon name="ri:arrow-down-s-line" class="icon" :data-show="'accesorios' == active" />
        </div>
        <div class="products__opcions" :active="'accesorios' == active">
          <a href="#">lorem</a>
          <a href="#">lorem</a>
          <a href="#">lorem</a>
          <a href="#">lorem</a>
        </div>
      </div>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/Mixins";
$color-text: var(--text-invert);

.products{
  @include flex(flex-start, false, flex-start);
  flex-direction: column;
  flex-wrap: wrap;
  position: absolute;
  width: 100%;
  background: white;
  &[data-show="false"]{
    display: none;
  }
&__box-hero{
  background: #F2F2F2;
  width: 100%;
}
&__hero{
  @include flex(flex-start, 16px, flex-start);
  width: 100%!important;
  color:  var(--text-color);
  p{
    font-weight: 700;
    text-transform: uppercase;
    padding: 4px 16px;

    &:hover{
      background: var(--primary-darker);
      color: var(--text-invert);
    }
  }
  
}
&__content{
  @include flex;
  width: 100%;
  padding: 8px 0;
}
&__box{
  @include flex(flex-start, false, flex-start);
  flex-direction: column;
  gap: 8px;
  width: 25%;
  padding: 1rem;
  h5{
    letter-spacing: 0.312px;
  }
  a{
    color: var(--text-color);
    font-weight: 700;
  }
}
&__header-opcions{
  @include flex(space-between);
  width: 100%;
}
&__opcions{
  @include flex;
  flex-direction: column;
  gap: 8px;
  
}
.icon{
  display: none;
}
}
.products{
  
  @include for-size(tablet-portrait) {
    position: relative;
    margin-top: 24px;
    &__content{
      flex-direction: column;
      gap: 4px;
    }
    &__header-opcions{
      h5{
        font-size: 1.8rem;
        font-weight: 600;
      }
    }
    &__box{
      width: 100%;
    }
    .icon{
      color: var(--text-color);
      display: block;
      transition: .2s;
      &[data-show="true"]{
        transform: rotate(180deg);
        transition: .2s;
      }
    }
    &__opcions{
      display: none;
      &[active="true"]{
        display: flex;
      }
    }
  }
}
</style>