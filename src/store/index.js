import Vue from 'vue'
import Vuex from 'vuex'
import message from '@/module/message'
import shop from '@/module/shop'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    message,
    shop
  }
})
