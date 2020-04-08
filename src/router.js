import Vue from 'vue';
import Router from 'vue-router';
import PaginaLogin from './components/login/PaginaLogin';
import listaLivros from './components/livros/listaLivros';
import Colecao from './components/Biblioteca/Colecao'


Vue.use(Router)

const routes = [
    {path: '/', name: 'login', component: PaginaLogin},
    {path: '/listaLivros', name: 'listaLivros', component: listaLivros},
    {path: '/Colecao', name: 'Colecao', component: Colecao},
    
];


export default new Router({
    mode: "history",
    routes
});