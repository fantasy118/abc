<template>
    <div class="center-nav-container">
        <a-menu :selected-keys="[currentKey]" theme="dark" mode="horizontal">
            <a-menu-item key="/allMarket/dataMarket">
                <router-link :to="{name:'DataList'}">数据市场</router-link>
            </a-menu-item>
            <a-menu-item key="/allMarket/serveMarket">
                <router-link :to="{name:'ServeList'}">服务市场</router-link>
            </a-menu-item>
        </a-menu>
    </div>
</template>

<script>
export default {
    name: 'CenterNav',
    computed: {
        currentKey () {
            return this.$route.path
        }
    }

}
</script>

<style lang='less' scoped>
   .center-nav-container {
       padding-left: 60px;
       flex: 1;
       /deep/.ant-menu-horizontal {
            line-height: 68px;
            .ant-menu-item{
                line-height: 68px;
            }
        }
   }

</style>
