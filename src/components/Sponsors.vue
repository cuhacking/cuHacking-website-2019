<template lang="pug">
section.section
  #sponsors
    h3.title Sponsors

    .container.is-widescreen

      .container.is-fluid
        .columns.is-multiline.is-centered.is-vcentered
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
          .column.is-one-quarter(v-for="sponsor in sponsors.micro" v-bind:key="sponsor.name")
            a(:href="sponsor.link")
              img.micro(:src="'img/sponsors/' + sponsor.img")

      h2 Our Partners
      p Interested in partnering? Contact us at 
        a(href='mailto:sponsorship@cuhacking.com') sponsorship@cuhacking.com
      .container.is-fluid
        .columns.is-multiline.is-centered.is-vcentered
          .column.is-one-third(v-for="sponsor in sponsors.partner" v-bind:key="sponsor.name")
            a(:href="sponsor.link")
              img(:src="'img/sponsors/' + sponsor.img")
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
.micro
  max-height: 80px
</style>
