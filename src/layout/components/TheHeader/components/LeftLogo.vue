<template>
    <div class="left-logo-container">
        <img src="@/assets/logo.jpg" style="width:200px;height:68px;" alt="loginLogo">
    </div>
</template>

<script>
export default {
    name: 'LeftLogo'

}
</script>

<style lang='less' scoped>
    .left-logo-container {
        height: 100%;
        overflow: hidden;
        .left-logo{
            font-size: 240px;
            position: relative;
            top: -86px;
        }
    }
</style>
