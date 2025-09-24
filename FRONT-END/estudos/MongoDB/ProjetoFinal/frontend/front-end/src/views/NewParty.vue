<template>
    <div class="newparty">
        <h1>Adicione sua festa</h1>
        <party-form :party="{}" page="newparty" btnText="Criar festa" />
    </div>
</template>

<script>
import PartyForm from '../components/PartyForm.vue'

    export default {
  components: { PartyForm },
        name:"NewParty"
    }

</script>

<style scoped>
.newparty{
        text-align: center;
        padding-top: 40px ;
        padding-bottom:100px ;
    }
.newparty h1{
        margin-bottom: 40px;
    }
</style>