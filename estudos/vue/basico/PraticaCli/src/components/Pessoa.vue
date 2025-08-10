<template>
    <div>
        <h2>Essa e a descricao de da pessoa: {{ nome }}</h2>
        <!-- Chamando o componente info para passar as informacoes dessa pessoas  -->
       <info/>
       <Form/>
    </div>
</template>

<script>
    // Importando as informacoes basicas do usuario
    import info from './info.vue';

    // importando formulario 

    import Form from './Form.vue';

    export default {
        name:"Pessoa", 
        data(){
            return{
                nome:"Maycon", 
                
            } 
            
        },
        components:{
            info,
            Form
        }
    
    }
</script>
