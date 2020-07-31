<template>
  <div>
    <topbar class="top_nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </topbar>
    <home-swiper class="home_swiper" :banners="banners"></home-swiper>
    <recommends :recommend="recommends"></recommends>
    <tab-control class="tab_control" :title="['流行','新款','精选']" @itemClick="itemClick"></tab-control>
    <div id="zhanwei"></div>
  </div>
</template>

<script>
import topbar from "../../components/common/topbar/topbar.vue";
import tabControl from "../../components/content/tabControl.vue";

import homeSwiper from "./childComponents/homeSwiper.vue";
import recommends from "./childComponents/recommend.vue";

import { getHomeMultidata, getHomeGoods } from "../../network/home.js";

export default {
  components: {
    topbar,
    tabControl,
    homeSwiper,
    recommends,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType:'pop'
    };
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("new"),
    this.getHomeGoods("pop")
    this.getHomeGoods("sell")

  },
  methods: {
    itemClick(index){
      switch(index){
        case 0:
          this.currentType='pop';
          break;
          case 1:
            this.currentType='new';
            break;
            case 2:
              this.currentType="sell";
              break;
      }
      
    },

    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type){
      // const page=this.goods[type].page+1;
      // getHomeGoods(type,page).then(res=>{
      //   this.goods[type].list.push(...res.data.list)
      //   this.goods[type].page+=1
      // })
    }
  },
};
</script>


<style scoped>
.top_nav {
  background-color: rgb(243, 108, 164);
  color: white;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
}
.home_swiper {
  padding-top: 44px;
}
.tab_control {
  position: sticky;
  top: 44px;
}
#zhanwei{
  width: 100vw;
  height: 800px;
  background-color: rgb(223, 217, 217);
  overflow: scroll;
}
</style>