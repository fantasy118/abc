<template>
    <a-layout-sider width="200" style="background: #001529">
        <a-menu theme="dark" mode="inline">
            <a-menu-item v-for="item in menuList" :key="item.path">
                {{item.meta.name}}
            </a-menu-item>
        </a-menu>
    </a-layout-sider>
</template>

<script>
export default {
    name: 'TheSiderBar',
    computed: {
        menuList () {
            const list = this.$route.matched.filter(item => !item.parent && item.meta.group === 'ControlSider')
            return list
        }
    }

}
</script>

<style lang='less' scoped>

</style>
