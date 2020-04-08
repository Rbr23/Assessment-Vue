<template>
  <div id="app">
    <v-app id="inspire">
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar color="primary" dark flat class="text-center">
                  <v-toolbar-title>TOKEN</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field id="token" label="token" name="token" type="token"></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="red" @click="login">Login</v-btn>
                </v-card-actions>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="red" @click="loginVisitante">Login de visitante</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "PaginaLogin",
  data() {
    return {
      token: "AIzaSyDR-MipEitzCBEy3k8MtY6zdDOIOZQru3A"
    };
  },
  methods: {
    ...mapActions([
      "setarToken",
      "logar",
      "setarMensagemError",
      "setarMensagemSucesso"
    ]),
    login() {
      if (this.token) {
        this.setarToken(this.token);
        this.logar(true);
        this.$router.push("/listaLivros");
      } else {
        this.setarMensagemError("Informe o Token!");
      }
    },
    loginVisitante() {
      this.logar(true);
      this.$router.push("/listaLivros");
    }
  }
};
</script>

<style scoped>
</style>