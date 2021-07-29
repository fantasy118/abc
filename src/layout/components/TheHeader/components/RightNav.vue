<template>
    <div class="right-nav-container">
        <a-menu theme="dark" :selected-keys="[currentKey]" mode="horizontal">
            <a-menu-item key="/notify">
                <span type="link" @click="goMain('Notify','ControlSider')">通知中心</span>
            </a-menu-item>
            <a-menu-item key="/privacyComputation">
                <span type="link" @click="goMain('PrivacyComputation','ControlSider')">控制台</span>
            </a-menu-item>
            <a-menu-item key="/myInfo">
                <span type="link" @click="goMain('MyInfo','UserSider')">我的信息</span>
            </a-menu-item>
        </a-menu>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'RightNav',
    data () {
        return {
            keyList: ['/notify', '/privacyComputation', '/myInfo']
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
    },
    methods: {
        ...mapActions('router', ['updateGroup']),
        goMain (path, name) {
            this.updateGroup(name)
            this.$router.push({ name: path })
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
