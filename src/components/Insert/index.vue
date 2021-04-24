<script>
export default {
  data() {
    return {
      text: ''
    };
  },
  methods: {
    sumbitHandle() {
      if (!this.text) return;
      this.$store.commit('Todo/CREATE_TODOS', {
        content: this.text,
        complete: false
      });
      this.text = '';
    }
  }
};
</script>
<template src="./template.html"></template>