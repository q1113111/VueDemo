<template>
  <div>
    nowplaying
    <ul>
      <!-- detail router通過 -->
      <li
        v-for="data in datalist"
        :key="data.id"
        @click="chagnePageHandle(data.id)"
      >
        <h1>{{ data.name }}</h1>
        <img :src="data.poster" alt="" />
        <p>{{ data.actor | actorfilter }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue';
Vue.filter('actorfilter', function (data) {
  const newlist = data.map((item) => item.name).join('');
  return newlist;
});
export default {
  data() {
    return {
      datalist: [],
      detaillist: ['1111', '2222', '3333']
    };
  },
  mounted() {
    fetch('http://localhost:3000/data')
      .then((blob) => blob.json())
      .then((data) => (this.datalist = data.films));
  },
  methods: {
    chagnePageHandle(id) {
      // 編成式導航
      // this.$router.push(`/detail/${id}`);
      // 具名路由
      this.$router.push({ name: 'myDetail', params: { id: id } });
    }
  }
};
</script>
