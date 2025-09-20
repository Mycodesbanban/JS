<template>
    <div>
        <reutilizacao/>
        <h1>Ola Vue JS </h1>
        <reutilizacao/>
        <p> meu nome e {{ name }}</p>
        <reutilizacao/>
        <p>idade: {{ age }}</p>
        <multiplos-eventos/>
        <reutilizacao/>
    </div>
</template>

<script>
import MultiplosEventos from './MultiplosEventos.vue'
import Reutilizacao from './Reutilizacao.vue';
export default {
  components: { MultiplosEventos, Reutilizacao}, //exportando o arquivo
    name:"PrimeiroComponete", 

    // Dados em componentes 
    data(){ // funcao que retorna os dados em formato de objeto
        return{ // onde ficar os dados
            name:"Maycon", 
            age:30, 
        }
    }
}
</script>