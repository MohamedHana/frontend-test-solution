import "./assets/js/main";

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import filters from "./filters";
import browserDetectionMixin from "./mixins/browserDetectionMixin";

Vue.mixin(browserDetectionMixin);

window.app = new Vue({
  router: router,
  store: store,
  filters: filters,
  el: "#app",
  render: (h) => h(App),
});
