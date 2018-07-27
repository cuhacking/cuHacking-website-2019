<template>
  <div class='about'>
    <section class='hero is-twitter is-fullheight'>
      <!-- Hero head: will stick at the top -->
      <div class='hero-head'>
        <header class='navbar'>
          <div class='container'>
            <div class='navbar-brand'>
              <a class='navbar-item'>
                <img src='https://bulma.io/images/bulma-type-white.png' alt='Logo'>
              </a>
            </div>
          </div>
        </header>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class='hero-body'>
        <div class='container'>
          <h1 class='title'>
            CU Hacking begins in :
          </h1>
          <countdown date='February 2, 2019'/>
          <h5 class='subtitle is-5'>
            February 2<sup>nd</sup> - 4<sup>th</sup> 2019 | 36 Hours | Ottawa, ON
          </h5>
          <a class='button is-primary' href='#'>Sign Up Here</a>
        </div>
      </div>

      <!-- Hero footer: will stick at the bottom -->
      <div class='hero-foot'>

      </div>
    </section>
  </div>
</template>

<script>
import Countdown from '@/components/Countdown.vue';

export default {
  name: 'splash',
  components: {
    Countdown,
  },
};
</script>
