<template>
  <div id="top_bar">
    <span class="iconfont icon-dizhi"></span>
    <div>{{$store.state.city}}</div>
  </div>
</template>

<script>
export default {

};
</script>

<style>
@import "../../assets/css/icon_position/iconfont.css";
#top_bar {
  padding: 5px;
  text-align: center;
  font-size: 18px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
}
#top_bar span {
  font-size: 25px;
}
</style>