<template>
  <div>
    combo
    <select @input="cityType">
      <option :value="null">請選擇</option>
      <option v-for="item in typeList.sort" :key="item">{{ item }}</option>
    </select>
    <select style="width: 400px" @input="cityTitle">
      <option :value="null">請選擇</option>
      <option v-for="item in titleList.sort" :key="item">{{ item }}</option>
    </select>
    <div v-if="content">
      <h1>{{ content.Name }}{{ content.index + 1 }}</h1>

      <img :src="content.Photo" alt="" />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
export default {
  mounted() {
    if (this.list.length === 0) {
      this.$store.dispatch('city/getCityList');
    }
  },
  computed: {
    ...mapState('city', {
      list: (state) => state.cityList
    }),
    ...mapGetters('city', {
      typeList: 'typeList',
      titleList: 'titleList',
      content: 'content'
    })
  },
  methods: {
    ...mapMutations('city', {
      cityType: 'cityType',
      cityTitle: 'cityTitle'
    })
  }
};
</script>

<style>
</style>
