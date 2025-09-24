<template>
<div class="profile">
     <h1>
        edite seu perfil 
     </h1>
     <use-form page="profile" :user="user" :btnText="editar" :key="componentKey"/>
</div>
</template>

<script>
import UseForm from '../components/UseForm.vue'
export default {
  components: { UseForm },
    name:"Profile",
    data(){
        return{
            user:{},
            componentKey:0
        }
    }, 
    created(){
        this.getUser();
    },
    methods:{
        async getUser() {
        
        const id = this.$store.getters.userId
        const token = this.$store.getters.token

        await fetch(`http://localhost:3000/api/user/${id}` , {
            method:"GET",
            headers:{
                "Content-type":"application/json",
                "auth-token": token
            }

        })
        .then((res) => res.json())
        .then((data) =>{
            this.user = data.user
            this.componentKey += 1
        })
        .catch(err => console.log(err))
        }
    }
}

</script>

<style scoped>
     .profile{
        text-align: center;
        padding-top: 40px ;
        padding-bottom:100px ;
    }
    .profile h1{
        margin-bottom: 40px;
    }
</style>