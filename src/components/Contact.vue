<template lang="pug">
section#contact.section
  .container.is-desktop
    h3.title Contact

    .form
      b-field(horizontal label='Name')
        b-input(v-model='name')
      b-field(horizontal label='Email')
        b-input(v-model='email' type='email')
      b-field(horizontal, label='Subject')
        b-input(v-model='subject')
      b-field(horizontal label='Message')
        b-input(v-model='message' type='textarea')
      b-field(horizontal='')
        // Label left empty for spacing
        p.control
          button.button.is-primary(@click="sendEmail")
            | Send message


</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: ""
    };
  },
  methods: {
    sendEmail() {
      // this.$http.post("https://formspree.io/info@cuhacking.com", )
    }
  }
};
</script>

<style scoped lang="stylus">
.form
  margin-top: 20px
</style>
