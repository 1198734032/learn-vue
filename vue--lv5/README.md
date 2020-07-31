# practice

## main
+ 这是一个天气预报
+ 可以搜索城市
+ 展示今天天气/未来七天天气/今天的生活质量
+ 深化了vuex的使用、vue-router
+ 了解到了`this.$forceUpdate()` 强制更新数据（我用在大量渲染的数据出现改变时，方比v-for的渲染; + 使用`this.$store.commit("xxx", 传递的参数)`通过调用`mutations`内函数改变vuex变量;
+ vue实例内访问vuex内变量`this.$store.state.xxx`
+ 生命周期函数，最早能使用`data``methods`是在`created`函数中


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
