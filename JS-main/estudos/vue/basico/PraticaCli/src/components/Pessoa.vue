<template>
    <div>
        <h2>Essa e a descricao de da pessoa: {{ nome }}</h2>
        <!-- Chamando o componente info para passar as informacoes dessa pessoas  -->
         <!-- estou enviando o email para o componete info -->
       <info :email2="email2"/>
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
                email2:"MayconRoludo@gmail.com"
                
            } 
            
        },
        components:{
            info,
            Form
        }
    
    }
</script>
