<template>

  <div class="agencies__card" :data-active="active.some(agency => agency == card.name)">
    <div class="agencies__box">
      <img :src="card.img ?? imagenDefault" alt="" class="agencies__img" />
    </div>
    <p class="agencies__name">{{card.name}}</p>
    <p class="agencies__addres">{{`${card.address}`}}</p>
    <div class="agencies__phone">
      <img :src="Phone" class="agencies__phone-img" />
      <p class="agencies__phone-text">
        {{`${card.address}`}}
      </p>
    </div>
    <div class="agencies__socials">
      <a href="#" class="agencies__social">
       <img :src="Network" alt="" class="agencies__img-social" />
      </a>
      <a href="#" class="agencies__social">
        <img :src="Facebook" alt="" class="agencies__img-social" />
      </a>
      <a href="#" class="agencies__social">
        <img :src="Instagram" alt="" class="agencies__img-social" />
      </a>
    </div>
  </div>

</template>

<script >
import "@/assets/styles/views/Home.scss";
import imagenDefault from "../../../../public/img/brand/Acura.svg";
import Facebook from "@/assets/images/icons/icon-facebook.svg";
import Instagram from "@/assets/images/icons/icon-instagram.svg";
import Network from "@/assets/images/icons/icon-network.svg";
import Phone from "@/assets/images/icons/icon-phone.svg";


export default {
  name: "CardHome",
  props: {
    card: Object,
    active: Array
  },

  setup(props) {
    return {
      imagenDefault,
      Facebook,
      Instagram,
      Network,
      Phone,
    };
  },

};
</script>

<style lang="scss" >
@import "@/assets/styles/Mixins";

.agencies {
  $root: &;
  &__card {
    @include flex(center, false, center);
    @include border(rgb(141, 141, 141));
    border-radius: 3px;
    flex-direction: column;
    padding: 30px 20px 20px;
    height: 100%;
    &[data-active="true"] {
      border: 1px solid var(--secondary-color);
      background-color: var(--bg-color);
      .agencies__img,
      .agencies__img-social,
      .agencies__phone-img{
        filter: invert(1);
      }
      .agencies__name,
      .agencies__addres,
      .agencies__phone-text{
        color: var(--primary-color);
      }
    }
    &:hover{
      border: 1px solid var(--secondary-color);
      background-color: var(--bg-color);
      .agencies__img,
      .agencies__img-social,
      .agencies__phone-img{
        filter: invert(1);
      }
      .agencies__name,
      .agencies__addres,
      .agencies__phone-text{
        color: var(--primary-color);
      }
    }
  }

  &__img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    margin-bottom: 30px;
  }

  &__name {
    @include text(2rem, 400, 2.6rem, center);
    color: var(--text-contrast-color);
    margin-bottom: 20px;
  }

  &__addres {
    @include text(1.6rem, 400, 2.4rem, center);
    color: var(--text-contrast-color);
    margin-bottom: 20px;
  }
  &__phone{
    @include flex();
    align-items: center;
    margin-bottom: 20px;
  }
  &__phone-text{
    @include text(1.6rem, 400, 2.4rem);
    color: var(--text-contrast-color);
    margin-bottom: 0;
  }
  &__phone-img{
    width: 24px;
    height: 24px;
    margin-right: 6px;
  }
  &__socials{
    @include flex(space-evenly, 16px);
  }
  &__img-social{
    width: 24px;
    height: 24px;
  }
}
</style>
