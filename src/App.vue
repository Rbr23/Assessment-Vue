<template>
  <v-app>
    <app-header />
    <v-content>
      <router-view />
    </v-content>
    <mensagemError />
  </v-app>
</template>

<script>
import appHeader from './components/header/appHeader.vue';
import mensagemError from './components/mensagens/mensagemError.vue';
import { mapActions} from "vuex";


export default {
  name: "App",
  components: { mensagemError, appHeader },
  methods:{
      ...mapActions([
      "setarToken",
      "logar",
      "setarMensagemSucesso",
      "setarMensagemError",
    ]),
  },
  created(){
    if(window.localStorage.authToken){
      this.setarToken(window.localStorage.authToken);
      this.logar(true);
    } else{
      this.$router.push('/');
    }
  },
};
</script>