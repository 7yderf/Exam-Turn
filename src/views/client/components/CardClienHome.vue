<template>
  
  <div class="home__client-card">
    <div class="home__client-box">
      <img :src="card.img" alt="" class="home__client-img" />
      <div class="home__client-img-box" >
        <p class="home__client-text">{{card.name}}</p>
        <p class="home__client-subtext">{{card.city}}</p>
      </div>
    </div>
    <div class="home__client-score-box">
      <p class="home__client-score-text">{{card.scoreText}}</p>
      <img :src="card.scoreImg" alt="" class="home__client-score-img">
    </div>
    <p class="home__client-txt">{{card.text}}</p>
    <div class="home__client-ubication-box">
      
      <img :src="card.ubicationImg" alt="" class="home__client-ubication-img">
      <p class="home__client-ubication-text">{{card.ubicationText}}</p>
    </div>
  </div>
  
</template>

<script >
import "@/assets/styles/views/Home.scss";

export default {
  name: "CardHome",
  props: {
    card: Object,
  },
  

};
</script>

<style lang="scss" >

</style>
