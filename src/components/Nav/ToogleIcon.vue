<template>
   <div :class="$attrs.toogle ? 'is-active' : ''" class="toogleIcon" @click="navBarHandle">
      <div class="toogleIcon__box">
         <span class="toogleIcon__span"></span><span class="toogleIcon__span"></span
         ><span class="toogleIcon__span"></span>
      </div>
   </div>
</template>
<script>
export default {
  methods: {
    navBarHandle () {
      this.$emit('navClick')
    }
  }
}
</script>
<style lang="scss">
.toogleIcon {
   position: fixed;
   right: $spacer;
   top: $spacer;
   cursor: pointer;
   padding: $spacer;
   z-index: 99;
   &__span {
      transition: 0.3s;
      width: 35px;
      display: block;
      height: 2px;
      background-color: $primary;
      box-shadow: 2px 2px 4px 1px #000000;
   }
   &__span + &__span {
      margin-top: $spacer * 0.5;
   }
   &.is-active &__span:nth-child(1) {
      opacity: 0;
   }
   &.is-active &__span:nth-child(2) {
      transform: rotate(-45deg) translate(-3px, 0px);
   }
   &.is-active &__span:nth-child(3) {
      transform: rotate(45deg) translate(-6px, -7px);
   }
}
</style>
