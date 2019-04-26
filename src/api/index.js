/*
包含n个接口请求函数的模块
  1. 一次性暴露(可能会有用不到的接口)
  2. 分别暴露（用了哪个接口暴露哪个，不会浪费）
调用ajax函数发送请求
函数的返回值是promise
*/
import ajax from './ajax'
// const BASE = 'http://localhost:5000'
const BASE = '/api'

//根据经纬度获取位置详情
export const reqAddress = (longitude, latitude) => ajax(BASE + `/position/${latitude},${longitude}`) //传参的顺序要求正确

//获取食品分类列表
export const reqCategorys = () => ajax(BASE + '/index_category')

//根据经纬度获取商铺列表
export const reqShops = ({longitude, latitude}) => ajax(BASE + '/shops', {longitude, latitude}) //传参中的对象内的属性名要求一致

//不需要代理来处理
export const reqXxx = () => ajax('/xxx')

//需要通过代理转发请求baidu的接口
export const reqBaidu = () => ajax('/baidu/yyy')
