<template>
    <div class="index-container">
        <a-layout-header class="header-container">
            <left-logo></left-logo>
            <div class="header-center">center</div>
            <div>right</div>
        </a-layout-header>
    </div>
</template>

<script>
import LeftLogo from './components/LeftLogo.vue'
export default {
    name: 'index',
    components: {
        LeftLogo
    }

}
</script>

<style lang='less' scoped>
    .index-container {
        .header-container{
            height: 68px;
            padding: 0 28px;
            display: flex;
            color: #fff;
            .header-center{
                padding-left: 60px;
                flex: 1;
            }
        }
    }
</style>
