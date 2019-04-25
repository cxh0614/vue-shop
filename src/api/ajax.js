
/* 能发送ajax请求的函数模块，封装axios，函数的返回值是promise
   使用Promise封装axios的作用
    1. 统一处理请求异常
    2. 异步返回的不是response，而直接是response.data
*/
export default function ajax (url, data = {}, method = 'GET') {
  return new Promise((resolve, reject) => {
    let promise
    //执行异步ajax请求
    if (method === 'GET') {
      promise = axios.get(url, {params: data}) //params配置，制定的是query参数
    } else {
      promise = axios.post(url, data)
    }

    promise.then(
      response => { //如果成功了调用 resolve
        resolve(response.data)
      },
      error => { //如果失败了， 不调用reject，而是提示错误信息
        alert(' 请求异常：' + error.message)
      }
    )
  })
}
