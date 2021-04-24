<template>
  <div>
    <div>
      <router-link style="margin-right: 10px" :to="{ name: 'Sam01' }"
        >Sam01</router-link
      >
      <router-link to="/sam/sam02">Sam02</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>