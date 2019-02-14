import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";
import VueParticles from "vue-particles";
import Vuex from "vuex";

import "./assets/buefy.scss";

Vue.use(Vuex);
Vue.use(VueParticles);

Vue.use(Buefy, {
  defaultIconPack: "fa"
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
