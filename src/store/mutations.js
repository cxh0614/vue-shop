/*
包含n个用来直接更新状态数据的方法的对象
*/
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-type'

export default {
  [RECEIVE_ADDRESS] (state, address) {
    state.address = address
  },
  [RECEIVE_CATEGORYS] (state, categorys) {
    state.address = categorys
  },
  [RECEIVE_SHOPS] (state, shops) {
    state.address = shops
  }
}
