import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import goods from './components/goods/goods'
import ratings from './components/ratings/ratings'
import sellers from './components/sellers/seller'
import VuereSource from 'vue-resource'
import './common/stylus/index.styl'
Vue.use(VueRouter)
Vue.use(VuereSource)
// /* eslint-disable no-new */
const routes = [
  {path: '/', redirect: '/goods'},
  { path: '/goods', component: goods },
  {path: '/sellers', component: sellers},
  {path: '/ratings', component: ratings}
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
