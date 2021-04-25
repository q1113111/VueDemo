import axios from 'axios'
export default {
  namespaced: 'shop',
  state: {
    list: []
  },
  mutations: {
    SETSHOP_LIST (state, data) {
      state.list = data
    }
  },
  actions: {
    async GETSHOP ({ commit }) {
      const list = await axios.get('https://data.coa.gov.tw/Service/OpenData/HuaLienFarm.aspx')
      commit('SETSHOP_LIST', list.data)
    }
  }
}
