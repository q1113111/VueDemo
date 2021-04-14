<template>
  <div class="swiper-container film_swiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
/* eslint-disable no-new */
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

export default {
  mounted() {
    new Swiper('.film_swiper', {
      loop: true,
      // autoplay: true,
      pagination: {
        el: '.swiper-pagination'
      }
    });
  }
};
</script>
<style lang="scss" scoped>
.swiper-wrapper {
  img {
    width: 100%;
  }
}
.swiper-pagination {
  height: 20px;
}
</style>
