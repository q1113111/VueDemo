import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);
function loadView(view, folder) {
  return () =>
    import(
      /* webpackChunkName:"view-[request]"*/ `@/views/${folder}/${view}.vue`
    );
}
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/sam',
    name: 'Sam',
    component: () => import(/* webpackChunkName: "sam" */ '../views/Sam.vue'),
    children: [
      {
        path: 'sam01',
        name: 'Sam01',
        component: loadView('Sam01', 'Sam')
      },
      {
        path: 'sam02',
        name: 'Sam02',
        component: loadView('Sam02', 'Sam')
      }
    ]
  },
  {
    path: '/lron',
    redirect: '/lron/1'
  },
  {
    path: '/lron/:day',
    name: 'lorn',
    component: () => import(/* webpackChunkName: "lorn" */ '../views/lron')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
