const state = {
    count: 1
}
const mutations = {
    ADD_COUNT: (state, num) => {
        state.flag += num
    }
}
const actions = {
    addCount ({ commit }, num) {
        commit('ADD_COUNT', num)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
