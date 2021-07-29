<template>
    <div class="unite-model-container">
        index--联合建模
        {{dict.taskStatus}}
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'UniteModel',
    dicts: ['taskStatus'],
    data () {
        return {

        }
    }

}
</script>

<style lang='less' scoped>

</style>
