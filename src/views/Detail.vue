<template>
  <div>
    detail--{{ datalist }}
    <h2>展示1</h2>
    <detailswiper
      previews="3"
      class="show1"
      showclass="show1"
      :key="swiperlist.length"
    >
      <div class="swiper-slide" v-for="data of swiperlist" :key="data.ID">
        <img :src="data.Column1" alt="" />
      </div>
    </detailswiper>
    <detailswiper
      previews="4"
      class="show2"
      showclass="show2"
      :key="1 + swiperlist.length"
    >
      <div class="swiper-slide" v-for="data of swiperlist" :key="data.ID">
        <img :src="data.Column1" alt="" />
      </div>
    </detailswiper>
  </div>
</template>

<script>
// ----不使用事件總線bus----
import detailswiper from './Detail/Detailswiper';
import { HIDE_NAVBAR, SHOW_NAVBAR } from '@/type';
// import bus from '@/bus';

export default {
  data() {
    return {
      datalist: null,
      swiperlist: []
    };
  },
  components: {
    detailswiper
  },
  props: ['id'],
  beforeMount() {
    // bus.$emit('navbar', false);
    this.$store.commit(HIDE_NAVBAR, false);
  },
  mounted() {
    // console.log('獲取ID', this.$route.params.id, this.id);
    console.log(this.$route);
    this.datalist = this.$route.params.id;
    fetch('/Service/OpenData/ODwsv/ODwsvAgriculturalProduce.aspx')
      .then((blob) => blob.json())
      .then((data) => {
        this.swiperlist = data;
      });
  },
  beforeDestroy() {
    // bus.$emit('navbar', true);
    this.$store.commit(SHOW_NAVBAR, true);
  }
};
</script>
