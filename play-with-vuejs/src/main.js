/* eslint-disable prettier/prettier */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import jquery from 'jquery'
import BootstrapVue from 'bootstrap-vue'
global.jquery = jquery
global.$ = jquery

Vue.use(BootstrapVue)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
