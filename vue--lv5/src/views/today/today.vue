<template>
  <div id="today_all">
    <div id="today_tem">{{tem}}°</div>
    <div id="today_wea">{{wea}}</div>
    <div id="today_win">{{win}} {{win_speed}}</div>
    <div id="today_text">光芒透过云缝，洒向大地~</div>
  </div>
</template>

<script>
import axios from "axios";
// import store from "../../store"

export default {
  data() {
    return {
      wea: " ",
      tem_day: " ",
      tem_night: " ",
      tem: " ",
      cityid: " ",
      wea_i: " ",
      win: " ",
      win_speed: " ",
    };
  },

  methods: {
    setWeather() {
      this.$store.commit("setWea", this.wea_i);
    },
    setId() {
      this.$store.commit("setId", this.cityid);
    },
    sendRqs(city) {
      axios({
        url:
          "https://www.tianqiapi.com/free/day?appid=17482235&appsecret=N4mb63vd",
        method: "get",
        params: {
          city: city,
        },
      }).then((res) => {
        if (res.status != 200) return alert("网络连接失败");
        let data = res.data;
        this.wea = data.wea;
        this.tem_day = data.tem_day;
        this.tem_night = data.tem_night;
        this.cityid = data.cityid;
        this.tem = data.tem;
        this.win = data.win;
        this.win_speed = data.win_speed;
        this.wea_i = data.wea_img;
        this.setWeather();
        this.setId();
      });
    },
  },

  created() {
    this.sendRqs(this.$store.state.city);
  },

  watch: {
    '$store.state.city': function (new_data, old_data) {
        this.sendRqs(new_data);
    }
  },
};
</script>

<style>
#today_all {
  background: rgb(186, 222, 243);
  text-align: center;
}

#today_tem {
  font-weight: 520;
  font-size: 50px;
}
#today_wea {
  font-size: 30px;
}
#today_win {
  margin: 10px 0 50px 0;
}
</style>