import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        wea:"qing",
        cityid:101040100,
        city:"重庆"
    },
    mutations:{
        setWea(state,wea){
            state.wea=wea;
        },
        setId(state,id){
            state.cityid=id;
        },
        setCity(state,city){
            state.city=city;
        }
    },
    actions:{},
    getters:{},
    modules:{}
})



export default store
