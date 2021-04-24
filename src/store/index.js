import Vue from 'vue';
import Vuex from 'vuex';
import cook from '@/store/module/cook';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cook
  }
});
