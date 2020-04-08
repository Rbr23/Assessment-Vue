<template>
  <v-container fluid>
    <formulario />
    <v-row>
      <v-col cols="12" nd="4" lg="3">
        <h6 class="display-1 text-uppercase">Livros</h6>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="livro in allLivros" :key="livro.id" cols="12" md="3" lg="2">
        <v-card class="mx-auto livro-card">
          <div class="text-center pt-3">
            <img :src="livro.imageLink" alt="imagem do livro" width="150px" />
          </div>
          <v-card-title>{{ livro.titulo }}</v-card-title>
          <v-card-subtitle class="pb-0">{{livro.data}}</v-card-subtitle>
          <v-card-subtitle class="pb-0">{{livro.tipo}}</v-card-subtitle>
          <v-card-text class="text--primary">
            <div>{{ livro.descricao }}</div>
            <div></div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="orange" text @click="adicionarColecao(livro)">Adicionar Coleção</v-btn>
          </v-card-actions>
          <v-card-actions>
            <v-btn color="red" text @click="deleteLivro(livro.id)">Deletar</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import formulario from "../Fomulario/Formulario.vue";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "listaLivroApi",
  components: { formulario },
  methods: {
    ...mapActions(["getLivro", "adicionarColecao", "deleteLivro"])
  },
  computed: {
    ...mapGetters(["allLivros"])
  },
  created() {
    this.getLivro();
  }
};
</script>

<style scoped>
.livro-card {
  height: 100%;
}
</style>