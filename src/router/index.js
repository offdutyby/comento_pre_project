import Vue from "vue"
import VueRouter from "vue-router"
import Main from "../pages/Main.vue"
import Detail from "../pages/Detail.vue"

// 뷰 어플리케이션에 라우터 플러그인을 추가한다.,
Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  routes: [
    { 
      path: "/", 
      component: Main 
    },
    { 
      path: "/detail/:id",
      name: 'detail',
      component: Detail
    },
  ],
})

export default router