<template>
    <div class="left-logo-container">
        <svg-icon icon-class="icon-header" class-name="left-logo"/>
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
