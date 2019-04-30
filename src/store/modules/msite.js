/**
 * 首页模块
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from '../mutation-type'

import {
  reqAddress,
  reqCategorys,
  reqShops
} from '../../api'

const state = {
  latitude: 40.10038, // 纬度
  longitude: 116.36867, // 经度
  address: {}, // 地址信息对象
  categorys: [], // 分类数组
  shops: [] //商家数组
}

const mutations = {
  [RECEIVE_ADDRESS] (state, address) {
    state.address = address
  },
  [RECEIVE_CATEGORYS] (state, categorys) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS] (state, shops) {
    state.shops = shops
  }
}

const actions = {
  //获取地址的异步actions
  async getAddress ({commit, state}) {
    const { longitude, latitude } = state
    //1. 执行异步请求
    const result = await reqAddress(longitude, latitude)
    //2. 根据结果，提交mutation
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, address)
    }
  },

  //获取分类列表的异步actions
  async getCategorys ({commit}) {
    //1. 执行异步请求
    const result = await reqCategorys()
    //2. 根据结果，提交mutation
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, categorys)
    }
  },

  //获取商家列表的异步actions
  async getShops ({commit, state}) {
    const { longitude, latitude } = state
    //1. 执行异步请求
    const result = await reqShops({longitude, latitude})
    //2. 根据结果，提交mutation
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, shops)
    }
  }
}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}
