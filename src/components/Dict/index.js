import resoures from './resource'

const dictPlugin = {}
dictPlugin.install = Vue => {
    Vue.mixin({
        data () {
            return {
                dict: {}
            }
        },
        created () {
            const dicts = this.$options.dicts
            if (dicts && dicts instanceof Array) {
                dicts.forEach(item => {
                    Vue.set(this.dict, item, resoures[item])
                })
            }
        }
    })
}

export default dictPlugin
