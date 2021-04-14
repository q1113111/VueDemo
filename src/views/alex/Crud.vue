<template>
  <div>
    <section v-if="loading" class="sec">loading</section>
    <section v-else class="sec">
      <div>
        <label for="">名稱</label>
        <input v-model="input.name" type="text" />
        <label for="">信箱</label>
        <input v-model="input.email" type="text" />
        <button @click="sumitHandle">送出</button>
        <button @click="clearHandle">清除</button>
        <ul>
          <li v-for="(item, index) in contact" :key="item.id">
            <span>{{ item.id }}</span>
            <span>{{ item.name }}</span>
            <a :href="`mailto:${item.email}`">{{ item.email }}</a>
            <span @click="updateHandle(index)">修改</span>
            <span @click="deleteHandle(index)">刪除</span>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      input: {
        name: '',
        email: ''
      },
      editIndex: null
    };
  },

  mounted() {
    if (this.contact.length === 0) {
      const a = this.$store.dispatch('member/getDatabase');
      a.then(res => console.log(res));
    }
  },
  computed: {
    ...mapState('member', {
      contact: (state) => state.contact,
      loading: (state) => state.loading
    })
  },
  methods: {
    sumitHandle() {
      const { name, email } = this.input;
      if (!name || !email) return;
      if (this.editIndex === null) {
        this.$store.dispatch('member/postDatabase', this.input);
      } else {
        this.$store.dispatch('member/updateDatabase', {
          input: this.input,
          editIndex: this.editIndex,
          contact: this.contact[this.editIndex]
        });
      }
      this.clearHandle();
    },
    clearHandle() {
      this.input = {
        name: '',
        email: ''
      };
      this.editIndex = null;
    },
    updateHandle(index) {
      const { name, email } = this.contact[index];
      this.input = {
        name,
        email
      };
      this.editIndex = index;
    },
    deleteHandle(index) {
      const target = this.contact[index];
      if (confirm(`是否刪除${target.name}?`)) {
        this.$store.dispatch('member/deleteDatabase', { target, index });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.sec {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
label,
span,
button {
  padding: 0 10px;
  margin: 0 10px;
  cursor: pointer;
}
</style>>
