/**
 * 商家模块
 */
import {
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS
} from '../mutation-type'

const state = {
  goods: [], // 商品列表
  ratings: [], // 商家评价列表
  info: {} // 商家信息
}

const mutations = {
  [RECEIVE_INFO] (state, {info}) { // 接受包含数据的对象
    state.info = info
  },
  [RECEIVE_RATINGS] (state, {ratings}) {
    state.ratings = ratings
  },
  [RECEIVE_GOODS] (state, {goods}) {
    state.goods = goods
  }
}

const actions = {

}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}
/*
总state结构:
  {
    msite: {},
    user: {},
    shop: {},
  }

  state.msite.address
  state.user.user
 */
