const state = {
    minhaColecao: []

};

const getters = {
    allColecao: (state) => state.minhaColecao
};

const actions = {
    adicionarColecao({ commit }, novoLivro) {
        commit('adicionarColecao', novoLivro);
    },
    deletarColecao({ commit }, id) {
        commit("deletarColecao", id);
    },

};

const mutations = {
    adicionarColecao: (state, novoLivro) => state.minhaColecao.push(novoLivro),
    deletarColecao: (state, id) =>
        (state.minhaColecao = state.minhaColecao.filter((l) => l.id !== id)),


};

export default {

    state,
    getters,
    actions,
    mutations
}