<template>
    <a-layout-sider width="200" style="background: #001529">
        <a-menu theme="dark" mode="inline">
            <!-- <a-menu-item v-for="item in menuList" :key="item.path">
                {{item.meta.name}}
            </a-menu-item> -->
            <a-sub-menu v-for="item in menuList" :key="item.path">
                <template #title>{{item.meta.name}}</template>
                <a-menu-item v-for="innerItem in item.children" :key="innerItem.path">{{innerItem.meta.name}}</a-menu-item>
            </a-sub-menu>
        </a-menu>
    </a-layout-sider>
</template>

<script>
import routeList from '@/router/contantsRouter'
export default {
    name: 'TheSiderBar',
    computed: {
        menuList () {
            // const list = this.$route.matched.filter(item => !item.parent && item.meta.group === 'ControlSider')
            const parentList = routeList.filter(item => item.meta && item.meta.group === 'ControlSider' && item.children.length)
            console.log(parentList)
            return parentList
        }
    }
}
</script>

<style lang='less' scoped>

</style>
