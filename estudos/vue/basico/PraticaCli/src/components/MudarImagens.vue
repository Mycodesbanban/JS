<template>
    <div>
        <button @click="$emit('MudarImagens')">MudarImagensPerfil</button>
    </div>
</template>

<script>
    export default {
        name:"MudarImagens",
        emits:["MudarImagens"]
    }

</script>