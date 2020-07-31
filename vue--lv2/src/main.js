//在package.json文件中配置build 和 dev ，会优先到文件夹下的node_modules里寻找所需
//这是入口文件

import {sum} from './js/a'
console.log(sum(10,20))

require("./css/a.css")

import Vue from "vue"

import app from './vue/app.vue'

//模板的解析过程：
// template-->ast-->rander-->vdom--->UI
//如果直接采用rander函数，将会减少代码量，节约内存，
//示例；
// 

new Vue({
    el:"#app",
    template:'<app/>',
    components:{
        app
    }
})

