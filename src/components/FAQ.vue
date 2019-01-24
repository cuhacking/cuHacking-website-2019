<template lang="pug">
section.section
  #faq
    h1 Frequently Asked Questions

    .container.is-fluid
      .columns.is-multiline.is-centered.is-vcentered
        .column.is-one-third(v-for="qa in questions" v-bind:key="qa.question")
          p {{ qa.question }} - {{ qa.answer }}

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
</style>
