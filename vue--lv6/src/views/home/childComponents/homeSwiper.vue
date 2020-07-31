<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners" :key="item.title">
        <a :href="item.link">
          <img :src="item.image" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperItem } from "../../../components/common/swip/index.js";
import { getHomeMultidata } from "../../../network/home.js";


export default {
  components: {
    swiper,
    swiperItem,
  },
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  }
};
</script>