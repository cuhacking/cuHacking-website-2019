<template lang="pug">
section#prizes.section
  .container.is-desktop
    h3.title
      a(href="#prizes") Prizes


    h4.subtitle Total amount in prizes: ${{ totalCost }}
    .container.is-fluid
      .columns.is-multiline.is-centered.is-vcentered
        .column.is-one-third(v-for="prize in prizes" v-bind:key="prize.title")
          h4
            span {{ prize.icon }} 
            b(v-html="prize.title")
          p(v-if="!prize.link") - {{ prize.prize }}
          p(v-else) - 
            a(:href="prize.link") {{ prize.prize }}
</template>

<script>
import PrizeData from "../assets/prizes.json";

export default {
  name: "Prizes",
  data() {
    return {
      prizes: PrizeData
    };
  },
  computed: {
    totalCost() {
      return this.prizes
        .filter(p => p.cost)
        .map(p => p.cost)
        .reduce((a, b) => a + b);
    }
  }
};
</script>

<style scoped lang="stylus">
h4 span
  font-size: 28px
p
  margin-left: 50px
</style>
