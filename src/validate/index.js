/**
 * 使用表单验证插件
 */
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import zhCN from 'vee-validate/dist/locale/zh_CN'

Vue.use(VeeValidate)

VeeValidate.Validator.localize('zh_CN', {
  messages: zhCN.messages,
  attributes: {
    phone: '手机号',
    code: '验证码',
    name: '用户名',
    pwd: '密码',
    captcha: '验证码'
  }
})

VeeValidate.Validator.extend('mobile', {
  validate: value => {
    return /^1\d{10}$/.test(value)
  },
  getMessage: field => field + '必须是11位手机号码'
})
