<template>
    <nav>
    <!-- Os router links servem para criar links de navegacao -->
     <router-link to="/" id="logoburge">
        <img :src="logo" :alt="alt" id="logo">

     </router-link>
     <!-- O to serve para mostra qual rota esse link vai representar -->
    <router-link to="/">Home</router-link> |
    <router-link to="/pedidos">Pedidos sexy </router-link>
    </nav>
</template>

<script>
     
     export default {
        name:"NavBar",
        props:["logo","alt"]
     }

</script>

<style scoped>
   nav{
      background-color:#222 ;
      border-bottom: 4px solid #131212;
      padding:15px 50px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
   }
   #logoburge{
      margin: auto;
      margin-left:0;
   }
   #logo{
      width: 40px;
      height: 40px;
   }

   nav a {
      color: #fcba03;
      text-decoration: none;
      margin:12px;
      transition: .5s;
   }
   nav a:hover{
      color: rgb(168, 46, 46);
   }
</style>