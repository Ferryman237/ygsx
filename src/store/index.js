import Vue from 'vue'
import Vuex from 'vuex'
import classify from "./module/classifymodule"
import cartShop from "./module/cartShopping"
Vue.use(Vuex)

export default new Vuex.Store({
  
  modules: {
    classify,
    cartShop
  }
})
