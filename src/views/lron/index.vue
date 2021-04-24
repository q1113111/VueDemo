<script>
import { mapState, mapActions } from 'vuex';
export default {
  computed: {
    ...mapState('cook', {
      day: 'day',
      list: 'list'
    })
  },

  mounted() {
    let day = parseInt(this.$route.params.day) - 1;
    // this.$store.dispatch('cook/getlist', day);
    this.getlist(day);
    document.addEventListener('keyup', this.change);
  },
  beforeDestroy() {
    document.removeEventListener('keyup', this.change);
  },
  methods: {
    change(e) {
      let day = this.day;
      if (e.keyCode === 39) {
        day = day < 30 ? day + 1 : day;
      } else if (e.keyCode === 37) {
        day = day > -1 ? day - 1 : day;
      }
      if (day > 29 || day < 0) return;
      this.$store.commit('cook/SETDAY', day);
      this.$router.replace({
        params: {
          day: day + 1
        }
      });
    },
    ...mapActions('cook', {
      getlist: 'getlist'
    })
  }
};
</script>
<template src='./template.html'></template>