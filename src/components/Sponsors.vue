<template lang="pug">
section#sponsors.section
  .container.is-desktop
    h3.title Sponsors

    .container.is-fluid
      .columns.is-multiline.is-centered
        .column.is-full(v-for="sponsor in sponsors.tera" v-bind:key="sponsor.name")
          a(:href="sponsor.link")
            img.tera(:src="'img/sponsors/' + sponsor.img")

    .container.is-fluid
      .columns.is-multiline.is-centered.is-vcentered
        .column.is-half(v-for="sponsor in sponsors.giga" v-bind:key="sponsor.name")
          a(:href="sponsor.link")
            img.giga(:src="'img/sponsors/' + sponsor.img")

    .container.is-fluid
      .columns.is-multiline.is-centered.is-vcentered
        .column.is-one-third(v-for="sponsor in sponsors.mega" v-bind:key="sponsor.name")
          a(:href="sponsor.link")
            img.mega(:src="'img/sponsors/' + sponsor.img")

    .container.is-fluid
      .columns.is-multiline.is-centered.is-vcentered
        .column.is-one-quarter(v-for="sponsor in sponsors.kilo" v-bind:key="sponsor.name")
          a(:href="sponsor.link")
            img.kilo(:src="'img/sponsors/' + sponsor.img")

    .container.is-fluid
      .columns.is-multiline.is-centered.is-vcentered
        .column.is-narrow(v-for="sponsor in sponsors.micro" v-bind:key="sponsor.name")
          a.is-centered(:href="sponsor.link")
            img.micro(:src="'img/sponsors/' + sponsor.img")

    .box
      h2.title Our Partners
      .container.is-fluid
        .columns.is-centered.is-vcentered
          .column.subtitle
            p Interested in partnering? Contact us at 
            a(href='mailto:sponsorship@cuhacking.com') sponsorship@cuhacking.com
          .column.is-narrow(v-for="sponsor in sponsors.partner" v-bind:key="sponsor.name")
            a(:href="sponsor.link")
              img.partner(:src="'img/sponsors/' + sponsor.img")
</template>

<script>
import SponsorData from "../assets/sponsors.json";

export default {
  name: "Sponsors",
  data() {
    return {
      sponsors: SponsorData
    };
  }
};
</script>

<style scoped lang="stylus">
.kilo
  max-height: 140px

.micro, .partner
  max-height: 80px
  max-width: 8vw

.columns
  padding-bottom: 30px
</style>
