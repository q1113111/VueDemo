<template>
  <div>
    city
    <ul v-for="data of cityGutters" :key="data.index">
      <h1 @click="localHandle()">{{ data.index }}</h1>
      <li v-for="city of data.list" :key="city.Name">
        {{ city.Name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  mounted() {
    this.$store.dispatch('city/getCityList');
  },
  computed: {
    ...mapGetters('city', {
      cityGutters: 'cityGutters'
    })
  },
  methods: {
    localHandle() {
      localStorage.setItem('cityId', 5);
      this.$router.push('./Cinema');
    }
  }
};
</script>

<style>
</style>
