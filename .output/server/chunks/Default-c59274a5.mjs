import __nuxt_component_0$2 from './Icon-941ecd1a.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-d23e8ff6.mjs';
import { a as useShowMenu, b as useToggler } from './useMediaQuery-a9f2c236.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createTextVNode, unref, ref, watch } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderTeleport, ssrRenderClass, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { f as useRoute } from './server.mjs';
import './config-3191beeb.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'ufo';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'h3';
import '@intlify/shared';
import '@intlify/core-base';
import 'lightgallery/vue/LightGalleryVue.common.js';
import 'vee-validate';
import 'sweetalert2';
import '@vee-validate/rules';
import 'defu';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "NavSelect",
  __ssrInlineRender: true,
  props: {
    dataActive: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const useToggle = useShowMenu();
    const showButton = () => {
      useToggle.value = !useToggle.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_icon = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "nav-opcion",
        "data-active": __props.dataActive
      }, _attrs))} data-v-2dbbefda>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        "data-active": __props.dataActive,
        to: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Productos `);
          } else {
            return [
              createTextVNode(" Productos ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_icon, {
        name: "ri:arrow-down-s-line",
        class: "icon",
        onClick: () => showButton(),
        "data-active": __props.dataActive,
        "data-show": unref(useToggle)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Nav/NavSelect.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-2dbbefda"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "NavProducts",
  __ssrInlineRender: true,
  setup(__props) {
    const useToggle = useShowMenu();
    const toggler = useToggler();
    ref(true);
    const active = ref("");
    watch(
      () => toggler.value,
      (value) => {
        value && (active.value = "");
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon = __nuxt_component_0$2;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: "products",
        "data-show": unref(useToggle)
      }, _attrs))} data-v-cf3f2cd3><div class="products__box-hero" data-v-cf3f2cd3><div class="container products__hero" data-v-cf3f2cd3><p data-v-cf3f2cd3>Todos</p><p data-v-cf3f2cd3>Nuevos</p><p data-v-cf3f2cd3>seminuevos</p></div></div><div class="container products__content" data-v-cf3f2cd3><div class="products__box" data-v-cf3f2cd3><div class="products__header-opcions" data-v-cf3f2cd3><h5 data-v-cf3f2cd3>Cardio</h5>`);
      _push(ssrRenderComponent(_component_icon, {
        name: "ri:arrow-down-s-line",
        class: "icon",
        "data-show": "cardio" == unref(active)
      }, null, _parent));
      _push(`</div><div class="products__opcions"${ssrRenderAttr("active", "cardio" == unref(active))} data-v-cf3f2cd3><a href="#" data-v-cf3f2cd3>lorem</a><a href="#" data-v-cf3f2cd3>lorem</a><a href="#" data-v-cf3f2cd3>lorem</a><a href="#" data-v-cf3f2cd3>lorem</a></div></div><div class="products__box" data-v-cf3f2cd3><div class="products__header-opcions" data-v-cf3f2cd3><h5 data-v-cf3f2cd3>Fuerza</h5>`);
      _push(ssrRenderComponent(_component_icon, {
        name: "ri:arrow-down-s-line",
        class: "icon",
        "data-show": "fuerza" == unref(active)
      }, null, _parent));
      _push(`</div><div class="products__opcions"${ssrRenderAttr("active", "fuerza" == unref(active))} data-v-cf3f2cd3><a href="#" data-v-cf3f2cd3>lorem</a><a href="#" data-v-cf3f2cd3>lorem</a><a href="#" data-v-cf3f2cd3>lorem</a><a href="#" data-v-cf3f2cd3>lorem</a></div></div><div class="products__box" data-v-cf3f2cd3><div class="products__header-opcions" data-v-cf3f2cd3><h5 data-v-cf3f2cd3>Peso</h5>`);
      _push(ssrRenderComponent(_component_icon, {
        name: "ri:arrow-down-s-line",
        class: "icon",
        "data-show": "peso" == unref(active)
      }, null, _parent));
      _push(`</div><div class="products__opcions"${ssrRenderAttr("active", "peso" == unref(active))} data-v-cf3f2cd3><a href="#" data-v-cf3f2cd3>lorem</a><a href="#" data-v-cf3f2cd3>lorem</a><a href="#" data-v-cf3f2cd3>lorem</a><a href="#" data-v-cf3f2cd3>lorem</a></div></div><div class="products__box" data-v-cf3f2cd3><div class="products__header-opcions" data-v-cf3f2cd3><h5 data-v-cf3f2cd3>Accesorios</h5>`);
      _push(ssrRenderComponent(_component_icon, {
        name: "ri:arrow-down-s-line",
        class: "icon",
        "data-show": "accesorios" == unref(active)
      }, null, _parent));
      _push(`</div><div class="products__opcions"${ssrRenderAttr("active", "accesorios" == unref(active))} data-v-cf3f2cd3><a href="#" data-v-cf3f2cd3>lorem</a><a href="#" data-v-cf3f2cd3>lorem</a><a href="#" data-v-cf3f2cd3>lorem</a><a href="#" data-v-cf3f2cd3>lorem</a></div></div></div></nav>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Nav/NavProducts.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-cf3f2cd3"]]);
const _imports_0$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAAAaCAYAAACdH0+XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVdSURBVHgB7Vv/Wds8EL704f+6E6ANGib43AmACTATQCeImYAwQcwEhQliNggT1J2AdAJ9etEJXxTJJkEOLc37PIrl0+mHpfPpdOeMaANorcfmcuKRp6PRaEkDw/Q9NxclSPem30tKBNP+xFwK7qMxqTLtX3k8eP5rQcJz/yI7Bw3znHE7IXw3fAvDk5v8RNJCdQ39mze+PFI243EvDP070y6I1yrCC2AOp0zPzAVlGZc90CYwDRR6HYp2ANPPT6/fGSWCaetah3Ht8eURvic3D+Za6jhy5il8WqTuGdMz//kjczMXtKqH1407C4wJmH3qmLCZl5K9pamgw8JabNhGbi7u2RqTrvgKXGqxeB7uTLrlPCbYaYKa27gTvDdeu69FwVdoAEXpgXEfc37iFx50VCy8+5rayfhIKET+G7YHIxC1ybu3EAtTB+pBJVf8YuINz5ExNPDWLKRuC37ZdjZErle3oCGAF2xEAeE70HYfHXv0O/qLoVf3VWBpFuc0wv6Vrwu3gFhg0wbsCbxZ/1E3Prs+KB0a7hvpB7V2QE3C7ngjsMYn3N5Y9Aso/BwwwyQwuL8ZOa0KR9PB6ybeX9yG7KRlkXrHetVAX1BaYCuaiP4bskZiTmlwz205IQRKTs/4RHvE0KcJIBQXnG/I2hQpMfXuS0qPG5FvjMZcMRv2wtFCefe+qvVRm1SRNWaPtrQpomD3gNve1xYuEaQA1n5hl0H6rwCqWiGZbUKxQYp7qc5DuIVBSsMC2ujRpJ89fE7LKUE75GsTqwQBNM8KvwietWLyyzaaRDh4781oODQ0HCqypw1gbp7lVtwD73ZCY+fYa2wZCDjWAAIO3wyEJeeyx54+/O0rrXCQtagVDYdzGgh8MqmpNWKlcX7DR9M/HRW19o/vjyojdXpf5r3NYYFjrtQQePNuAu550BtOT9QNyfvasqeOOtFy1jCnHh19nDvXvICrryN9uPLfMXdvyE08j3gklV53badGEehjpiMe0gBv3579Am2fZ8gtclDw+BUlwN4g9bDtqYMFKkt9atkUff1vMs79thIBax8/XQT4EBSryKp8p7GuI22eiLbGTFOx9nEvylRHGdKctamK9I1+5mKcSJfUgVSaYzCDkYF9c8j4QggqQPsSoMEYzz0aAnZ4O/15yUS7WaCvL4H+FIXhl7k8TIIj+RkFC8w8wI9odOjE8owkwrELi15rTe+EmtpvG2pZoG1wLedbCHBF9rSgyAa0bnd02jnncZy5vmnVwVVSKxgV2bGC9hxNhuYLfZOztzn68WAmroyUHYv8KTvQ4Ffoi+gmBTvjECFGkFBRG0wkb5yN02aGF5rHxW5Q795vd29z9ONQ29NbHjjFKL6uRHSpPVJ+pd3Cje+3I+hVb68UgErkjyiAvXD0oyCrCZDGXpm7D0V0AUU7ABuiGJ8TgjtRrER+GckfUgD7baUfS4pHaN03HzE0tBsUIn/l2TlL2hIfVTigPj+L+60niKyntIyUOeFQHr0voiuRee1tA/e5QB0wgJeRvpTI/6IADvjBS7/gHU8Hb0bKr9J7ACGEbwI+hJzjNAW1i+AH7eRCQYBqWl2kV3tyJTqEl9hIdkJ8ZvIln0zkHNWhuvttpR/44svtyY+eTwB7u3Nc/dBtAA9oyPocliK+UYu6F2zgyghwZwT1DZBflcFZ9iD6bTY+bgsL3aWx/qB/TYj0F8I8wFfqbhQe/zTCN+1pW8XKqP9Z1v7aIHASqxfVHCFp4gE29D6A9Ms9c0HDog7Q1t5sqHRtNQYmOXR0bTx+eE+h1p3DykWAy0jdmvPLjrJO8Ec9+GNTSdbnkXHdqy6t8T/Fhwoa+WypqgAAAABJRU5ErkJggg==";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const toggler = useToggler();
    const device = ref(true);
    const path = ref("/Home");
    const route = useRoute();
    const on_Mounted = ref(false);
    path.value = route.path === "/" ? "/Home" : route.path;
    watch(
      () => route.path,
      (value) => {
        path.value = value === "/" ? "/Home" : value;
        console.log("path", value);
      }
    );
    watch(
      () => toggler.value,
      (value) => {
        if (value) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon = __nuxt_component_0$2;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_NavSelect = __nuxt_component_2$1;
      const _component_NavProducts = __nuxt_component_3;
      _push(`<!--[-->`);
      if (unref(on_Mounted)) {
        ssrRenderTeleport(_push, (_push2) => {
          _push2(`<div class="nav-menu__hero-nav" data-v-bc102959><div class="container" data-v-bc102959><div class="nav-menu__box-phone" data-v-bc102959><a href="" data-v-bc102959>`);
          _push2(ssrRenderComponent(_component_icon, {
            name: "ri:phone-fill",
            class: "nav-menu__icon"
          }, null, _parent));
          _push2(`</a><p data-v-bc102959>Cotizar: 332 124 324 123</p></div><div class="nav-menu__box-follow" data-v-bc102959><a href="https://www.instagram.com/optimumequipo" target="_blank" data-v-bc102959>`);
          _push2(ssrRenderComponent(_component_icon, {
            name: "ri:instagram-fill",
            class: "nav-menu__icon"
          }, null, _parent));
          _push2(`</a><a href="https://es-la.facebook.com/people/Optimum-Equipo/100093244458686" target="_blank" data-v-bc102959>`);
          _push2(ssrRenderComponent(_component_icon, {
            name: "ri:facebook-circle-fill",
            class: "nav-menu__icon"
          }, null, _parent));
          _push2(`</a></div></div></div>`);
        }, "#transport-follow", unref(device), _parent);
      } else {
        _push(`<!---->`);
      }
      _push(`<nav class="navbar navbar-expand-md nav-menu nav-menu__mobile-content" data-v-bc102959><div class="${ssrRenderClass(unref(device) ? "container" : "container-fluid ")}"${ssrRenderAttr("data-toggle", unref(toggler))} data-v-bc102959><a class="navbar-brand" href="#" data-v-bc102959><img${ssrRenderAttr("src", _imports_0$1)} alt="turn" class="logo-header" data-v-bc102959></a><button class="navbar-toggler nav-menu__toggler ml-0 txt" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation" data-v-bc102959>`);
      _push(ssrRenderComponent(_component_icon, {
        name: "pajamas:hamburger",
        class: "nav-menu__icon ms-0"
      }, null, _parent));
      _push(`</button><button class="navbar-toggler nav-menu__toggler nav-menu__mobile"${ssrRenderAttr("data-active", unref(toggler))} type="button" data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation" data-v-bc102959>`);
      _push(ssrRenderComponent(_component_icon, {
        name: "ri:close-circle-fill",
        class: "nav-menu__icon"
      }, null, _parent));
      _push(`</button><div class="${ssrRenderClass([unref(toggler) ? "nav-menu__mobile-content" : "", "collapse navbar-collapse nav-menu__collapse d-flex align-items-center justify-content-strech"])}" id="navbarNav"${ssrRenderAttr("data-active", unref(toggler))} data-v-bc102959><ul class="${ssrRenderClass([unref(toggler) ? "nav-menu__mobile-content--box container" : "justify-content-around", "navbar-nav d-flex flex-grow-1"])}" data-v-bc102959><p class="nav-menu__title"${ssrRenderAttr("data-active", unref(device))} data-v-bc102959>Menu</p><li class="nav-item" data-v-bc102959>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        "data-active": unref(toggler),
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Inicio `);
          } else {
            return [
              createTextVNode(" Inicio ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item" data-v-bc102959>`);
      _push(ssrRenderComponent(_component_NavSelect, { dataActive: unref(toggler) }, null, _parent));
      _push(`<div id="transport" data-v-bc102959></div></li><li class="nav-item" data-v-bc102959>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        "data-active": unref(toggler),
        to: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Circuito `);
          } else {
            return [
              createTextVNode(" Circuito ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item" data-v-bc102959>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        "data-active": unref(toggler),
        to: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contacto `);
          } else {
            return [
              createTextVNode(" Contacto ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul><div id="transport-follow" data-v-bc102959></div></div><div class="nav-menu__box-icon" data-v-bc102959>`);
      _push(ssrRenderComponent(_component_icon, {
        name: "ri:search-2-line",
        class: "nav-menu__icon"
      }, null, _parent));
      _push(ssrRenderComponent(_component_icon, {
        name: "ri:shopping-cart-2-fill",
        class: "nav-menu__icon"
      }, null, _parent));
      _push(`</div></div></nav>`);
      if (unref(on_Mounted)) {
        ssrRenderTeleport(_push, (_push2) => {
          _push2(ssrRenderComponent(_component_NavProducts, null, null, _parent));
        }, "#transport", unref(device), _parent);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-bc102959"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "IconText",
  __ssrInlineRender: true,
  props: {
    text: null,
    icon: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "icon-text__box" }, _attrs))} data-v-fed7bd3d>`);
      _push(ssrRenderComponent(_component_Icon, {
        class: "icon-text__icon",
        name: __props.icon
      }, null, _parent));
      _push(`<p class="icon-text__text" data-v-fed7bd3d>${ssrInterpolate(__props.text)}</p></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer/IconText.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-fed7bd3d"]]);
const _imports_0 = "data:image/png;base64,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";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Icon = __nuxt_component_0$2;
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_FooterIconText = __nuxt_component_2;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-7fd0e269><div class="footer__hero container" data-v-7fd0e269><div class="footer__box-logo" data-v-7fd0e269><img${ssrRenderAttr("src", _imports_0)} alt="" class="footer__turn" data-v-7fd0e269><p data-v-7fd0e269>El Outlet m\xE1s grande de M\xE9xico. Equipos nuevos y usados a precios incre\xEDbles. \xA1Encuentra calidad y excelentes ofertas en Optimum!</p><div class="footer__box-contact" data-v-7fd0e269><a href="https://es-la.facebook.com/people/Optimum-Equipo/100093244458686" target="_blank" class="footer__contact" data-v-7fd0e269>`);
  _push(ssrRenderComponent(_component_Icon, {
    class: "footer__icon",
    name: "ic:baseline-facebook"
  }, null, _parent));
  _push(`</a><a href="https://www.instagram.com/optimumequipo" target="_blank" class="footer__contact" data-v-7fd0e269>`);
  _push(ssrRenderComponent(_component_Icon, {
    class: "footer__icon",
    name: "ri:instagram-fill"
  }, null, _parent));
  _push(`</a></div></div><div class="footer__legal-box" data-v-7fd0e269><h5 data-v-7fd0e269>Acerca de</h5>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "footer__legal-link",
    to: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Aviso de privacidad `);
      } else {
        return [
          createTextVNode(" Aviso de privacidad ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "footer__legal-link",
    to: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Policas de compra y garant\xEDa `);
      } else {
        return [
          createTextVNode(" Policas de compra y garant\xEDa ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "footer__legal-link",
    to: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` T\xE9rminos y condiciones `);
      } else {
        return [
          createTextVNode(" T\xE9rminos y condiciones ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="footer__legal-box" data-v-7fd0e269><h5 data-v-7fd0e269>Contacto</h5><p data-v-7fd0e269>CDMX</p>`);
  _push(ssrRenderComponent(_component_FooterIconText, {
    icon: "ri:map-pin-2-fill",
    text: "Juan N. Miramontes #125, Iztacalco"
  }, null, _parent));
  _push(ssrRenderComponent(_component_FooterIconText, {
    icon: "ri:phone-fill",
    text: "(55) 5579-0889",
    style: { "margin-top": "-10px" }
  }, null, _parent));
  _push(`<p data-v-7fd0e269>Guadalajara</p>`);
  _push(ssrRenderComponent(_component_FooterIconText, {
    icon: "ri:map-pin-2-fill",
    text: "Prado De Los Laureles #4205, Zapopan"
  }, null, _parent));
  _push(ssrRenderComponent(_component_FooterIconText, {
    icon: "ri:phone-fill",
    text: "(33) 1078-5977",
    style: { "margin-top": "-10px" }
  }, null, _parent));
  _push(`</div></div><p class="footer__copyright container" data-v-7fd0e269> \xA9 2023 Copyright Optimum Equipo </p></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-7fd0e269"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = __nuxt_component_0;
      const _component_Footer = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      _push(`<div class="container-fluid overflow g-0" data-v-2c09fbc0>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/Default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2c09fbc0"]]);

export { Default as default };
//# sourceMappingURL=Default-c59274a5.mjs.map
