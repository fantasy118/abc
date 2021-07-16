import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/iconfont/iconfont'

import './icons'

import { Button, Layout } from 'ant-design-vue'// svg组件

// 注册到全局
Vue.use(Button)
Vue.use(Layout)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
