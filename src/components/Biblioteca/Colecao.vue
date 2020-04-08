<template>
      <v-container fluid>
    <v-row>
      <v-col cols="12" nd="4" lg="3">
      </v-col>
    </v-row>
    <lista-colecao/>
  </v-container>
</template>

<script>
import listaColecao from './listaColecao.vue';
export default {
    name:'Colecao',
    components: {listaColecao}
}
</script>