import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";
import VueParticles from "vue-particles";
import VueScheduler from "v-calendar-scheduler";
import Vuex from "vuex";

import "buefy/dist/buefy.css";
import "v-calendar-scheduler/lib/main.css";

Vue.use(Vuex);
Vue.use(VueParticles);

Vue.use(Buefy, {
  defaultIconPack: "fa"
});

Vue.use(VueScheduler, {
  availableViews: [],
  initialView: "day",
  use12: true,
  showTimeMarker: true,
  showTodayButton: false
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
