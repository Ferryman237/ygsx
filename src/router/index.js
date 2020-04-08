import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
      {
        path:"/",
        component:()=>import("@/views/Main")
      },
      {
        path:"/classify",
        component:()=>import("@/views/Classify")
      },
      { 
        name:"productlist",
        path:"/productlist/:id",
        component:()=>import("@/views/Productlist"),
        props:true
      },
      {
        path:"/shopping",
        component:()=>import("@/views/Shopping")
      },
      {
        path:"/center",
        component:()=>import("@/views/Center")
      },
      {
        path:"/city",
        component:()=>import("@/views/City")
      },
      {
        name:"detail",
        path:"/detail/:id",
        component:()=>import("@/views/Detail"),
        props:true
      }
]

const router = new VueRouter({
  routes
})

export default router
