<template lang="pug">
section#home.hero.is-fullheight-with-navbar
  //- make the height the same as the above section
  vue-particles#particles-js(
    color="#eb6c6c"
    shapeType="polygon"
    linesColor="#ff4a55"
    :linesWidth="2"
    :hoverEffect="false"
    :clickEffect="false"
  )
  .hero-body
    .container
      img.logo(src="img/logo_text.png" alt="cuHacking Logo")
      h1.title(v-html="dateHTML")
      h2.subtitle
        | @ 
        a(href="https://carleton.ca") Carleton University 
      <Info />
</template>

<script>
import Info from "./Front/Info";
import ScheduleData from "../assets/schedule.json";

export default {
  name: "Home",
  data() {
    return {
      start: new Date(ScheduleData.startDay),
      end: new Date(ScheduleData.endDay)
    };
  },
  components: {
    Info
  },
  computed: {
    dateHTML() {
      // TODO: Allow for different months + [st, nd, rd]
      let options = { month: "long" };
      let month = new Intl.DateTimeFormat("en-US", options).format(this.start);
      let year = this.end.getFullYear();
      let day1 = this.start.getDate();
      let sup1 = "th";
      let dayn = this.end.getDate();
      let supn = "th";

      return `${month} ${day1}<sup>${sup1}</sup> - ${dayn}<sup>${supn}</sup>, ${year}`;
    }
  }
};
</script>

<style lang="stylus">
.logo
  height: 400px
</style>
