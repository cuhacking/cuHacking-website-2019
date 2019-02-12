<template lang="pug">
section.section
  #schedule
    h3.thick.bg Schedule

    section
      b-tabs(v-model='activeTab')
        b-tab-item(label='All')
        b-tab-item(label='Main Events')
        b-tab-item(label='Food')
        b-tab-item(label='Workshops')
        b-tab-item(label='Activities')

      ul
        li(v-for="event in filteredEvents")
          p {{ event.name }} - {{ event.start }}

</template>

<script>
import ScheduleData from "../assets/schedule.json";

export default {
  name: "Schedule",
  data() {
    return {
      events: this.buildEvents(),
      activeTab: 0
    };
  },
  methods: {
    buildEvents() {
      // build the start and end dates from the string
      // sort into descending order by start
      return ScheduleData.events;
    }
  },
  computed: {
    filteredEvents() {
      if (this.activeTab === 0) {
        return this.events;
      } else {
        return this.events.filter(e => e == true);
      }
    }
  }
};
</script>

<style scoped lang="stylus">
</style>
