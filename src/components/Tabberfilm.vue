<template>
  <nav>
    <ul class="nav">
      <router-link tag="li" to="/film/nowplaying" activeClass="active"
        >nowplaing</router-link
      >
      <router-link tag="li" to="/film/comeingsoon" activeClass="active"
        >comeingsoon</router-link
      >
    </ul>
  </nav>
</template>
<style lang="scss" scoped>
.active {
  color: #f00;
}
.nav {
  display: flex;
  background-color: #ff0;
  li {
    flex: 1;
  }
}
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
