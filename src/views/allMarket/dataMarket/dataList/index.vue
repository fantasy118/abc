<template>
    <div class="data-list-container">
        index列表
    </div>
</template>

<script>
import { login, getPublicbKey } from '@/api/login'
import JSEncrypt from 'jsencrypt'
export default {
    name: 'DataList',
    data () {
        return {
            ruleForm: {
                username: '9999@qq.com',
                password: '!qaz2wsx'
            },
            publicKey: ''
        }
    },
    created () {
        this.getKey()
    },
    methods: {
        async getKey () {
            const res = await getPublicbKey()
            console.log(res)
            if (res.code === 0) {
                this.publicKey = res.data
                this.login()
            }
        },
        getEncrypt (password) {
            const encryptor = new JSEncrypt()
            encryptor.setPublicKey(this.publicKey)
            return encryptor.encrypt(password)
        },
        async login () {
            const confirm = Object.assign({}, this.ruleForm)
            confirm.password = this.getEncrypt(confirm.password)
            const res = await login(confirm)
            console.log(res)
            console.log(this.ruleForm)
            if (res.code === 0) {
                this.$message.success('登陆成功')
            }
        }
    }
}
</script>

<style lang='less' scoped>
</style>
