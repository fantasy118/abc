import Cookie from 'js-cookie'

const tokenKey = 'PPC-TOKEN'

export const setToken = (token) => Cookie.set(tokenKey, token)

export const getToken = () => Cookie.get(tokenKey)

export const removeToken = () => Cookie.remove(tokenKey)
