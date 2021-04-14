<template>
  <div>
    <!-- <tabbar v-show="$store.state.navbarshow"></tabbar> -->
    <tabbar v-show="navbarshow"></tabbar>

    <router-view></router-view>
  </div>
</template>

<script>
// mapState
import tabbar from './components/Tabber';
import { mapState } from 'vuex';

// import bus from '@/bus';

export default {
  // ----不使用事件總線bus----

  // data() {
  //   return {
  //     isShow: true
  //   };
  // },
  components: {
    tabbar
  },
  computed: {
    ...mapState(['navbarshow'])
  }
  // beforeMount() {
  //   bus.$on('navbar', (data) => {
  //     this.isShow = data;
  //   });
  // }
};
</script>
