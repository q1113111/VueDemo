export const LS = {
  load() {
    return JSON.parse(localStorage.getItem('vueTodo') || '[]');
  },
  save(todo) {
    return localStorage.setItem('vueTodo', JSON.stringify(todo));
  }
};

export const filter = {
  all(todos) {
    return todos;
  },
  active(todos) {
    return todos.filter((todo) => !todo.complete);
  },
  complete(todos) {
    return todos.filter((todo) => todo.complete);
  }
};
