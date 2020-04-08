import axios from 'axios';

const state = {
    livros: []

};

const getters = {
    allLivros: (state) => state.livros
};

const actions = {
    getLivro({ commit }) {
        axios
            .get(
                "https://my-json-server.typicode.com/Rbr23/API/livros"
            )
            .then((response) => {
                commit("getLivro", response.data);
            });
    },
    addLivro({ commit }, novoLivro) {
        const novoId = state.livros.length + 1;
        novoLivro.id = novoId;
        commit("addLivro", novoLivro);
    },
    deleteLivro({ commit }, id) {
        commit("removeLivro", id);
    },
};

const mutations = {
    getLivro: (state, livros) => (state.livros = livros),
    addLivro: (state, novoLivro) => {
        state.livros.push(novoLivro)
    },
    removeLivro: (state, id) =>
        (state.livros = state.livros.filter((l) => l.id !== id)),
};

export default {
    state,
    getters,
    actions,
    mutations
};