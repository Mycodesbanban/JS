<template>
    <div>
        <h1>Ola Vue JS </h1>
        <p> meu nome e {{ name }}</p>
        <p>idade: {{ age }}</p>
    </div>
</template>

<script>
export default { //exportando o arquivo
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