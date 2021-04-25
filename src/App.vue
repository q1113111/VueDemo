<template>
   <div id="app">
      <div id="nav">
         <ToggleIcon v-if="show" :toogle="navBar" @navClick="navBar = !navBar" />
         <Navbar :slide="navBar" />
      </div>
      <router-view />
   </div>
</template>

<script>
import Navbar from '@/components/Nav/Navbar'
import ToggleIcon from '@/components/Nav/ToogleIcon'
export default {
  data () {
    return {
      navBar: false,
      show: true
    }
  },
  components: {
    Navbar,
    ToggleIcon
  },
  watch: {
    $route: {
      immediate: true,
      handler (route) {
        if (route.name === 'Home') {
          this.show = true
        } else {
          this.show = false
          this.navBar = true
        }
      }
    }
  }
}
</script>
<style lang="scss">
@import url("./assets/css/font.css");
</style>
