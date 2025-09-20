<template>
  <div>
  <NavBar/>
  <router-view class="container"/>
  <Footer/>
  </div>
</template>
<script>
// importando componetes
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
  export default {
    name:"app",
    components:{
      NavBar, 
      Footer
    }
  }

</script>
<style>
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Arial, Helvetica, sans-serif;
      color: #444;
    }
    .container{
      min-height:300px ;
    }
    a{
      transition: .5s;

    }
    a:hover{
      color: #c1b696;
    }

</style>
