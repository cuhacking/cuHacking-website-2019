import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";
import VueParticles from "vue-particles";

import "buefy/dist/buefy.css";

Vue.use(Buefy);
Vue.use(VueParticles);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
