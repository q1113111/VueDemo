<template>
  <div>
    <div @click="number++">
      {{ number }}
    </div>
    <div @click="obj.num++">
      {{ obj.num }}
    </div>
    <div>
      <span
        v-for="(item, index) in objList"
        @click="objListHandle(index)"
        :key="index"
      >
        {{ item.num }}
      </span>
    </div>
    <div>
      <span
        v-for="(number, index) in numList"
        @click="numListHandle(index)"
        :key="index"
      >
        {{ number }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
      obj: {
        num: 0
      },
      objList: [{ num: 0 }, { num: 0 }, { num: 0 }],
      numList: [0, 0, 0]
    };
  },
  methods: {
    objListHandle(index) {
      this.objList[index].num++;
    },
    numListHandle(index) {
      this.$set(this.numList, index, this.numList[index] + 1);
    }
  },
  watch: {
    number(val, old) {
      console.log('number：', val, old);
    },
    obj: {
      handler(val, old) {
        console.log('obj：', val, old);
      },
      deep: true
    },
    objList: {
      handler(val, old) {
        console.log('objlist：', val, old);
      },
      deep: true
    },
    numList(val, old) {
      console.log('numList：', val, old);
    }
  }
};
</script>

<style scoped>
div {
  margin: 50px 50px;
  cursor: pointer;
}
span {
  margin: 0 20px;
}
</style>
