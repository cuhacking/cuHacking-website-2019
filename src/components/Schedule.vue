<template lang="pug">
section#schedule.section
  .container.is-desktop
    h3.title
      a(href="#schedule") Schedule

    .columns
      calendar.column(
        ref="calendar"
        :calendars="calendarList"
        :schedules="events"
        view="day"
        :isReadOnly="true"
        :taskView="false"
        :scheduleView="['time']"
        :week="{ hourStart: 7 }"
      )
      calendar.column(
        ref="calendar2"
        :calendars="calendarList"
        :schedules="events"
        view="day"
        :isReadOnly="true"
        :taskView="false"
        :scheduleView="['time']"
        :week="{ hourStart: 7, hourEnd: 18 }"
      )

</template>

<script>
import ScheduleData from "../assets/schedule.json";
import moment from "moment";

import "tui-calendar/dist/tui-calendar.css";
import { Calendar } from "@toast-ui/vue-calendar";

export default {
  name: "Schedule",
  data() {
    return {
      events: this.buildEvents(ScheduleData.events, ScheduleData.eventTypes),
      startDay: moment(ScheduleData.startDay),
      endDay: moment(ScheduleData.endDay),
      calendarList: [
        {
          id: "1",
          name: "Main",
          bgColor: "#74b9ff"
        },
        {
          id: "2",
          name: "Food",
          bgColor: "#55efc4"
        },
        {
          id: "3",
          name: "Workshop",
          bgColor: "#a29bfe"
        },
        {
          id: "4",
          name: "Activity",
          bgColor: "#ff7675"
        }
      ]
    };
  },
  components: {
    Calendar
  },
  mounted() {
    setTimeout(() => {
      let s = this.$el.querySelectorAll(
        ".tui-full-calendar-vlayout-area.tui-full-calendar-vlayout-container"
      );

      // Set proper height to the calendars once they have loaded.
      for (let j of s) {
        j.style.height = "100%";
        j.childNodes[0].style.height = "100%";
      }
    }, 10);

    this.$refs.calendar.invoke("setDate", this.startDay);
    this.$refs.calendar2.invoke("setDate", this.endDay);
  },
  methods: {
    eventDisplay(event) {
      return event.name + " - " + event.location;
    },
    buildEvents(original, evTypes) {
      let currentId = 1;
      for (let ev of original) {
        ev.id = currentId++;
        ev.calendarId = evTypes[ev.type];
        ev.category = "time";
      }
      return original;
    }
  }
};
</script>

<style scoped lang="stylus">
.tui-view-7
  height: auto !important
</style>
