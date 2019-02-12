<template lang="pug">
.level
  .level-item.has-text-centered
    div
      p.heading Days
      p.title {{ days }}
  .level-item.has-text-centered
    div
      p.heading Hours
      p.title {{ twoDigits(hours) }}
  .level-item.has-text-centered
    div
      p.heading Minutes
      p.title {{ twoDigits(minutes) }}
  .level-item.has-text-centered
    div
      p.heading Seconds
      p.title {{ twoDigits(seconds) }}
</template>

<script>
export default {
  name: "Countdown",
  props: {
    date: Date
  },
  data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000)
    };
  },
  mounted() {
    setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000);
    }, 1000);
  },
  methods: {
    twoDigits(value) {
      return (value < 10 ? "0" : "") + value;
    }
  },
  computed: {
    normalizedDate() {
      return Math.trunc(Date.parse(this.date) / 1000);
    },
    seconds() {
      return (this.normalizedDate - this.now) % 60;
    },
    minutes() {
      return Math.trunc((this.normalizedDate - this.now) / 60) % 60;
    },
    hours() {
      return Math.trunc((this.normalizedDate - this.now) / 60 / 60) % 24;
    },
    days() {
      return Math.trunc((this.normalizedDate - this.now) / 60 / 60 / 24);
    }
  }
};
</script>
