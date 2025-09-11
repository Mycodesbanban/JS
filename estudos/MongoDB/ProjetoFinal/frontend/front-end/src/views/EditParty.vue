<template>
    <div class="editparty">
        <h1>edite sua festa</h1>
        <party-form :party="party" page="editparty" btnText="Editar pagina" :key="componetKey"/>

    </div>
</template>

<script>
import PartyForm from '../components/PartyForm.vue';
export default {
    
    name:"EditParty",
    components:{
        PartyForm
    }, 
    data(){
        return{
        party:{},
        componetKey:0
        }
    },
    created(){
        // carregar a festa
        this.getParty()

    },
    methods:{
        async getParty(){
            // pegar o id da url e o token do store
            const token = this.$store.getters.token
            const id = this.$route.params.id

            await fetch(`http://localhost:3000/api/party/${id}`, {
                method:"GET",
                headers:{
                    "Content-type":"application/json",
                    "auth-token":token
                }
            })
            .then((res) => res.json())
            .then((data) =>{
                this.party = data.party;
                this.party.PartyDate = this.party.PartyDate.substring(0,10)

                this.party.photos.forEach((photo , i)=>{
                    console.log(photo)
                    this.party.photos[i] = photo.replace("public", "http://localhost:3000")
                });

                this.componetKey +=1
            })
            .catch(err => console.log(err))
        }
    }
}

</script>

<style scoped>
.editparty{
        text-align: center;
        padding-top: 40px ;
        padding-bottom:100px ;
    }
.editparty h1{
        margin-bottom: 40px;
    }
</style>
