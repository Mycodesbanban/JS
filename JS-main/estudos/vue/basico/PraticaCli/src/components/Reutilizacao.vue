<template>
    <div>
        <button @click="ativar">Clique aqui</button> <br>
        <span v-show="ativou">ativado</span>
    </div>
</template>
<script>
    export default {
        name:"Reutilizacao",
        data(){
            return{
                ativou:false
            }
        },
        methods:{
            ativar(){
            this.ativou = !this.ativou
            }
        }

    }
</script>