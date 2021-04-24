import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import App from './App.vue';
import router from './router';
import store from './store';

sync(store, router);
Vue.config.productionTip = false;

Vue.directive('focus', {
  inserted: function (el) {
    el.focus();
  }
});
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
