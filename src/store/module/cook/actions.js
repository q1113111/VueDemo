import axios from 'axios';
export default {
  async getlist({ commit }, day) {
    commit('SETDAY', day);
    const list = await axios.get('/list.json');
    commit('SETLIST', list.data);
  }
};
