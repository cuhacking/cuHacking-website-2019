<template lang="pug">
section#home.hero.is-fullheight-with-navbar
  //- make the height the same as the above section
  vue-particles#particles-js(
    color="#eb6c6c"
    shapeType="polygon"
    linesColor="#ff4a55"
    :linesWidth="2"
    :hoverEffect="false"
    :clickEffect="false"
  )
  .hero-body
    .container
      img(src='img/logo_text.png' alt='cuHacking Logo')
      h1.title
        | February 16<sup>th</sup> - 17<sup>th</sup>, 2019
      h2.subtitle
        | @ Carleton University
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  }
};
</script>

<style lang="stylus">
</style>
