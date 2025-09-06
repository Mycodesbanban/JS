<template>
    <div class="register">
        <h1>Crie uma conta</h1>
        <use-form :user="{}" page="register" btnText="cadrastar"/>
    </div>

</template>

<script>
import UseForm from '@/components/UseForm.vue';
    export default {
        name:"Register",
        components:{
            UseForm
        }
    }

</script>
<style scoped>
.register{
    text-align: center;
    padding-top:40px ;
    padding-bottom:100px ;
}
.register h1{
    margin-bottom: 40px ;
}

</style>