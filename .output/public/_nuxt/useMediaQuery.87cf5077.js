import{r as o,V as s}from"./entry.118c7f3c.js";const c=(t=null)=>{const e=o(!1),r=matchMedia(t??"(min-width: 0px)");e.value=r.matches;const a=n=>e.value=n.matches;return r.addEventListener("change",a),{windowSize:e}},m=()=>s("showMenu",()=>!1),u=()=>s("toggler",()=>!1),l=t=>new Intl.NumberFormat("en-US",{currency:"USD",style:"currency",maximumFractionDigits:2,minimumFractionDigits:2}).format(t);export{c as a,m as b,u as c,l as u};
