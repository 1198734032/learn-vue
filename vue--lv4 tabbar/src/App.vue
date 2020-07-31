<template name="app">
  <div>
    <tabbar>
      <tabbar-item>
        <template v-slot:item_img>
          <img src="./assets/img/type03.png" alt />
        </template>
        <template v-slot:item_text>
          <div>首页</div>
        </template>
      </tabbar-item>
      <tabbar-item>
        <template v-slot:item_img>
          <img src="./assets/img/type03.png" alt />
        </template>
        <template v-slot:item_text>
          <div>首页</div>
        </template>
      </tabbar-item>
      <tabbar-item>
        <template v-slot:item_img>
          <img src="./assets/img/type03.png" alt />
        </template>
        <template v-slot:item_text>
          <div>首页</div>
        </template>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import tabbarItem from "./components/tabbar/tabbar-item.vue";
import tabbar from "./components/tabbar/tab_bar.vue";

export default {
  name: "App",
  components: {
    tabbar,
    tabbarItem,
  },
};
</script>

<style>
</style>
