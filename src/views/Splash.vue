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
              <div class='tabs is-right'>
                <ul>
                  <li class='is-active'><a>Home</a></li>
                  <li><a href='#examples'>Examples</a></li>
                  <li><a href='#features'>Features</a></li>
                  <li><a href='#team'>Team</a></li>
                  <li><a href='#help'>Help</a></li>
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
            <div class='field is-grouped'>
              <p class='control is-expanded'>
                <input class='input' type='text' placeholder='Enter your email' v-model='email'>
              </p>
              <p class='control'>
                <a class='button is-info'>
                  Notify Me
                </a>
              </p>
            </div>
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
                  <i class="fab fa-facebook-f"></i>
                </a>
              </span>
              <span class='navbar-item'>
                <a href='https://twitter.com/cuhacking'>
                  <i class="fab fa-twitter"></i>
                </a>
              </span>
              <span class='navbar-item'>
                <i class="fab fa-github"></i>
                <a href='https://github.com/cuhacking'>
                </a>
              </span>
              <span class='navbar-item'>
                <a href='mailto:todo@cuhacking.com'>
                  <i class="far fa-envelope"></i>
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
  data: {
    email: 'bober@gmail.com',
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
