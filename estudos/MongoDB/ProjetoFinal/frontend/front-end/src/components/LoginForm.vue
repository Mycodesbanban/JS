<template>
    <div>
        <message :msg="msg" :msgClass="msgClass"/>
        <form id="login_form" @submit="login($event)">
            <div class="input-container">
                <label for="email">E-mail:</label>
                <input type="email" name="email" v-model="email" id="email" placeholder="digite seu email de cadrastro">
            </div>
             <div class="input-container">
                <label for="password">Senha:</label>
                <input type="password" name="password" v-model="password" id="password" placeholder="digite sua senha">
            </div>
            <input-submit text="Entrar"/>
        </form>
    </div>
</template>

<script>
import Message from './Message.vue';
import InputSubmit from './form/InputSubmit.vue';

export default {
  components: { Message, InputSubmit },
  methods:{
    async login(e){
        e.preventDefault();

        const data = {
           email: this.email,
           password: this.password,

        }

        const JsonData = JSON.stringify(data)

        await fetch("http://localhost:3000/api/auth/login", {
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JsonData
        })
        .then((res) => res.json())
        .then((data) =>{
            let auth = false

            if(data.error){
                this.msg = data.error
                this.msgClass = "error";
            }else{
                auth = true
                this.msg = data.msg
                this.msgClass = "sucess"

                this.$store.commit("authenticate",{token:data.token, userId:data.userId})
            }
                 setTimeout(() =>{
                    if(!auth){
                        this.msg = null
                    } else{
                        this.$router.push("/dashboard")
                    }
                },3000)

        })

    },
    },
    data(){
        return{
            email:null,
            password:null,
            msg:null,
            msgClass:null
        }
   
}
}
name:"LoginForm"


</script>

<style scoped>
#login-form{
    max-height:400px ;
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