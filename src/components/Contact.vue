<template lang="pug">
section.section
  #contact
    h3.thick.bg Contact

    .form
      b-field(horizontal='' label='Subject')
        b-input(name='subject', expanded='')
      b-field(horizontal='', label='From')
        b-input(name='name', placeholder='Name', expanded='')
        b-input(name='email', type='email', placeholder='nobody@nowhere.com', expanded='')
      b-field(horizontal='', label='Message')
        b-input(type='textarea')
      b-field(horizontal='')
        // Label left empty for spacing
        p.control
          button.button.is-primary
            | Send message


</template>

<script>
export default {
  name: "Contact",
  data() {
    return {};
  }
};
</script>

<style scoped lang="stylus">
.form
  margin-top: 20px
</style>
