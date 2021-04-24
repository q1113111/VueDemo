<template>
  <div id="app">
    <div id="nav">
      <router-link to="/all">全部</router-link> |
      <router-link to="/active">未完成</router-link>|
      <router-link to="/complete">已完成</router-link>
    </div>
    <Insert />
    <div id="list">
      <List v-for="index in todosIndex" :key="index" :index="index" />
    </div>
  </div>
</template>

<script>
import Insert from '@/components/Insert';
import List from '@/components/List';
import { mapGetters } from 'vuex';
export default {
  components: {
    Insert,
    List
  },
  computed: {
    ...mapGetters('Todo', {
      todosIndex: 'todosIndex'
    })
  },
  mounted() {
    this.$store.dispatch('Todo/initTodo');
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#list {
  margin-top: 50px;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
