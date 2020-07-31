<template name="app">
  <div>
    <tabbar>
      <tabbar-item path="/home">
        <template v-slot:item_img>
          <span class="iconfont icon-yundong"></span>
        </template>
        <template v-slot:item_text>
          <div>首页</div>
        </template>
      </tabbar-item>

      <tabbar-item path="/category">
        <template v-slot:item_img>
          <span class="iconfont icon-qingtian"></span>
        </template>
        <template v-slot:item_text>
          <div>分类</div>
        </template>
      </tabbar-item>

      <tabbar-item path="/cart">
        <template v-slot:item_img>
          <span class="iconfont icon-weilai"></span>
        </template>
        <template v-slot:item_text>
          <div>购物车</div>
        </template>
      </tabbar-item>

      <tabbar-item path="/profile">
        <template v-slot:item_img>
          <span class="iconfont icon-yundong"></span>
        </template>
        <template v-slot:item_text>
          <div>我的</div>
        </template>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import tabbarItem from "../common/tabbar/tabbar-item.vue";
import tabbar from "../common/tabbar/tab_bar.vue";

export default {
  components: {
    tabbar,
    tabbarItem,
  },
};
</script>

<style>
@import "../../assets/css/icon_tabbar/iconfont.css";
</style>
