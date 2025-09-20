<template>
    <div>
        <Message :msg="msg" :msgClass="msgClass"/>
        <form id="user-form" @submit="page === 'register' ? register($event) : update($event) ">
            <input type="hidden" name="id" id="id" v-model="id">
            <div class="input-container">
                <label for="name">Nome:</label>
                <input type="text" id="name" name="name" v-model="name" placeholder="Digite seu nome">
            </div>
            <div class="input-container">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" v-model="email" placeholder="Digite seu e-mail">
            </div>
             <div class="input-container">
                <label for="password">Senha:</label>
                <input type="password" id="password" name="password" v-model="password" placeholder="Crie sua senha">
            </div>
             <div class="input-container">
                <label for="confirmPassword">Confirme sua senha</label>
                <input type="password" id="confirmPassword" name="confirmPassword" v-model="confirmPassword" placeholder="Senha:">
            </div>
            <InputSubmit :text="btnText"/>

        </form>
    </div>
</template>

<script>
import Message from './Message.vue';
import InputSubmit from './form/InputSubmit.vue';
export default {
    name:"UseForm",
  data(){
    return{
        id: (this.user && this.user._id) || null,
        name: (this.user && this.user.name) || null,
        email: (this.user && this.user.email) || null,
        password:null,
        confirmPassword:null,
        msg:null,
        msgClass:"error"
    }
},components:{
        InputSubmit,
        Message
    },props:["user", "page" , "btnText"],
    methods:{
        async register(e){
            e.preventDefault()
            const data = {
                name:this.name,
                email:this.email,
                password:this.password,
                confirmPassword:this.confirmPassword
            }
            const jsonData= JSON.stringify(data)

            await fetch("http://localhost:3000/api/auth/register", {
                method:"POST",
                headers:{"Content-type":"application/json"},
                body:jsonData
            }) 
            .then((res) => res.json())
            .then((data) =>{
                let auth = false;

                if(data.error){
                   this.msg = data.error
                   this.msgClass = "error"
                }else{
                    auth = true
                    this.msg = data.msg
                    this.msgClass = "sucess"

                    // emitir um evento para salvar usuario

                    this.$store.commit("authenticate" , {token:data.token, userId: data.userId})


                }
                setTimeout(() =>{
                    if(!auth){
                        this.msg = null
                    } else{
                        this.$router.push("/dashboard")
                    }
                },3000)
            })
            .catch(err =>{
                console.log(err)
            })
        }, 
        async update(e) {
            e.preventDefault()
             const data = {
                id:this.id,
                name:this.name,
                email:this.email,
                password:this.password,
                confirmPassword:this.confirmPassword
            }
            const jsonData= JSON.stringify(data)
            // get token from store

            const token = this.$store.getters.token
            await fetch("http://localhost:3000/api/user", {
                method:"PATCH",
                headers:{"Content-type":"application/json","auth-token":token},
                body:jsonData
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



                setTimeout(() =>{
                    this.msg = null
                },3000)
            })
            .catch(err =>{
                console.log(err)
            })
            
        }
    }
}
</script>

<style scoped>
 #user-form{
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
 }
 .input-container{
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    text-align: left;
 }
 .input-container label {
    margin-bottom: 10px;
    color: #555 ;
 }
 .input-container input{
    padding: 10px;
    border: 1px solid #e8e8e8;
 }
</style>