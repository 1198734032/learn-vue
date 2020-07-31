import Vue from 'vue'
import VueRouter from 'vue-router'

const today = ()=>import ('../views/today/today.vue')
const life =()=>import( '../views/life/life.vue')
const future =()=> import( '../views/future/future.vue')
const search =()=> import( '../views/search/search.vue')



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/today'
  },
  {
    path: '/today',
    component: today
  },
  {
    path: '/life',
    component: life
  },
  {
    path: '/future',
    component: future,
  },
  {
    path:'/search',
    component:search
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
