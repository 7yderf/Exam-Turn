<template>
  <div class="body">
    <div class="container">
      <span class="loader"></span>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .body  {
    width: 100%;
    background:  #020202 !important;
    }
    
    
    h3 {
    font-size:1.5em;
    font-weight:300;
    letter-spacing:.7em;
    text-shadow:0px 0px 20px #ff5b20de;
    color: black;
    display:inline-block;
    margin-bottom: 16px;
    padding-left: 24px;
    }
    
    
    .container {
      font-size: 16px;
      text-align: center;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px;
    }
    
    .loader {
      position: relative;
      width: 85px;
      height: 50px;
      margin: 4px;
      background-repeat: no-repeat;
      background-image: linear-gradient(#EBEBEB 50px, transparent 0),
                        linear-gradient(#EBEBEB 50px, transparent 0),
                        linear-gradient(#EBEBEB 50px, transparent 0),
                        linear-gradient(#EBEBEB 50px, transparent 0),
                        linear-gradient(#EBEBEB 50px, transparent 0),
                        linear-gradient(#EBEBEB 50px, transparent 0);
      background-position: 0px center, 15px center, 30px center, 45px center, 60px center, 75px center, 90px center;
      animation: rikSpikeRoll 1s  linear infinite alternate;
    }
  @keyframes rikSpikeRoll {
    0% { background-size: 2px 3px;}
    16% { background-size: 2px 50px, 2px 3px, 2px 3px, 2px 3px, 2px 3px, 2px 3px}
    33% { background-size: 2px 30px, 2px 50px, 2px 3px, 2px 3px, 2px 3px, 2px 3px}
    50% { background-size: 2px 10px, 2px 30px, 2px 50px, 2px 3px, 2px 3px, 2px 3px}
    66% { background-size: 2px 3px, 2px 10px, 2px 30px, 2px 50px, 2px 3px, 2px 3px}
    83% { background-size: 2px 3px, 2px 3px,  2px 10px, 2px 30px, 2px 50px, 2px 3px}
    100% { background-size: 2px 3px, 2px 3px, 2px 3px,  2px 10px, 2px 30px, 2px 50px}
  }
</style>
