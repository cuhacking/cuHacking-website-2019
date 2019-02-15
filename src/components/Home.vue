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
    .container.has-text-centered
      img.logo(src="img/logo_text.png" alt="cuHacking Logo")
      h1.title(v-html="dateHTML")
      h2.subtitle
        | @ 
        a(href="https://carleton.ca") Carleton University
      .box
        .columns
          .column.is-three-fifths
            b What is cuHacking?
            p Carleton University's cuHacking longest running student-led MLH hackathon in Ottawa. The hackathon takes place over 24 hours, non-stop! Students can compete against each other and themselves to take their projects from concept to reality.
          .column
            <Info />
      <Countdown :date="this.start"/>
</template>

<script>
import Info from "./Front/Info";
import Countdown from "./Countdown";
import ScheduleData from "../assets/schedule.json";

import moment from "moment";

export default {
  name: "Home",
  data() {
    return {
      // TODO use first event's start time as start
      // and last event's end time as end
      start: moment(ScheduleData.startDay)
        .add(11, "hours"),
      end: moment(ScheduleData.endDay)
    };
  },
  components: {
    Info,
    Countdown
  },
  computed: {
    dateHTML() {
      return `${this.supOrdinal(
        this.start.format("MMMM Do")
      )} - ${this.supOrdinal(this.end.format("Do, YYYY"))}`;
    }
  },
  methods: {
    supOrdinal(dateStr) {
      return dateStr.replace(/(\d)(st|nd|rd|th)/, `$1<sup>$2</sup>`);
    }
  }
};
</script>

<style scoped lang="stylus">
.logo
  height: 400px
</style>
