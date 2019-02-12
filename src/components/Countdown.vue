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

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Countdown extends Vue {
  @Prop() private date!: string;

  private now = Math.trunc((new Date()).getTime() / 1000);

  // TODO convert into a vue filter
  private twoDigits(value: number): string {
    return (value < 10 ? '0' : '') + value;
  }

  private mounted() {
    setInterval(() => {
      this.now = Math.trunc((new Date()).getTime() / 1000);
    }, 1000);
  }

  get normalizedDate(): number {
    return Math.trunc(Date.parse(this.date) / 1000);
  }

  get seconds(): number {
    return (this.normalizedDate - this.now) % 60;
  }

  get minutes(): number {
    return Math.trunc((this.normalizedDate - this.now) / 60) % 60;
  }

  get hours(): number {
    return Math.trunc((this.normalizedDate - this.now) / 60 / 60) % 24;
  }

  get days(): number {
    return Math.trunc((this.normalizedDate - this.now) / 60 / 60 / 24);
  }
}
</script>
