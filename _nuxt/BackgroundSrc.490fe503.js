import{a as c,o,b as t,e as a,f as r}from"./entry.d136d2c8.js";import{_ as n}from"./_plugin-vue_export-helper.c27b6911.js";const l=["data-blur","data-from"],s=["src"],u=c({__name:"BackgroundSrc",props:{imgSrc:null,blur:{type:Boolean},position:null,background:null,from:null},setup(e){return(d,i)=>(o(),t("div",{class:"background-srcImg","data-blur":e.blur,"data-from":e.from,style:a(`--background: ${e.background}; --backdrop-filter: blur(60px);`)},[e.blur?r("",!0):(o(),t("img",{key:0,src:e.imgSrc,alt:"city",style:a("object-position: "+e.position)},null,12,s))],12,l))}});const b=n(u,[["__scopeId","data-v-360ed6ce"]]);export{b as default};
