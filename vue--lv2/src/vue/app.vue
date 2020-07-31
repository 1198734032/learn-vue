<!-- 专门放组件的文件-->

<template>
  <div>
    <h1 class="title">{{word}}</h1>
    <h2 @click="show">{{web}}</h2>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      word: " HELLO,WORLD!",
      web: " HELLO,WEBPACK!"
    };
  },
  methods: {
    show() {
      alert("hi!");
    }
  }
};
</script>


<style scoped>
.title {
  color: aquamarine;
}
</style>


