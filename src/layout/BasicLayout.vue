<template>
    <div class="basic-layout-container">
        <a-layout>
            <the-header></the-header>
            <the-main-app></the-main-app>
        </a-layout>
    </div>
</template>

<script>
import TheHeader from './components/TheHeader'
import TheMainApp from './components/TheMainApp'
export default {
    name: 'BasicLayout',
    components: {
        TheHeader,
        TheMainApp
    }

}
</script>

<style lang='less' scoped>
</style>
