<template lang="pug">
  #app
    Navbar
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
    Prizes
  }
};
</script>
<style lang="scss">
@import "./assets/buefy";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #fdfdfd;
}

body {
  margin: 0;
  background-color: rgb(253, 237, 178);
  font: normal 75% Arial, Helvetica, sans-serif;
}

canvas {
  display: block;
  vertical-align: bottom;
}

#particles-js {
  position: absolute;
  width: 100%;
  height: 96vh;
  background-color: #fdedb2;
  background-image: url("");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}
</style>
