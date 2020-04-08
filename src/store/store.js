import Vue from 'vue';
import Vuex from 'vuex';
import colecao from './modules/colecao';
import chamadaLogin from './modules/chamadaLogin';
import chamadaApi from './modules/chamadaApi'


Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        colecao,
        chamadaLogin,
        chamadaApi
    }
});

