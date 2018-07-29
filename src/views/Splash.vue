<template>
  <section class='hero is-info is-fullheight'>
    <div class='hero-head'>
      <nav class='navbar is-transparent'>
        <div class='container'>
          <div class='navbar-brand'>
            <a class='navbar-item' href='../'>
              <img src='http://bulma.io/images/bulma-type-white.png' alt='Logo'>
            </a>
            <span class='navbar-burger burger' data-target='navbarMenu'>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id='navbarMenu' class='navbar-menu'>
            <div class='navbar-end'>
              <div class="tabs">
  <ul>
    <li class="is-active"><a>Pictures</a></li>
    <li><a>Music</a></li>
    <li><a>Videos</a></li>
    <li><a>Documents</a></li>
  </ul>
</div>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div class='hero-body'>
      <div class='container has-text-centered'>
        <div class='column is-6 is-offset-3'>
          <h1 class='title'>
            CU Hacking begins in:
          </h1>
          <countdown date='February 2, 2019'></countdown>
          <h2 class='subtitle'>
            February 2<sup>nd</sup> - 4<sup>th</sup> 2019 | 36 Hours | Ottawa, ON <br>
            Sign up for our mailing list below to stay updated.
          </h2>
          <div class='box'>
            <form @submit.prevent='onSubmit'>
              <b-field>
                <b-input
                  expanded
                  v-model='model.email'
                  placeholder='Email address'
                  type='email'
                  icon='email'
                ></b-input>
                <p class='control'>
                  <button class='button is-primary' type='submit'>Notify Me</button>
                </p>
              </b-field>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class='hero-foot'>
      <nav class='navbar'>
        <div class='container'>
          <div id='navbarMenu' class='navbar-menu'>
            <div class='navbar-start'>
              <span class='navbar-item'>
                <a href='https://facebook.com/cuhacking'>
                  <b-icon icon='facebook'></b-icon>
                </a>
              </span>
              <span class='navbar-item'>
                <a href='https://twitter.com/cuhacking'>
                  <b-icon icon='twitter'></b-icon>
                </a>
              </span>
              <span class='navbar-item'>
                <b-icon icon='github-circle'></b-icon>
                <a href='https://github.com/cuhacking'>
                </a>
              </span>
              <span class='navbar-item'>
                <a href='mailto:todo@cuhacking.com'>
                  <b-icon icon='email-outline'></b-icon>
                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
import Countdown from '@/components/Countdown.vue';

export default {
  name: 'splash',
  data() {
    return {
      model: {
        email: ''
      },
      tabIndex: 0,
    };
  },
  methods: {
    onSubmit() {
      console.log(this.email)
    }
  },
  components: {
    Countdown,
  },
};
</script>

<style>
html,body {
  font-family: 'Open Sans', serif;
}
.hero.is-info {
  background: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ), url('https://unsplash.it/1200/900?random') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.hero .nav, .hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.hero .subtitle {
  padding: 1rem 0;
  line-height: 1.5;
}
</style>
