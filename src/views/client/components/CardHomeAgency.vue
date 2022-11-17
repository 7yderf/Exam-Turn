<template>
  
  <div class="home__agency-card">
    <img
      :src="card?.img"
      alt=""
      class="home__agency-img"
    />
    <p class="home__agency-txt">{{card?.title}}</p>
  </div>
  
</template>

<script >
import "@/assets/styles/views/Home.scss";

export default {
  name: "CardAgency",
  props: {
    card: Object,

  },
  

};
</script>

<style lang="scss" >

</style>
