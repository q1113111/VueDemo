<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <TitleComponent :title="title" />
    <InputComponent :text="title" @textChange="change" />
      <!-- <InputComponent :text.sync="title" > -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import TitleComponent from '@/components/TitleComponent';
import InputComponent from '@/components/InputComponent';
export default {
  name: 'Home',
  data() {
    return {
      title: 'hi I am Sam'
    };
  },
  components: {
    HelloWorld,
    TitleComponent,
    InputComponent
  },
  methods: {
    change(val) {
      this.title = val;
    }
  }
};
</script>
