<template functional>
    <a-sub-menu :key="props.menuInfo.path">
        <template #title>{{props.menuInfo.meta.name}}</template>
        <template v-for="item in props.menuInfo.children">
            <a-menu-item v-if="!item.children||item.children.length===1||item.children.every(child=>child.hidden)" :key="item.path">
                <router-link :to="item.path">{{item.meta.name}}</router-link>
            </a-menu-item>
            <sub-menu v-else :menuInfo="item" :key="item.path"></sub-menu>
        </template>
    </a-sub-menu>
</template>

<script>
export default {
    name: 'SubMenu',
    props: ['menuInfo']
}
</script>

<style lang='less' scoped>
</style>
