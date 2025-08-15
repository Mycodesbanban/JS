<template>
    <div>

        <!-- Usando o v-bind de forma resumida -->
        <img :src="avantar" :alt="descricao">
        <mudar-imagens @-mudar-imagens="MudarImagens"/>
    </div>
</template>



<script>
import MudarImagens from './MudarImagens.vue'
export default {
  components: { MudarImagens },
    name:"Picture",
    data(){
        return{
        avantar: "/img/avatar.png",
        descricao:"uma imagem de um penis bem grosso e grande"
        }
    }, 
    methods:{
        MudarImagens(){
            setTimeout(()=>{
                this.avantar ="/img/avatar2.png"

            },2000)
        
        }
    }

}
</script>
