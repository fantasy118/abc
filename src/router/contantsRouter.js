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
                        meta: {
                            showBread: true,
                            name: '子任务列表'
                        }
                    },
                    {
                        path: '/privacyComputation/uniteModel/taskDetail',
                        component: () => import('@/views/privacyComputation/uniteModel/taskDetail.vue'),
                        name: 'PriTaskDetail',
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
    {
        path: '/taskManage',
        component: ControlLayout,
        meta: {
            showBread: true,
            name: '周杰伦',
            group: 'ControlSider'
        },
        children: [
            {
                path: '/taskManage/taskList',
                component: () => import('@/views/jay/fantasy'),
                redirect: '/taskManage/taskList/taskNorth',
                name: 'TaskList',
                meta: {
                    showBread: true,
                    name: '范特西'
                },
                children: [
                    {
                        path: '/taskManage/taskList/taskNorth',
                        component: () => import('@/views/jay/fantasy/qhc'),
                        name: 'TaskNorth',
                        hidden: true,
                        meta: {
                            showBread: true,
                            name: '青花瓷'
                        }
                    },
                    {
                        path: '/taskManage/taskList/taskNorth2',
                        component: () => import('@/views/jay/fantasy/parent'),
                        name: 'TaskNorth2',
                        hidden: true,
                        meta: {
                            showBread: true,
                            name: '以父之名'
                        }
                    }
                ]
            },
            {
                path: '/taskManage/taskDetail',
                component: () => import('@/views/temp'),
                name: 'TaskDetail',
                meta: {
                    showBread: true,
                    name: '一路向北'
                }
            }
        ]
    },
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
        component: ControlLayout,
        meta: {
            showBread: false,
            name: '我的信息',
            group: 'UserSider'
        },
        children: [
            {
                path: '/myInfo',
                redirect: '/myInfo/list',
                component: () => import('@/views/myInfo'),
                meta: {
                    showBread: true,
                    name: '我的信息'
                },
                children: [
                    {
                        path: '/myInfo/list',
                        component: () => import('@/views/myInfo/myInfo'),
                        name: 'MyInfo',
                        hidden: true,
                        meta: {
                            showBread: true,
                            name: '我的信息列表'
                        }
                    },
                    {
                        path: '/myInfo/componeyInfo',
                        component: () => import('@/views/myInfo/componeyInfo'),
                        name: 'ComponeyInfo',
                        hidden: true,
                        meta: {
                            showBread: true,
                            name: '公司信息'
                        }
                    }
                ]
            }
        ]
    }
]
