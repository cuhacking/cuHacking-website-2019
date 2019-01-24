<template lang="pug">
section.section
  #schedule
    h1 Schedule

    ul
      li(v-for="type in events")
        ul
          li(v-for="event in type")
            p {{ event.name }} - {{ event.start }}

</template>

<script>
import ScheduleData from "../assets/schedule.json";

export default {
  name: "Schedule",
  data() {
    return {
      events: ScheduleData.events
    };
  }
};
</script>

<style scoped lang="stylus">
</style>
