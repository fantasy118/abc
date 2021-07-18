<template>
    <div class="control-layout-container">
        <a-layout>
            <the-header></the-header>
            <a-layout>
                <the-sider-bar></the-sider-bar>
                <a-layout>
                    <the-main-app></the-main-app>
                </a-layout>
            </a-layout>
        </a-layout>
    </div>
</template>

<script>
import TheHeader from './components/TheHeader'
import TheSiderBar from './components/TheSiderBar'
import TheMainApp from './components/TheMainApp'
export default {
    name: 'ControlLayout',
    components: {
        TheHeader,
        TheSiderBar,
        TheMainApp
    }

}
</script>

<style lang='less' scoped>
   /* .control-layout-container {

   } */

</style>
