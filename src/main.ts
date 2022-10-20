import { createApp } from "vue";
import App from "./App.vue";
/*
TIP: To get started with clean router change path to @/router/clean.ts.
 */
//import router from "./router";
import router from "@/router/clean";
import store from "./store";

import Permissions from "@/core/helpers/Permissions.vue";

//imports for app initialization
import ApiService from "@/core/services/ApiService";
import { initVeeValidate } from "@/core/plugins/vee-validate";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// import '@vuepic/vue-datepicker/dist/main.css'

//Import maska

const app = createApp(App);

// app.mixin(Permissions);
app.mixin(Permissions);
app.use(store);
app.use(router);

ApiService.init(app);

initVeeValidate();


app.mount("#app");
