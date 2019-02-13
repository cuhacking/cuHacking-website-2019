<template lang="pug">
section.section
  #faq
    h3.title Frequently Asked Questions

    .container.is-fluid
      .columns.is-multiline.is-centered
        .column.is-one-third(v-for="qa in questions" v-bind:key="qa.question")
          h4
            span {{ qa.icon }} 
            b {{ qa.question }}
          p(v-html="qa.answer")

</template>

<script>
import QuestionData from "../assets/questions.json";

export default {
  name: "FAQ",
  data() {
    return {
      questions: QuestionData
    };
  }
};
</script>

<style scoped lang="stylus">
h4 span
  font-size: 28px
</style>
