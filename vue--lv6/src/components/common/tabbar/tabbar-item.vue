<template>
 <div class="tab_bar_item" @click="itemClick"  :class="{active:isActive}">
       <slot name="item_img"></slot>
       <slot name="item_text"></slot>
 </div>
</template>

<script>
export default {
  props:{
    path:String
  },

  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1
    }
  },
  methods:{
    itemClick(){  
      this.$router.replace(this.path).catch(()=>{})
    }
  }
};
</script>

<style scoped>
.tab_bar_item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab_bar_item span {
  font-size: 20px;
}
.active{
  color: rgb(247, 145, 28);
}

</style>