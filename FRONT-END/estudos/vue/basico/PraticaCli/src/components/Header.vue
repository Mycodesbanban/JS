<template>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Projetos</a></li>
        <li><a href="#">Neymar de cueca</a></li>
    </ul>
</template>

<script>

    export default {
        name:"Header",
    }
</script>

<!-- Definindo que os estilos nao vao vazar para o restante da aplicacao  -->
<style scoped>
    ul{
        list-style: none;
        display: flex;
    }
    li{
        margin-right: 10px;
    }   
    a{
        color:#ddd;
        text-decoration: none;
        transition: .5s;
    }
    a:hover{
        color: #923;
    }

</style>