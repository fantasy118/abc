import request from '@/utils/request'

export const login = data => {
    return request({
        url: '/user/login',
        method: 'post',
        data
    })
}

// 获取密钥
export const getPublicbKey = () => {
    return request({
        url: '/user/publicKey',
        method: 'get'
    })
}
