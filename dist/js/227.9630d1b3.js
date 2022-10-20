"use strict";(self["webpackChunkvanguardia"]=self["webpackChunkvanguardia"]||[]).push([[227],{1528:function(e,i,s){s.d(i,{aN:function(){return n}});s(2087),s(1703);var t=function e(i,s){if(i===s)return!0;if(i&&s&&"object"==typeof i&&"object"==typeof s){if(i.constructor!==s.constructor)return!1;var t,r,a;if(Array.isArray(i)){if(t=i.length,t!=s.length)return!1;for(r=t;0!==r--;)if(!e(i[r],s[r]))return!1;return!0}if(i.constructor===RegExp)return i.source===s.source&&i.flags===s.flags;if(i.valueOf!==Object.prototype.valueOf)return i.valueOf()===s.valueOf();if(i.toString!==Object.prototype.toString)return i.toString()===s.toString();if(a=Object.keys(i),t=a.length,t!==Object.keys(s).length)return!1;for(r=t;0!==r--;)if(!Object.prototype.hasOwnProperty.call(s,a[r]))return!1;for(r=t;0!==r--;){var n=a[r];if(!e(i[n],s[n]))return!1}return!0}return i!==i&&s!==s};const r="__googleMapsScriptId";var a;(function(e){e[e["INITIALIZED"]=0]="INITIALIZED",e[e["LOADING"]=1]="LOADING",e[e["SUCCESS"]=2]="SUCCESS",e[e["FAILURE"]=3]="FAILURE"})(a||(a={}));class n{constructor({apiKey:e,authReferrerPolicy:i,channel:s,client:a,id:c=r,language:o,libraries:l=[],mapIds:h,nonce:d,region:g,retries:u=3,url:p="https://maps.googleapis.com/maps/api/js",version:_}){if(this.CALLBACK="__googleMapsCallback",this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=e,this.authReferrerPolicy=i,this.channel=s,this.client=a,this.id=c||r,this.language=o,this.libraries=l,this.mapIds=h,this.nonce=d,this.region=g,this.retries=u,this.url=p,this.version=_,n.instance){if(!t(this.options,n.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(n.instance.options)}`);return n.instance}n.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?a.FAILURE:this.done?a.SUCCESS:this.loading?a.LOADING:a.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+=`?callback=${this.CALLBACK}`,this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),this.libraries.length>0&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),this.authReferrerPolicy&&(e+=`&auth_referrer_policy=${this.authReferrerPolicy}`),e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise(((e,i)=>{this.loadCallback((s=>{s?i(s.error):e(window.google)}))}))}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){if(document.getElementById(this.id))return void this.callback();const e=this.createUrl(),i=document.createElement("script");i.id=this.id,i.type="text/javascript",i.src=e,i.onerror=this.loadErrorCallback.bind(this),i.defer=!0,i.async=!0,this.nonce&&(i.nonce=this.nonce),document.head.appendChild(i)}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const e=this.errors.length*Math.pow(2,this.errors.length);console.log(`Failed to load Google Maps script, retrying in ${e} ms.`),setTimeout((()=>{this.deleteScript(),this.setScript()}),e)}else this.onerrorEvent=e,this.callback()}setCallback(){window.__googleMapsCallback=this.callback.bind(this)}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach((e=>{e(this.onerrorEvent)})),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version)return console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),void this.callback();this.loading||(this.loading=!0,this.setCallback(),this.setScript())}}}},5177:function(e,i,s){s.d(i,{Z:function(){return le}});var t=s(3396);const r={class:"col-12 mx-auto overflow-visible slide-gallery"};function a(e,i,s,a,n,c){const o=(0,t.up)("CardHome"),l=(0,t.up)("CardClienHome"),h=(0,t.up)("CardAgency"),d=(0,t.up)("swiper-slide"),g=(0,t.up)("swiper");return(0,t.wg)(),(0,t.iD)("div",r,[s.cardContent.length>0?((0,t.wg)(),(0,t.j4)(g,{key:0,class:"no-seleccionable cards-gallery",style:{cursor:"grab"},navigation:!0,slidesPerView:1,spaceBetween:10,breakpoints:{640:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:3,spaceBetween:40},1024:{slidesPerView:"agency"==s.type?4:3,spaceBetween:30}},modules:a.modules},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(s.cardContent,(e=>((0,t.wg)(),(0,t.j4)(d,{class:"px-1",key:e},{default:(0,t.w5)((()=>["security"==s.type?((0,t.wg)(),(0,t.j4)(o,{key:0,card:e},null,8,["card"])):(0,t.kq)("",!0),"client"==s.type?((0,t.wg)(),(0,t.j4)(l,{key:1,card:e},null,8,["card"])):(0,t.kq)("",!0),"agency"==s.type?((0,t.wg)(),(0,t.j4)(h,{key:2,card:e,active:s.active},null,8,["card","active"])):(0,t.kq)("",!0)])),_:2},1024)))),128))])),_:1},8,["breakpoints","modules"])):(0,t.kq)("",!0)])}var n=s(5032),c=s(7139);const o={class:"home__security-card"},l={class:"home__security-box"},h=["src"],d=(0,t._)("div",{class:"home__security-border"},null,-1),g={class:"home__security-txt"},u={class:"home__security-subtext"};function p(e,i,s,r,a,n){return(0,t.wg)(),(0,t.iD)("div",o,[(0,t._)("div",l,[(0,t._)("img",{src:s.card.img,alt:"",class:"home__security-img"},null,8,h)]),d,(0,t._)("p",g,(0,c.zw)(s.card.title),1),(0,t._)("p",u,(0,c.zw)(s.card.text),1)])}var _={name:"CardHome",props:{card:Object}},m=s(89);const f=(0,m.Z)(_,[["render",p]]);var b=f;const v={class:"home__client-card"},y={class:"home__client-box"},w=["src"],k={class:"home__client-img-box"},C={class:"home__client-text"},I={class:"home__client-subtext"},x={class:"home__client-score-box"},S={class:"home__client-score-text"},A=["src"],j={class:"home__client-txt"},E={class:"home__client-ubication-box"},O=["src"],P={class:"home__client-ubication-text"};function $(e,i,s,r,a,n){return(0,t.wg)(),(0,t.iD)("div",v,[(0,t._)("div",y,[(0,t._)("img",{src:s.card.img,alt:"",class:"home__client-img"},null,8,w),(0,t._)("div",k,[(0,t._)("p",C,(0,c.zw)(s.card.name),1),(0,t._)("p",I,(0,c.zw)(s.card.city),1)])]),(0,t._)("div",x,[(0,t._)("p",S,(0,c.zw)(s.card.scoreText),1),(0,t._)("img",{src:s.card.scoreImg,alt:"",class:"home__client-score-img"},null,8,A)]),(0,t._)("p",j,(0,c.zw)(s.card.text),1),(0,t._)("div",E,[(0,t._)("img",{src:s.card.ubicationImg,alt:"",class:"home__client-ubication-img"},null,8,O),(0,t._)("p",P,(0,c.zw)(s.card.ubicationText),1)])])}var L={name:"CardHome",props:{card:Object}};const D=(0,m.Z)(L,[["render",$]]);var R=D;const N=["data-active"],z={class:"agencies__box"},K=["src"],B={class:"agencies__name"},F={class:"agencies__addres"},H={class:"agencies__phone"},U=["src"],Z={class:"agencies__phone-text"},T={class:"agencies__socials"},M={href:"#",class:"agencies__social"},q=["src"],G={href:"#",class:"agencies__social"},V=["src"],J={href:"#",class:"agencies__social"},W=["src"];function Y(e,i,s,r,a,n){return(0,t.wg)(),(0,t.iD)("div",{class:"agencies__card","data-active":s.active.some((e=>e==s.card.name))},[(0,t._)("div",z,[(0,t._)("img",{src:s.card.img??r.imagenDefault,alt:"",class:"agencies__img"},null,8,K)]),(0,t._)("p",B,(0,c.zw)(s.card.name),1),(0,t._)("p",F,(0,c.zw)(`${s.card.address}`),1),(0,t._)("div",H,[(0,t._)("img",{src:r.Phone,class:"agencies__phone-img"},null,8,U),(0,t._)("p",Z,(0,c.zw)(`${s.card.address}`),1)]),(0,t._)("div",T,[(0,t._)("a",M,[(0,t._)("img",{src:r.Network,alt:"",class:"agencies__img-social"},null,8,q)]),(0,t._)("a",G,[(0,t._)("img",{src:r.Facebook,alt:"",class:"agencies__img-social"},null,8,V)]),(0,t._)("a",J,[(0,t._)("img",{src:r.Instagram,alt:"",class:"agencies__img-social"},null,8,W)])])],8,N)}var Q=s.p+"img/Acura.b4c51338.svg",X=s(2330),ee=s(7758),ie=s.p+"img/icon-network.da877892.svg",se=s.p+"img/icon-phone.cd612f02.svg",te={name:"CardHome",props:{card:Object,active:Array},setup(e){return{imagenDefault:Q,Facebook:X,Instagram:ee,Network:ie,Phone:se}}};const re=(0,m.Z)(te,[["render",Y]]);var ae=re,ne=s(9231),ce={components:{Swiper:n.tq,SwiperSlide:n.o5,CardHome:b,CardClienHome:R,CardAgency:ae},props:{cardContent:Array,type:String,active:Array},setup(e){return{modules:[ne.W_,ne.o3,ne.pt]}}};const oe=(0,m.Z)(ce,[["render",a]]);var le=oe},2330:function(e,i,s){e.exports=s.p+"img/icon-facebook.06db273f.svg"},7758:function(e,i,s){e.exports=s.p+"img/icon-instagram.b228b04b.svg"},9614:function(e,i,s){e.exports=s.p+"img/icon-ubication.7e060ee8.svg"}}]);
//# sourceMappingURL=227.9630d1b3.js.map