<template>
<div class="DashBoard"> 
    <div class="title-container">
        <h1>Gerencie seus eventos</h1>
        <router-link to="/newparty" class="btn">Cadrastar festa</router-link>
    </div>
    <div v-if="parties.length > 0">
        <DataTable :parties="parties"/>
    </div>
    <div v-else>
        <p>Voce ainda nao tem festas cadrastradas , <router-link to="newparty">Clique aqui para cadrastar uma festa</router-link> </p>
    </div>
</div>
</template>

<script>
import DataTable from '@/components/DataTable.vue';

export default {
    name:"DashBoard",
    components:{
        DataTable
    },
    data(){
        return{
            parties:[

            ]
        }
    },
    created(){
        // carecar as festas criadas pelo o usuarios

        this.getParties();
    },
    methods:{
        async getParties(){
            // pega o token
        
            const token = this.$store.getters.token
          

            await fetch("http://localhost:3000/api/party/userparties", {
                method:"GET",
                headers:{
                    "Content-type": "application/json",
                    "auth-token":token
                }
            })
            .then(res => res.json())
            .then((data) =>{
                this.parties = data.parties;
            })
            .catch((err) => console.log(err))


        }
    }
}

</script>

<style scoped>
.DashBoard{
    padding: 50px;
    padding-bottom: 100px;
}
.title-container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
}

.btn{
    padding: 10px 16px;
    background-color: #000 ;
    color:#fff;
    margin:5px;
    text-decoration: none;
    border:none;
    cursor: pointer;
    font-size:14px;
    transition: .5s;
}
.btn:hover{
    background-color:#141619;
}

</style>