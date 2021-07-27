import BasicLayout from '@/layout/BasicLayout'
import ControlLayout from '@/layout/ControlLayout'
export default [
    // 全部市场
    {
        path: '/',
        redirect: '/allMarket/dataMarket',
        name: 'DataMarket',
        component: BasicLayout,
        meta: {
            showBread: true,
            name: '全部市场'
        },
        children: [
            {
                path: '/allMarket/dataMarket',
                component: () => import('@/views/allMarket/dataMarket/dataList'),
                name: 'DataList',
                meta: {
                    showBread: true,
                    name: '数据市场'
                }
            },
            {
                path: '/allMarket/serveMarket',
                component: () => import('@/views/allMarket/serveMarket/serveList'),
                name: 'ServeList',
                meta: {
                    showBread: true,
                    name: '服务市场'
                }
            }
        ]
    },
    // 控制台
    {
        path: '/privacyComputation',
        redirect: '/privacyComputation/uniteModel',
        component: ControlLayout,
        name: 'PrivacyComputation',
        meta: {
            showBread: true,
            name: '隐私计算',
            group: 'ControlSider'
        },
        children: [
            {
                path: '/privacyComputation/uniteModel',
                redirect: '/privacyComputation/uniteModel/taskList',
                component: () => import('@/views/privacyComputation/uniteModel'),
                name: 'UniteModel',
                meta: {
                    showBread: true,
                    name: '联合建模'
                },
                children: [
                    {
                        path: '/privacyComputation/uniteModel/taskList',
                        component: () => import('@/views/privacyComputation/uniteModel/taskList'),
                        name: 'UniteTaskList',
                        hidden: true,
                        meta: {
                            showBread: true,
                            name: '子任务列表'
                        }
                    },
                    {
                        path: '/privacyComputation/uniteModel/taskDetail',
                        component: () => import('@/views/privacyComputation/uniteModel/taskDetail.vue'),
                        name: 'TaskDetail',
                        hidden: true,
                        meta: {
                            showBread: true,
                            name: '子任务详情'
                        }
                    }
                ]
            },
            {
                path: '/privacyComputation/uniteQuery',
                component: () => import('@/views/temp'),
                name: 'Temp',
                meta: {
                    showBread: true,
                    name: '联合查询'
                }
            }
        ]
    },
    /* {
        path: '/taskManage',
        component: ControlLayout,
        meta: {
            showBread: true,
            name: '任务管理',
            group: 'ControlSider'
        },
        children: [
            {
                path: '/taskManage/taskList',
                component: () => import('@/views/temp'),
                name: 'TaskList',
                meta: {
                    showBread: true,
                    name: '通知中心列表',
                    hidden: false
                }
            }
        ]
    }, */
    {
        path: '/notify',
        component: ControlLayout,
        name: 'Notify',
        meta: {
            showBread: true,
            name: '通知中心',
            group: 'ControlSider'
        },
        children: [
            {
                path: '/notify',
                component: () => import('@/views/notify/noticeList'),
                name: 'NoticeList',
                meta: {
                    showBread: true,
                    name: '通知中心列表'
                }
            }
        ]
    },
    // 我的信息
    {
        path: '/myInfo',
        redirect: '/myInfo/componeyInfo',
        component: ControlLayout,
        name: 'MyInfo',
        meta: {
            showBread: true,
            name: '我的信息'
        },
        children: [
            {
                path: '/myInfo/componeyInfo',
                component: () => import('@/views/myInfo/componeyInfo'),
                name: 'ComponeyInfo',
                meta: {
                    showBread: true,
                    name: '公司信息'
                }
            }
        ]
    }
]
