<template>
    <div id="Burguer_table">
         <mensage :msg="msg" v-show="msg"/>
        <div>
            <div id="burguer_heading">
                <div class="order-id"> #:</div>
                <div>cliente:</div>
                <div>Pao:</div>
                <div>Carne:</div>
                <div>Opcionais:</div>
                <div>acoes:</div>
            </div> 
            <div id="burguer_rows">
                <div class="burguer-row" v-for="burger in burgers" :key="burger.id"> 
                    <div class="order-number">{{ burger.id }}</div>
                    <div>{{ burger.nome }}</div>
                    <div>{{ burger.pao }}</div>
                    <div>{{ burger.carne }}</div>
                    <div>
                        <ul>
                            <li v-for="(opcional, index) in burger.opcionais" :key="index">{{ opcional }}</li>
                        </ul>
                    </div>
                    <div>
                        <select name="status" class="status" @change="UpdateBurger($event, burger.id)">
                            <option value="">selecione:</option>
                            <option v-for="s in status" :key="s.id" :value="s.tipo" :selected="burger.status == s.tipo">{{ s.tipo }}</option>
                        </select>
                        <button class="delete_btn" @click="Remover(burger.id)">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Mensage from './Mensage.vue'

    export default {
        name:"DashBoard",
        data(){
            return{
              burgers:null,
              burguer_id:null,
              status:[], 
              msg:null
            }
        }, 
        methods:{
            async getPedidos (){
                const req = await fetch("http://localhost:3000/burgers")

                const data =  await req.json()

                this.burgers = data

                // Resgatar status

                this.getStatus();
                
            },
            async getStatus(){
               const req = await fetch("http://localhost:3000/status")

               const data = await req.json()

               this.status = data
            },
            async Remover(id){
              const req = await fetch(`http://localhost:3000/burgers/${id}`,{

                  method:"delete"
              })

              const res = await req.json()

            //   Msg
            this.msg=`pedido removido com sucesso`

            setTimeout(()=>{
                this.msg=""
            }, 5000)

            // Forca uma atualizacao no backend
            this.getPedidos();

            },
            async UpdateBurger(e , id){
                const option =e.target.value

                const datajson = JSON.stringify({status:option})

                const req = await fetch(`http://localhost:3000/burgers/${id}`, {
                    // atualiza apenas o que enviamos

                    method:"PATCH",
                    headers:{"Content-Type":"application/json"},
                    body:datajson
                })

                 const res = await req.json()
                this.msg=`pedido atualizado com sucesso`

                setTimeout(()=>{
                 this.msg=""
                 }, 5000)

                console.log(res)
            }

        },
        mounted(){
            this.getPedidos()
        },
        components:{
            Mensage
        }
    }

</script>

<style scoped>
    #Burguer_table{
        max-width:1200px ;
        margin: 0 auto;

    }
    #burguer_heading,
    #burguer_rows, 
    .burguer-row{
        display: flex;
        flex-wrap: wrap;
    }
    #burguer_heading{
        font-weight:bold ;
        padding: 12px;
        border-bottom: 3px solid #333 ;
    }
    #burguer_heading div, .burguer-row div {
        width:19% ;
    }   
    .burguer-row{
        width: 100%;
        padding: 12px;
        border-bottom: 1px solid #ccc;
    }
    #burguer_heading .order-id,
    .burguer-row .order-number{
      width: 5%;  
    }

    select{
        padding: 12px 6px;
        margin-right: 12px;
    }
    .delete_btn{
        background-color: #222;
        color:#FcBA03;
        font-weight: bold;
        border: 2px solid #222;
        padding: 10px;
        font-size: 16px;
        margin: 0 auto;
        cursor: pointer;
        transition: .5;
    }
    .delete_btn:hover{
        background-color: transparent;
        color: #222;
    }
</style>