<template>
  <div class="body">
  <div class="container">
    <h3> GRUPO VANGUARDIA </h3>
    <div class="bar">
      <div class="progress"></div>
    </div>
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
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 85vh;
      padding: 16px;
    }
    
    .bar {
    height:.2em;
    width:100%;
    max-width: 30em;
    margin: 0 auto;
    border-radius:10px;
    background:transparent;
    box-shadow:inset 0px 0px 8px rgb(194, 194, 194);;
    overflow:hidden;
    padding:5px;
    }
    
    .progress {
    height:3px;
    margin-top: -1px ;
    border-radius:inherit;
    width:0;
    background:#ff5b20de;
    animation:load 2s linear infinite;
    animation-delay:.5s;
    }
    
    
    @keyframes load{
    0%{
    width:0%;
    }
    50%{
    width:100%;
    }
    100% {
    width:0%;
    float:right;
    }
    }
</style>
