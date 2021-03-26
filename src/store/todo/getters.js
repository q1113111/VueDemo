import { filter } from './module';

export default {
  todosIndex(state) {
    return filter[state.route.name](state.todos).map((todo) =>
      state.todos.indexOf(todo)
    );
  }
};
