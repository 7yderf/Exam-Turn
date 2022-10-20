<template>
  <div class="col-lg-11 col-11 mx-auto my-5">
    <h1 class="ms-5 text-center fs-1 fw-bold mb-8 mt-10">{{title}}</h1>
  <div class="col-lg-12 col-xl-10 col-xxl-9 mx-auto">
    <div class="row carrusel__client">
      <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 mx-auto px-xxl-5 px-xl-10 px-md-2 carrusel__card" v-for="vehicle in vehicles" :key="vehicle">
        <CardVehicle :vehicle="vehicle" />
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import CardVehicle from './CardVehicle.vue'
import { onMounted } from 'vue';

  export default {
    components: {
      CardVehicle
    },
    props: {
      title: String,
      vehicles: Array
    },  
    setup(props) {
      onMounted(()=>{
        console.log(props)
      })
      return {
      };
    },
  };
</script>

<style lang="scss" scoped>

.carrusel__client{
  
  align-items: stretch;
    justify-content: center;
    display: flex;
    height: 100%;

  .carrusel__card{
    flex-grow: 1;
    flex-direction: column;
    display: flex;
    align-items: stretch;
    justify-content: center;
    max-width: 341px;
  }

}

</style>