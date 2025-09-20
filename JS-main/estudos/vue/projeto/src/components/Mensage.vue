<template>
    <div class="mensage_container">
        <p>{{ msg }}</p>
    </div>
</template>

<script>
export default {
    name:"Mensage", 
    props:{
        msg:String
    }
}
</script>

<style scoped>
    .mensage_container{
        color: #004085;
        background-color: #ccE5ff;
        border: 2px solid #b8daff;
        border-radius: 6px;
        padding: 10px;
        max-width: 400px;
        margin: 30px auto;
    }
</style>