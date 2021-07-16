const state = {
    flag: false
}
const mutations = {
    UPDATE_FLAG: state => {
        state.flag = !state.flag
    }
}
const actions = {
    updateFlag ({ commit }) {
        commit('UPDATE_FLAG')
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
