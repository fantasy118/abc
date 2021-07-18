<template>
    <div class="the-main-app-container">
        <bread-crumb></bread-crumb>
        <router-view class="main-container"></router-view>
    </div>
</template>

<script>
import BreadCrumb from './BreadCrumb'
export default {
    name: 'TheMainApp',
    components: {
        BreadCrumb
    }

}
</script>

<style lang='less' scoped>
   .the-main-app-container {
       height: calc(100vh - 68px);
       background-color: rgb(210, 248, 189);
       padding: 30px;
       .main-container{
           padding:26px;
           background-color: #fff;
       }
   }

</style>
