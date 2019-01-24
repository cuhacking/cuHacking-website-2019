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
      h1.title
        | Hero title
      h2.subtitle
        | Hero subtitle
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
