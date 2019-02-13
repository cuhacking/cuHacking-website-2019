<template lang="pug">
section.section
  #schedule
    //- pre {{ endDay }}
    h3.title Schedule

    section
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
