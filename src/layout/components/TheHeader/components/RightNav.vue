<template>
    <div class="right-nav-container">
        <a-menu theme="dark" :selected-keys="[currentKey]" mode="horizontal">
            <a-menu-item key="/notify">
                <router-link :to="{name:'Notify'}">通知中心</router-link>
            </a-menu-item>
            <a-menu-item key="/privacyComputation">
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
    data () {
        return {
            keyList: ['/notify', '/privacyComputation', '/myInfo/componeyInfo']
        }
    },
    computed: {
        currentKey () {
            let key = ''
            for (const item of this.keyList) {
                if (this.$route.path.includes(item)) {
                    key = item
                    break
                }
            }
            return key
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
