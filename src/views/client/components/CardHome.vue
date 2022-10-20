<template>
  
    <div class="home__security-card">
      <div class="home__security-box">
        <img :src="card.img" alt="" class="home__security-img" />
      </div>
      <div class="home__security-border"></div>
      <p class="home__security-txt">{{card.title}}</p>
      <p class="home__security-subtext">{{card.text}}</p>
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
