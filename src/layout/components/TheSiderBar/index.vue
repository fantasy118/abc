<template>
    <a-layout-sider width="200" style="background: #001529">
        <a-menu theme="dark" :open-keys="openKeys" :selected-keys="selectedKeys" mode="inline">
            <a-sub-menu v-for="item in menuList" :key="item.path">
                <template #title>{{item.meta.name}}</template>
                <a-menu-item v-for="innerItem in item.children" :key="innerItem.path">
                    <router-link :to="innerItem.path">{{innerItem.meta.name}}</router-link>
                </a-menu-item>
            </a-sub-menu>
        </a-menu>
    </a-layout-sider>
</template>

<script>
import routeList from '@/router/contantsRouter'
export default {
    name: 'TheSiderBar',
    data () {
        return {
            openKeys: ['/privacyComputation'],
            selectedKeys: ['/privacyComputation/uniteQuery']
        }
    },
    computed: {
        menuList () {
            const parentList = routeList.filter(item => item.meta && item.meta.group === 'ControlSider' && item.children.length)
            // console.log(parentList)
            return parentList
        }
    }
}
</script>

<style lang='less' scoped>

</style>
