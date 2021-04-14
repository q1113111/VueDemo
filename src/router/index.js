import Vue from 'vue';
import VueRouter from 'vue-router';
import Film from '@/views/Film';
import Comeingsoon from '@/views/film/Comeingsoon';
import Nowplaying from '@/views/film/Nowplaying';
import Cinema from '@/views/Cinema';
import Center from '@/views/Center';
import Detail from '@/views/Detail';
import Login from '@/views/Login';
import City from '@/views/City';
import Combolist from '@/views/Combolist';
import Transition from '@/views/alex/Transition';
import Watch from '@/views/alex/Watch';
import Crud from '@/views/alex/Crud';
// import Alex from '@/views/Alex';
// import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/film',
    component: Film,
    children: [
      {
        path: '/film/comeingsoon',
        component: Comeingsoon
      },
      {
        path: 'nowplaying',
        component: Nowplaying
      },
      {
        path: '',
        redirect: 'nowplaying'
      }
    ]
  },
  {
    path: '/transition',
    component: Transition
  },
  {
    path: '/watch',
    component: Watch
  },
  {
    path: '/crud',
    component: Crud
  },
  {
    path: '/cinema',
    component: Cinema
  },
  {
    path: '/combolist',
    component: Combolist
  },
  {
    path: '/center',
    component: Center
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/detail/:id', // 命名動態ID
    name: 'myDetail',
    component: Detail,
    props: true
  },
  {
    path: '*',
    redirect: '/film'
  }

  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

// **全局守衛**
// const token = {
//   isLogin() {
//     return true;
//   }
// };
// router.beforeEach((to, from, next) => {
//   // console.log(to);
//   if (to.path === '/center') {
//     console.log('盤查');
//     if (token.isLogin()) {
//       next();
//     } else {
//       next('/login');
//     }
//   } else {
//     next();
//   }
// });

export default router;
