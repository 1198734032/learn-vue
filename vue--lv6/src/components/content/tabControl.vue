<template>
  <div class="tab_control">
    <div v-for="(item,index) in title" :key="item" class="tab_control_item"
         :class="{active:index===currentIndex}"
         @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>item

<script>
export default {
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data(){
      return{
          currentIndex:0
      }
  },
  methods:{
      itemClick(index){
            this.currentIndex=index;
            this.$emit("itemClick",index)
      }
  }
};
</script>

<style scoped>
.tab_control {
  display: flex;
  background: white;
}

.tab_control_item {
  flex: 1;
  text-align: center;
  line-height: 40px;
}
.tab_control_item span{
    padding: 5px;
}
.active{
    color: thistle;
}
.active span{
    border-bottom: 3px solid thistle;
}
</style>