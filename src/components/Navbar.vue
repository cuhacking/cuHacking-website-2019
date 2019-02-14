<template lang="pug">
nav.navbar.is-transparent.is-fixed-top(role='navigation' aria-label='main navigation')
  .navbar-brand
    a.navbar-item(@click="scrollToTop")
      img(src='img/logo.png')
      h2: b cuHacking
    a.navbar-burger.burger(role='button' aria-label='menu' aria-expanded='false' data-target='nav' @click='show = !show' :class="{ 'is-active': show }")
      span(aria-hidden='true')
      span(aria-hidden='true')
      span(aria-hidden='true')
  #nav.navbar-menu(:class="{ 'is-active': show }")
    .navbar-start
      a.navbar-item(href='#sponsors')
        | Sponsors
      a.navbar-item(href='#schedule')
        | Schedule
      a.navbar-item(href='#faq')
        | FAQ
      //- a.navbar-item(href='#contact')
        //- | Contact
    .navbar-end
      //- TODO stop these icons from being added to burger menu
      a.navbar-item(v-for="social in socials" :href="social.link", target="_blank", :title="social.name")
        b-icon(:icon="social.icon" pack="fab" type="is-black")
      a#mlh-trust-badge(href='https://mlh.io/seasons/na-2019/events', target='_blank')
        img(src='/img/mlh_banner.svg')

      //- TODO have the burger menu activate navbar disappear when a link is clicked
</template>

<script>
import SocialData from "../assets/socials.json";

export default {
  name: "Navbar",
  data() {
    return {
      show: false,
      socials: SocialData
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style scoped lang="stylus">
#mlh-trust-badge
  display: block
  max-width: 100px
  min-width: 60px
  position: fixed
  right: 50px
  top: 0
  width: 10%
  z-index: 10

nav
  background-color: rgba(253, 237, 178, 0.7)
  border-bottom: rgb(233, 217, 158) solid 2px

.navbar-end
  margin-right: 200px

img
  margin-right: 15px
</style>
