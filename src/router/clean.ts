import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import store from "@/store";
import { Mutations, Actions } from "@/store/enums/StoreEnums";
import _ from "lodash";
import Alert from "sweetalert2/dist/sweetalert2.js";
import SolanaServices from "@/core/services/SolanaServices";

const guess = [
  // '/auth',
  "/sign-in",
  "/forgot-password",
  "/reset-password",
];

const client_site = [
  "/home",
  "/detalle",
  "/agencia",
  "/beneficios",
  // "/cita-en-agencia",
  // "/seleccionar-cita",
  // "/confirmar-cita",
  '/catalogo',
  '/vende',
  // '/agendar-cita',
  // '/vender-auto',
  // '/apartar-auto',
  // '/resumen-apartado'
]
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/layout/user/UserLayout.vue"),
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () =>
          import("@/views/config/ConfigView.vue"),
      },
      {
        path: "/dashboard-home",
        name: "dashboard-home",
        component: () =>
          import("@/views/config/ConfigHome.vue"),
      },
      {
        path: "/dashboard-market",
        name: "dashboard-market",
        component: () =>
          import("@/views/config/ConfigMarket.vue"),
      },
      {
        path: "/dashboard-detalle",
        name: "dashboard-detalle",
        component: () =>
          import("@/views/config/ConfigDetalle.vue"),
      },
      
    ]
  },
  {
    path: "/",
    component: () => import("@/components/page-layouts/Auth.vue"),
    children: [
      {
        path: "/sign-in",
        name: "sign-in",
        component: () =>
          import("@/views/crafted/authentication/basic-flow/SignIn.vue"),
      },
      // {
      //   path: "/sign-up",
      //   name: "sign-up",
      //   component: () =>
      //     import("@/views/crafted/authentication/basic-flow/SignUp.vue"),
      // },
      {
        path: "/forgot-password",
        name: "forgot-password",
        component: () =>
          import("@/views/crafted/authentication/basic-flow/PasswordReset.vue"),
      },
      {
        path: "/reset-password/:token/:pwd?",
        name: "reset-password",
        component: () =>
          import("@/views/crafted/authentication/basic-flow/PasswordSet.vue"),
      },
    ],
  },
  {
    // Client - site
    path: "/",
    component: () => import("@/layout/client/ClientLayout.vue"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () =>
          import("@/views/client/Home.vue"),
      },
      
      
      {
        path: "/Agencias",
        name: "Agencias",
        component: () =>
          import("@/views/client/Agencias.vue"),
      },
      {
        path: "/catalogo",
        name: "catalogo",
        component: () =>
          import("@/views/client/Catalogo.vue"),
      },
      {
        path: "/beneficios",
        name: "beneficios",
        component: () =>
          import("@/views/client/Beneficios.vue"),
      },
      {
        path: "/vende",
        name: "vende",
        component: () =>
          import("@/views/client/Vende.vue"),
      },
      {
        path: "/detalle/:id",
        name: "car-detail",
        component: () =>
          import("@/views/client/DetalleVehiculo.vue"),
      },
    ]
  },
  // {
  //   // the 404 route, when none of the above matches
  //   path: "/404",
  //   name: "404",
  //   component: () => import("@/views/crafted/authentication/Error404.vue"),
  // },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

const alertError = async () => {
  await Alert.fire({
    icon: "warning",
    title: "¡No autorizado!",
    text: "Usted no tiene permisos para acceder a este modulo.",
    confirmButtonText: "Aceptar",
  });
};

const can = (permissions) => {
  const Permissions = store.getters.getPermissions;
  if (_.size(Permissions)) {
    if (Array.isArray(permissions)) {
      let flag = false;
      _.map(permissions, (permission) => {
        if (Permissions.indexOf(permission) !== -1) {
          flag = true;
        }
      });
      return flag;
    } else {
      return Permissions.indexOf(permissions) !== -1;
    }
  }
  return false;
};



router.beforeEach((to, from, next) => {
 
  // reset config to initial state
  
  store.commit(Mutations.RESET_LAYOUT_CONFIG);

  // store.dispatch(Actions.VERIFY_AUTH);

  const isGuess = _.find(guess, function (item) {
   
    return _.includes(to.path, item);
    
  });
 
  
  const isClient = _.find(client_site, function (item) {
   
    return _.includes(to.path, item);
    
  }); 
 
  // redirect
  

  const auth = store.getters.isUserAuthenticated;
 
  const redirect = "/home"; // default redirect
  if (isGuess) {
   
    if (auth) {
     console.log("🚀 ~ file: clean.ts ~ line 219 ~ router.beforeEach ~ auth", auth)
     
      next("/dashboard");
    } else {
      next();
    }
  } else if(isClient){
    console.log("🚀 ~ file: clean.ts ~ line 226 ~ router.beforeEach ~ isClient", isClient)
    
    next();
  }else{
    if (auth) {
      console.log("🚀 ~ file: clean.ts ~ line 231 ~ router.beforeEach ~ auth", auth)
      if(to.path == "/")next(redirect);
      next();
    } else {
      next(redirect);
      
    }
  }
  // Scroll page to top on every route change
  setTimeout(() => {
    if(!to.path.includes('/catalogo'))
    window.scrollTo(0, 0);
  }, 100);
});

export default router;
