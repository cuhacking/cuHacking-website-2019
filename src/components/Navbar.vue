<template lang="pug">
nav.navbar(role='navigation' aria-label='main navigation')
  .navbar-brand
    a.navbar-item(href='/')
      img(src='/img/logo.png' height='28')
      h2 cuHacking
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
      //- TODO put the mlh banner here
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
