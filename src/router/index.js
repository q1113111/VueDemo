import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/all',
    name: 'all'
  },
  {
    path: '/active',
    name: 'active'
  },
  {
    path: '/complete',
    name: 'complete'
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
