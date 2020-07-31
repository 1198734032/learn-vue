<template>
  <div class="recommond">
    <div v-for="item in recommend" :key="item.title" class="recommond_item">
      <a :href="item.link">
        <img :src="item.image" />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.recommond{
    display: flex;
    text-align: center;
    padding: 15px 0 30px 0;
    border-bottom: 10px solid rgb(226, 220, 220);
}
.recommond_item{
    flex: 1;
}

.recommond img{
    width: 65px;
    height: 65px;
    margin-bottom: 10px;
}
</style>