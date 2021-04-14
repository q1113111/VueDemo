<template>
  <div>
    film
    <swiper :key="looplist.length" ref="myswiper">
      <div class="swiper-slide" v-for="data in looplist" :key="data.ID">
        <img :src="data.PicURL" alt="" />
      </div>
    </swiper>
    <tabberfilm :class="isfixed ? 'fixed' : ''"></tabberfilm>
    <router-view></router-view>
  </div>
</template>

<script>
import tabberfilm from '@/components/Tabberfilm';
import swiper from '@/views/film/Swiper';
import axios from 'axios';
export default {
  components: {
    tabberfilm,
    swiper
  },
  data() {
    return {
      looplist: [],
      isfixed: false
    };
  },
  mounted() {
    // fetch('/Service/OpenData/ODwsv/ODwsvTravelFood.aspx')
    //   .then((blob) => blob.json())
    //   .then((data) => (this.looplist = data));
    axios.get('/Service/OpenData/ODwsv/ODwsvTravelFood.aspx').then((data) => {
      this.looplist = data.data;
    });
    window.addEventListener('scroll', this.scrollHandle);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollHandle);
  },
  methods: {
    scrollHandle() {
      const WscrollTop = window.scrollY;
      const swiperTop = this.$refs.myswiper.$el.offsetTop;
      const swiperHeight = this.$refs.myswiper.$el.offsetHeight;
      const swiperTotal = swiperTop + swiperHeight;
      WscrollTop >= swiperTotal
        ? (this.isfixed = true)
        : (this.isfixed = false);
    }
  }
};
</script>
