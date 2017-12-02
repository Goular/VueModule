import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App.vue'
import goods from "@/components/goods"
import ratings from "@/components/ratings/ratings.vue"
import seller from "@/components/seller/ratings.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: App,
      children: [
        {
          path:"/goods",
          component:goods
        },
        {
          path:"/ratings",
          component:ratings
        },
        {
          path:"/seller",
          component:seller
        }
      ]
    }
  ]
})
