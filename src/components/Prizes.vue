<template lang="pug">
section.section
  #prizes
    h3.thick.bg Prizes

    p Total amount in prizes: ${{ totalCost }}
    .container.is-fluid
      .columns.is-multiline.is-centered.is-vcentered
        .column.is-one-third(v-for="prize in prizes" v-bind:key="prize.title")
          p {{ prize.title }} - {{ prize.prize }}

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
</style>
