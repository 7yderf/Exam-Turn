<template>
  <div 
  :class="arrow ? 'rows rows__arrow': 'rows'"
  >
    <div class="rows__proceso-paragraph">
      <h4>{{title}}</h4>
      <p>{{description}}</p>
    </div>
    <div 
      class="rows__proceso-line"
      :style="{width: distance}"
    >
    </div>
    <button>{{action}}</button>
    <div class="rows__proceso-border">

    </div>
  </div>
</template>
<script lang="ts" setup>
 import { defineProps } from "vue";

  const props = defineProps<{
        
      title: string,
      description: string,
      action: string,
      distance: string,
      arrow?: boolean
        
  }>();
</script>
<style lang="scss" scoped>
@import "@/assets/scss/Mixins";

.rows {
 @include flex(flex-start, 8px, center);
 width: 100%;
 max-width: max-content;
 flex-direction: row;
 position: relative;
 background: rgb(255, 255, 255);
padding-right: 36px;
padding-top: 15px;

&__proceso-paragraph{
  @include flex(flex-start, false, center);
  flex-direction: column;
  h4{
    @include text(2.4rem, 400, 3.2rem, left);
    width: 100%;
  }
  p{
    @include text(1.6rem, 400, 2.8rem, left);
    width: 100%;
  }
}
&__proceso-line{
  position: relative;
  height: 3px;
  background: #ED5A30;
  &::after{
    @include flex;
    content: "";
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #ED5A30;
    border-radius: 10px;
    margin-top: -4px;
    margin-left: -3px;
  }
}
 button{
    @include text(2rem, 300, 3.2rem, center);
    @include flex(flex-end, false, center);
    position: relative;
    cursor: pointer;
    letter-spacing: 1.2px;
    color: #FFFFFF;
    background: #ED5A30;
    padding: 8px 24px;
    max-width: max-content;
    border: 1px solid #ED5A30;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(2px);
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 20px;
    transition: all 0.3s ease-in-out;
    
 } 
 &__proceso-border{
  width: 150px;
    border: 2px solid #ED5A30;
    border-bottom: transparent;
    border-left: transparent;
    align-self: stretch;
    position: absolute;
    height: 100%;
    right: -2px;
    top: -2px;
    z-index: -1;
 }
 &__arrow{
  &::after{
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-top: 13px solid transparent;
    border-bottom: 13px solid transparent;
    border-left: 18px solid #ED5A30;
    right: -10px;
    bottom: -10px;
    
    rotate: 90deg;
  }
 }
}

</style>