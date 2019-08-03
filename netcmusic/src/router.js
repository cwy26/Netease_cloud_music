import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
//1:在router.js中引入组件
import index from './views/xds_index.vue'
import Recommended from "./components/common/Recommended/Recommended.vue"
import NewProduct from "./components/common/NewProduct/NewProduct.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloContainer
    },
    {path: '/index',component: index},
    {path: '/Recommended',component: Recommended},
    {path: '/NewProduct',component: NewProduct}
  ]
})
