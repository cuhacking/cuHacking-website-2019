<template lang="pug">
section.section
  #contact
    h1 Contact

    .container
      .field
        label.label Name
        .control
          input.input(type='text', placeholder='Text input')
      .field
        label.label Email
        .control.has-icons-left.has-icons-right
          input.input.is-danger(type='email', placeholder='Email input')
          span.icon.is-small.is-left
            i.fas.fa-envelope
          span.icon.is-small.is-right
            i.fas.fa-exclamation-triangle
        p.help.is-danger This email is invalid
      .field
        label.label Subject
        .control
          input.input(type='text', placeholder='Text input')
      .field
        label.label Message
        .control
          textarea.textarea(placeholder='Textarea')
      .field.is-grouped
        .control
          button.button.is-link Send

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
</style>
