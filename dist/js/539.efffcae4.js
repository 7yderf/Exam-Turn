"use strict";(self["webpackChunkvanguardia"]=self["webpackChunkvanguardia"]||[]).push([[539],{7003:function(e,t,a){t.Ry=void 0;var r=n(a(9503));function n(e){return e&&e.__esModule?e:{default:e}}let i={default:"${path} is invalid",required:"${path} is a required field",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:a,originalValue:n})=>{let i=null!=n&&n!==a,s=`${e} must be a \`${t}\` type, but the final value was: \`${(0,r.default)(a,!0)}\``+(i?` (cast from the value \`${(0,r.default)(n,!0)}\`).`:".");return null===a&&(s+='\n If "null" is intended as an empty value be sure to mark the schema as `.nullable()`'),s},defined:"${path} must be defined"};let s={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"};let l={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"};let o={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"};let u={isValue:"${path} field must be ${value}"};let c={noUnknown:"${path} field has unspecified keys: ${unknown}"};t.Ry=c;let d={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"};var p=Object.assign(Object.create(null),{mixed:i,string:s,number:l,date:o,object:c,array:d,boolean:u})},9503:function(e,t,a){a(1703),Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=c;const r=Object.prototype.toString,n=Error.prototype.toString,i=RegExp.prototype.toString,s="undefined"!==typeof Symbol?Symbol.prototype.toString:()=>"",l=/^Symbol\((.*)\)(.*)$/;function o(e){if(e!=+e)return"NaN";const t=0===e&&1/e<0;return t?"-0":""+e}function u(e,t=!1){if(null==e||!0===e||!1===e)return""+e;const a=typeof e;if("number"===a)return o(e);if("string"===a)return t?`"${e}"`:e;if("function"===a)return"[Function "+(e.name||"anonymous")+"]";if("symbol"===a)return s.call(e).replace(l,"Symbol($1)");const u=r.call(e).slice(8,-1);return"Date"===u?isNaN(e.getTime())?""+e:e.toISOString(e):"Error"===u||e instanceof Error?"["+n.call(e)+"]":"RegExp"===u?i.call(e):null}function c(e,t){let a=u(e,t);return null!==a?a:JSON.stringify(e,(function(e,a){let r=u(this[e],t);return null!==r?r:a}),2)}},1789:function(e,t,a){a.d(t,{Z:function(){return p}});var r=a(3396);const n=e=>((0,r.dD)("data-v-bc48ed86"),e=e(),(0,r.Cn)(),e),i={class:"body"},s=n((()=>(0,r._)("div",{class:"container"},[(0,r._)("h3",null," GRUPO VANGUARDIA "),(0,r._)("div",{class:"bar"},[(0,r._)("div",{class:"progress"})])],-1))),l=[s];function o(e,t,a,n,s,o){return(0,r.wg)(),(0,r.iD)("div",i,l)}var u={name:"HelloWorld"},c=a(89);const d=(0,c.Z)(u,[["render",o],["__scopeId","data-v-bc48ed86"]]);var p=d},3158:function(e,t,a){a.d(t,{Z:function(){return C}});var r=a(3396),n=a(7139),i={class:"cards-cart__container-img position-relative"},s={key:0,class:"position-absolute shadow-md bg-white text-black rounded-pill p-2 mt-3 ms-4",style:{"z-index":"4"}},l={class:"col-12 cards-cart__box-text"},o={class:"cards-cart__title"},u={class:"cards-cart__data"},c={class:"cards-cart__price"};function d(e,t,a,d,p,m){var h=(0,r.up)("GalleryCard"),v=(0,r.up)("router-link");return a.vehicle?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},["cards"==a.typeCard?((0,r.wg)(),(0,r.j4)(v,{key:0,to:{name:"car-detail",params:{id:a.vehicle.slug}},class:"rounded p-0 col-12 position-relative"},{default:(0,r.w5)((function(){return[(0,r._)("div",i,["Apartado"==a.vehicle.status?((0,r.wg)(),(0,r.iD)("div",s,(0,n.zw)(a.vehicle.status),1)):(0,r.kq)("",!0),(0,r.Wm)(h,{images:a.vehicle.images},null,8,["images"])]),(0,r._)("div",l,[(0,r._)("p",o,(0,n.zw)(a.vehicle.brand+" "+a.vehicle.model),1),(0,r._)("p",u,(0,n.zw)(a.vehicle.year)+" - "+(0,n.zw)(d.kmFormat(a.vehicle.kms)+" km")+" - "+(0,n.zw)(a.vehicle.state),1),(0,r._)("p",c,"$"+(0,n.zw)(d.formatPrice(a.vehicle.price)),1)])]})),_:1},8,["to"])):(0,r.kq)("",!0)],64)):(0,r.kq)("",!0)}const p={class:"col-12 position-relative"},m={class:"img-container"},h=["src"];function v(e,t,a,n,i,s){const l=(0,r.up)("SwiperSlide"),o=(0,r.up)("swiper");return(0,r.wg)(),(0,r.iD)("div",p,[(0,r.Wm)(o,{class:"gallery-card",autoHeight:!0,loop:!0,modules:[...n.modules],navigation:!0,pagination:{clickable:!0},style:{"--swiper-navigation-color":"#fff","--swiper-navigation-size":"15px"}},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.images,((e,t)=>((0,r.wg)(),(0,r.j4)(l,{key:t},{default:(0,r.w5)((()=>[(0,r._)("div",m,[(0,r._)("img",{src:e,class:"img-card swiper-lazy rounded-top",alt:""},null,8,h)])])),_:2},1024)))),128))])),_:1},8,["modules"])])}var f=a(4870),g=a(9231),b=a(5032),w={name:"GalleryCard",components:{Swiper:b.tq,SwiperSlide:b.o5},props:{images:Array},setup(e){const t=(0,f.iH)("https://apivanguardia.demosturn.com/");return{modules:[g.tl,g.W_],urlApi:t}}},$=a(89);const y=(0,$.Z)(w,[["render",v]]);var _=y,k=function(e){var t=e/1;return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},S={name:"card",components:{GalleryCard:_},props:{vehicle:Object,typeCard:{type:String,default:"cards"}},setup:function(e){var t=function(e){var t=(e/1).toFixed(2);return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")};return{formatPrice:t,kmFormat:k}}};const x=(0,$.Z)(S,[["render",d]]);var C=x},8707:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(3396);const n={class:"col-12 mx-auto overflow-visible slide-gallery"};function i(e,t,a,i,s,l){const o=(0,r.up)("CardVehicle"),u=(0,r.up)("swiper-slide"),c=(0,r.up)("swiper");return(0,r.wg)(),(0,r.iD)("div",n,[Object.keys(a.vehicles).length>0?((0,r.wg)(),(0,r.j4)(c,{key:0,class:"no-seleccionable cards-gallery",style:{cursor:"grab"},navigation:!0,slidesPerView:"auto",spaceBetween:30,breakpoints:{640:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:3,spaceBetween:40},1024:{slidesPerView:"similares"==a.typeCards?3:4,spaceBetween:30}},modules:i.modules},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.vehicles,((e,t,a)=>((0,r.wg)(),(0,r.j4)(u,{class:"px-1",key:a},{default:(0,r.w5)((()=>[(0,r.Wm)(o,{vehicle:e},null,8,["vehicle"])])),_:2},1024)))),128))])),_:1},8,["breakpoints","modules"])):(0,r.kq)("",!0)])}var s=a(5032),l=a(3158),o=a(9231),u=a(7003),c={components:{Swiper:s.tq,SwiperSlide:s.o5,CardVehicle:l.Z},props:{vehicles:u.Ry,typeCards:String},setup(e){return{modules:[o.W_,o.o3,o.pt]}}},d=a(89);const p=(0,d.Z)(c,[["render",i]]);var m=p}}]);
//# sourceMappingURL=539.efffcae4.js.map