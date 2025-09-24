<template>
   <div class="data-container">
    <Message :msg="msg" :msgClass="msgClass"/>
    <div class="data-table-heading">
        <div class="data-id-heading">Nº</div>
        <div class="data-title-heading">Nome da festa:</div>
        <div class="data-actions-heading">acoes:</div>
    </div>
    <div class="data-table-body">
        <div class="data-row" v-for="(party , index) in parties" :key="index">
           <div class="data-id-container">{{ index+1 }}</div>
           <div class="data-title-container">
            <router-link :to="`/party/${party._id}`">{{ party.title }}</router-link>
           </div>
           <div class="data-actions-container">
            <router-link :to="`/editparty/${party._id}`"  class="edit-btn">Editar</router-link>
            <button class="remove-btn" @click="remove(party._id)">remover</button>
           </div>
        </div>
    </div>
   </div>
</template>


<script>
import Message from './Message.vue';




    export default {
        name:"DataTable",
        components:{
            Message
        },
        data(){
            return{
                msg:null , 
                msgClass:null
            }
        },
        props:["parties"],
        methods:{
            async remove(id){
                // pega o id do usuario e o token

                const token = this.$store.getters.token
                const UserId = this.$store.getters.userId

                const data = {
                    id:id,
                    userId: UserId
                }
                const JsonData = JSON.stringify(data);

                await fetch("http://localhost:3000/api/party", {
                    method:"DELETE", 
                    headers:{
                        "Content-type":"application/json",
                        "auth-token":token
                    },
                    body:JsonData
                })
                .then((res) => res.json())
                .then((data) =>{
                    if(data.error){
                        this.msg = data.error
                        this.msgClass = "error"
                    }else{
                        this.msg = data.msg
                        this.msgClass = "sucess"
                    }

                    setTimeout(()=>{
                        this.msg = null

                        this.$parent.getParties()

                    },2000)
                })

            }
        }
    }

</script>

<style scoped>
    
.data-table-heading , .data-row{
   display:flex;
   align-items: center;
   height: 50px;
   border-bottom:1px solid #ccc ;
}

.data-table-heading div , .data-row div{
    flex: 1 1 0;
}
.data-id-heading , .data-id-container{
    max-width: 50px;
}

.edit-btn, .remove-btn{
    padding: 10px 16px ;
    background-color: #000;
    color: white;
    margin:5px;
    text-decoration: none;
    border:none;
    font-size: 14px;
    cursor:pointer;
    transition: .5s;
}
.edit-btn{
    background-color:#007bff ;
}
.edit-btn:hover{
    background-color:#4387cf ;
}
.remove-btn{
    background-color:#Dc3545 ;
}
.remove-btn:hover{
    background-color:#a82230 ;
}


</style>