<template>
    <h1>Meu nome e: {{ nome }}</h1>
</template>

<script>
    export default {
        name:"LyfeCycleHooks",
        data(){
            return{
                nome:"ainda gemei que nao sei "
            }
        },
        // Usando o Lyfe Cycle Hooks
        created(){ // apos eu criar faca algo
            setTimeout(() => {
                
                this.nome="Maycon" // muda o nome da variavel dentro do objeto para Maycon
            }, 1000); //dentro de um segundo
        }, 
        mounted(){ // executa depois que o componente foi montado
            setTimeout(() => {
                this.nome="Maysa" //agora o nome e Maysa

            } , 2000) // dentro de 2 segundos alterar o nome para maysa 
        }
    }

</script>