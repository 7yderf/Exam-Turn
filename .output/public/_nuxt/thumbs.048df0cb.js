import{i as S,$ as I}from"./swiper-slide.fdd38a5b.js";function P({swiper:e,extendParams:v,on:m}){v({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let h=!1,p=!1;e.thumbs={swiper:null};function C(){const t=e.thumbs.swiper;if(!t||t.destroyed)return;const s=t.clickedIndex,d=t.clickedSlide;if(d&&I(d).hasClass(e.params.thumbs.slideThumbActiveClass)||typeof s>"u"||s===null)return;let l;if(t.params.loop?l=parseInt(I(t.clickedSlide).attr("data-swiper-slide-index"),10):l=s,e.params.loop){let n=e.activeIndex;e.slides.eq(n).hasClass(e.params.slideDuplicateClass)&&(e.loopFix(),e._clientLeft=e.$wrapperEl[0].clientLeft,n=e.activeIndex);const r=e.slides.eq(n).prevAll(`[data-swiper-slide-index="${l}"]`).eq(0).index(),u=e.slides.eq(n).nextAll(`[data-swiper-slide-index="${l}"]`).eq(0).index();typeof r>"u"?l=u:typeof u>"u"?l=r:u-n<n-r?l=u:l=r}e.slideTo(l)}function x(){const{thumbs:t}=e.params;if(h)return!1;h=!0;const s=e.constructor;if(t.swiper instanceof s)e.thumbs.swiper=t.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1});else if(S(t.swiper)){const d=Object.assign({},t.swiper);Object.assign(d,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new s(d),p=!0}return e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",C),!0}function f(t){const s=e.thumbs.swiper;if(!s||s.destroyed)return;const d=s.params.slidesPerView==="auto"?s.slidesPerViewDynamic():s.params.slidesPerView;let l=1;const n=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(l=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(l=1),l=Math.floor(l),s.slides.removeClass(n),s.params.loop||s.params.virtual&&s.params.virtual.enabled)for(let i=0;i<l;i+=1)s.$wrapperEl.children(`[data-swiper-slide-index="${e.realIndex+i}"]`).addClass(n);else for(let i=0;i<l;i+=1)s.slides.eq(e.realIndex+i).addClass(n);const r=e.params.thumbs.autoScrollOffset,u=r&&!s.params.loop;if(e.realIndex!==s.realIndex||u){let i=s.activeIndex,a,b;if(s.params.loop){s.slides.eq(i).hasClass(s.params.slideDuplicateClass)&&(s.loopFix(),s._clientLeft=s.$wrapperEl[0].clientLeft,i=s.activeIndex);const c=s.slides.eq(i).prevAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index(),o=s.slides.eq(i).nextAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index();typeof c>"u"?a=o:typeof o>"u"?a=c:o-i===i-c?a=s.params.slidesPerGroup>1?o:i:o-i<i-c?a=o:a=c,b=e.activeIndex>e.previousIndex?"next":"prev"}else a=e.realIndex,b=a>e.previousIndex?"next":"prev";u&&(a+=b==="next"?r:-1*r),s.visibleSlidesIndexes&&s.visibleSlidesIndexes.indexOf(a)<0&&(s.params.centeredSlides?a>i?a=a-Math.floor(d/2)+1:a=a+Math.floor(d/2)-1:a>i&&s.params.slidesPerGroup,s.slideTo(a,t?0:void 0))}}m("beforeInit",()=>{const{thumbs:t}=e.params;!t||!t.swiper||(x(),f(!0))}),m("slideChange update resize observerUpdate",()=>{f()}),m("setTransition",(t,s)=>{const d=e.thumbs.swiper;!d||d.destroyed||d.setTransition(s)}),m("beforeDestroy",()=>{const t=e.thumbs.swiper;!t||t.destroyed||p&&t.destroy()}),Object.assign(e.thumbs,{init:x,update:f})}export{P as T};
