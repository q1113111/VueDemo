import axios from 'axios';
export default {
  async getCinemalist(store) {
    const id = localStorage.getItem('cityId');
    console.log(id);
    const list = await axios.get(
      '/Service/OpenData/ODwsv/ODwsvAgriculturalProduce.aspx'
    );
    const data = list.data;
    store.commit('cinemalistmutations', data);
  }
};
