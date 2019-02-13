<template lang="pug">
section#schedule.section
  .container.is-desktop
    //- pre {{ endDay }}
    h3.title Schedule

    section
      //- TODO make initial date current day if between startDay and endDay, otherwise make it startDay. so during the event it loads the current day's schedule
      vue-scheduler(
        disable-dialog
        :min-date="startDay"
        :max-date="endDay"
        :initial-date="startDay"
        :event-display="eventDisplay"
        :time-range="[8, 24]" 
        :events="events"
      )

    //- pre {{ events }}
</template>

<script>
import ScheduleData from "../assets/schedule.json";
import moment from "moment";

export default {
  name: "Schedule",
  data() {
    return {
      events: this.buildEvents(ScheduleData.events),
      startDay: moment(ScheduleData.startDay),
      endDay: moment(ScheduleData.endDay)
    };
  },
  methods: {
    eventDisplay(event) {
      return event.name + " - " + event.location;
    },
    buildEvents(original) {
      for (let ev of original) {
        ev.date = moment(ScheduleData.startDay).add(ev.day, "d");
        // ev.style = "background-color: green; color: green;"
      }
      return original;
    }
  }
};
</script>

<style scoped lang="stylus">
</style>
