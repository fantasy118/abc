<template>
    <a-layout-sider width="200" style="background: #001529">
        <a-menu theme="dark" :open-keys.sync="openKeys" :selected-keys="selectedKeys" mode="inline">
            <template v-for="item in menuList">
                <a-menu-item v-if="item.children&&item.children.length===1" :key="item.path">
                    <router-link :to="item.path">{{item.meta.name}}</router-link>
                </a-menu-item>
                <sub-menu v-else :menuInfo="item" :key="item.path"></sub-menu>
                <!-- <a-sub-menu :key="item.path" v-else>
                    <template #title>{{item.meta.name}}</template>
                    <a-menu-item v-for="innerItem in item.children" :key="innerItem.path">
                        <router-link :to="innerItem.path">{{innerItem.meta.name}}</router-link>
                    </a-menu-item>
                </a-sub-menu> -->
            </template>
        </a-menu>
    </a-layout-sider>
</template>

<script>
import routeList from '@/router/contantsRouter'
import SubMenu from './subMenu'
export default {
    name: 'TheSiderBar',
    components: {
        SubMenu
    },
    data () {
        return {
            openKeys: [],
            selectedKeys: []
        }
    },
    filters: {
        nodeFilter (value, list, path) {
            let obj = {}
            for (const item of list) {
                if (item.path === value) {
                    obj = item
                    break
                }
            }
            if (obj.path === path) {
                return obj.path
            } else {
                if (obj.children) {
                    for (const item of obj.children) {
                        if (item.path === path) {
                            return path
                        }
                    }
                }
            }
        }
    },
    computed: {
        menuList () {
            const parentList = routeList.filter(item => item.meta && item.meta.group === 'ControlSider')
            return parentList
        }
    },
    watch: {
        '$route.path': {
            handler (path) {
                console.log(path)
                for (const item of this.menuList) {
                    if (path.includes(item.path)) {
                        // this.openKeys = [item.path]
                    }
                }
                this.selectedKeys = [path]
            },
            immediate: true
        }
    }
}
</script>

<style lang='less' scoped>

</style>
