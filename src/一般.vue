<template>
  <div>
    hello vue

    <input type="text" ref="mytxt" />
    <button @click="addHandle()">click</button>
    <ul>
      <li v-for="data of datalist" :key="data">
        {{ data }}
      </li>
    </ul>

    <navbar>
      <button @click="showHandle()">nav-click</button>
    </navbar>
    <sidebar v-show="isShow"></sidebar>
  </div>
</template>

<script>
import navbar from './components/Navbar';
import sidebar from './components/Sidebar';

// 使用全域元件的方式
// import Vue from 'vue';
// Vue.component('navbar', navbar);
// Vue.component('sidebar', sidebar);

export default {
  data() {
    return {
      datalist: [],
      isShow: false
    };
  },
  methods: {
    addHandle() {
      console.log('test');
      this.datalist.push(this.$refs.mytxt.value);
    },
    showHandle() {
      this.isShow = !this.isShow;
    }
  },
  mounted() {
    fetch('/Service/OpenData/TransService.aspx?UnitId=LC7YWlenhLuP')
      .then((blob) => blob.json())
      .then((data) => console.log(data));
  },
  components: {
    navbar: navbar,
    sidebar: sidebar
  }
};
</script>
<style lang="scss">
ul {
  list-style: none;

  li {
    background-color: #f00;
  }
}
</style>
