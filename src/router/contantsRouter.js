import BasicLayout from '@/layout/BasicLayout'
export default [
    {
        path: '/',
        redirect: '/allMarket/dataMarket',
        name: 'DataMarket',
        component: BasicLayout,
        children: [
            {
                path: '/allMarket/dataMarket',
                component: () => import('@/views/allMarket/dataMarket/dataList'),
                name: 'DataList'
            }
        ]
    }
]
