import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Splash from './views/Splash.vue';
import PageNotFound from './views/PageNotFound.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/splash',
      name: 'splash',
      component: Splash,
    },
    {
      path: '*',
      name: '404',
      component: PageNotFound,
    },
  ],
});
