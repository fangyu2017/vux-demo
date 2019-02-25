import axios from 'axios'
axios.defaults.baseURL = process.env.API_ROOT
axios.interceptors.request.use(config => {
  // config.headers = {
  //   // 'Content-Type': 'application/json'
  //   // 设置跨域头部,虽然很多浏览器默认都是使用json传数据，但咱要考虑IE浏览器。
  //   // 'Content-Type': 'multipart/form-data'
  //   // 'Content-Type': 'application/x-www-form-urlencoded'
  // }
  // const token = localStorage.getItem('storeToken') // 获取存储在本地的token
  // if (token) {
  //   config.headers.Authorization = 'Bearer ' + token // 携带权限参数
  // }
  return config
}, err => {
  console.log(err.response)
  return Promise.reject(err)
})
axios.interceptors.response.use(data => {
  if (data.status !== 200 && data.data.error !== 0) {
    return false
  }
  return data
}, error => {
  console.log(error.response)
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        error.message = '请求错误'
        break
      case 401:
        error.message = '授权失败，请请重新登录'
        break
      case 403:
        error.message = '拒绝访问'
        break
      case 404:
        error.message = `请求地址出错: ${error.response.config.url}`
        break
      case 408:
        error.message = '请求超时'
        break
      case 500:
        error.message = '服务器内部错误'
        break
      case 501:
        error.message = '服务未实现'
        break
      case 502:
        error.message = '网关错误'
        break
      case 503:
        error.message = '服务不可用'
        break
      case 504:
        error.message = '网关超时'
        break
      case 505:
        error.message = 'HTTP版本不受支持'
        break
      default:
    }
  }
  return Promise.reject(error)
})
export default {
	axios
}
