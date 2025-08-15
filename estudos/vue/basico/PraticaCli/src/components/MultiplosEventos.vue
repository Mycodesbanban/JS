<template>
    <div>
        <button @click="showMyfrase();  ShowMYconsole();">ativar multiplos eventos </button>
        <p v-if="FraseVisivel">{{ frase }}</p>
    </div>
</template>
<script>

    export default {
        name:"MultiplosEventos",
        data(){
            return{
                FraseVisivel:false,
                frase:"Amo batata",
            }
        },
        methods:{
            showMyfrase(){
                this.FraseVisivel = true 
            },
            ShowMYconsole(){
                console.log("Gay")
            }
        }
    }   

</script>

<style scoped>
    div{
        margin: 10px;
    }

</style>