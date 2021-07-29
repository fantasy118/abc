import axios from 'axios'
import { getToken } from './handleCookie'
import { Message } from 'ant-design-vue'

// 创建axios实例
const request = axios.create({
    baseURL: '/api',
    timeout: 1000
})

// 请求拦截
request.interceptors.request.use(config => {
    config.headers['PPC-TOKEN'] = getToken() || ''
    return config
})

// 接收拦截
request.interceptors.response.use(
    response => {
        const res = response.data
        if (res.code && res.code !== 0) {
            Message.error(res.message)
        }
        return res
    },
    error => {
        console.log(error)
    }
)

export default request
