<template>
  <a  href="https://api.whatsapp.com/send/?phone=3334944317" target="_blank" class="button-contact">
    <div class="button-contact__button">
      <img src="/icon/whatsapp.svg" alt="">
    </div>
  </a>
  </template>
  
  <script lang="ts" setup>
  
  </script>
  
  <style lang="scss" scoped>
  @import "@/assets/scss/Mixins";
  
  .button-contact {
    $root: &;
    @include flex;
    position: fixed;
    border-radius: 3px 0px 0px 3px;
    background: #f9f9f9;
    width: 70px;
    height: 55px;
    right: 0;
    bottom: 75px;
    z-index: 100;
    box-shadow: rgb(156, 156, 156) 0px 0px 5px;
    transition: .3s;
  
    &::after {
      @include flex(flex-start, false, center);
      @include text(1.2rem, 400, 1.6rem, left);
      padding-left: 8px;
      content: "Escribenos por Whatsapp \A Ir al chat";
      position: absolute;
      width: 78%;
      height: 98%;
      background: #1c9781;
      right: 0;
      transform: translateX(200%);
      transition: .3s;
      white-space: pre;
      color: white;
      letter-spacing: 1px;
      
    }
  
    &:hover {
      width: 230px;
      transition: .3s;
  
      &::after {
        transform: translateX(0%);
        transition: .3s;
      }
  
      #{$root}__button {
        transform: translateX(-90px);
        transition: .3s;
      }
    }
  
    &__button {
      @include flex;
      transform: translateX(0px);
      transition: .3s;
  
      img {
        width: 45px;
        height: 45px;
        
      }
  
    }
  }
  
  @media screen and (max-width: 768px) {
    .button-contact {
      $root: &;
      &::after {
        display: none;
      }
  
      &:hover {
        width: 70px;
  
        #{$root}__button {
          transform: translateX(0px);
  
        }
      }
    }
  
  }
  </style>
  