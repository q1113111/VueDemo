<template>
   <div class="container mL-300">
      <ul v-for="(r, index) in sliceRows" :key="index">
         <li>{{ (currPage - 1) * countOfPage + index + 1 }}</li>
         <li>{{ r.name }}</li>
      </ul>
      <div class="pagination">
         <ul>
            <li :class="{disabled: currPage === 1 }" @click="setPage(currPage - 1)">
               <a href="javascript:;">Prev</a>
            </li>
            <li v-for="n in totalPage" :key="n" :class="{ active: currPage === n }" @click="setPage(n)">
               <a href="javascript:;">{{ n }}</a>
            </li>
            <li :class="{ disabled: currPage === totalPage }" @click="setPage(currPage + 1)">
               <a href="javascript:;">Next</a>
            </li>
         </ul>
      </div>
        <div>Filter: <input type="text" v-model="filter_name"></div>
   </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      countOfPage: 5,
      currPage: 1,
      filter_name: ''
    }
  },
  created () {
    this.$store.dispatch('shop/GETSHOP')
  },
  computed: {
    ...mapState('shop', {
      rows: (state) => state.list
    }),
    filteredRows () {
      const filterName = this.filter_name.toLowerCase()
      return this.filter_name.trim() !== ''
        ? this.rows.filter((d) => {
          return d.name.toLowerCase().indexOf(filterName) > -1
        })
        : this.rows
    },
    sliceRows () {
      return this.filteredRows.slice(this.pageStart, this.pageStart + this.countOfPage)
    },
    pageStart () {
      return (this.currPage - 1) * this.countOfPage
    },
    totalPage () {
      return Math.ceil(this.filteredRows.length / this.countOfPage)
    }
  },
  methods: {
    setPage (idx) {
      if (idx <= 0 || idx > this.totalPage) {
        return
      }
      this.currPage = idx
    }
  }
}
</script>
<style lang="scss" scoped>
.active a{
  color: #f00;
}
</style>
