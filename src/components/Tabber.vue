<template>
  <nav>
    <ul>
      <router-link tag="li" to="/film" activeClass="active"
        ><i class="fas fa-heart"></i>film</router-link
      >
      <router-link tag="li" to="/cinema" activeClass="active"
        ><i class="fas fa-heart"></i>cinema</router-link
      >
      <li>
        <router-link to="/center" activeClass="active">center</router-link>
      </li>
         <li>
        <router-link to="/combolist" activeClass="active">combolist</router-link>
      </li>
    </ul>
  </nav>
</template>
<style lang="scss" scoped>
.active {
  color: #f00;
}
</style>
