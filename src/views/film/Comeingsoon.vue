<template>
  <div>
    Comeingsoon
    <select v-model="rank" @change="cominglistRank(rank)">
      <option>4</option>
      <option>5</option>
      <option>6</option>
    </select>
    <ul>
      <li v-for="data of getcominglistgetters" :key="data.ID">
        {{ data.Name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  data() {
    return {
      rank: 6
    };
  },
  methods: {
    ...mapMutations(['cominglistRank'])
  },
  mounted() {
    if (this.cominglist.length === 0) {
      this.$store.dispatch('getcominglist');
    } else {
      console.log('以放入暫存');
    }
    this.cominglistRank(this.rank);
  },
  computed: {
    ...mapState(['cominglist']),
    ...mapGetters(['getcominglistgetters'])
  }
};
</script>
