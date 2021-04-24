import { LS } from './module';

export default {
  SET_TODOS(state, data) {
    state.todos = data;
    LS.save(state.todos);
    console.log("test")
  },
  CREATE_TODOS(state, data) {
    state.todos.push(data);
    LS.save(state.todos);
  },
  UPDATE_TODOS(state, { index, data }) {
    // const newlist = JSON.parse(JSON.stringify(state.todos));
    // newlist[index] = data;
    // state.todos = newlist;
    state.todos[index].content = data.content;
    state.todos[index].complete = data.complete;

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
