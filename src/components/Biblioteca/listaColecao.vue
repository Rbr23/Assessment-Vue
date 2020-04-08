<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="livro in allColecao" :key="livro.title" cols="12" md="3" lg="2">
        <v-card class="mx-auto livro-card" color="green">
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
            <v-btn color="red" text @click="deletarColecao(livro.id)">Deletar</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "listaColecao",
  computed: {
    ...mapGetters(["allColecao"])
  },
  methods: {
    ...mapActions(["deletarColecao"])
  }
};
</script>