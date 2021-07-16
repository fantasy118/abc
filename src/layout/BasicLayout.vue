<template>
    <div class="basic-layout-container">
        <a-layout>
            <the-header></the-header>
        </a-layout>
        <router-view></router-view>
    </div>
</template>

<script>
import TheHeader from './components/TheHeader'
export default {
    name: 'BasicLayout',
    components: {
        TheHeader
    }

}
</script>

<style lang='less' scoped>
</style>
