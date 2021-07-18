<template>
    <div class="right-nav-container">
        <a-menu theme="dark" :selected-keys="[currentKey]" mode="horizontal">
            <a-menu-item key="/notify/noticeList">
                <router-link :to="{name:'Notify'}">通知中心</router-link>
            </a-menu-item>
            <a-menu-item key="/privacyComputation/uniteModel">
                <router-link :to="{name:'PrivacyComputation'}">控制台</router-link>
            </a-menu-item>
            <a-menu-item key="/myInfo/componeyInfo">
                <router-link :to="{name:'ComponeyInfo'}">我的信息</router-link>
            </a-menu-item>
        </a-menu>
    </div>
</template>

<script>
export default {
    name: 'RightNav',
    computed: {
        currentKey () {
            return this.$route.path
        }
    }

}
</script>

<style lang='less' scoped>
   .right-nav-container {
       /deep/.ant-menu-horizontal{
            line-height: 68px;
            .ant-menu-item-selected{
                background-color: #001529;
            }
       }
   }

</style>
