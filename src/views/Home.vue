<template>
    <div class="home">
        <svg-icon icon-class="icon-noGenerate" />
        <svg-icon icon-class="jay-yonghuzhongxin" class-name="user-icon" />
        <a-button type="primary">hh</a-button>
        <!-- <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'Home',
    components: {
        // HelloWorld
    }
}
</script>

<style lang="less" scoped>
    .user-icon{
        color: red;
    }
</style>
