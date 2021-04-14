<template>
  <div class="cinema" :style="mystyle">
    cinema
    <ul>
      <li v-for="data of cinemaList" :key="data.ID">
        {{ data.Name }}
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable no-new */
import BScroll from '@better-scroll/core';
import ScrollBar from '@better-scroll/scroll-bar';
import { mapState } from 'vuex';

BScroll.use(ScrollBar);

export default {
  // name: 'Cinema',
  data() {
    return {
      mystyle: {
        height: '0px'
      }
    };
  },
  watch: {
    cinemaList: 'BScroll'
  },
  mounted() {
    this.mystyle.height = window.innerHeight + 'px';
    if (this.cinemaList.length === 0) {
      this.$store.dispatch('cinema/getCinemalist');
    }
    this.BScroll();
  },
  methods: {
    BScroll() {
      this.$nextTick(() => {
        new BScroll('.cinema', {
          scrollY: true,
          scrollbar: true
        });
      });
    }
  },
  computed: {
    ...mapState('cinema', {
      cinemaList: (state) => state.cinemalist
    })
  }
};
</script>
<style lang="scss" scoped>
.cinema {
  height: 500px;
  overflow: hidden;
  position: relative;
}
ul {
  list-style: none;
  li {
    margin: 20px 0;
  }
}
</style>
