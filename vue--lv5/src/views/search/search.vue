<template>
  <div id="search_all">
    <div id="search_ipt">
      <input type="text" v-model="ipt" placeholder="请输入你想搜索的城市" />
      <span class="iconfont icon-soushuo" @click="search"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ipt: "",
    };
  },
  methods: {
    search() {
      if (this.ipt != this.$store.state.city) {
        this.$store.commit("setCity", this.ipt);
      }
      this.ipt;
      this.$router.replace("/today").catch(() => {});
      this.ipt = "";
    },
  },
};
</script>

<style >
@import "../../assets/css/icon_search/iconfont.css";
#search_all {
  width: 100vw;
}
#search_ipt {
  padding: 0 20px;
  border: 2px solid rgb(206, 202, 202);
  border-radius: 15px;
  width: 60vw;
  margin: 0 auto;
  line-height: 35px;
  background: white;
  display: flex;
  justify-content: space-between;
}
#search_ipt input {
  border: none;
  background: transparent;
}
.icon-soushuo {
  font-size: 20px;
  color: rgb(173, 169, 169);
}
</style>