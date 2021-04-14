import axios from 'axios';

export default {
  namespaced: true,
  state: {
    cityList: [],
    cityTitle: ['臺中', '臺北', '苗栗'],
    Citys: {
      type: null,
      title: null
    }
  },
  getters: {
    cityGutters(state) {
      const newlist = [];
      for (let i = 0; i < state.cityTitle.length; i++) {
        const arr = state.cityList.filter(
          item => item.City.substring(0, 2) === state.cityTitle[i]
        );
        if (arr.length > 0) {
          newlist.push({
            index: state.cityTitle[i],
            list: arr
          });
        }
      }
      return newlist;
    },
    typeList(state) {
      const obj = {
        sort: [],
        map: {}
      };

      state.cityList.forEach(({ City, Name, Photo }, index) => {
        if (!obj.map[City]) {
          obj.sort.push(City);
          obj.map[City] = {
            sort: [],
            map: {}
          };
        }
        obj.map[City].sort.push(Name);
        obj.map[City].map[Name] = { index, Photo, Name };
      });
      return obj;
    },
    titleList(state, getters) {
      const cType = state.Citys.type;
      if (cType) {
        return getters.typeList.map[cType];
      } else {
        return [];
      }
    },
    content(state, getters) {
      const title = state.Citys.title;
      if (title) {
        return getters.titleList.map[title];
      } else {
        return null;
      }
    }
  },
  mutations: {
    cityMutation(state, data) {
      state.cityList = data;
    },
    cityType(state, event) {
      state.Citys.type = event.target.value;
    },
    cityTitle(state, event) {
      state.Citys.title = event.target.value;
    }
  },
  actions: {
    async getCityList({ commit }) {
      const list = await axios.get(
        '/Service/OpenData/ODwsv/ODwsvAttractions.aspx'
      );
      const data = list.data;
      commit('cityMutation', data);
    }
  }
};
