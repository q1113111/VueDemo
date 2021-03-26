import { LS } from './module';

export default {
  initTodo({ commit }) {
    commit('SET_TODOS', LS.load());
  }
};
