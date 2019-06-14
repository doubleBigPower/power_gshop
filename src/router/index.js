/*
  路由
*/

import Vue from 'vue'
import Router from 'vue-router'
import Msite from "../pages/Msite/Msite.vue"
import Search from "../pages/Search/Search.vue"
import Order from "../pages/Order/Order.vue"
import Profile from "../pages/Profile/Profile.vue"
import Login from "../pages/login/Login.vue"

Vue.use(Router)
export default new Router({
  routes: [
      {
        path:"/msite",
        name:"Msite",
        component:Msite,
        meta:{
          showfooter:true
        }
      },
      {
        path:"/search",
        name:"Search",
        component:Search,
        meta:{
          showfooter:true
        }
      },
      {
        path:"/order",
        name:"Order",
        component:Order,
        meta:{
          showfooter:true
        }
      },
      {
        path:"/profile",
        name:"Profile",
        component:Profile,
        meta:{
          showfooter:true
        }
      },
      {
        path:"/login",
        name:"Login",
        component:Login
      },
      {
        path:"/",
        name:"Msite",
        redirect:"/msite"
      }
  ]
})
