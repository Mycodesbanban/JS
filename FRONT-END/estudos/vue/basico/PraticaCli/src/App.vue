<template>
  <!-- Usando o primeiro componete que criamos -->
   <div>
     <PrimeiroComponete/>
     <!-- Usando o Lyfe Cycle Hooks -->

     <!-- Tambem funciona assim -->
    <lyfe-cycle-hooks/> 

    <!-- Hieraquia de componentes  -->
    <Pessoa/>

    <!-- Header -->
     <Header/>

   </div>


</template>

<script>

    // Importando o header com os estilos 

    import Header from './components/Header.vue';

  // Importando o primeiro componente que criamos 
  import PrimeiroComponete from './components/PrimeiroComponete.vue';

  // Import do Lyfe Cycle Hooks 
  import LyfeCycleHooks from './components/LyfeCycleHooks.vue';

  // Hieraquia de componentes 
  import Pessoa from './components/Pessoa.vue';

  export default {
    name:"app", // exportando o app para mostra no localhost da maquina 
    components:{ // informando que vai ter componetes 
      PrimeiroComponete, // chamando o componente que tem

     // Componente Lyfe Cycle hooks
      LyfeCycleHooks,

      // Hieraquia de componentes 
      Pessoa, 

      // Header 
      Header

    }
  }
</script>

<style>

</style>