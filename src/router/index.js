import Vue from 'vue'
import VueRouter from 'vue-router'
import contantsRouter from './contantsRouter'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
    easing: 'ease', // 动画方式
    speed: 200, // 递增进度条的速度
    showSpinner: false, // 是否显示加载ico
    trickleSpeed: 200, // 自动递增间隔
    minimum: 0.3 // 初始化时的最小百分比
})
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: contantsRouter
})

router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
})
router.afterEach(() => {
    NProgress.done()
})

export default router
