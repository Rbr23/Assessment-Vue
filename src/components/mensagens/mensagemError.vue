<template>
    <div>
        <!--<v-snackbar
      v-model="mostrarMensagem"
      :bottom="y === 'bottom'"
      :color="color"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :right="x === 'right'"
      :timeout="timeout"
      :top="y === 'top'"
      :vertical="mode === 'vertical'"
    >
      {{ texto }}
      <v-btn
        dark
        text
        @click="mostrarMensagem = false"
      >
        Close
      </v-btn>
    </v-snackbar>-->
    </div>
</template>

<script>
export default {
    name:'mensagemError',
    data(){
        return {
        texto: '',
        mostrarMensagem: false
    }},
    
    watch:{
        '$store.state.mensagem.text': 'setarMensagem'
    },
    methods:{
        setarMensagem(){
            this.texto = this.$store.state.mensagem.text;
            this.mostrarMensagem = true;
        },
    },
};
</script>