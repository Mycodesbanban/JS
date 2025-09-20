<template>
    <footer>
        <h3>Party time &copy; 2021</h3>
        <p>O melhor local para compartilhar seus eventos</p>

    </footer>
</template>

<script>

export default {
    name:"Footer"
}

</script>

<style scoped>
    footer{
        background-color: #25282e;
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    footer h3 {
        color: white;
        margin-bottom:15px ;
        font-weight:300px ;
        font-size: 1.6rem;
    } 
    footer p {
        color: #c1b696;
    }
</style>