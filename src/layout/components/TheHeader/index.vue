<template>
    <div class="index-container">
        <a-layout-header class="header-container">
            <left-logo></left-logo>
            <center-nav></center-nav>
            <right-nav></right-nav>
        </a-layout-header>
    </div>
</template>

<script>
import LeftLogo from './components/LeftLogo'
import CenterNav from './components/CenterNav'
import RightNav from './components/RightNav'
export default {
    name: 'index',
    components: {
        LeftLogo,
        CenterNav,
        RightNav
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
        }
    }
</style>
