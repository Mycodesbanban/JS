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
        const token = this.$store.getters.token
        const id = this.$route.params.id

        // USAR A ROTA USERPARTY ao invés da rota pública
        await fetch(`http://localhost:3000/api/party/userparty/${id}`, {
            method:"GET",
            headers:{
                "Content-type":"application/json",
                "auth-token":token
            }
        })
        .then((res) => res.json())
        .then((data) =>{
            console.log('Resposta do backend:', data); // Para debug
            this.party = data.party;
            
            if(this.party.PartyDate) {
                this.party.PartyDate = this.party.PartyDate.substring(0,10)
            }

            // Verificar e corrigir as fotos
            if(this.party.photos && this.party.photos.length > 0) {
                console.log('Fotos antes da correção:', this.party.photos);
                this.party.photos = this.party.photos.map(photo => {
                    if(photo && !photo.includes('http')) {
                        return photo.replace("public", "http://localhost:3000")
                    }
                    return photo;
                });
                console.log('Fotos após correção:', this.party.photos);
            } else {
                console.log('Nenhuma foto encontrada ou array vazio');
            }

            this.componetKey += 1
        })
        .catch(err => console.log('Erro ao carregar festa:', err))
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
