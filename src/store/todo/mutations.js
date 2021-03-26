import { LS } from './module';

export default {
  SET_TODOS(state, data) {
    state.todos = data;
    LS.save(state.todos);
  },
  CREATE_TODOS(state, data) {
    state.todos.psuh(data);
    LS.save(state.todos);
  },
  UPDATE_TODOS(state, { index, data }) {
    const newlist = JSON.parse(JSON.stringify(state.todos));
    newlist[index] = data;
    state.todos = newlist;
    LS.save(state.todos);
  },
  DELETE_TODOS(state, index) {
    state.todos.splice(index, 1);
    LS.save(state.todos);
  },
  ROUTER(state, data) {
    state.router = data;
  }
};
