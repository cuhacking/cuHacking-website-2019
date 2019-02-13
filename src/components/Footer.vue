<template lang="pug">
footer.footer
  .content.has-text-centered
    img.footer-logo(src='img/logo_text.png')
    h4 Carleton University
    h6 1125 Colonel By Dr,
    h6 Ottawa, ON K1S 5B6
    .organizers
      p
        a(href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf', target='_blank') MLH Code of Conduct
  //- Add social media here and other useful resources
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>

<style scoped lang="stylus">
img
  height: 200px
</style>
