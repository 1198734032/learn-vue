<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <minibar></minibar>
  </div>
</template>

<script>
import minibar from "./components/content/minibar.vue";

export default {
  name: "App",
  components: {
    minibar
  },
};
</script>

<style>
@import "./assets/css/base.css";
</style>
