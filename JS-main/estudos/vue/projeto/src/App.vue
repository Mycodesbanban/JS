<template>
  <div>
    <!-- A view e impressa/mostrada nesse router-view -->
    <NavBar :logo="logo_src" :alt="app_name"/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import NavBar from './components/NavBar.vue';
  export default {
    components:{
      NavBar,
      Footer
    },
    data(){
      return{
        logo_src:"/img/logo.png",
        alt:"Logo da imagem para pesssoas deficientes mentais"
      }
    }
  }

</script>
<style>
  *{
    font-family: Helvetica, sans-serif;
    padding: 0;
    margin: 0;
    box-sizing:border-box ;
  }
  .main_container{
  margin: 50px;
  min-height: 50px;
}
h1{
  text-align: center;
  font-size: 42px;
  margin-bottom: 30px;
  color: #222;
}

</style>