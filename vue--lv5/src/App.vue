<template name="app">
  <div id="all"  >
    <div @click="search">
    <topbar></topbar>
    </div>
    <div id="content">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    </div>
    <tabbar>
      <tabbar-item path="/life">
        <template v-slot:item_img>
          <span class="iconfont icon-yundong"></span>
        </template>
        <template v-slot:item_text>
          <div>生活指数</div>
        </template>
      </tabbar-item>

      <tabbar-item path="/today">
        <template v-slot:item_img>
          <span class="iconfont icon-qingtian"></span>
        </template>
        <template v-slot:item_text>
          <div>今日天气</div>
        </template>
      </tabbar-item>

      <tabbar-item path="/future">
        <template v-slot:item_img>
          <span class="iconfont icon-weilai"></span>
        </template>
        <template v-slot:item_text>
          <div>未来天气</div>
        </template>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import tabbarItem from "./components/tabbar/tabbar-item.vue";
import tabbar from "./components/tabbar/tab_bar.vue";
import topbar from "./components/topbar/topbar.vue";

export default {
  name: "App",
  components: {
    tabbar,
    tabbarItem,
    topbar,
  },
  methods:{
    search(){
      this.$router.replace('/search').catch(()=>{})
    }
  }  
};
</script>

<style>
@import "./assets/css/icon_tabbar/iconfont.css";
#all {
  height: 100vh;
  width: 100vw;
     background: rgb(186, 222, 243);
     display: flex;
     justify-content: center;
     align-items: center;
  /* background-image: url(./assets/img/background/$store.state.wea+.jpg); */
}
</style>
