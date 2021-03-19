import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// adding router/store/render to vue app
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
