<template>
  <div id='app'>
    <!-- <nav class='navbar is-transparent'>
      <div class='navbar-brand'>
        <a class='navbar-item' href='https://bulma.io'>
          <img src='https://bulma.io/images/bulma-logo.png' alt='Bulma: a modern CSS framework based on Flexbox' width='112' height='28'>
        </a>
        <div class='navbar-burger burger' data-target='navbarExampleTransparentExample'>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id='navbarExampleTransparentExample' class='navbar-menu'>
        <div class='navbar-end'>
          <router-link to='/'><a class='navbar-item'>Home</a></router-link>
          <router-link to='/splash'><a class='navbar-item'>Splash</a></router-link>
          <router-link to='/404'><a class='navbar-item'>404</a></router-link>
        </div>
      </div>
    </nav> -->
    <router-view/>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {}
</script>

<style lang='scss'>
// Import Bulma's core
@import '~bulma/sass/utilities/_all';

// Set your colors
$primary: #8c67ef;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    'white': ($white, $black),
    'black': ($black, $white),
    'light': ($light, $light-invert),
    'dark': ($dark, $dark-invert),
    'primary': ($primary, $primary-invert),
    'info': ($info, $info-invert),
    'success': ($success, $success-invert),
    'warning': ($warning, $warning-invert),
    'danger': ($danger, $danger-invert),
    'twitter': ($twitter, $twitter-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import '~bulma';
@import '~buefy/src/scss/buefy';

</style>
