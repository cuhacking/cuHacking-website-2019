<template lang="pug">
  #app
    Navbar
    Home
    Sponsors
    Schedule
    FAQ
    Contact
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import Sponsors from "./components/Sponsors.vue";
import FAQ from "./components/FAQ.vue";
import Contact from "./components/Contact.vue";
import Schedule from "./components/Schedule.vue";

export default {
  name: "app",
  components: {
    Navbar,
    Home,
    Sponsors,
    FAQ,
    Contact,
    Schedule
  }
};
</script>
<style lang="stylus">
#app
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

body 
  margin 0
  font normal 75% Arial, Helvetica, sans-serif
canvas 
  display block
  vertical-align bottom
#particles-js 
  position absolute
  width 100%
  height 100%
  background-color #fdedb2
  background-image url("")
  background-repeat no-repeat
  background-size cover
  background-position 50% 50%

</style>
