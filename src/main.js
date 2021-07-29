import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/iconfont/iconfont'

import './icons'

import { Button, Layout, Menu, Breadcrumb } from 'ant-design-vue'// svg组件

// 注册到全局
Vue.use(Button)
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Breadcrumb)

Vue.config.productionTip = false
console.log(process.env.VUE_APP_BASE_API, 9090)
console.log(process.env.NODE_ENV, 9091)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
