<template>
  <div>
   <h1>Monte o seu hamburguer</h1>
   <Banner/>

   <Form/>
  </div>
</template>

<script>
import Form from '../components/Form.vue';
import Banner from '../components/Banner.vue';
 export default {
  components:{
    Banner,
    Form

  }
 }
</script>
<style scoped>

</style>
