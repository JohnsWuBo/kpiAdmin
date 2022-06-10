/**
 * Created by WebStorm.
 * User: nirongxu
 * Date: 2019-01-02
 * Description: 文件描述
 */
import axios from "axios"
// import Cookies from "js-cookie"
import NProgress from "nprogress"
import { Message } from "element-ui"

import myStore from '@/store/index';
const $store = myStore;
// axios默认配置
axios.defaults.timeout = 10000 // 超时时间
axios.defaults.baseURL = "http://localhost:2000"
axios.defaults.headers.common['token'] = JSON.parse(sessionStorage.getItem("token"));
// http request 拦截器
axios.interceptors.request.use(config => {
  NProgress.start()
  config.headers["Content-Type"] = "application/json;charset=UTF-8"
  //获取本地cookies
  if (localStorage.getItem('token')) {
    config.headers.Authorization = "Bearer " + JSON.parse(localStorage.getItem('token'))
    // console.log(JSON.parse(localStorage.getItem('token')) + 11)
  }
  return config
},
error => {
  console.log(error)
  return Promise.reject(error.response)
})

// http response 拦截器
axios.interceptors.response.use(
  response => {
    NProgress.done()
    // if (response.data.code === 11000) {
    //   Cookies.set("access_token", response.data.message, { expires: 1 / 12 })
    //   return Promise.resolve()
    // } else if (response.data.code === 10000) { // 约定报错信息
    //   Message({
    //     message: response.data.message,
    //     type: "warning"
    //   })
    //   return Promise.reject(response)
    // } else {
    //   return Promise.resolve(response)
    // }
    // console.log(response)
    return Promise.resolve(response)
  },
  error => {
    NProgress.done()
      if (error.response.status === 302) {
          Message({
              message: error.response.data.msg,
              type: 'warning'
          })
      }else if (error.response.status === 404) {
        Message({
          message: "请求地址出错",
          type: "warning"
        })
      } else if (error.response.status === 401) {
        Message({
          message: '权限时间到了，请重新登录！',
          type: "warning"
        })
        $store.dispatch("delUserInfo")
        // setTimeout(() => {
        //   location.reload()
        // }, 3000)
      }else if (error.response.status === 403){
        Message({
          message: error.response.data.message,
          type: "warning"
        })
        sessionStorage.removeItem("token")
        setTimeout(() => {
          location.reload()
        }, 3000)
      }else if (error.response.status === 500) {
        Message({
          message: '服务器错误！',
          type: "warning"
        })
      }
    
    return Promise.reject(error.response) // 返回接口返回的错误信息
  })
export default axios
