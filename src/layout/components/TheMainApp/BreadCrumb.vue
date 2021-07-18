<template>
    <div class="bread-crumb-container">
        <a-breadcrumb>
            <a-breadcrumb-item v-for="(item,index) in breadList" :key="index">
                <template v-if="index!==breadList.length-1">
                    <router-link :to="item.path">{{item.meta.name}}</router-link>
                </template>
                <template v-else>{{item.meta.name}}</template>
            </a-breadcrumb-item>
        </a-breadcrumb>
    </div>
</template>

<script>
export default {
    name: 'BreadCrumb',
    computed: {
        breadList () {
            return this.$route.matched.filter(item => item.meta && item.meta.name && item.meta.showBread)
        }
    }

}
</script>

<style lang='less' scoped>
   .bread-crumb-container {
       margin-bottom: 20px;
   }

</style>
