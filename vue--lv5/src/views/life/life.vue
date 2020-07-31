<template>
  <div id="life_all">
    <div class="life_item">
      <div>{{fish.name}}:{{fish.level}}</div>
      <div>{{fish.category}}</div>
      <span class="iconfont icon-diaoyu " id="future_fish"></span>
    </div>
    <div class="life_item">
      <div>{{car.name}}:{{car.level}}</div>
      <div>{{car.category}}</div>
      <span class="iconfont icon-ic_local_car_wash_px" id="future_car"></span>
    </div>
    <div class="life_item">
      <div>{{cloth.name}}:{{cloth.level}}</div>
      <div>{{cloth.category}}</div>
      <span class="iconfont icon-chuanyi " id="future_cloth"></span>
    </div>
    <div class="life_item">
      <div>{{sport.name}}:{{sport.level}}</div>
      <div>{{sport.category}}</div>
      <span class="iconfont icon-yundong " id="future_sport"></span>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      fish: {},
      car: {},
      cloth: {},
      sport: {},
    };
  },
  methods: {
    sendRqs(cityid) {
      axios({
        url:
          "https://devapi.heweather.net/v7/indices/1d?type=1,2,3,4&key=2a3e38c5ae1146d6a760fe6b804dcc8f",
        method: "get",
        params: {
          location: cityid,
        },
      }).then((res) => {
        if (res.status != 200) return alert("请求失败");
        let data = res.data.daily;
        [this.car, this.sport, this.cloth, this.fish] = data;
        console.log(this.car, this.sport, this.cloth, this.fish);
      });

      this.$forceUpdate();
    },
  },
  created() {
    this.sendRqs(this.$store.state.cityid);
  },

  watch: {
    "$store.state.cityid": function (new_data, old_data) {
      this.sendRqs(new_data);
    },
  },
};
</script>

<style>
@import "../../assets/css/icon_life/iconfont.css";
#life_all {
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.life_item {
  text-align: center;
  padding: 30px 0;
  border: 1px solid rgb(199, 198, 198);
}
.life_item div {
  padding-bottom: 10px;
}
#future_fish{
  color: rgb(168, 215, 225);
  font-size: 45px;
}
#future_cloth {
  color: rgb(227, 169, 199);
  font-size: 45px;
}
#future_car {
  color: rgb(163, 174, 224);
  font-size: 45px;
}
#future_sport {
  color: rgb(230, 217, 157);
  font-size: 45px;
}
</style>