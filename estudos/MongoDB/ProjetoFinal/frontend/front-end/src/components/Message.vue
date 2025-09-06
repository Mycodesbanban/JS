<template>
    <p class="msg" :class="msgClass" v-if="msg">{{ msg }}</p>
</template>
<script>
    export default {
        name:"Message",
        props:["msg", "msgClass"]
    }
</script>

<style scoped>
    .msg{
        max-width: 500px;
        margin:20px auto;
        padding: 20px;
        text-align: center;
        border: 1px solid #ccc;
        border-radius: 5px;

    }
    .sucess{
        color: #155724;
        background-color: #D4Edda;
        border-color: #c3E6Cb;
    }
    .error{
        color:#950606;
        background-color:#be6363;
        border-color:crimson;

    }
</style>