import{_ as d}from"./Cardslide.e796175d.js";import{S as p,a as u,A as m,N as g}from"./swiper-slide.fdd38a5b.js";import{P as f}from"./pagination.e12d4dd6.js";import{a as b,o as t,c as n,w as i,h as a,e as w,q as y,f as S,F as x}from"./entry.9465117f.js";const v={name:"Slide",components:{Swiper:p,SwiperSlide:u},props:{appTecnologics:Array},setup(){return{pagination:{clickable:!0},modules:[m,f,g]}}};function k(h,A,l,o,B,C){const s=d,r=a("swiper-slide"),c=a("swiper");return t(),n(c,{pagination:o.pagination,modules:o.modules,speed:1500,navigation:!0,loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},class:"mySwiper"},{default:i(()=>[(t(!0),w(x,null,y(l.appTecnologics,(e,_)=>(t(),n(r,{key:_},{default:i(()=>[S(s,{image_left:e.image_left,bullet:e.bullet,title:e.title_tecno,icon_title:e.icon_title,description:e.text_tecno,subtitle:e.sub_title_tecno,logos:e.tecnologias},null,8,["image_left","bullet","title","icon_title","description","subtitle","logos"])]),_:2},1024))),128))]),_:1},8,["pagination","modules"])}const T=b(v,[["render",k],["__scopeId","data-v-cbe130b4"]]);export{T as default};