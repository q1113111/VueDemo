import { filter } from './module';

export default {
  todosIndex(state, getters, rootState) {
    return filter[rootState.route.name](state.todos).map((todo) =>
      state.todos.indexOf(todo)
    );
  }
};
