<!-- Vai ser ultilizado para outros componentes -->

<template>
    <div>
        <p v-if="esta_Cangando === true">estou cagando no momento</p>
        <p v-else>Sou uma pessoa que me nego a fazer coco</p>
        <p v-show="mostra_email">Uso muitas formas de limpar o bumbum:</p>
        <ul>
            <li>Papel</li>
            <li>Meia</li>
            <li>Jornal</li>
            <li>espiga de milho</li>
        </ul>
    </div>
</template>

<script>


    export default {
        name:"info",
        data(){
            return{
                esta_Cangando:true, 
                mostra_email:true
            
            }
        }
    }
</script>