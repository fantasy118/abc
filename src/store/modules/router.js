const state = {
    routeGroup: ''
}
const mutations = {
    UPDATE_GROPU: (state, name) => {
        state.routeGroup = name
    }
}
const actions = {
    updateGroup ({ commit }, name) {
        commit('UPDATE_GROPU', name)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
