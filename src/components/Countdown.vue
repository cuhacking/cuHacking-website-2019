<template lang="pug">
.level(v-if="duration > 0")
  .level-item.has-text-centered
    div
      p.heading Days
      p.title {{ duration.days() }}
  .level-item.has-text-centered
    div
      p.heading Hours
      p.title {{ duration.hours() }}
  .level-item.has-text-centered
    div
      p.heading Minutes
      p.title {{ duration.minutes() }}
  .level-item.has-text-centered
    div
      p.heading Seconds
      p.title {{ duration.seconds() }}

h1.title(v-else) 🎉 Let the hacking begin! 🎊
</template>

<script>
import moment from "moment";

export default {
  name: "Countdown",
  props: {
    date: Object
  },
  data() {
    return {
      now: moment()
    };
  },
  mounted() {
    setInterval(() => {
      this.now = moment();
    }, 1000);
  },
  computed: {
    duration() {
      return moment.duration(this.date.diff(this.now));
    }
  }
};
</script>
