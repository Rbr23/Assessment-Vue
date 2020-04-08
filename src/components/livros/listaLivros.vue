<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" nd="4" lg="3">
      </v-col>
    </v-row>
    <lista-livro-api/>
  </v-container>
</template>

<script>
import listaLivroApi from './listaLivroApi'
export default {
  name: "listaLivros",
  components: {listaLivroApi},
  };
</script>