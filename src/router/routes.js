import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'

//所有路由的数组
export default [
  {
    path: '/msite',
    component: Msite
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/search',
    component: Search
  },
  {//自动跳转的路由
    path: '/',
    redirect: '/msite'
  }
]
