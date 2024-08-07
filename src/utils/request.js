import axios from 'axios'
import { getToken, removeToken } from './token'
import router from '@/router'

const http = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0',
  timeout: 5000
})

// 添加请求拦截器
http.interceptors.request.use((config)=> {

    //操作cofig 注入token数据
    //获取token
    //按照后端的格式要求，做token的拼接
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  }, (error)=> {
    return Promise.reject(error)
})

// 添加响应拦截器
http.interceptors.response.use((response)=> {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data
  }, (error)=> {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    console.dir(error)
    if(error.response.status === 401){
        router.navigate('login')
        removeToken()
        window.location.reload()
        
    }
    return Promise.reject(error)
})

export { http }

