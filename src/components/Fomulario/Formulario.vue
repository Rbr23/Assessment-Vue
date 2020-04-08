 <template>
  <div>
    <v-btn class="mr-4" @click="mostrarForm">Formulario</v-btn>
    <form @submit.prevent="onSubmit" v-if="mostrarLivros">
      <v-text-field
        v-model="novoLivro.titulo"
        :counter="10"
        label="Titulo do Livro"
        type="text"
        required
      ></v-text-field>
      <v-text-field
        v-model="novoLivro.imageLink"
        :counter="10"
        label="Link da Imagem"
        type="link"
        required
      ></v-text-field>
      <v-text-field v-model="novoLivro.data" :counter="10" type="date" required></v-text-field>
      <v-textarea v-model="novoLivro.descricao" label="Descrição do Livro" type="text" required></v-textarea>
      <v-select v-model="novoLivro.tipo" :items="tipos" label="Tipo do Livro" required></v-select>
      <v-btn class="mr-4" type="submit">ENVIAR</v-btn>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Formulario",
  data() {
    return {
      mostrarLivros: false,
      novoLivro: {
        titulo: "",
        imageLink: "",
        data: "",
        descricao: "",
        tipo: null
      },
      tipos: [
        { text: "Tipo:", value: null },
        "Romance",
        "Terror",
        "Fantasia",
        "Ficção",
        "Novela"
      ]
    };
  },
  methods: {
    ...mapActions(["addLivro"]),
    mostrarForm() {
      this.mostrarLivros = this.mostrarLivros ? false : true;
    },
    onSubmit() {
      this.addLivro(this.novoLivro);
      alert("Livro Adicionado com sucesso!");
    }
  }
};
</script>