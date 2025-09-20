<!-- Vai ser ultilizado para outros componentes -->

<template>
    <div>
        <!-- Usando props -->
        <p>estou usando um componente do elemento pai {{ email2  }}</p>

        <p v-if="esta_Cangando === true">estou cagando no momento</p>
        <p v-else>Sou uma pessoa que me nego a fazer coco</p>
        <p v-show="mostra_email">Uso muitas formas de limpar o bumbum:</p>
        <ul>
           <li v-for="(formas , index) in LimparBumbum" :key="index">{{ formas }}</li>
        </ul>
        <p>Como eu consigo cagar tanto?</p>
        <ul>
            <li v-for="Cagar in ComoCagar" :key="Cagar.id">
                {{ Cagar.Forma }}
            </li>
        </ul>
        <!-- atribuindo uma variavel com um link  -->
        <p>para voce conseguir ver eu cagando acesse <a v-bind:href="meu_link" target="_blank">aqui</a></p>
        <Picture/>
        <div>
            <button @click="showEmail">Clique para ver meu bilau</button> <br>
            <button @click="Myballs">Clicou gozou</button>
        </div>
    </div>
    
</template>

<script>
import Picture from './Picture.vue';


    export default {
  components: { Picture },
        name:"info",
        // definindo as props
        props:{
            email2: String
        },
        data(){
            return{
                esta_Cangando:true, 
                mostra_email:false,
                // url usada no v-bind
                meu_link:"https://web.whatsapp.com/",
                LimparBumbum:["Papel", "meia", "Jornal" , "espiga de milho"],
                ComoCagar:[{id:1, Forma:"ameixa"}, {id:2 , Forma:"leite de magnesio"} , {id:3, Forma:"Hamburger"}]
            
            }
        }, methods:{
            showEmail(e){
                this.mostra_email = !this.mostra_email
                if(!mostra_email){
                    this.textoBotao = "Mostra my penis"
                } else {
                    this.textoBotao = "Nao mostra my penis"
                }
            },
            Myballs(){
                console.log("Ainnnnnnnnnn")
            }
        }
    }
</script>