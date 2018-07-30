<template>
  <section class='hero is-info is-fullheight'>
    <div class='hero-head'>
      <nav class='navbar is-transparent'>
        <div class='container'>
          <div class='navbar-brand'>
            <a class='navbar-item' href='/'>
              <img src='img/banner.png' alt='cuHacking logo'>
            </a>
            <div class='navbar-burger burger' data-target='navbarExampleTransparentExample'>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id='navbarExampleTransparentExample' class='navbar-menu'>
            <div class='navbar-end'>
              <a class='navbar-item' href='/'>
                Home
              </a>
              <!-- <a class='navbar-item' href='#about'>
                About
              </a>
              <a class='navbar-item' href='#schedule'>
                Schedule
              </a>
              <a class='navbar-item' href='#sponsors'>
                Sponsors
              </a>
              <a class='navbar-item' href='#faq'>
                FAQ
              </a> -->
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
            Sign up for our mailing list below to stay updated
          </h2>
          <email-signup></email-signup>
        </div>
      </div>
    </div>
    <div class='hero-foot'>
      <nav class='navbar is-transparent'>
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
                <a href='https://github.com/cuhacking'>
                  <b-icon icon='github-circle'></b-icon>
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
import EmailSignup from '@/components/EmailSignup.vue';

export default {
  name: 'splash',
  data() {
    return {
    };
  },
  components: {
    Countdown,
    EmailSignup,
  },
};
</script>

<style>
html,body {
  font-family: 'Open Sans', monospace;
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
