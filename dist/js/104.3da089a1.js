"use strict";(self["webpackChunkvanguardia"]=self["webpackChunkvanguardia"]||[]).push([[104],{1423:function(e,a,l){l.r(a),l.d(a,{default:function(){return y}});var n=l(3396);const i={class:"agency"},o={class:"agency__hero"},t=(0,n._)("h1",{class:"agency__hero-title"},"Nuestras agencias",-1),c={class:"agency__hero-box-btn"},s={ref:"mapDiv",class:"agency__map",id:"map"},u={class:"agency__card slide"},g=(0,n._)("h2",{class:"agency__card-title"},"Agencias",-1);function d(e,a,l,d,r,p){const m=(0,n.up)("CarouselHome");return(0,n.wg)(),(0,n.iD)("main",i,[(0,n._)("article",o,[t,(0,n._)("div",c,[(0,n._)("button",{class:"agency__hero-btn",onClick:a[0]||(a[0]=(...e)=>d.geolocation&&d.geolocation(...e))}," Usar mi ubicación actual ")])]),(0,n._)("div",s,null,512),(0,n._)("article",u,[g,(0,n.Wm)(m,{cardContent:d.agencies,type:"agency",active:d.agencies_active},null,8,["cardContent","active"])])])}var r=l(4870),p=(l(6265),l(1528)),m=l(5977),_=l(5177),v=l(9614),h=l.p+"img/icon-ubication-select.6484573a.svg";const f="AIzaSyACDXm5WBEngJZHLoEiSzzYCdlkg3THQmI";var w={name:"Agencias",components:{CarouselHome:_.Z},setup(){const e=(0,r.iH)(null),a=new p.aN({apiKey:f}),l=(0,r.iH)(),i=(0,r.iH)([]),o=(0,r.iH)([]),t=(0,r.iH)([]),c=async()=>{const e="/api/vehicles/business-unitss";try{const{data:a}=await m.Z.get(e);a.success&&a.data.length>0&&a.data.forEach((e=>{""!=e.latitude&&""!=e.longitude&&newAgencies.push(e)})),i.value=newAgencies}catch(a){console.error(a,"aqui"),i.value=[{id:6,name:"Renault Américas",address:"domicilio conocido",phone:null,facebook_page:null,instagram_page:null,twitter_page:null,latitude:19.5464909,longitude:-99.1998606,icon:null,vehicles:31},{id:5,name:"Kia Corregidora",address:"domicilio conocido",phone:null,facebook_page:null,instagram_page:null,twitter_page:null,latitude:19.2009271,longitude:-99.3521166,icon:null,vehicles:19},{id:1,name:"Audi Galerías",address:"domicilio conocido",phone:null,facebook_page:null,instagram_page:null,twitter_page:null,latitude:19.0401541,longitude:-98.3364924,icon:null,vehicles:11},{id:3,name:"Honda Gonzalez Gallo",address:"domicilio conocido",phone:null,facebook_page:null,instagram_page:null,twitter_page:null,latitude:20.6738686,longitude:-103.3704326,icon:null,vehicles:11},{id:2,name:"Honda Galerias",address:"domicilio conocido",phone:null,facebook_page:null,instagram_page:null,twitter_page:null,latitude:21.025147,longitude:-101.2753897,icon:null,vehicles:8},{id:4,name:"Kia Altaria",address:"domicilio conocido",phone:null,facebook_page:null,instagram_page:null,twitter_page:null,latitude:19.1539275,longitude:-103.0217916,icon:null,vehicles:7},{id:7,name:"Acura",address:"domicilio conocido",phone:null,facebook_page:null,instagram_page:null,twitter_page:null,latitude:19.2401254,longitude:-103.7636272,icon:null,vehicles:3}]}};(0,n.bv)((async()=>{await a.load(),l.value=new google.maps.Map(e.value,{center:{lat:20.724671,lng:-103.3471888},zoom:5}),await c(),i.value.forEach((e=>{if(e.latitude&&e.longitude){const a=new google.maps.Marker({position:{lat:parseFloat(e.latitude),lng:parseFloat(e.longitude)},title:e.name,map:l.value,icon:{scaledSize:new google.maps.Size(32,32),url:h}});a.addListener("click",(function(){const e=this.icon.url,a=this.title;e==h?(this.setIcon({scaledSize:new google.maps.Size(32,32),url:v}),o.value.unshift(a)):(this.setIcon({scaledSize:new google.maps.Size(32,32),url:h}),o.value=o.value.filter((e=>e!=a)));const l=i.value.filter((e=>o.value.includes(e.name))),n=i.value.filter((e=>!o.value.includes(e.name)));i.value=[...l,...n]}))}}))}));const s=()=>{navigator.geolocation.getCurrentPosition(u,g)},u=async e=>{console.log(e);const{latitude:a,longitude:n}=e.coords;l.value.setCenter({lat:a,lng:n}),l.value.setZoom(10)},g=e=>{console.log(e),checkUbication.value=!1};return{mapDiv:e,geolocation:s,agencies:i,agencies_active:o,orderAgencies:t}}},b=l(89);const k=(0,b.Z)(w,[["render",d]]);var y=k}}]);
//# sourceMappingURL=104.3da089a1.js.map