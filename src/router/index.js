// 路由器模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history', //取出路劲中的#

  //应用所有的路由
  routes
})
