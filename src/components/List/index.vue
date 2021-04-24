<script>
export default {
  data() {
    return {
      edit: null,
    };
  },
  props: {
    index: Number,
  },
  computed: {
    todo() {
      return this.$store.state.Todo.todos[this.index];
    },
    complete: {
      get() {
        return this.todo.complete;
      },
      set(val) {
        this.$store.commit('Todo/UPDATE_TODOS', {
          index: this.index,
          data: {
            content: this.todo.content,
            complete: val,
          },
        });
      },
    },
  },
  methods: {
    destory() {
      if (confirm(`你確定要移除${this.todo.content}`)) {
        this.$store.commit('Todo/DELETE_TODOS', this.index);
      }
    },
    editHandle() {
      this.edit = this.todo.content;
    },
    submitHandle() {
      if (!this.edit) this.destory();
      this.$store.commit('Todo/UPDATE_TODOS', {
        index: this.index,
        data: {
          content: this.edit,
          complete: this.todo.complete,
        },
      });
      this.cancleHandle();
    },
    cancleHandle() {
      this.edit = null;
    },
  },
};
</script>
<template src="./template.html"></template>