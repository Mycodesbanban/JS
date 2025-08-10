<!-- Componente de formulario -->

<template>
    <form>
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
        }
    }
</script>