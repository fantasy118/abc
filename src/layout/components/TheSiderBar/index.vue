<template>
    <a-layout-sider width="200" style="background: #001529">
        <a-menu theme="dark" :open-keys.sync="openKeys" :selected-keys="selectedKeys" mode="inline">
            <template v-for="item in menuList">
                <a-menu-item v-if="item.children&&item.children.length===1" :key="item.path">
                    <router-link :to="item.path">{{item.meta.name}}</router-link>
                </a-menu-item>
                <sub-menu v-else :menuInfo="item" :key="item.path"></sub-menu>
            </template>
        </a-menu>
    </a-layout-sider>
</template>

<script>
import routeList from '@/router/contantsRouter'
import SubMenu from './subMenu'
import { mapState } from 'vuex'
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
    computed: {
        ...mapState('router', ['routeGroup']),
        menuList () {
            const parentList = routeList.filter(item => item.meta && item.meta.group === this.routeGroup)
            return parentList
        },
        allNodePath () {
            function getNodeKey (routerObj, result = []) {
                if (routerObj.children) {
                    routerObj.children.forEach(item => {
                        if (!result.includes(item.path) && !item.hidden) {
                            result.push(item.path)
                        }
                        result = getNodeKey(item, result)
                    })
                }
                return result
            }
            return getNodeKey({ children: this.menuList })
        }
    },
    watch: {
        '$route.path': {
            handler (path) {
                console.log(path)
                this.openKeys = []
                for (const item of this.allNodePath) {
                    if (path.includes(item) && !this.openKeys.includes(item)) {
                        this.openKeys.push(item)
                    }
                    if (path.includes(item)) {
                        this.selectedKeys = [item]
                    }
                }
            },
            immediate: true
        }
    }
}
</script>

<style lang='less' scoped>

</style>
