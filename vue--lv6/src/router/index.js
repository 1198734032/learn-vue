//引入
import Vue from 'vue'
import VueRouter from 'vue-router'


const home = () => import('../views/home/home.vue')
const cart= () => import('../views/cart/cart.vue')
const category = () => import('../views/category/category.vue')
const profile = () => import('../views/profile/profile.vue')



//安装插件
Vue.use(VueRouter)

//创建 vuerouter对象
const routes = [
    {
        //默认地址时，重定向到首页界面
        path: '',
        redirect: '/home'
    },
    {
        path:'/home',
        component:home
    },
    {
        path: '/cart',
        component: cart
    },
    {
        path: '/category',
        component: category
    },
    {
        path: '/profile',
        component: profile
    }
]

//官房规定名字必须为 router
const router = new VueRouter({
    routes: routes,
    mode: 'history'
})


// router.beforeEach((to, from, next) => {
//     document.title = to.matched[0].meta.title;
//     next()
// })

//导出
export default router