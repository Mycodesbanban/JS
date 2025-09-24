<template>
    <div>
       <Message :msg="msg" :msgClass="msgClass"/>
        <form id="register-form" enctype="multipart/form-data" @submit="page ==='newparty' ? createParty($event):update($event)">
        <input type="hidden" name="id" id="id" v-model="id">
        <input type="hidden" name="user_id" id="user_id" v-model="user_id">
        <div class="input-container">
            <label for="title">Titulo do Evento:</label>
            <input type="text" id="title" name="title" v-model="title" placeholder="Digite o titulo da sua festa">
        </div> 
          <div class="input-container">
            <label for="description">Descricao:</label>
            <textarea id="description" name="description" v-model="description" placeholder="O que vai acontecer na festa?"> </textarea>
        </div> 
           <div class="input-container">
            <label for="party_date">data da festa</label>
            <input type="date" id="party_date" name="party_date" v-model="party_date" >
        </div> 
           <div class="input-container">
            <label for="photos">Imagens</label>
            <input type="file" id="photos" name="photos"  multiple="multiple" ref="file" @change="onChange">
        </div> 
    <div v-if="page=== 'editparty' && showMiniImagem" class="mini-images">
      <p>Imagens atuais:</p>
        <img v-for="(photo, index) in party.photos" :src="getImageUrl(photo)" :key="index" alt="Imagem da festa">
    </div>
         <div class="input-container checkbox-container">
            <label for="privacy">Evento privado?</label>
            <input type="checkbox" id="privacy" name="privacy" v-model="privacy">
        </div> 
        <input-submit :text="btnText"/>
        </form>
    </div>

</template>

<script>
import Message from "./Message.vue"
import InputSubmit from "./form/InputSubmit.vue";

    export default {
        components:{Message , InputSubmit},
        name:"PartyForm",
        props:["party" , "page", "btnText"],
        data(){
    return{
        id:this.party._id || null,
        title:this.party.title || null , 
        description:this.party.description || null,
        // CORREÇÃO: Use PartyDate com P maiúsculo
        party_date:this.party.PartyDate || null,
        photos:this.party.photos || [], 
        privacy: this.party.privacy || false,
        user_id: this.party.userId || null,
        msg:null,
        msgClass:null,
        showMiniImagem:true
    }
},
        methods:{
             getImageUrl(photo) {
        // Se a URL já contém http, retorna como está
        if (photo.includes('http')) {
            return photo;
        }
        // Se não, converte o caminho público para URL do servidor
        return photo.replace('public', 'http://localhost:3000');
    },
           async createParty(e){
    e.preventDefault()

    const fromDat = new FormData()
    fromDat.append("title" , this.title)
    fromDat.append("description" , this.description)
    fromDat.append("party_date" , this.party_date)
    fromDat.append("privacy" , this.privacy)
    
    console.log('Photos array antes do upload:', this.photos); // Debug
    console.log('Photos length:', this.photos.length); // Debug
    
    if(this.photos.length > 0){
        for(const i of Object.keys(this.photos)){
            console.log(`Adicionando foto ${i}:`, this.photos[i]); // Debug
            fromDat.append("photos",this.photos[i])
        }
    } else {
        console.log('Nenhuma foto selecionada'); // Debug
    }

    // Debug do FormData
    for (let [key, value] of fromDat.entries()) {
        console.log('FormData:', key, value);
    }

    // mandar o token para o store
    const token = this.$store.getters.token;

    await fetch("http://localhost:3000/api/party",{
        method:"POST",
        headers:{
            "auth-token" : token
        }, 
        body: fromDat
    })
    .then((res) => res.json())
    .then((data) =>{
        console.log('Resposta do servidor:', data); // Debug
        if(data.error){
            this.msg = data.error
            this.msgClass = "error"
        }else{
            this.msg = data.msg
            this.msgClass = "sucess"
        }

        setTimeout(()=>{
            this.msg=null
            if(!data.error){
                this.$router.push("dashboard")
            }
        },2000)
    })
},

// E também adicione debug no onChange:
onChange(e){
    console.log('Arquivos selecionados:', e.target.files); // Debug
    const newFiles = Array.from(e.target.files);
    // console.log('newFiles:', newFiles); // Debug
     this.photos = [...this.photos, ...newFiles];
    // console.log('Photos array após mudança:', this.photos); // Debug
    // this.showMiniImagem = true
},
           async update(e){
            e.preventDefault()
            },
            // onChange(e){
            //     const newFiles = Array.from(e.target.files);
            //     this.photos = [...this.photos, ...newFiles];
            //     this.showMiniImagem = true
            // }
        },watch: {
    party: {
        handler(newParty) {
            console.log('Party recebida no PartyForm:', newParty);
            console.log('PartyDate:', newParty.PartyDate);
            console.log('Photos:', newParty.photos);
        },
        immediate: true,
        deep: true
    }
},

// E adicione este mounted para verificar os dados:
mounted() {
    console.log('PartyForm montado com party:', this.party);
    console.log('Data da festa:', this.party_date);
    console.log('Fotos:', this.photos);
}
    }

</script>

<style scoped>
#register-form{
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
 .input-container input,
  .input-container textarea {
    padding: 10px;
    border: 1px solid #e8e8e8;
 }
.checkbox-container{
    flex-direction: row;

}
.checkbox-container input {
    margin-left: 12px;
    margin-top: 3px;
}
.mini-images{
    display:flex ;
    flex-wrap: wrap ;
    margin-bottom: 0px;

}
.mini-images p {
    width:100%;
    font-weight: bold;
    margin-bottom: 15px;

    text-align: left;

}
.mini-images img {
    height: 50px;
    margin-right:15px ;
}


</style>