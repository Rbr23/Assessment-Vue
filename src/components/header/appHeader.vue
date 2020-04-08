<template>
  <v-app-bar color="primary" dark flat  max-height="60">
    <v-toolbar-title/>BUSCABOOK - AT/FRAMEWORK.VUE
    <v-spacer></v-spacer>
    <v-toolbar-items v-if="logado">
      <v-btn text @click="listaLivros">LIVROS</v-btn>
      <v-btn text @click="seguirColecao" v-if="auth" >MINHA COLEÇÃO</v-btn>
      <v-btn text @click="sair">SAIR</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>


<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "appHeader",
  methods: {
    ...mapActions([
      "setarToken",
      "logar",
     ]),
    listaLivros() {
      this.$router.push("/listaLivros");
    },
    seguirColecao() {
      this.$router.push("/Colecao");
    },
    
    sair() {
      this.logar(false);
      this.setarToken = '';
      console.log(this.auth);
      this.$router.push("/");
    }
  },
  computed: {
    ...mapGetters(["auth", "logado"])
  },

};
</script>

<style lang="stylus">

</style>