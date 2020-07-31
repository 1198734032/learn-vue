<template>
  <div id="future_all">
    <ul>
      <li class="future_item" v-for="item in datas" :key="item.day">
        <div>{{item.day}}</div>
        <div>{{item.wea}}</div>
        <div>{{item.tem_hight}}/{{item.tem_low}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      datas: [],
    };
  },

  methods: {
    sendRqs(city) {
      axios({
        url:
          "https://tianqiapi.com/api?version=v1&appid=17482235&appsecret=N4mb63vd",
        method: "get",
        params: {
          city: city,
        },
      }).then((res) => {
        if (res.status != 200) return alert("网络连接失败");
        let data = res.data.data;
        for (let i = 0; i < 7; i++) {
          this.datas[i] = {
            day: data[i].day,
            tem_hight: data[i].tem1,
            tem_low: data[i].tem2,
            wea: data[i].wea,
          };
          this.$forceUpdate();
        }
      });
    },
  },

  created() {
    this.sendRqs(this.$store.state.city);
  },

  watch: {
    "$store.state.city": function (new_data, old_data) {
      this.sendRqs(new_data);     
    }
  },
};
</script>

<style>
#future_all {
  width: 100vw;
}
.future_item {
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: 0 12px;
  padding: 12px 0;
  border-bottom: 1px solid rgb(214, 211, 211);
}
</style>