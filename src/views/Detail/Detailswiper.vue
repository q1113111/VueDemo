<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper/swiper-bundle';
import 'swiper/swiper-bundle.css';

export default {
  /* eslint-disable no-new */
  props: ['showclass', 'previews'],
  mounted() {
    new Swiper(`.${this.showclass}`, {
      slidesPerView: this.previews,
      spaceBetween: this.showclass === 'show1' ? 40 : 20
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
</style>
