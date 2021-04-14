import axios from 'axios';

export default {
  namespaced: true,
  state: {
    loading: true,
    contact: [],
    input: {
      name: '',
      email: ''
    }
  },
  mutations: {
    DATABASE_SET(state, data) {
      state.contact = data;
      state.loading = false;
    },
    // DATEBASE_POST(state, data) {
    //   state.contact.push(data);
    //   console.log(state.contact);
    // },
    DATEBASE_DELETE(state, index) {
      state.contact.splice(index, 1);
    },
    DATABASE_UPDATE(state, { data, editIndex }) {
      // const contact = JSON.parse(JSON.stringify(state.contact));
      // contact[editIndex] = data;
      // state.contact = contact;
      state.contact.splice(editIndex, 1, data);
    }
  },
  actions: {
    async getDatabase({ commit }) {
      try {
        const list = await axios.get('http://localhost:3000/contact');
        const data = list.data;
        commit('DATABASE_SET', data);
        return data;
      } catch (err) {
        console.error(err);
      }
    },
    async postDatabase({ commit }, input) {
      try {
        // const list = await axios.post('http://localhost:3000/contact', input);
        // const data = list.data;
        // commit('DATEBASE_POST', data);
        await axios.post('http://localhost:3000/contact', input);
        const list = await axios.get('http://localhost:3000/contact');
        commit('DATABASE_SET', list.data);
      } catch (err) {
        console.error(err);
      }
    },
    async deleteDatabase({ commit }, { target, index }) {
      try {
        await axios.delete('http://localhost:3000/contact/' + target.id);
        commit('DATEBASE_DELETE', index);
      } catch (err) {
        console.error(err);
      }
    },
    async updateDatabase({ commit }, { editIndex, input, contact }) {
      try {
        const list = await axios.put(
          'http://localhost:3000/contact/' + contact.id,
          input
        );
        const data = list.data;
        commit('DATABASE_UPDATE', { data, editIndex });
      } catch (err) {
        console.error(err);
      }
    }
  }
};
