import Vue from 'vue';
import Vuex from 'vuex';
import { HIDE_NAVBAR, SHOW_NAVBAR } from '@/type';
import cinema from '../views/modules/Cinema';
import city from '../views/modules/city';
import member from '../views/modules/db';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navbarshow: true,
    cominglist: [],
    rank: ''
  },
  getters: {
    getcominglistgetters(state) {
      return state.cominglist.filter((item, index) => index < state.rank);
    }
  },
  mutations: {
    // 修改狀態位置
    [HIDE_NAVBAR](state, data) {
      state.navbarshow = data;
    },
    [SHOW_NAVBAR](state, data) {
      state.navbarshow = data;
    },
    cominglistmitations(state, data) {
      state.cominglist = data;
    },
    cominglistRank(state, rank) {
      state.rank = rank;
    }
  },
  actions: {
    // 異步處理
    getcominglist(store, rank) {
      fetch('/Service/OpenData/ODwsv/ODwsvAgriculturalProduce.aspx')
        .then(blob => blob.json())
        .then(data => {
          store.commit('cominglistmitations', data);
        });
    }
  },
  modules: {
    cinema,
    city,
    member
  }
});
