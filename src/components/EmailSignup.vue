<template>
  <div class='box'>
    <form v-if='!hasSubmitted' @submit.prevent='signup'>
      <b-field>
        <b-input
          expanded
          required
          v-model='email'
          placeholder='Email address'
          type='email'
          icon='email-outline'
        ></b-input>
        <p class='control'>
          <button class='button is-primary' type='submit'>Notify Me</button>
        </p>
      </b-field>
    </form>
    <p v-else class='is-size-5'>
      🎉 Awesome! We've got your email. 🎉
    </p>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class EmailSignup extends Vue {
  private email = '';
  private isLoading = false;
  private hasSubmitted = false;

  private signup() {
    this.isLoading = true;
    axios.post('/email-todo', {email: this.email})
    .then((res) => {
      this.isLoading = false;
      this.hasSubmitted = true;
    })
    .catch((err) => {
      this.isLoading = false;
    });
  }
}


</script>
