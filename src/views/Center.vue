<template>
  <div>center</div>
</template>
<script>
export default {
  beforeRouteEnter(to, from, next) {
    const token = {
      isLogin() {
        return true;
      }
    };
    if (token.isLogin()) {
      next();
    } else {
      next('/login');
    }
  }
};
</script>
