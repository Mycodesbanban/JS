<template>
    <div>
        <mensage :msg="msg" v-show="msg"/>
        <div>
            <form id="Form_buguer" @submit="createHamburgue">
                <div class="input_container">
                    <label for="nome">Nome do Cliente</label>
                    <input type="text" id="nome" name="nome" v-model="nome" placeholder="Digite seu nome">
                </div>
                <div class="input_container">
                    <label for="pao">escolha seu pao:</label>
                    <select name="pao" id="pao" v-model="pao">
                        <option value="">selecione seu pao:</option>
                        <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">{{ pao.tipo }}</option>
                    </select>
                </div>
                 <div class="input_container">
                    <label for="carne">escolha sua carne:</label>
                    <select name="carne" id="carne" v-model="carne">
                        <option value="">selecione sua carne:</option>
                        <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">{{ carne.tipo }}</option>
                    </select>
                </div>
                 <div class="input_container" id="opcionais-container">
                    <label id="opcionais-title" for="opcionais">escolha os opcionais</label>
                    <div class="checkbox_container" v-for="opcional in opcionaisData" :key="opcional.id" >
                        <input type="checkbox" name="opcionais" id="opcionais" v-model="opcionais" :value="opcional.tipo">
                        <span>{{ opcional.tipo }}</span>
                    </div>
                </div>
                <div class="input_container">
                    <input type="submit" class="submit_btn" value="criar um hambuguer">
                </div>
            </form>
        </div>
    </div>
</template>
<script>

import Mensage from './Mensage.vue';
export default {
    name:"Form",
    data(){
      return{
        paes:null,
        carnes:null,
        opcionaisData:null,
        nome:null,
        pao:null,
        carne:null,
        opcionais:[],
        status:"solicitado",
        msg:null
      }
      
    }, 
  components:{
    Mensage
  },
    methods:{
      async getIngredientes(){
        const req = await fetch("http://localhost:3000/ingredientes");
        // Transforma em objeto JavaScript
        const data = await req.json()

        // Dados que criamos sendo preenchidos pelo os dados do servidor
        this.paes = data.paes
        this.carnes = data.carnes
        this.opcionaisData = data.opcionais
      },
      async createHamburgue(e){

        e.preventDefault()
        const data = {
          nome:this.nome,
          pao:this.pao,
          carne:this.carne,
          opcionais:Array.from(this.opcionais),
          status: this.status
        }
        // Texto no formato Json
        const DataJson= JSON.stringify(data)

        // Fazendo a requisicao
        const req = await fetch("http://localhost:3000/burgers", {
          method:"POST",
          headers:{
            "Content-Type": "application/json"
          },
          body:DataJson
        })
      // Resposta

      const res = await req.json()
      
      // Colocar uma msg do sistema
      this.msg=`pedido do numero ${res.id} realizado com sucesso`

      // Limpar msg do sistema
        setTimeout(() => {
          this.msg=""
        }, 5000);

      // limpar os campos
        this.nome="";
        this.carne="";
        this.pao="";
        this.opcionais=""





      console.log(res)
      }
    },
    mounted(){
      // Executa essa funcao quando esse elemento for montado
      this.getIngredientes()
    }
}
</script>


<style scoped>

 #Form_buguer {
    max-width: 400px;
    margin: 0 auto;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  label {
    font-weight: bold;
    margin-bottom: 15px;
    color: #222;;
    padding: 5px 10px;
    border-left: 4px solid #fcba03;
  }

  input, select {
    padding: 5px 10px;
    width: 300px;
  }

  #opcionais-container {
    flex-direction: row;
    flex-wrap: wrap;
  }

  #opcionais-title {
    width: 100%;
  }

  .checkbox_container {
    display: flex;
    align-items: flex-start;
    width: 50%;
    margin-bottom: 20px;
  }

  .checkbox_container span,
  .checkbox_container input {
    width: auto;
  }

  .checkbox_container span {
    margin-left: 6px;
    font-weight: bold;
  }

  .submit_btn {
    background-color: #222;
    color:#fcba03;
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
  }

  .submit_btn:hover {
    background-color: transparent;
    color: #222;
  }

</style>

