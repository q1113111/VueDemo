<script>
export default {
  name: 'input-component',
  props: {
    text: {
      type: String,
      require: true
    }
  },
  computed: {
    inputText: {
      get() {
        return this.text;
      },
      set(val) {
        this.$emit('textChange', val);
        // this.$emit('update:text', val);
      }
    }
  }
};
</script>
<template src="./template.html"></template>
<style src="./style.scss" lang="scss" scoped>
</style>
