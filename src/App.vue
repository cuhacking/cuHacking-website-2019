<template lang="pug">
  #app
    Navbar
    Social
    Home
    Sponsors
    Schedule
    Prizes
    FAQ
    Contact
    Footer
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import Sponsors from "./components/Sponsors.vue";
import FAQ from "./components/FAQ.vue";
import Contact from "./components/Contact.vue";
import Schedule from "./components/Schedule.vue";
import Footer from "./components/Footer.vue";
import Social from "./components/Social.vue";
import Prizes from "./components/Prizes.vue";

export default {
  name: "app",
  components: {
    Navbar,
    Home,
    Sponsors,
    FAQ,
    Contact,
    Schedule,
    Footer,
    Social,
    Prizes
  }
};
</script>
<style lang="scss">
@import "./assets/buefy";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  font: normal 75% Arial, Helvetica, sans-serif;
}

canvas {
  display: block;
  vertical-align: bottom;
}

#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fdedb2;
  background-image: url("");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}

h3.thick {
  font-size: 60px;
  padding-bottom: 35px;
  margin-top: 0px;
  padding-top: 0px;
  font-weight: 800;
  color: #222;
}

.bg {
  width: 100%;
  font-size: 60px;
  padding-top: 30px !important;
  padding-bottom: 30px !important;
  margin-top: 0px;
  margin-bottom: 0px;
  font-weight: 800;
  color: $white !important;
  background: $secondary;
  background: linear-gradient(
    to bottom,
    #9f021d 0%,
    #9f021d 36%,
    #9f021d 72%,
    #9f021d 100%
  );
}
</style>
