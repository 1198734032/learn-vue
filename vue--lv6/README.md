# supermall

## main
+ 可以通过`this.$refs.refname`获取到一个元素对象
+ vue最好不要直接操作dom，不要document.get....，因为当有多个元素为同一class时，易出错。
+ css计算: height:calc(100%-10px)
+ 需就要监听组件的原生事件时，采用(.native),否则监听不到。e.g.:@click.native="xxx"
+ keep-alive 用 exclude排除某些组件
+ class思想

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
