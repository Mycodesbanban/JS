<!-- Componente de formulario -->

<template>
    <!-- Quando o formulario for enviado vai executar a funcao EnviarFormulario -->
    <form @submit="EnviarFormulario($event)">
        <div>
            <input type="text" :v-model="name">
        </div>
        <div>
            <input type="text" :v-model="email">
        </div>
     <InputText/> <br>
     <InputText/> <br> <br>
     <Submit/>

        
    </form>
</template>

<script>
    // Importando arquivos de formularios 
    import InputText from './form/InputText.vue'; 
    import Submit from './form/Submit.vue';
    export default {
        name:"Form", 
        components:{
            InputText, 
            Submit
        },
        data(){
            return{
                name:"Ain ze da mabg",
                email:"Musbn@gmail.com "
            }
        },
        methods:{
            EnviarFormulario(e){
                console.log("Foda-se")
                e.preventDefault()
                const name = this.name
                const email = this.email

                console.log(`meu nome e ${name}`)
                console.log(`meu email e ${email}`)
                
            }
        }
    }
</script>