import Vue from 'vue'
import App from './App.vue'
import { Button } from 'mint-ui'

import router from './router'
import Header from './components/Header/Header.vue'
import store from './store'
import Star from './components/Star/Star.vue'
import './validate'
import './mock/mock-server'

//注册全局组件
Vue.component('Header', Header)
Vue.component('Star', Star)
Vue.component(Button.name, Button) // mt-button

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: {
  //   App
  // },
  // template: '<App/>'
  render: h => h(App),
  router, //配置路由器
  store //配置vuex的store
})
