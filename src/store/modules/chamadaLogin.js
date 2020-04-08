

const state = {

    authToken: '',
    logado: 'false',
    mensagem: {
        text: '',
        type: ''
    },
};

const getters = {
    auth: (state) => state.authToken,
    logado: (state) => state.logado

};

const actions = {
    setarToken({ commit }, payload) {
        commit('setarToken', payload);
    },
    logar({ commit }, payload) {
        commit('logar', payload);
    },
    setarMensagemError({ commit }, payload) {
        commit('setarMensagemError', payload);
    },
    setarMensagemSucesso({ commit }, payload) {
        commit('setarMensagemSucesso', payload);
    },
};

const mutations = {
    setarToken(state, payload) {
        window.localStorage.authToken = payload;
        state.authToken = payload;
    },

    logar(state, payload) {
        state.logado = payload;
    },
    setarMensagemError(state, payload) {
        state.mensagem = {
            text: payload,
            type: 'ERROR'
        }
    },
    setarMensagemSucesso(state, payload) {
        state.mensagem = {
            text: payload,
            type: 'SUCCESS'
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};