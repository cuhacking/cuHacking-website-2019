<template lang="pug">
nav.navbar.is-transparent(role='navigation' aria-label='main navigation')
  .navbar-brand
    a.navbar-item(href='/')
      img(src='img/logo.png')
      h2: b cuHacking
    a.navbar-burger.burger(role='button' aria-label='menu' aria-expanded='false' data-target='nav' @click='show = !show' :class="{ 'is-active': show }")
      span(aria-hidden='true')
      span(aria-hidden='true')
      span(aria-hidden='true')
  #nav.navbar-menu(:class="{ 'is-active': show }")
    .navbar-start
      a.navbar-item(href='#home')
        | Home
      a.navbar-item(href='#sponsors')
        | Sponsors
      a.navbar-item(href='#schedule')
        | Schedule
      a.navbar-item(href='#faq')
        | FAQ
      a.navbar-item(href='#contact')
        | Contact
    .navbar-end
      a#mlh-trust-badge(href='https://mlh.io/seasons/na-2019/events', target='_blank')
        img(src='/img/mlh_banner.svg')

      //- TODO have the burger menu activate navbar disappear when a link is clicked
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      show: false
    };
  }
};
</script>

<style scoped lang='stylus'>
#mlh-trust-badge
  display: block
  max-width: 100px
  min-width: 60px
  position: fixed
  right: 50px
  top: 0
  width: 10%
  z-index: 60000
  
.navbar-item img
  margin-right: 10px
</style>
